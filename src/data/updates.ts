export interface UpdateNote {
  ja: string;
  en: string;
  zh: string;
  es: string;
  fr: string;
  ko: string;
  /** Optional relative path from each locale's root (e.g. "/glossary/"); the homepage prefixes it per locale. */
  href?: string;
}

export interface UpdateEntry {
  /** ISO date (YYYY-MM-DD) the update was published */
  date: string;
  /** Shrine slugs (matching each locale's content collection id) added on this date. Category 1 — shrine additions. */
  shrineSlugs?: string[];
  /** Required on every `note` entry: category 2 (featured-guide update) or category 3 (any other site update). */
  category?: 'guide' | 'other';
  /** A non-shrine update (new feature, fix, content change) — one short line, translated per locale */
  note?: UpdateNote;
}

// Newest first, capped at 5 entries total, split across 3 categories:
//   1. Shrine additions       — entries with `shrineSlugs`
//   2. Featured-guide updates — `note` entries with `category: 'guide'`
//   3. Other site updates     — `note` entries with `category: 'other'`
//
// RETENTION POLICY (apply this by hand whenever adding a new entry):
// remove the OLDEST entry of the SAME category as the one you're adding,
// so the total stays at 5 without starving the other categories. E.g.
// adding a new shrine batch removes the oldest shrine entry, NOT the
// guide entry; adding a new guide update removes the oldest guide
// entry, NOT any shrine entries; a new "other" update removes the
// oldest "other" entry (there are none yet, so the first one just adds
// a 6th slot until this policy is revisited).
//
// For shrine entries, each locale's homepage resolves shrineSlugs against
// its own collection, so names/links stay correctly localized without
// translation work here. For `note` entries, write a short, already-
// translated line per locale (and an optional `href`).
export const updates: UpdateEntry[] = [
  {
    date: '2026-09-22',
    shrineSlugs: ['sugawarain-tenmangu'],
  },
  {
    date: '2026-09-21',
    category: 'guide',
    note: {
      ja: '特集記事「自宅に神棚を飾ろう｜置き場所・祀り方・お参りの作法とおすすめ神具」を公開しました',
      en: 'Published a new featured guide: "How to Set Up a Kamidana (Home Shrine)"',
      zh: '發布了新的精選文章「在家中供奉神棚：擺放位置・祭祀方法・參拜禮儀與推薦神具」',
      es: 'Publicamos un nuevo artículo destacado: "Cómo instalar un kamidana (altar sintoísta) en casa"',
      fr: 'Publication d’un nouvel article à la une : « Comment installer un kamidana (autel shinto) chez soi »',
      ko: '새로운 특집 기사 "집에 신단(가미다나) 모시는 법"을 공개했습니다',
      href: '/guides/kamidana-kazarikata/',
    },
  },
  {
    date: '2026-09-21',
    shrineSlugs: ['musashi-jinja'],
  },
  {
    date: '2026-09-20',
    shrineSlugs: ['toyokuni-jinja', 'uesugi-jinja', 'aoba-jinja'],
  },
  {
    date: '2026-09-20',
    shrineSlugs: [
      'ishimuro-jinja',
      'oyama-jinja-kanazawa',
      'ikushima-tarushima-jinja',
      'namaze-kotai-jinja',
      'benten-jinja-shikaribetsu',
      'eda-jinja',
    ],
  },
];
