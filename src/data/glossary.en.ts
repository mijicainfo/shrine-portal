export interface GlossaryTerm {
  term: string;
  reading: string;
  category: string;
  description: string;
}

export const glossaryTermsEn: GlossaryTerm[] = [
  {
    term: 'Torii',
    reading: '鳥居 / torii',
    category: 'Architecture & Grounds',
    description:
      'A gate marking the boundary between the sacred and the everyday world. Standing at a shrine\'s entrance, passing through it is considered a step into the kami\'s sacred space.',
  },
  {
    term: 'Sando',
    reading: '参道 / sandō',
    category: 'Architecture & Grounds',
    description:
      'The approach path from the torii to the main hall. Its center is considered the kami\'s own route, so visitors traditionally walk slightly to one side as a matter of courtesy.',
  },
  {
    term: 'Honden',
    reading: '本殿 / honden',
    category: 'Architecture & Grounds',
    description:
      'The most sacred building at a shrine, where the kami resides. At most shrines, ordinary visitors cannot enter the honden itself.',
  },
  {
    term: 'Haiden',
    reading: '拝殿 / haiden',
    category: 'Architecture & Grounds',
    description:
      'The hall where visitors come to pay their respects, standing in front of the honden. This is where you actually offer a coin and bring your palms together.',
  },
  {
    term: 'Temizuya',
    reading: '手水舎 / temizuya, chōzuya',
    category: 'Architecture & Grounds',
    description:
      'A water pavilion for purifying the hands and mouth before worship. The proper form is to scoop water with the ladle, rinse both hands and the mouth, and purify body and mind before approaching the main hall.',
  },
  {
    term: 'Shimenawa',
    reading: '注連縄 / shimenawa',
    category: 'Architecture & Grounds',
    description:
      'A rope marking the boundary between the sacred and the everyday world. Wrapped around sacred spots and sacred trees, it is said to act as a barrier against impurity.',
  },
  {
    term: 'Komainu',
    reading: '狛犬 / komainu',
    category: 'Architecture & Grounds',
    description:
      'A pair of lion-dog statues typically placed in front of the shrine hall. They serve as guardian figures warding off evil, usually shown as one with an open mouth ("a") and one with a closed mouth ("un").',
  },
  {
    term: 'Chinju no Mori',
    reading: '鎮守の杜 / chinju no mori',
    category: 'Architecture & Grounds',
    description:
      'The sacred forest surrounding or adjoining a shrine\'s grounds. Long protected as a dwelling place of the kami, these forests preserve rich greenery even in the middle of cities.',
  },
  {
    term: 'Nirei Nihakushu Ichirei (Two Bows, Two Claps, One Bow)',
    reading: '二礼二拍手一礼 / nirei nihakushu ichirei',
    category: 'Visiting Etiquette',
    description:
      'The standard form of worship at most shrines: two deep bows, two claps, and one final bow. Some shrines follow a different form.',
  },
  {
    term: 'Hatsuho-ryo',
    reading: '初穂料 / hatsuho-ryō',
    category: 'Visiting Etiquette',
    description:
      'The offering or fee paid to a shrine. The term originates from the custom of offering the year\'s first-harvested rice (hatsuho). It\'s used for prayers, blessings, and goshuin.',
  },
  {
    term: 'Goshuin',
    reading: '御朱印 / goshuin',
    category: 'Visiting Etiquette',
    description:
      'A stamp given as proof of a visit, typically featuring the shrine\'s name, a seal, and the date. Originally proof of a sutra offering, today it\'s common to bring a goshuincho (stamp book) and receive one at the shrine office.',
  },
  {
    term: 'Goshintai',
    reading: '御神体 / goshintai',
    category: 'Visiting Etiquette',
    description:
      'The physical object — a mirror, sword, mountain, or stone — believed to house the kami. Kept deep within the honden, it is almost never seen by ordinary visitors.',
  },
  {
    term: 'Yaoyorozu no Kami',
    reading: '八百万の神 / yaoyorozu no kami',
    category: 'Deities & Faith',
    description:
      'A collective term for the countless deities venerated in Shinto. It reflects Japan\'s ancient religious worldview, in which natural phenomena, plants and animals, and even historical figures can be enshrined as kami.',
  },
  {
    term: 'Ujigami',
    reading: '氏神 / ujigami',
    category: 'Deities & Faith',
    description:
      'Originally referring to a clan\'s ancestral deity, the term today commonly means the guardian kami of the area where one lives — essentially, one\'s "local deity."',
  },
  {
    term: 'Ubusunagami',
    reading: '産土神 / ubusunagami',
    category: 'Deities & Faith',
    description:
      'The guardian deity of the land where a person was born. Believed to watch over that person throughout their life, this is the deity behind customs such as the omiyamairi shrine visit for newborns.',
  },
  {
    term: 'Guji',
    reading: '宮司 / gūji',
    category: 'Deities & Faith',
    description:
      'The highest-ranking Shinto priest at a given shrine, responsible for conducting rites and overseeing the shrine as a whole.',
  },
  {
    term: 'Shikinen Sengu',
    reading: '式年遷宮 / shikinen sengū',
    category: 'Events & Other',
    description:
      'The practice of periodically rebuilding a shrine\'s structures anew and moving the kami into them. At Ise Jingu this happens once every 20 years, and it also serves to pass architectural techniques and traditions on to the next generation.',
  },
  {
    term: 'Kannazuki / Kamiarizuki',
    reading: '神無月・神在月 / kannazuki, kamiarizuki',
    category: 'Events & Other',
    description:
      'Names for the old lunar tenth month. Because all of Japan\'s kami are said to gather in Izumo during this month, it\'s called "Kamiarizuki" ("month with the gods") in the Izumo region, and "Kannazuki" ("month without gods") everywhere else.',
  },
  {
    term: 'Reitaisai',
    reading: '例大祭 / reitaisai',
    category: 'Events & Other',
    description:
      'A shrine\'s most important annual festival, held on a fixed date each year. It\'s often tied to a date connected with the shrine\'s founding or its enshrined kami, and draws large crowds of visitors.',
  },
  {
    term: 'Hamaya',
    reading: '破魔矢 / hamaya',
    category: 'Events & Other',
    description:
      'A decorative arrow believed to ward off evil and misfortune. Especially popular as a New Year charm, it\'s typically displayed somewhere high in the home or near the entrance.',
  },
];

export const glossaryCategoriesEn = [...new Set(glossaryTermsEn.map((t) => t.category))];
