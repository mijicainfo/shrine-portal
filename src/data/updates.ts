export interface UpdateNote {
  ja: string;
  en: string;
  /** zh/es/fr/ko may be omitted for an item that exists only in some languages (set onlyLangs) */
  zh?: string;
  es?: string;
  fr?: string;
  ko?: string;
  /** If set, the item is shown only on the homepages of these languages (e.g. a guide that exists only in ja/en). */
  onlyLangs?: string[];
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
    date: '2026-11-27',
    shrineSlugs: ['tamashiki-jinja', 'shakujii-hikawa-jinja', 'sanno-jinja-nagasaki', 'takayama-inari-jinja', 'aguchi-jinja'],
  },
  {
    date: '2026-11-27',
    category: 'guide',
    note: {
      ja: '特集記事「2027年・未年の参拝ガイド」に、東京・関東の参拝先の案内を追加しました',
      en: 'Added Tokyo and Kanto options to our "2027 Year of the Sheep Shrine Guide"',
      zh: '在精選文章「2027年・未年參拜指南」新增了東京・關東的參拜地點介紹',
      es: 'Añadimos opciones en Tokio y Kanto a la guía de visitas para 2027, Año de la Oveja',
      fr: 'Nous avons ajouté des idées à Tokyo et dans le Kanto au guide de l’année du Mouton 2027',
      ko: '특집 기사 "2027년 양의 해 참배 가이드"에 도쿄・간토의 참배지 안내를 추가했습니다',
      href: '/guides/hitsujidoshi-2027/',
    },
  },
  {
    date: '2026-11-24',
    category: 'guide',
    note: {
      ja: '特集記事「御朱印帳の選び方｜入手場所・形・値段の違いを解説」を公開しました',
      en: 'Published a new featured guide: "How to Choose a Goshuincho: Where to Get One, Shapes and Prices Compared"',
      zh: '發布了新的精選文章「御朱印帳的選擇方式｜取得地點、形式、價格的差異解說」',
      es: 'Publicamos un nuevo artículo destacado: "Cómo elegir un goshuincho: dónde conseguirlo, formas y precios"',
      fr: 'Publication d’un nouvel article à la une : « Comment choisir son goshuincho : où l’obtenir, forme, prix et différences expliqués »',
      ko: '새로운 특집 기사 "고슈인초(御朱印帳) 고르는 법｜구하는 곳・모양・가격의 차이를 설명"를 공개했습니다',
      href: '/guides/goshuincho-erabikata/',
    },
  },
  {
    date: '2026-11-23',
    shrineSlugs: ['akasaka-hikawa-jinja', 'tamagawa-sengen-jinja', 'atago-jinja-minato', 'shibata-jinja-fukui', 'yanagisawa-jinja'],
  },
  {
    date: '2026-11-22',
    shrineSlugs: ['kishu-toshogu', 'kanahebisui-jinja', 'konno-hachimangu', 'rikyu-hachimangu', 'sakitama-jinja'],
  },
];
