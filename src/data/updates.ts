export interface UpdateEntry {
  /** ISO date (YYYY-MM-DD) the update was published */
  date: string;
  /** Shrine slugs (matching each locale's content collection id) added on this date */
  shrineSlugs: string[];
}

// Newest first. Add a new entry here whenever a batch of shrines is published;
// each locale's homepage resolves the slugs against its own collection, so
// shrine names/links stay correctly localized without any translation work here.
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
