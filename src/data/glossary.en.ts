export interface GlossaryTerm {
  term: string;
  icon: string;
  reading: string;
  category: string;
  description: string;
}

export const glossaryTermsEn: GlossaryTerm[] = [
  {
    term: 'Torii',
    icon: '⛩️',
    reading: '鳥居 / torii',
    category: 'Architecture & Grounds',
    description:
      'A gate marking the boundary between the sacred and the everyday world. Standing at a shrine\'s entrance, passing through it is considered a step into the kami\'s sacred space.',
  },
  {
    term: 'Sando',
    icon: '🚶',
    reading: '参道 / sandō',
    category: 'Architecture & Grounds',
    description:
      'The approach path from the torii to the main hall. Its center is considered the kami\'s own route, so visitors traditionally walk slightly to one side as a matter of courtesy.',
  },
  {
    term: 'Honden',
    icon: '🏛️',
    reading: '本殿 / honden',
    category: 'Architecture & Grounds',
    description:
      'The most sacred building at a shrine, where the kami resides. At most shrines, ordinary visitors cannot enter the honden itself.',
  },
  {
    term: 'Haiden',
    icon: '🛕',
    reading: '拝殿 / haiden',
    category: 'Architecture & Grounds',
    description:
      'The hall where visitors come to pay their respects, standing in front of the honden. This is where you actually offer a coin and bring your palms together.',
  },
  {
    term: 'Temizuya',
    icon: '💧',
    reading: '手水舎 / temizuya, chōzuya',
    category: 'Architecture & Grounds',
    description:
      'A water pavilion for purifying the hands and mouth before worship. The proper form is to scoop water with the ladle, rinse both hands and the mouth, and purify body and mind before approaching the main hall.',
  },
  {
    term: 'Shimenawa',
    icon: '🪢',
    reading: '注連縄 / shimenawa',
    category: 'Architecture & Grounds',
    description:
      'A rope marking the boundary between the sacred and the everyday world. Wrapped around sacred spots and sacred trees, it is said to act as a barrier against impurity.',
  },
  {
    term: 'Komainu',
    icon: '🦁',
    reading: '狛犬 / komainu',
    category: 'Architecture & Grounds',
    description:
      'A pair of lion-dog statues typically placed in front of the shrine hall. They serve as guardian figures warding off evil, usually shown as one with an open mouth ("a") and one with a closed mouth ("un").',
  },
  {
    term: 'Chinju no Mori',
    icon: '🌲',
    reading: '鎮守の杜 / chinju no mori',
    category: 'Architecture & Grounds',
    description:
      'The sacred forest surrounding or adjoining a shrine\'s grounds. Long protected as a dwelling place of the kami, these forests preserve rich greenery even in the middle of cities.',
  },
  {
    term: 'Nirei Nihakushu Ichirei (Two Bows, Two Claps, One Bow)',
    icon: '🙏',
    reading: '二礼二拍手一礼 / nirei nihakushu ichirei',
    category: 'Visiting Etiquette',
    description:
      'The standard form of worship at most shrines: two deep bows, two claps, and one final bow. Some shrines follow a different form.',
  },
  {
    term: 'Hatsuho-ryo',
    icon: '💴',
    reading: '初穂料 / hatsuho-ryō',
    category: 'Visiting Etiquette',
    description:
      'The offering or fee paid to a shrine. The term originates from the custom of offering the year\'s first-harvested rice (hatsuho). It\'s used for prayers, blessings, and goshuin.',
  },
  {
    term: 'Goshuin',
    icon: '🖋️',
    reading: '御朱印 / goshuin',
    category: 'Visiting Etiquette',
    description:
      'A stamp given as proof of a visit, typically featuring the shrine\'s name, a seal, and the date. Originally proof of a sutra offering, today it\'s common to bring a goshuincho (stamp book) and receive one at the shrine office.',
  },
  {
    term: 'Goshintai',
    icon: '✨',
    reading: '御神体 / goshintai',
    category: 'Visiting Etiquette',
    description:
      'The physical object — a mirror, sword, mountain, or stone — believed to house the kami. Kept deep within the honden, it is almost never seen by ordinary visitors.',
  },
  {
    term: 'Yaoyorozu no Kami',
    icon: '🌌',
    reading: '八百万の神 / yaoyorozu no kami',
    category: 'Deities & Faith',
    description:
      'A collective term for the countless deities venerated in Shinto. It reflects Japan\'s ancient religious worldview, in which natural phenomena, plants and animals, and even historical figures can be enshrined as kami.',
  },
  {
    term: 'Ujigami',
    icon: '🏘️',
    reading: '氏神 / ujigami',
    category: 'Deities & Faith',
    description:
      'Originally referring to a clan\'s ancestral deity, the term today commonly means the guardian kami of the area where one lives — essentially, one\'s "local deity."',
  },
  {
    term: 'Ubusunagami',
    icon: '👶',
    reading: '産土神 / ubusunagami',
    category: 'Deities & Faith',
    description:
      'The guardian deity of the land where a person was born. Believed to watch over that person throughout their life, this is the deity behind customs such as the omiyamairi shrine visit for newborns.',
  },
  {
    term: 'Guji',
    icon: '👘',
    reading: '宮司 / gūji',
    category: 'Deities & Faith',
    description:
      'The highest-ranking Shinto priest at a given shrine, responsible for conducting rites and overseeing the shrine as a whole.',
  },
  {
    term: 'Shikinen Sengu',
    icon: '🏗️',
    reading: '式年遷宮 / shikinen sengū',
    category: 'Events & Other',
    description:
      'The practice of periodically rebuilding a shrine\'s structures anew and moving the kami into them. At Ise Jingu this happens once every 20 years, and it also serves to pass architectural techniques and traditions on to the next generation.',
  },
  {
    term: 'Kannazuki / Kamiarizuki',
    icon: '🗓️',
    reading: '神無月・神在月 / kannazuki, kamiarizuki',
    category: 'Events & Other',
    description:
      'Names for the old lunar tenth month. Because all of Japan\'s kami are said to gather in Izumo during this month, it\'s called "Kamiarizuki" ("month with the gods") in the Izumo region, and "Kannazuki" ("month without gods") everywhere else.',
  },
  {
    term: 'Reitaisai',
    icon: '🎊',
    reading: '例大祭 / reitaisai',
    category: 'Events & Other',
    description:
      'A shrine\'s most important annual festival, held on a fixed date each year. It\'s often tied to a date connected with the shrine\'s founding or its enshrined kami, and draws large crowds of visitors.',
  },
  {
    term: 'Kaguraden',
    icon: '🕺',
    reading: '神楽殿 / kaguraden',
    category: 'Architecture & Grounds',
    description:
      'A building used for performing kagura — sacred dance and music offered to the kami. Weddings and prayer services are sometimes held here too, and it\'s usually located near the haiden at many shrines.',
  },
  {
    term: 'Chigi / Katsuogi',
    icon: '🏯',
    reading: '千木・鰹木 / chigi, katsuogi',
    category: 'Architecture & Grounds',
    description:
      'Chigi are the crossed decorative beams extending from either end of the honden\'s roof, while katsuogi are the log-shaped ornaments laid horizontally along the ridge. Their shapes vary by shrine and are sometimes said to indicate the gender of the enshrined kami.',
  },
  {
    term: 'Tamagaki',
    icon: '🚧',
    reading: '玉垣 / tamagaki',
    category: 'Architecture & Grounds',
    description:
      'A fence or low wall enclosing the honden or other sacred ground. It marks a boundary between the sacred precinct and the world outside, and the names of donors are sometimes inscribed on it.',
  },
  {
    term: 'Shamusho',
    icon: '🏢',
    reading: '社務所 / shamusho',
    category: 'Architecture & Grounds',
    description:
      'The building where a shrine\'s administrative work is carried out. Goshuin and omamori are usually issued here, and prayer requests are typically accepted at this office or the adjoining juyosho.',
  },
  {
    term: 'Goshinboku',
    icon: '🌳',
    reading: '御神木 / goshinboku',
    category: 'Architecture & Grounds',
    description:
      'A sacred tree on the shrine grounds believed to be a dwelling place of the kami. It\'s often wrapped in a shimenawa, and many such trees are centuries-old giants.',
  },
  {
    term: 'Saisen',
    icon: '🪙',
    reading: '賽銭 / saisen',
    category: 'Visiting Etiquette',
    description:
      'The money placed in the offertory box when visiting a shrine. It\'s offered as an expression of gratitude and prayer to the kami; there\'s no fixed amount, though some people favor a five-yen coin for its pun on go-en, meaning "good connection."',
  },
  {
    term: 'Seichu',
    icon: '🎯',
    reading: '正中 / seichū',
    category: 'Visiting Etiquette',
    description:
      'The center line of the sando approach path. Since it\'s considered the kami\'s own route, proper etiquette calls for visitors to avoid the seichu and walk slightly to one side instead.',
  },
  {
    term: 'Tamagushi Hoten',
    icon: '🌿',
    reading: '玉串奉奠 / tamagushi hōten',
    category: 'Visiting Etiquette',
    description:
      'The formal ritual of presenting a tamagushi — a sprig of sakaki adorned with shide paper strips — before the kami during a prayer service or other formal ceremony. It\'s usually carried out following the priest\'s instructions.',
  },
  {
    term: 'Shinshoku',
    icon: '📿',
    reading: '神職 / shinshoku',
    category: 'Deities & Faith',
    description:
      'A general term for those who serve at a shrine and conduct its rites and ceremonies. Guji refers specifically to the highest-ranking priest at a given shrine, while shinshoku is used for Shinto priests in general.',
  },
  {
    term: 'Miko',
    icon: '💃',
    reading: '巫女 / miko',
    category: 'Deities & Faith',
    description:
      'A woman who serves at a shrine, performing sacred kagura, assisting the priests, and issuing omamori and goshuin. She\'s widely recognized by her white robe paired with a scarlet hibakama skirt.',
  },
  {
    term: 'Saijin',
    icon: '🕊️',
    reading: '祭神 / saijin',
    category: 'Deities & Faith',
    description:
      'The kami enshrined at a particular shrine. At shrines that enshrine multiple kami, the principal one is specifically called the shusaijin.',
  },
  {
    term: 'Shinshi',
    icon: '🐴',
    reading: '神使 / shinshi',
    category: 'Deities & Faith',
    description:
      'An animal regarded as a messenger of the kami. Different shrines have their own shinshi — the fox at Inari shrines, the ox at Tenmangu shrines, the monkey at Hie shrines, and so on.',
  },
  {
    term: 'Sessha / Massha',
    icon: '⛩️',
    reading: '摂社・末社 / sessha, massha',
    category: 'Deities & Faith',
    description:
      'Small subsidiary shrines located within or near a main shrine\'s grounds. They often enshrine a kami closely connected to the main shrine\'s own deity, or one that has been worshipped on that land since ancient times.',
  },
  {
    term: 'Hatsumode',
    icon: '🎍',
    reading: '初詣 / hatsumōde',
    category: 'Events & Other',
    description:
      'The custom of visiting a shrine or temple for the first time in the new year to pray for safety and happiness in the year ahead. Many shrines see especially large crowds from New Year\'s Eve through the first three days of January.',
  },
  {
    term: 'Shichi-Go-San',
    icon: '🎏',
    reading: '七五三 / shichi-go-san',
    category: 'Events & Other',
    description:
      'A shrine visit celebrating the growth of children who have turned three, five, or seven years old. It usually takes place around November 15th, when families dressed in their finest can be seen visiting shrines across the country.',
  },
  {
    term: 'Mikoshi',
    icon: '🏮',
    reading: '神輿 / mikoshi',
    category: 'Events & Other',
    description:
      'A palanquin-shaped vehicle carried through the streets during festivals, bearing the kami\'s spirit. As the bearers parade it through the town, the kami\'s power is believed to be carried out into the community.',
  },
  {
    term: 'Chinowa Kuguri',
    icon: '⭕',
    reading: '茅の輪くぐり / chinowa kuguri',
    category: 'Events & Other',
    description:
      'A purification ritual in which passing through a large ring woven from kaya reeds cleanses half a year\'s worth of impurity. It\'s held at many shrines around the end of June, during the Nagoshi no Harae season.',
  },
  {
    term: 'Omamori',
    icon: '🧧',
    reading: '御守り / omamori',
    category: 'Amulets & Charms',
    description:
      'A protective charm imbued with the kami\'s blessing, said to guard the bearer and help fulfill their wishes. Shrines offer many varieties, for health, academic success, romantic connection, and more.',
  },
  {
    term: 'Ema',
    icon: '📝',
    reading: '絵馬 / ema',
    category: 'Amulets & Charms',
    description:
      'A small wooden plaque on which visitors write a wish or a message of thanks before dedicating it at the shrine. It\'s said to have originated as a simplified version of the old custom of offering a live horse to the kami.',
  },
  {
    term: 'Omikuji',
    icon: '🎋',
    reading: 'おみくじ / omikuji',
    category: 'Amulets & Charms',
    description:
      'A paper fortune-telling slip. Alongside an overall fortune ranging from great blessing to misfortune, it offers advice on specific topics like love, work, and health, and it\'s customary to tie it to a tree branch or rack on the shrine grounds.',
  },
  {
    term: 'Ofuda',
    icon: '📄',
    reading: '御札 / ofuda',
    category: 'Amulets & Charms',
    description:
      'A paper or wooden tablet believed to hold the sacred power of the kami. It\'s typically enshrined on a kamidana or placed somewhere high in the home, as a prayer for household safety, business prosperity, and the like.',
  },
  {
    term: 'Hamaya',
    icon: '🏹',
    reading: '破魔矢 / hamaya',
    category: 'Amulets & Charms',
    description:
      'A decorative arrow believed to ward off evil and misfortune. Especially popular as a New Year charm, it\'s typically displayed somewhere high in the home or near the entrance.',
  },
  {
    term: 'Jinja',
    icon: '⛩️',
    reading: '神社 / jinja',
    category: 'Shrine Name Suffixes',
    description:
      'The most basic and general term for a facility enshrining kami. "Jingu" and "Taisha" are, in a broad sense, also types of jinja — they simply use a different shago (the convention by which a shrine\'s name is formed).',
  },
  {
    term: 'Jingu',
    icon: '👑',
    reading: '神宮 / jingū',
    category: 'Shrine Name Suffixes',
    description:
      'A shago used for shrines with especially deep ties to the imperial household. It appears often among shrines enshrining an imperial ancestral deity or a past emperor, such as Ise Jingu (Amaterasu Omikami) and Meiji Jingu (Emperor Meiji). By convention, "Jingu" on its own is often understood to mean Ise Jingu specifically.',
  },
  {
    term: 'Taisha',
    icon: '🏯',
    reading: '大社 / taisha',
    category: 'Shrine Name Suffixes',
    description:
      'Literally "great shrine," a shago traditionally reserved for shrines of especially large scale that have long drawn deep devotion. Before the war, only Izumo Taisha officially carried this name; afterward, many other major shrines — including Suwa Taisha and Sumiyoshi Taisha — adopted "Taisha" as well.',
  },
  {
    term: 'Gu',
    icon: '👑',
    reading: '宮 / gū',
    category: 'Shrine Name Suffixes',
    description:
      'Like "Jingu," a shago often used for shrines with imperial connections or those enshrining a deified historical figure. Toshogu, which enshrines Tokugawa Ieyasu, and the Tenmangu shrines described below are examples of this naming pattern.',
  },
  {
    term: 'Hachimangu',
    icon: '🏹',
    reading: '八幡宮 / hachimangū',
    category: 'Shrine Name Suffixes',
    description:
      'Shrines enshrining Hachiman, the deity of martial fortune and victory. With more than 40,000 shrines nationwide, it is the most numerous shrine lineage in Japan. Tsurugaoka Hachimangu is a well-known example; notably, Usa Jingu — the head shrine of the entire Hachiman lineage — carries the name "Jingu" rather than "Hachimangu."',
  },
  {
    term: 'Tenmangu / Tenjin',
    icon: '📚',
    reading: '天満宮・天神 / tenmangū, tenjin',
    category: 'Shrine Name Suffixes',
    description:
      'Shrines enshrining Sugawara no Michizane, deified as "Tenjin," the god of scholarship. Dazaifu Tenmangu and Kitano Tenmangu are the most famous, and both draw crowds of students praying for success on their exams during exam season.',
  },
  {
    term: 'Inari Jinja',
    icon: '🦊',
    reading: '稲荷神社 / inari jinja',
    category: 'Shrine Name Suffixes',
    description:
      'Shrines dedicated to Inari, the deity of agriculture and business prosperity. They are known for fox (kitsune) statues — regarded as the deity\'s messengers — and for long tunnels of vermillion torii gates known as "Senbon Torii." Fushimi Inari Taisha is the head shrine of the Inari lineage.',
  },
];

export const glossaryCategoriesEn = [...new Set(glossaryTermsEn.map((t) => t.category))];
