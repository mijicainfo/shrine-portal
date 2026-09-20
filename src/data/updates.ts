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
    date: '2026-09-21',
    shrineSlugs: ['musashi-jinja'],
  },
  {
    date: '2026-09-20',
    shrineSlugs: ['toyokuni-jinja', 'uesugi-jinja', 'aoba-jinja'],
  },
  {
    date: '2026-09-20',
    category: 'guide',
    note: {
      ja: '特集記事「歴史に名を残した武将・偉人を祀る神社14選」を公開しました',
      en: 'Published a new featured guide: "14 Shrines That Enshrine Japan’s Real Historical Figures"',
      zh: '發布了新的精選文章「供奉青史留名武將・偉人的神社14選」',
      es: 'Publicamos un nuevo artículo destacado: "14 Santuarios que Consagran a Verdaderas Figuras Históricas de Japón"',
      fr: 'Publication d’un nouvel article à la une : « 14 sanctuaires qui consacrent de vraies figures historiques japonaises »',
      ko: '새로운 특집 기사 "역사에 이름을 남긴 무장・위인을 모신 신사 14선"을 공개했습니다',
      href: '/guides/rekishijinbutsu-10sen/',
    },
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
  {
    date: '2026-09-19',
    shrineSlugs: ['hikotake-gu', 'hirose-taisha', 'washinomiya-jinja'],
  },
];
