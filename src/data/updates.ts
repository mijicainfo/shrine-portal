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
    date: '2026-11-08',
    shrineSlugs: ['hoju-inari-jinja-ginza', 'abeoji-jinja', 'miho-jinja-shizuoka', 'yoshida-jinja-kyoto', 'atago-jinja-noda'],
  },
  {
    date: '2026-11-07',
    category: 'other',
    note: {
      ja: '開運カレンダー2027（天赦日・一粒万倍日・己巳の日などの月別一覧と、六曜の参考ページ）を公開しました',
      en: 'Published the 2027 Auspicious Days Calendar (Tenshabi, Ichiryumanbai and more, month by month, plus a reference page for rokuyo)',
      zh: '發布了「2027年開運日曆」（天赦日、一粒萬倍日等的月別一覽，以及六曜參考頁面）',
      es: 'Publicamos el Calendario de días propicios 2027 (Tenshanichi, Ichiryū-manbai-bi y más, mes a mes, y una página de referencia sobre el rokuyō)',
      fr: 'Publication du Calendrier des jours fastes 2027 (Tenshanichi, Ichiryū-manbai-bi et plus, mois par mois, et une page de référence sur les rokuyō)',
      ko: '2027 개운 캘린더(덴샤니치·이치류만바이비 등의 월별 일람과 로쿠요 참고 페이지)를 공개했습니다',
      href: '/calendar/2027/',
    },
  },
  {
    date: '2026-11-07',
    shrineSlugs: ['shiba-toshogu', 'kameyama-hachimangu-shimonoseki', 'mihashira-jinja', 'futenma-gu', 'imizu-jinja'],
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
  {
    date: '2026-11-04',
    shrineSlugs: ['hanazono-inari-jinja', 'tokiwa-jinja-mito', 'sakurayama-hachimangu', 'sanada-jinja-ueda', 'atago-jinja-kyoto'],
  },
  {
    date: '2026-10-31',
    category: 'guide',
    note: {
      ja: '特集記事「2027年・未年の参拝ガイド｜羊の神社と、未年に行われる祭り」を公開しました',
      en: 'Published a new featured guide: "2027 Year of the Sheep Shrine Guide: Sheep Shrines and Festivals Held in Sheep Years"',
      zh: '發布了新的精選文章「2027年・未年參拜指南｜羊神社與未年舉行的祭典」',
      es: 'Publicamos un nuevo artículo destacado: "Guía de visitas para 2027, Año de la Oveja: santuarios de la oveja y festivales del Año de la Oveja"',
      fr: 'Publication d’un nouvel article à la une : « Guide de visite de l’année du Mouton 2027 : sanctuaires du mouton et fêtes des années du Mouton »',
      ko: '새로운 특집 기사 "2027년 양의 해(히쓰지도시) 참배 가이드｜양 신사와 양의 해에 열리는 축제"를 공개했습니다',
      href: '/guides/hitsujidoshi-2027/',
    },
  },
];
