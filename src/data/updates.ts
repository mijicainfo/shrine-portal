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
    date: '2026-11-21',
    category: 'guide',
    note: {
      ja: '特集記事「御朱印入門ガイド｜御朱印とは？いただき方・マナー・料金・御朱印帳を、神社の公式案内で解説」を公開しました',
      en: 'Published a new featured guide: "Goshuin for Beginners: What Goshuin Are, How to Receive Them, Etiquette and Fees, Explained with Official Shrine Guidance"',
      zh: '發布了新的精選文章「御朱印入門指南｜什麼是御朱印？領取方式・禮儀・費用・御朱印帳，依神社官方介紹解說」',
      es: 'Publicamos un nuevo artículo destacado: "Guía de introducción al goshuin: qué es, cómo recibirlo, etiqueta, precios y goshuincho, según las guías oficiales de los santuarios"',
      fr: 'Publication d’un nouvel article à la une : « Guide d’initiation au goshuin : qu’est-ce qu’un goshuin ? Comment le recevoir, savoir-vivre, prix et carnet, d’après les informations officielles des sanctuaires »',
      ko: '새로운 특집 기사 "고슈인(御朱印) 입문 가이드｜고슈인이란? 받는 방법・매너・요금・고슈인초(御朱印帳)를 신사의 공식 안내로 설명"를 공개했습니다',
      href: '/guides/goshuin-nyumon/',
    },
  },
  {
    date: '2026-11-21',
    category: 'guide',
    note: {
      ja: '特集記事「厄年2027早見表｜前厄・本厄・後厄の年齢と、厄払いに行く時期・作法」を公開しました',
      en: 'Published a new featured guide: "Yakudoshi 2027 Chart: Unlucky Ages (Mae-yaku, Hon-yaku, Ato-yaku) and When and How to Get a Yakuyoke Blessing"',
      zh: '發布了新的精選文章「厄年2027對照表｜前厄・本厄・後厄的年齡，以及厄除的時期與禮儀」',
      es: 'Publicamos un nuevo artículo destacado: "Tabla de yakudoshi 2027: edades de mala suerte (mae-yaku, hon-yaku y ato-yaku) y cuándo y cómo recibir el yakubarai"',
      fr: 'Publication d’un nouvel article à la une : « Tableau des yakudoshi 2027 : âges néfastes (mae-yaku, hon-yaku, ato-yaku), et quand et comment faire un yakuyoke »',
      ko: '새로운 특집 기사 "2027년 액년(厄年) 조견표｜마에야쿠・혼야쿠・아토야쿠의 나이와 액막이(야쿠바라이) 시기・작법"를 공개했습니다',
      href: '/guides/yakudoshi-2027/',
    },
  },
  {
    date: '2026-11-20',
    shrineSlugs: ['yaizu-jinja', 'hiromine-jinja', 'kato-jinja-kumamoto', 'tamatsukuriyu-jinja', 'matsue-jinja'],
  },
  {
    date: '2026-11-15',
    shrineSlugs: ['kinkasan-koganeyama-jinja', 'shirataki-jinja-happo', 'hotokusan-inari-taisha', 'horikoshi-jinja', 'kozu-gu'],
  },
  {
    date: '2026-11-14',
    shrineSlugs: ['awashima-jinja', 'iwatsuhime-jinja', 'susaki-jinja-tateyama', 'susa-jinja', 'kumano-kotai-jinja'],
  },
];
