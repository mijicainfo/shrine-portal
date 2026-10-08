/**
 * Amazonアソシエイト（amazon.co.jp）で紹介するカテゴリ。
 *
 * 商品画像・価格はAPI利用資格が必要なため使わず、「検索結果ページへのリンク」だけで紹介します
 * （リンクの生成は src/data/affiliate.ts の buildAmazonSearchUrl）。
 * キーワードは日本語（amazon.co.jpで検索するため）、表示ラベルは6言語です。
 */
export type Lang = 'ja' | 'en' | 'zh' | 'es' | 'fr' | 'ko';
type L10n = Record<Lang, string>;

export interface AmazonPick {
  /** Amazon.co.jp で検索する日本語キーワード */
  keyword: string;
  label: L10n;
}

export interface AmazonPickSet {
  title: L10n;
  lead: L10n;
  picks: AmazonPick[];
}

/** Amazonの規約で表示が求められる文言。各ブロックには出さず、プライバシーポリシー（各言語）に記載している。ここは文言の控え */
export const amazonDisclosure: L10n = {
  ja: 'Amazonのアソシエイトとして、当サイトは適格販売により収入を得ています。',
  en: 'As an Amazon Associate, we earn from qualifying purchases.',
  zh: '身為 Amazon 聯盟會員，本站會透過符合資格的購買獲得收入。',
  es: 'Como afiliado de Amazon, obtenemos ingresos por las compras que cumplen los requisitos.',
  fr: 'En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises.',
  ko: 'Amazon 어소시에이트로서, 당사는 적격 구매를 통해 수익을 얻습니다.',
};

export const amazonBadge: L10n = {
  ja: 'PR｜Amazon',
  en: 'Sponsored | Amazon',
  zh: '廣告｜Amazon',
  es: 'Publicidad | Amazon',
  fr: 'Publicité | Amazon',
  ko: '광고｜Amazon',
};

export const amazonButton: L10n = {
  ja: 'Amazonで探す',
  en: 'Search on Amazon',
  zh: '在 Amazon 搜尋',
  es: 'Buscar en Amazon',
  fr: 'Rechercher sur Amazon',
  ko: 'Amazon에서 찾기',
};

/** 日本語以外のページに添える注意書き */
export const amazonNote: Partial<L10n> = {
  en: 'Opens Amazon.co.jp (Japan) in English. Whether an item ships overseas depends on the product.',
  zh: '會開啟 Amazon 日本（amazon.co.jp，英文介面）。是否可寄送海外依商品而異。',
  es: 'Se abre Amazon.co.jp (Japón) en inglés. El envío internacional depende del producto.',
  fr: 'S’ouvre sur Amazon.co.jp (Japon), en anglais. La livraison à l’étranger dépend du produit.',
  ko: 'Amazon.co.jp(일본)가 영어로 열립니다. 해외 배송 가능 여부는 상품마다 다릅니다.',
};

const pick = {
  kamidana: {
    keyword: '神棚',
    label: {
      ja: '神棚（宮形）',
      en: 'Home altars (kamidana)',
      zh: '神棚（宮形）',
      es: 'Altares sintoístas (kamidana)',
      fr: 'Autels shinto (kamidana)',
      ko: '가미다나(신단)',
    },
  },
  shingu: {
    keyword: '神具セット',
    label: {
      ja: '神具セット',
      en: 'Shinto altar tool sets',
      zh: '神具組',
      es: 'Juegos de utensilios para altar',
      fr: 'Ensembles d’accessoires d’autel',
      ko: '신구(神具) 세트',
    },
  },
  fudatate: {
    keyword: 'お札立て',
    label: {
      ja: 'お札立て・神札入れ',
      en: 'Ofuda stands',
      zh: '神札架',
      es: 'Soportes para ofuda',
      fr: 'Supports d’ofuda',
      ko: '오후다 스탠드',
    },
  },
  sakakitate: {
    keyword: '榊立て',
    label: {
      ja: '榊立て・水玉など',
      en: 'Sakaki vases & offering vessels',
      zh: '榊立與供具',
      es: 'Jarrones de sakaki y vasijas de ofrenda',
      fr: 'Vases à sakaki et récipients d’offrande',
      ko: '사카키 꽃병·공양기',
    },
  },
  goshuincho: {
    keyword: '御朱印帳',
    label: {
      ja: '御朱印帳',
      en: 'Goshuin books',
      zh: '御朱印帳',
      es: 'Libros de goshuin',
      fr: 'Carnets de goshuin',
      ko: '고슈인초(御朱印帳)',
    },
  },
  goshuinFile: {
    keyword: '御朱印 ファイル',
    label: {
      ja: '御朱印ファイル・ホルダー',
      en: 'Goshuin sheet folders',
      zh: '御朱印收納夾',
      es: 'Carpetas para hojas de goshuin',
      fr: 'Classeurs pour goshuin',
      ko: '고슈인 파일·홀더',
    },
  },
  omamoriCase: {
    keyword: 'お守り入れ',
    label: {
      ja: 'お守りケース・お守り入れ',
      en: 'Omamori cases',
      zh: '御守收納套',
      es: 'Fundas para omamori',
      fr: 'Étuis à omamori',
      ko: '오마모리 케이스',
    },
  },
  guidebook: {
    keyword: '神社 ガイドブック',
    label: {
      ja: '神社ガイドブック',
      en: 'Shrine guidebooks (Japanese)',
      zh: '神社導覽書（日文）',
      es: 'Guías de santuarios (en japonés)',
      fr: 'Guides des sanctuaires (en japonais)',
      ko: '신사 가이드북(일본어)',
    },
  },
  mythbook: {
    keyword: '古事記 入門',
    label: {
      ja: '古事記・日本神話の本',
      en: 'Books on the Kojiki & Japanese myths',
      zh: '古事記・日本神話書籍',
      es: 'Libros sobre el Kojiki y la mitología japonesa',
      fr: 'Livres sur le Kojiki et la mythologie japonaise',
      ko: '고사기·일본 신화 책',
    },
  },
  historybook: {
    keyword: '日本史 入門',
    label: {
      ja: '日本史・歴史人物の本',
      en: 'Japanese history books',
      zh: '日本史・歷史人物書籍',
      es: 'Libros de historia de Japón',
      fr: 'Livres d’histoire du Japon',
      ko: '일본사·역사 인물 책',
    },
  },
} satisfies Record<string, AmazonPick>;

const visitsTitle: L10n = {
  ja: '参拝のおともに',
  en: 'For your shrine visits',
  zh: '參拜好物',
  es: 'Para tus visitas a santuarios',
  fr: 'Pour vos visites de sanctuaires',
  ko: '참배 준비물',
};
const visitsLead: L10n = {
  ja: '神棚や御朱印帳など、参拝や神社めぐりに役立つアイテムをAmazonで探せます。',
  en: 'Look for items that come in handy on shrine visits — home altars, goshuin books and more — on Amazon.',
  zh: '神棚、御朱印帳等參拜與巡禮時實用的物品，都可以在 Amazon 搜尋。',
  es: 'Busca en Amazon artículos útiles para visitar santuarios: altares sintoístas, libros de goshuin y más.',
  fr: 'Trouvez sur Amazon des articles utiles pour visiter les sanctuaires : autels shinto, carnets de goshuin, etc.',
  ko: '가미다나, 고슈인초 등 참배와 신사 순례에 도움이 되는 물건을 Amazon에서 찾아보세요.',
};

const kamidanaSet: AmazonPickSet = {
  title: {
    ja: '神棚まわりのアイテム',
    en: 'Items for a home altar',
    zh: '神棚周邊用品',
    es: 'Artículos para un altar sintoísta',
    fr: 'Articles pour un autel shinto',
    ko: '가미다나 관련 용품',
  },
  lead: {
    ja: '神棚を新しくお祀りする方へ。宮形や神具などを、Amazonで探せます。',
    en: 'Setting up a kamidana at home? Look for the shrine box and altar tools on Amazon.',
    zh: '準備在家供奉神棚嗎？宮形與各種神具可以在 Amazon 搜尋。',
    es: '¿Vas a instalar un kamidana en casa? Busca en Amazon el santuario en miniatura y los utensilios.',
    fr: 'Vous installez un kamidana chez vous ? Trouvez sur Amazon le petit sanctuaire et les accessoires.',
    ko: '집에 가미다나를 모실 예정이라면, 미야가타와 신구를 Amazon에서 찾아보세요.',
  },
  picks: [pick.kamidana, pick.shingu, pick.sakakitate, pick.fudatate],
};

const guideSetFor = (picks: AmazonPick[]): AmazonPickSet => ({
  title: {
    ja: 'この特集記事とあわせて',
    en: 'Along with this guide',
    zh: '搭配這篇特輯',
    es: 'Junto con esta guía',
    fr: 'Avec ce dossier',
    ko: '이 특집 기사와 함께',
  },
  lead: {
    ja: '神社めぐりのお供に、本や御朱印帳などをAmazonで探せます。',
    en: 'Looking for books or a goshuin book to accompany your shrine trips? Search Amazon.',
    zh: '巡禮神社時可搭配的書籍與御朱印帳等，都可以在 Amazon 搜尋。',
    es: 'Para acompañar tus visitas a santuarios, busca libros o un libro de goshuin en Amazon.',
    fr: 'Pour accompagner vos visites de sanctuaires, cherchez des livres ou un carnet de goshuin sur Amazon.',
    ko: '신사 순례의 동반자로, 책이나 고슈인초를 Amazon에서 찾아보세요.',
  },
  picks,
});

export const amazonPickSets: Record<string, AmazonPickSet> = {
  home: {
    title: visitsTitle,
    lead: visitsLead,
    picks: [pick.kamidana, pick.goshuincho, pick.omamoriCase, pick.guidebook],
  },
  kamidana: kamidanaSet,
  items: {
    title: {
      ja: '授与品を大切に持ち歩く・祀るために',
      en: 'To carry and keep your amulets and goshuin safely',
      zh: '妥善攜帶與供奉授與品',
      es: 'Para llevar y conservar tus amuletos y goshuin',
      fr: 'Pour porter et conserver vos amulettes et goshuin',
      ko: '수여품을 소중히 지니고 모시기 위해',
    },
    lead: {
      ja: 'いただいた御朱印帳やお守り、御札を大切に保管・お祀りするためのアイテムをAmazonで探せます。',
      en: 'Find items on Amazon for keeping goshuin books, omamori and ofuda safely — or for enshrining them at home.',
      zh: '保管御朱印帳、御守、神札，或在家供奉時用得到的物品，可以在 Amazon 搜尋。',
      es: 'Busca en Amazon artículos para guardar tus libros de goshuin, omamori y ofuda, o para consagrarlos en casa.',
      fr: 'Trouvez sur Amazon de quoi conserver vos carnets de goshuin, omamori et ofuda, ou les honorer chez vous.',
      ko: '고슈인초, 오마모리, 오후다를 소중히 보관하거나 집에 모시기 위한 물건을 Amazon에서 찾아보세요.',
    },
    picks: [pick.goshuincho, pick.goshuinFile, pick.omamoriCase, pick.kamidana],
  },
  'guide:kamidana-kazarikata': kamidanaSet,
  'guide:enmusubi-top10': guideSetFor([pick.goshuincho, pick.guidebook, pick.omamoriCase]),
  'guide:kinun-top5': guideSetFor([pick.goshuincho, pick.guidebook, pick.omamoriCase]),
  'guide:fushigi-densetsu-10sen': guideSetFor([pick.mythbook, pick.guidebook, pick.goshuincho]),
  'guide:mujin-jinja-9sen': guideSetFor([pick.guidebook, pick.goshuincho, pick.goshuinFile]),
  'guide:rekishijinbutsu-10sen': guideSetFor([pick.historybook, pick.guidebook, pick.goshuincho]),
};
