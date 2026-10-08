// Scheduled publishing ("予約投稿").
//
// Every shrine / guide file carries a `publishDate`. An entry is only built into
// the site once that date has arrived (in Japan time). This lets a shrine be
// written in all 6 languages at once while each language's page goes live on its
// own date, e.g. ja/zh today, en +7 days, es/fr/ko +14 days.
//
// The site is static, so a release only happens when the site is rebuilt on or
// after the date: .github/workflows/scheduled-release.yml triggers a Vercel
// deploy on days when something is due; any normal push also rebuilds.
//
// Set PUBLISH_AS_OF=YYYY-MM-DD to build "as of" another day (testing). Use a far
// future date (e.g. 2099-01-01) to include everything.
import { getCollection, getEntry } from 'astro:content';

export type Lang = 'ja' | 'en' | 'zh' | 'es' | 'fr' | 'ko';
export const ALL_LANGS: Lang[] = ['ja', 'en', 'zh', 'es', 'fr', 'ko'];

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

function releaseCutoff(): string {
  const override = process.env.PUBLISH_AS_OF;
  if (override && /^\d{4}-\d{2}-\d{2}$/.test(override)) return override;
  return new Date(Date.now() + JST_OFFSET_MS).toISOString().slice(0, 10);
}

const cutoff = releaseCutoff();

type Dated = { data: { publishDate: Date } };

export function isReleased(entry: Dated): boolean {
  return entry.data.publishDate.toISOString().slice(0, 10) <= cutoff;
}

type CollectionName = Parameters<typeof getCollection>[0];

/** Like getCollection(), but only entries whose publishDate has arrived. */
export async function getPublished(name: CollectionName) {
  return getCollection(name as any, (entry: any) => isReleased(entry)) as Promise<any[]>;
}

/** Like getEntry(), but returns undefined for entries not yet released. */
export async function getPublishedEntry(name: CollectionName, id: string) {
  const entry: any = await getEntry(name as any, id);
  return entry && isReleased(entry) ? entry : undefined;
}

const shrineCollection: Record<Lang, CollectionName> = {
  ja: 'shrines',
  en: 'shrinesEn',
  zh: 'shrinesZh',
  es: 'shrinesEs',
  fr: 'shrinesFr',
  ko: 'shrinesKo',
} as Record<Lang, CollectionName>;

const guideCollection: Record<Lang, CollectionName> = {
  ja: 'guides',
  en: 'guidesEn',
  zh: 'guidesZh',
  es: 'guidesEs',
  fr: 'guidesFr',
  ko: 'guidesKo',
} as Record<Lang, CollectionName>;

let releasedIdsCache: Promise<Record<'shrines' | 'guides', Record<Lang, Set<string>>>> | undefined;

function loadReleasedIds() {
  releasedIdsCache ??= (async () => {
    const result = { shrines: {} as Record<Lang, Set<string>>, guides: {} as Record<Lang, Set<string>> };
    for (const lang of ALL_LANGS) {
      result.shrines[lang] = new Set((await getPublished(shrineCollection[lang])).map((e) => e.id));
      result.guides[lang] = new Set((await getPublished(guideCollection[lang])).map((e) => e.id));
    }
    return result;
  })();
  return releasedIdsCache;
}

/**
 * Which languages have a live page for this locale-less path (e.g. "/shrines/ise-jingu/").
 * Shrine and guide detail pages depend on release dates; every other page exists in all 6.
 */
export async function availableLangs(basePath: string): Promise<Lang[]> {
  const m = basePath.match(/^\/(shrines|guides)\/([^/]+)\/?$/);
  if (!m) return ALL_LANGS;
  const released = await loadReleasedIds();
  const kind = m[1] as 'shrines' | 'guides';
  const available = ALL_LANGS.filter((l) => released[kind][l].has(m[2]));
  return available.length > 0 ? available : ALL_LANGS;
}
