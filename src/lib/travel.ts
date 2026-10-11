/**
 * 旅行先（/travel/）ページ用のヘルパー。
 * 神社の絞り込みは日本語コレクションの prefecture / city（日本語のまま）で行い、
 * 得られたidを各言語のコレクションと突き合わせて表示する（idは全言語共通）。
 */
import { getPublished } from './content';
import { destinations, type Destination, type Lang } from '../data/monetization';

const collectionByLang = {
  ja: 'shrines',
  en: 'shrinesEn',
  zh: 'shrinesZh',
  es: 'shrinesEs',
  fr: 'shrinesFr',
  ko: 'shrinesKo',
} as const;

function matches(dest: Destination, data: { prefecture: string; city: string }): boolean {
  const { prefecture, cityStartsWith, cityIncludes } = dest.match;
  if (cityIncludes && !data.city.includes(cityIncludes)) return false;
  if (prefecture && data.prefecture !== prefecture) return false;
  if (cityStartsWith && !data.city.startsWith(cityStartsWith)) return false;
  return true;
}

/** 旅行先ごとの神社id（日本語コレクションで判定） */
export async function getDestinationShrineIds(dest: Destination): Promise<string[]> {
  const jaShrines = await getPublished('shrines');
  return jaShrines.filter((s) => matches(dest, s.data)).map((s) => s.id);
}

/** 旅行先の神社を、指定言語のコレクションのエントリとして取得（orderの昇順） */
export async function getDestinationShrines(dest: Destination, lang: Lang) {
  const ids = new Set(await getDestinationShrineIds(dest));
  const entries = await getPublished(collectionByLang[lang]);
  return entries.filter((e) => ids.has(e.id)).sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
}

export async function getDestinationCounts(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};
  for (const dest of destinations) {
    counts[dest.slug] = (await getDestinationShrineIds(dest)).length;
  }
  return counts;
}
