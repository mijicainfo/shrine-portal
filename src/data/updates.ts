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
  /** Shrine slugs (matching each locale's content collection id) added on this date */
  shrineSlugs?: string[];
  /** A non-shrine update (new feature, fix, content change) — one short line, translated per locale */
  note?: UpdateNote;
}

// Newest first. Add a new entry here whenever a batch of shrines is published,
// AND whenever any other site addition/update happens (new feature, fix, content
// change) — not just shrine batches. For shrine entries, each locale's homepage
// resolves shrineSlugs against its own collection, so names/links stay correctly
// localized without translation work here. For non-shrine entries, use `note`
// with a short, already-translated line per locale (and an optional `href`).
export const updates: UpdateEntry[] = [
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
  {
    date: '2026-09-18',
    shrineSlugs: [
      'ikisu-jinja',
      'kora-taisha',
      'tatsuta-taisha',
      'utsunomiya-futaarayama-jinja',
      'sakatsura-isosaki-jinja',
      'nakayama-jinja',
    ],
  },
];
