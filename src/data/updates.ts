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
    date: '2026-10-12',
    category: 'other',
    note: {
      ja: '「旅行先から探す」を追加しました。伊勢・出雲・京都・箱根・宮島・奈良の神社・宿泊・参拝準備をまとめて探せます。各神社ページにも「参拝準備」を加えました',
      en: 'Added "Find by Destination" — shrines, stays and visit prep for Ise, Izumo, Kyoto, Hakone, Miyajima and Nara. Every shrine page now has a "Plan Your Visit" section too',
      zh: '新增「依旅遊地點尋找」，整合伊勢、出雲、京都、箱根、宮島、奈良的神社、住宿與參拜準備。各神社頁面也新增了「參拜準備」',
      es: 'Añadimos «Buscar por destino»: santuarios, alojamiento y preparativos para Ise, Izumo, Kioto, Hakone, Miyajima y Nara. Cada página de santuario también tiene ahora «Prepara tu visita»',
      fr: 'Ajout de « Chercher par destination » : sanctuaires, hébergements et préparatifs pour Ise, Izumo, Kyoto, Hakone, Miyajima et Nara. Chaque page de sanctuaire propose aussi « Préparer votre visite »',
      ko: '"여행지로 찾기"를 추가했습니다. 이세·이즈모·교토·하코네·미야지마·나라의 신사·숙박·참배 준비를 한곳에서 찾을 수 있으며, 각 신사 페이지에도 "참배 준비"를 더했습니다',
      href: '/travel/',
    },
  },
  {
    date: '2026-10-11',
    shrineSlugs: ['otori-jinja-asakusa', 'onoterusaki-jinja', 'inage-sengen-jinja', 'hitsuji-jinja-nagoya', 'oji-inari-jinja'],
  },
  {
    date: '2026-10-10',
    shrineSlugs: ['toyokuni-jinja-nagoya', 'toyokuni-jinja-nagahama', 'akabane-hachiman-jinja', 'kiyosu-sannogu-hiyoshi-jinja', 'isaniwa-jinja'],
  },
  {
    date: '2026-10-10',
    shrineSlugs: ['takaya-jinja-kagawa', 'oouo-jinja', 'zeniarai-benzaiten-jinja', 'kuzuryu-jinja-hakone', 'iwakuni-shirohebi-jinja'],
  },
  {
    date: '2026-10-08',
    shrineSlugs: ['araya-yama-jinja', 'imado-jinja', 'suga-jinja-tokyo', 'koenji-hikawa-jinja', 'keta-wakamiya-jinja'],
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
];
