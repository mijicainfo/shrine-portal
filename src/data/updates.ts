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
    date: '2026-11-20',
    shrineSlugs: ['yaizu-jinja', 'hiromine-jinja', 'kato-jinja-kumamoto', 'tamatsukuriyu-jinja', 'matsue-jinja'],
  },
  {
    date: '2026-11-20',
    category: 'guide',
    note: {
      ja: '特集記事「初詣2027ガイド｜いつまでに行く？ 参拝の流れ・混雑を避けるコツ・古札の納め方」を公開しました',
      en: 'Published a new featured guide: "Hatsumode 2027 Guide: When to Go, How to Pray, Avoiding Crowds and Returning Old Charms"',
      zh: '發布了新的精選文章「初詣2027指南｜何時前去參拜？參拜流程、避開人潮的訣竅與舊神札的歸還方式」',
      es: 'Publicamos un nuevo artículo destacado: "Guía del hatsumode 2027: ¿hasta cuándo ir?, cómo orar, cómo evitar las aglomeraciones y cómo devolver los ofuda antiguos"',
      fr: 'Publication d’un nouvel article à la une : « Guide de la hatsumode 2027 : jusqu’à quand y aller, étapes de la visite, éviter la foule et rendre les anciens ofuda »',
      ko: '새로운 특집 기사 "하쓰모데 2027 가이드｜언제까지 가면 될까? 참배 순서・혼잡을 피하는 요령・오래된 오후다 반납법"를 공개했습니다',
      href: '/guides/hatsumode-2027/',
    },
  },
  {
    date: '2026-11-15',
    shrineSlugs: ['kinkasan-koganeyama-jinja', 'shirataki-jinja-happo', 'hotokusan-inari-taisha', 'horikoshi-jinja', 'kozu-gu'],
  },
  {
    date: '2026-11-14',
    shrineSlugs: ['awashima-jinja', 'iwatsuhime-jinja', 'susaki-jinja-tateyama', 'susa-jinja', 'kumano-kotai-jinja'],
  },
  {
    date: '2026-11-07',
    category: 'guide',
    note: {
      ja: '特集記事「神在祭（出雲）ガイド｜旧暦10月、神様が集まる『神在月』の参拝」を公開しました',
      en: 'Published a new featured guide: "Kamiarisai Guide (Izumo): Visiting in Kamiarizuki, the Old-Calendar Tenth Month When the Gods Gather"',
      zh: '發布了新的精選文章「神在祭（出雲）指南｜舊曆10月、眾神齊聚的「神在月」參拜」',
      es: 'Publicamos un nuevo artículo destacado: "Guía del Kamiarisai (Izumo): visitar en Kamiarizuki, el décimo mes del calendario antiguo en que se reúnen los dioses"',
      fr: 'Publication d’un nouvel article à la une : « Guide du Kamiarisai (Izumo) : visiter pendant le Kamiarizuki, le dixième mois de l’ancien calendrier où les divinités se réunissent »',
      ko: '새로운 특집 기사 "가미아리사이(이즈모) 가이드｜음력 10월, 신들이 모이는 ‘가미아리즈키’ 참배"를 공개했습니다',
      href: '/guides/izumo-kamiarisai/',
    },
  },
];
