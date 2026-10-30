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
    date: '2026-10-30',
    shrineSlugs: ['hinomisaki-jinja', 'kattamine-jinja', 'kotohira-jinja-furubira', 'azabu-hikawa-jinja', 'itsukushima-jinja-motomachi'],
  },
  {
    date: '2026-10-28',
    category: 'guide',
    note: {
      ja: '特集記事「年末の神棚｜古札の納め方・大掃除・榊の替え方」を公開しました',
      en: 'Published a new featured guide: "Year-End Kamidana Care | Returning Old Ofuda, Cleaning, and Replacing Sakaki"',
      zh: '發布了新的精選文章「年末的神棚｜舊御札的歸還方式・大掃除・榊的更換」',
      es: 'Publicamos un nuevo artículo destacado: "El kamidana a fin de año | Devolver los ofuda antiguos, limpiar y cambiar el sakaki"',
      fr: 'Publication d’un nouvel article à la une : « Le kamidana en fin d’année | Rapporter les anciens ofuda, nettoyer et remplacer le sakaki »',
      ko: '새로운 특집 기사 "연말의 가미다나｜오래된 오후다 반납·대청소·사카키 교체"를 공개했습니다',
      href: '/guides/kamidana-nenmatsu/',
    },
  },
  {
    date: '2026-10-28',
    category: 'guide',
    note: {
      ja: '特集記事「白蛇・蛇の神様ゆかりの神社7選」を公開しました',
      en: 'Published a new featured guide: "7 Shrines Associated with the White Snake and Snake Deities"',
      zh: '發布了新的精選文章「白蛇・蛇神淵源神社7選」',
      es: 'Publicamos un nuevo artículo destacado: "7 santuarios vinculados a la serpiente blanca y a las deidades serpiente"',
      fr: 'Publication d’un nouvel article à la une : « 7 sanctuaires liés au serpent blanc et aux divinités-serpents »',
      ko: '새로운 특집 기사 "흰 뱀·뱀신과 인연이 깊은 신사 7선"을 공개했습니다',
      href: '/guides/shirohebi-jinja/',
    },
  },
  {
    date: '2026-10-27',
    shrineSlugs: ['katano-jinja', 'himure-hachimangu', 'kushihiki-hachimangu', 'yoyogi-hachimangu', 'haritsuna-jinja'],
  },
  {
    date: '2026-10-26',
    shrineSlugs: ['gokonomiya-jinja', 'shirahige-jinja-mukojima', 'hokoku-jinja-osaka', 'takasu-jinja', 'ookawakami-birafu-jinja'],
  },
];
