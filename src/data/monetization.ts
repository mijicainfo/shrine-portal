/**
 * 収益導線（参拝準備・記事下CTA・ご利益別アイテム・旅行先ページ）の文言とデータ。
 *
 * - 商品リンクはAmazon.co.jpの「検索結果ページ」へのリンク（src/data/affiliate.ts の buildAmazonSearchUrl）。
 *   商品画像・価格はAPI資格が必要なため使わない。日本語版のみ楽天市場の検索リンクも添える。
 * - 宿泊リンクはBooking.com（全言語）と楽天トラベル（日本語のみ）の検索リンク。ホテル個別の評価・距離などは
 *   データ元（API）が無いため載せない。
 * - 表示文言は6言語（ja/en/zh/es/fr/ko）。ご利益タグは各言語のコンテンツでも日本語のまま入っている。
 */
export type Lang = 'ja' | 'en' | 'zh' | 'es' | 'fr' | 'ko';
export type L10n = Record<Lang, string>;

export interface ItemPick {
  /** Amazon.co.jp / 楽天市場で検索する日本語キーワード */
  keyword: string;
  label: L10n;
}

/** 共通の文言 */
export const prepText = {
  heading: {
    ja: '参拝準備', en: 'Plan Your Visit', zh: '參拜準備', es: 'Prepara tu visita', fr: 'Préparer votre visite', ko: '참배 준비',
  } as L10n,
  lead: {
    ja: '参拝の前に、宿泊の予約や持ち物の準備ができます。',
    en: 'Before you go, you can book a stay and get your shrine-visit items ready.',
    zh: '參拜前，可以先預訂住宿並準備隨身物品。',
    es: 'Antes de ir, puedes reservar alojamiento y preparar lo que necesitas para la visita.',
    fr: 'Avant de partir, vous pouvez réserver un hébergement et préparer vos affaires pour la visite.',
    ko: '참배 전에 숙소를 예약하고 필요한 물건을 준비할 수 있습니다.',
  } as L10n,
  hotel: {
    ja: '周辺ホテルを見る', en: 'Find nearby hotels', zh: '查看周邊飯店', es: 'Ver hoteles cercanos', fr: 'Voir les hôtels proches', ko: '주변 호텔 보기',
  } as L10n,
  goshuincho: {
    ja: '御朱印帳を見る', en: 'Goshuin books', zh: '御朱印帳', es: 'Libros de goshuin', fr: 'Carnets de goshuin', ko: '고슈인초 보기',
  } as L10n,
  guidebook: {
    ja: '神社ガイドブックを見る', en: 'Shrine guidebooks', zh: '神社導覽書', es: 'Guías de santuarios', fr: 'Guides des sanctuaires', ko: '신사 가이드북 보기',
  } as L10n,
  goods: {
    ja: '参拝便利グッズを見る', en: 'Handy shrine-visit items', zh: '參拜便利小物', es: 'Artículos útiles para la visita', fr: 'Accessoires pratiques pour la visite', ko: '참배 편의 용품 보기',
  } as L10n,
  amazonSub: {
    ja: 'Amazonで探す', en: 'Search on Amazon', zh: '在 Amazon 搜尋', es: 'Buscar en Amazon', fr: 'Rechercher sur Amazon', ko: 'Amazon에서 찾기',
  } as L10n,
  rakutenIchiba: {
    ja: '楽天市場でも探す', en: '', zh: '', es: '', fr: '', ko: '',
  } as L10n,
  benefitHeading: {
    ja: 'ご利益にあわせたアイテム',
    en: 'Items to match the blessing',
    zh: '配合御利益的物品',
    es: 'Artículos según el beneficio',
    fr: 'Objets selon la faveur demandée',
    ko: '기원에 맞는 아이템',
  } as L10n,
  amazonNote: {
    ja: '',
    en: 'Amazon links open Amazon.co.jp (Japan) in English; whether an item ships overseas depends on the product.',
    zh: 'Amazon 連結會開啟 Amazon 日本（amazon.co.jp，英文介面）。是否可寄送海外依商品而異。',
    es: 'Los enlaces de Amazon abren Amazon.co.jp (Japón) en inglés. El envío internacional depende del producto.',
    fr: 'Les liens Amazon ouvrent Amazon.co.jp (Japon) en anglais. La livraison à l’étranger dépend du produit.',
    ko: 'Amazon 링크는 Amazon.co.jp(일본)가 영어로 열립니다. 해외 배송 가능 여부는 상품마다 다릅니다.',
  } as L10n,
  prNote: {
    ja: '※ 広告（PR）を含みます。Amazon・楽天・Booking.comなどの外部サイトに移動します。',
    en: '※ Contains ads (PR). Links open external sites such as Amazon, Rakuten and Booking.com.',
    zh: '※ 內含廣告（PR）。連結將前往 Amazon、樂天、Booking.com 等外部網站。',
    es: '※ Contiene publicidad (PR). Los enlaces abren sitios externos como Amazon, Rakuten y Booking.com.',
    fr: '※ Contient de la publicité (PR). Les liens ouvrent des sites externes tels qu’Amazon, Rakuten et Booking.com.',
    ko: '※ 광고(PR)를 포함합니다. Amazon·라쿠텐·Booking.com 등 외부 사이트로 이동합니다.',
  } as L10n,
  ctaHeading: {
    ja: '参拝をもっと楽しむ', en: 'Enjoy your visit even more', zh: '讓參拜更加充實', es: 'Disfruta aún más tu visita', fr: 'Profitez encore plus de votre visite', ko: '참배를 더 즐겁게',
  } as L10n,
  ctaHotel: {
    ja: '旅行先から宿を探す', en: 'Find a stay by destination', zh: '依旅遊地點找住宿', es: 'Buscar alojamiento por destino', fr: 'Trouver un hébergement par destination', ko: '여행지로 숙소 찾기',
  } as L10n,
  ctaMore: {
    ja: '詳しく見る', en: 'See more', zh: '查看更多', es: 'Ver más', fr: 'En savoir plus', ko: '자세히 보기',
  } as L10n,
};

/** 参拝準備の共通キーワード（Amazon / 楽天市場で検索） */
export const prepKeywords = {
  goshuincho: '御朱印帳',
  guidebook: '神社 ガイドブック',
  goods: '神社 参拝 グッズ',
};

/**
 * ご利益別のアイテム。神社のbenefitsタグ（日本語）のどれかが tags に含まれる最初のグループを表示する。
 * 金運の3点目は仕様書の文面が途中で切れていたため「招き猫」としている。
 */
export interface BenefitItemSet {
  id: string;
  tags: string[];
  title: L10n;
  picks: ItemPick[];
}

export const benefitItemSets: BenefitItemSet[] = [
  {
    id: 'enmusubi',
    tags: ['縁結び', '良縁'],
    title: {
      ja: '縁結びの参拝に', en: 'For a love & relationships visit', zh: '祈求良緣的參拜', es: 'Para una visita por el amor', fr: 'Pour une visite sur le thème du couple', ko: '인연 기원 참배에',
    },
    picks: [
      { keyword: '御朱印帳', label: { ja: '御朱印帳', en: 'Goshuin books', zh: '御朱印帳', es: 'Libros de goshuin', fr: 'Carnets de goshuin', ko: '고슈인초' } },
      { keyword: '縁結び お守り', label: { ja: '縁結びグッズ・お守り', en: 'Matchmaking charms', zh: '良緣御守與小物', es: 'Amuletos del amor', fr: 'Amulettes de rencontre', ko: '인연 부적·용품' } },
      { keyword: 'お守り入れ', label: { ja: 'お守りケース', en: 'Omamori cases', zh: '御守收納套', es: 'Fundas para omamori', fr: 'Étuis à omamori', ko: '오마모리 케이스' } },
    ],
  },
  {
    id: 'gakugyo',
    tags: ['学業成就', '合格祈願'],
    title: {
      ja: '学業・合格祈願の参拝に', en: 'For a study & exam-success visit', zh: '祈求學業・金榜題名的參拜', es: 'Para una visita por los estudios y exámenes', fr: 'Pour une visite sur le thème des études et examens', ko: '학업·합격 기원 참배에',
    },
    picks: [
      { keyword: '受験 手帳', label: { ja: '受験手帳', en: 'Exam planners', zh: '考試手帳', es: 'Agendas para exámenes', fr: 'Agendas pour examens', ko: '수험 수첩' } },
      { keyword: '合格祈願 グッズ', label: { ja: '合格祈願グッズ', en: 'Exam-luck items', zh: '合格祈願小物', es: 'Artículos de buena suerte para exámenes', fr: 'Objets porte-bonheur pour examens', ko: '합격 기원 용품' } },
      { keyword: '受験 参考書', label: { ja: '参考書', en: 'Study reference books', zh: '參考書', es: 'Libros de estudio', fr: 'Ouvrages de révision', ko: '참고서' } },
    ],
  },
  {
    id: 'kinun',
    tags: ['金運', '金運上昇', '財運'],
    title: {
      ja: '金運祈願の参拝に', en: 'For a financial-luck visit', zh: '祈求財運的參拜', es: 'Para una visita por la fortuna económica', fr: 'Pour une visite sur le thème de la prospérité', ko: '금전운 기원 참배에',
    },
    picks: [
      { keyword: '財布 開運', label: { ja: '財布', en: 'Wallets', zh: '錢包', es: 'Billeteras', fr: 'Portefeuilles', ko: '지갑' } },
      { keyword: 'お財布ふとん', label: { ja: '財布布団', en: 'Wallet cushions (osaifu-futon)', zh: '錢包被（財布布團）', es: 'Cojines para billetera (osaifu-futon)', fr: 'Coussins pour portefeuille (osaifu-futon)', ko: '지갑 이불(오사이후 후톤)' } },
      { keyword: '招き猫 金運', label: { ja: '招き猫', en: 'Lucky cats (maneki-neko)', zh: '招財貓', es: 'Gatos de la suerte (maneki-neko)', fr: 'Chats porte-bonheur (maneki-neko)', ko: '마네키네코(복고양이)' } },
    ],
  },
];

/** 旅行先から探す */
export interface Destination {
  slug: string;
  name: L10n;
  blurb: L10n;
  /** 日本語コレクションのデータ（prefecture/city）に対する絞り込み条件 */
  match: { prefecture?: string; cityStartsWith?: string; cityIncludes?: string };
  /** Booking.comの検索（実機確認済みの地名）。ja / 非ja で別表記 */
  booking: { ja: { prefecture: string; city: string }; en: { prefecture: string; city: string } };
}

export const travelText = {
  homeHeading: {
    ja: '旅行先から探す', en: 'Find by Destination', zh: '依旅遊地點尋找', es: 'Buscar por destino', fr: 'Chercher par destination', ko: '여행지로 찾기',
  } as L10n,
  homeLead: {
    ja: '参拝旅行の行き先から、神社・宿泊・参拝準備をまとめて探せます。',
    en: 'Pick a destination to see its shrines, places to stay and visit prep in one place.',
    zh: '從參拜旅行的目的地，一次找到神社、住宿與參拜準備。',
    es: 'Elige un destino y encuentra sus santuarios, alojamiento y preparativos en un solo lugar.',
    fr: 'Choisissez une destination pour trouver ses sanctuaires, hébergements et préparatifs au même endroit.',
    ko: '여행지를 고르면 신사·숙박·참배 준비를 한곳에서 찾을 수 있습니다.',
  } as L10n,
  indexTitle: {
    ja: '旅行先から探す', en: 'Shrine Trips by Destination', zh: '依旅遊地點尋找神社之旅', es: 'Viajes a santuarios por destino', fr: 'Voyages de sanctuaires par destination', ko: '여행지별 신사 여행',
  } as L10n,
  indexDescription: {
    ja: '伊勢・出雲・京都・箱根・宮島・奈良など、参拝旅行の行き先ごとに、神社・周辺ホテル・参拝準備をまとめて紹介します。',
    en: 'Shrines, nearby hotels and visit prep for popular shrine-trip destinations such as Ise, Izumo, Kyoto, Hakone, Miyajima and Nara.',
    zh: '依伊勢、出雲、京都、箱根、宮島、奈良等參拜旅行目的地，整合介紹神社、周邊飯店與參拜準備。',
    es: 'Santuarios, hoteles cercanos y preparativos para destinos populares de viaje a santuarios como Ise, Izumo, Kioto, Hakone, Miyajima y Nara.',
    fr: 'Sanctuaires, hôtels à proximité et préparatifs pour les destinations de pèlerinage populaires : Ise, Izumo, Kyoto, Hakone, Miyajima et Nara.',
    ko: '이세·이즈모·교토·하코네·미야지마·나라 등 신사 여행지별로 신사, 주변 호텔, 참배 준비를 한곳에 모아 소개합니다.',
  } as L10n,
  pageTitle: (name: string): L10n => ({
    ja: `${name}旅行｜神社・宿泊・参拝準備`,
    en: `${name} Shrine Trip: Shrines, Stays & Prep`,
    zh: `${name}神社之旅：神社、住宿與參拜準備`,
    es: `Viaje a ${name}: santuarios, alojamiento y preparativos`,
    fr: `Voyage à ${name} : sanctuaires, hébergement et préparatifs`,
    ko: `${name} 신사 여행: 신사·숙박·참배 준비`,
  }),
  shrinesHeading: {
    ja: '神社一覧', en: 'Shrines', zh: '神社列表', es: 'Santuarios', fr: 'Sanctuaires', ko: '신사 목록',
  } as L10n,
  hotelsHeading: {
    ja: '周辺ホテル', en: 'Hotels', zh: '周邊飯店', es: 'Hoteles', fr: 'Hôtels', ko: '주변 호텔',
  } as L10n,
  hotelsBody: (name: string): L10n => ({
    ja: `${name}周辺のホテル・宿を検索できます。海外からの予約にも対応しています。`,
    en: `Search hotels and inns around ${name}. Bookings are available in multiple languages.`,
    zh: `搜尋${name}周邊的飯店與旅館，海外旅客也能以多國語言預訂。`,
    es: `Busca hoteles y posadas en los alrededores de ${name}. Las reservas están disponibles en varios idiomas.`,
    fr: `Recherchez des hôtels et auberges autour de ${name}. Les réservations sont disponibles en plusieurs langues.`,
    ko: `${name} 주변 호텔과 료칸을 검색할 수 있습니다. 해외에서도 여러 언어로 예약할 수 있습니다.`,
  }),
  hotelsBooking: {
    ja: 'Booking.comで宿を検索', en: 'Search stays on Booking.com', zh: '在 Booking.com 搜尋住宿', es: 'Buscar alojamiento en Booking.com', fr: 'Rechercher sur Booking.com', ko: 'Booking.com에서 숙소 검색',
  } as L10n,
  hotelsRakuten: {
    ja: '楽天トラベルで宿を検索', en: '', zh: '', es: '', fr: '', ko: '',
  } as L10n,
  backToIndex: {
    ja: '旅行先の一覧へ', en: 'All destinations', zh: '所有旅遊地點', es: 'Todos los destinos', fr: 'Toutes les destinations', ko: '여행지 전체 보기',
  } as L10n,
  shrineCount: (n: number): L10n => ({
    ja: `神社${n}社`, en: `${n} shrine${n === 1 ? '' : 's'}`, zh: `${n}座神社`, es: `${n} santuario${n === 1 ? '' : 's'}`, fr: `${n} sanctuaire${n === 1 ? '' : 's'}`, ko: `신사 ${n}곳`,
  }),
  noShrines: {
    ja: 'この地域の神社は準備中です。', en: 'Shrines for this area are coming soon.', zh: '此地區的神社準備中。', es: 'Los santuarios de esta zona estarán disponibles pronto.', fr: 'Les sanctuaires de cette zone arrivent bientôt.', ko: '이 지역의 신사는 준비 중입니다.',
  } as L10n,
};

export const destinations: Destination[] = [
  {
    slug: 'ise',
    name: { ja: '伊勢', en: 'Ise', zh: '伊勢', es: 'Ise', fr: 'Ise', ko: '이세' },
    blurb: {
      ja: '伊勢神宮（内宮・外宮）を中心に、参拝旅行の定番として知られる三重県の伊勢エリアです。',
      en: 'The Ise area of Mie Prefecture, a classic pilgrimage destination centered on Ise Jingu (the Inner and Outer Shrines).',
      zh: '以伊勢神宮（內宮・外宮）為中心，是三重縣參拜旅行的經典目的地。',
      es: 'La zona de Ise, en la prefectura de Mie, un destino clásico de peregrinación centrado en Ise Jingu (los santuarios Interior y Exterior).',
      fr: 'La région d’Ise, dans la préfecture de Mie, destination de pèlerinage classique centrée sur Ise Jingu (les sanctuaires Intérieur et Extérieur).',
      ko: '이세 신궁(내궁·외궁)을 중심으로 한, 미에현의 대표적인 참배 여행지입니다.',
    },
    match: { prefecture: '三重県', cityStartsWith: '伊勢市' },
    booking: { ja: { prefecture: '三重県', city: '伊勢市' }, en: { prefecture: 'Mie', city: 'Ise' } },
  },
  {
    slug: 'izumo',
    name: { ja: '出雲', en: 'Izumo', zh: '出雲', es: 'Izumo', fr: 'Izumo', ko: '이즈모' },
    blurb: {
      ja: '出雲大社で知られ、縁結びの旅の行き先として人気の島根県です。松江など周辺の神社とあわせてめぐれます。',
      en: 'Shimane Prefecture, known for Izumo Taisha and a popular destination for love-and-relationship pilgrimages. Pair it with shrines around Matsue and beyond.',
      zh: '以出雲大社聞名，是祈求良緣之旅的人氣目的地——島根縣。可與松江等周邊神社一併參訪。',
      es: 'La prefectura de Shimane, conocida por Izumo Taisha y un destino popular para las peregrinaciones por el amor. Combínala con santuarios de Matsue y alrededores.',
      fr: 'La préfecture de Shimane, connue pour Izumo Taisha et destination prisée des pèlerinages sur le thème du couple. À combiner avec les sanctuaires de Matsue et des environs.',
      ko: '이즈모 대사로 알려진, 인연을 비는 여행지로 인기 있는 시마네현입니다. 마쓰에 등 주변 신사와 함께 둘러볼 수 있습니다.',
    },
    match: { prefecture: '島根県' },
    booking: { ja: { prefecture: '島根県', city: '出雲市' }, en: { prefecture: 'Shimane', city: 'Izumo' } },
  },
  {
    slug: 'kyoto',
    name: { ja: '京都', en: 'Kyoto', zh: '京都', es: 'Kioto', fr: 'Kyoto', ko: '교토' },
    blurb: {
      ja: '古都・京都には、伏見稲荷大社をはじめ、由緒ある神社が数多く鎮座しています。',
      en: 'The ancient capital is home to many historic shrines, including Fushimi Inari Taisha.',
      zh: '古都京都坐落著伏見稻荷大社等眾多歷史悠久的神社。',
      es: 'La antigua capital alberga numerosos santuarios históricos, entre ellos Fushimi Inari Taisha.',
      fr: 'L’ancienne capitale abrite de nombreux sanctuaires historiques, dont Fushimi Inari Taisha.',
      ko: '고도 교토에는 후시미 이나리 대사를 비롯해 유서 깊은 신사가 많이 있습니다.',
    },
    match: { prefecture: '京都府' },
    booking: { ja: { prefecture: '京都府', city: '京都市' }, en: { prefecture: 'Kyoto', city: 'Kyoto' } },
  },
  {
    slug: 'hakone',
    name: { ja: '箱根', en: 'Hakone', zh: '箱根', es: 'Hakone', fr: 'Hakone', ko: '하코네' },
    blurb: {
      ja: '芦ノ湖畔の箱根神社・九頭龍神社など、温泉とあわせて参拝できる神社が点在する箱根エリアです。',
      en: 'The Hakone area, where shrines such as Hakone Jinja and Kuzuryu Jinja by Lake Ashi can be combined with a hot-spring stay.',
      zh: '蘆之湖畔的箱根神社、九頭龍神社等，可與溫泉一併參拜的箱根地區。',
      es: 'La zona de Hakone, donde santuarios como Hakone Jinja y Kuzuryu Jinja, junto al lago Ashi, se pueden combinar con una estancia en aguas termales.',
      fr: 'La région de Hakone, où des sanctuaires comme Hakone Jinja et Kuzuryu Jinja, au bord du lac Ashi, se combinent avec un séjour en source chaude.',
      ko: '아시노코 호숫가의 하코네 신사·구즈류 신사 등, 온천과 함께 참배할 수 있는 하코네 지역입니다.',
    },
    match: { cityIncludes: '箱根' },
    booking: { ja: { prefecture: '神奈川県', city: '箱根町' }, en: { prefecture: 'Kanagawa', city: 'Hakone' } },
  },
  {
    slug: 'miyajima',
    name: { ja: '宮島', en: 'Miyajima', zh: '宮島', es: 'Miyajima', fr: 'Miyajima', ko: '미야지마' },
    blurb: {
      ja: '世界遺産・厳島神社のある宮島を中心に、広島県の神社をめぐる旅です。',
      en: 'A trip centered on Miyajima, home to the World Heritage Itsukushima Shrine, with other shrines of Hiroshima Prefecture.',
      zh: '以世界遺產嚴島神社所在的宮島為中心，巡禮廣島縣的神社。',
      es: 'Un viaje centrado en Miyajima, sede del Santuario de Itsukushima, Patrimonio de la Humanidad, con otros santuarios de la prefectura de Hiroshima.',
      fr: 'Un voyage centré sur Miyajima, où se trouve le sanctuaire d’Itsukushima, classé au patrimoine mondial, avec d’autres sanctuaires de la préfecture de Hiroshima.',
      ko: '세계유산 이쓰쿠시마 신사가 있는 미야지마를 중심으로 히로시마현의 신사를 둘러보는 여행입니다.',
    },
    match: { prefecture: '広島県' },
    booking: { ja: { prefecture: '広島県', city: '宮島' }, en: { prefecture: 'Hiroshima', city: 'Miyajima' } },
  },
  {
    slug: 'nara',
    name: { ja: '奈良', en: 'Nara', zh: '奈良', es: 'Nara', fr: 'Nara', ko: '나라' },
    blurb: {
      ja: '春日大社をはじめ、古都・奈良ゆかりの神社が集まるエリアです。',
      en: 'The ancient capital area, home to Kasuga Taisha and other shrines tied to Nara’s long history.',
      zh: '以春日大社為首，匯集古都奈良淵源深厚神社的地區。',
      es: 'La zona de la antigua capital, con Kasuga Taisha y otros santuarios ligados a la larga historia de Nara.',
      fr: 'La région de l’ancienne capitale, avec Kasuga Taisha et d’autres sanctuaires liés à la longue histoire de Nara.',
      ko: '가스가 대사를 비롯해 고도 나라와 인연이 깊은 신사가 모여 있는 지역입니다.',
    },
    match: { prefecture: '奈良県' },
    booking: { ja: { prefecture: '奈良県', city: '奈良市' }, en: { prefecture: 'Nara', city: 'Nara' } },
  },
];

/** 神社カードのボタン（一覧から直接、宿泊・御朱印帳へ） */
export const cardText = {
  hotel: {
    ja: 'ホテルを見る', en: 'Hotels', zh: '查看飯店', es: 'Hoteles', fr: 'Hôtels', ko: '호텔 보기',
  } as L10n,
  goshuincho: {
    ja: '御朱印帳を見る', en: 'Goshuin books', zh: '御朱印帳', es: 'Libros de goshuin', fr: 'Carnets de goshuin', ko: '고슈인초',
  } as L10n,
  pr: 'PR',
};
