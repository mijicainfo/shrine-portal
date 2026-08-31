import type { CollectionEntry } from 'astro:content';

type ShrineCollection = 'shrines' | 'shrinesEn' | 'shrinesZh' | 'shrinesEs' | 'shrinesFr' | 'shrinesKo';

/**
 * Picks other shrines to link to from the same language collection, scored by
 * shared prefecture (weighted higher) and shared ご利益/benefit tags. Uses only
 * frontmatter fields every shrine already has, so it needs no manual per-shrine
 * data and applies automatically to newly added shrines.
 */
export function findRelatedShrines<C extends ShrineCollection>(
  current: CollectionEntry<C>,
  all: CollectionEntry<C>[],
  limit = 3,
): CollectionEntry<C>[] {
  const currentBenefits = new Set(current.data.benefits ?? []);

  return all
    .filter((entry) => entry.id !== current.id)
    .map((entry) => {
      const prefectureScore = entry.data.prefecture === current.data.prefecture ? 2 : 0;
      const benefitScore = (entry.data.benefits ?? []).filter((b) => currentBenefits.has(b)).length;
      return { entry, score: prefectureScore + benefitScore };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.entry.data.order - b.entry.data.order)
    .slice(0, limit)
    .map(({ entry }) => entry);
}
