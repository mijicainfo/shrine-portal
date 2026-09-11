export interface GlossaryTerm {
  term: string;
  icon: string;
  reading: string;
  category: string;
  description: string;
}

export const glossaryTermsFr: GlossaryTerm[] = [
  {
    term: 'Torii',
    icon: '⛩️',
    reading: '鳥居 / torii',
    category: 'Architecture & Terrain',
    description:
      'Un portail marquant la frontière entre le sacré et le monde ordinaire. Situé à l\'entrée d\'un sanctuaire, le franchir est considéré comme un premier pas dans l\'espace sacré des kami.',
  },
  {
    term: 'Sando',
    icon: '🚶',
    reading: '参道 / sandō',
    category: 'Architecture & Terrain',
    description:
      'L\'allée qui mène du torii jusqu\'au bâtiment principal. Son centre est considéré comme le passage réservé aux kami eux-mêmes, si bien que les visiteurs marchent traditionnellement légèrement sur le côté, par courtoisie.',
  },
  {
    term: 'Honden',
    icon: '🏛️',
    reading: '本殿 / honden',
    category: 'Architecture & Terrain',
    description:
      'Le bâtiment le plus sacré d\'un sanctuaire, où réside le kami. Dans la plupart des sanctuaires, les visiteurs ordinaires ne peuvent pas pénétrer à l\'intérieur du honden.',
  },
  {
    term: 'Haiden',
    icon: '🙏',
    reading: '拝殿 / haiden',
    category: 'Architecture & Terrain',
    description:
      'Le pavillon où les visiteurs viennent présenter leurs respects, situé devant le honden. C\'est ici que l\'on dépose une pièce et que l\'on joint les paumes.',
  },
  {
    term: 'Temizuya',
    icon: '💧',
    reading: '手水舎 / temizuya, chōzuya',
    category: 'Architecture & Terrain',
    description:
      'Un pavillon d\'eau destiné à la purification des mains et de la bouche avant le culte. La forme correcte consiste à puiser de l\'eau avec la louche, à se rincer les deux mains puis la bouche, purifiant ainsi le corps et l\'esprit avant de s\'approcher du bâtiment principal.',
  },
  {
    term: 'Shimenawa',
    icon: '🪢',
    reading: '注連縄 / shimenawa',
    category: 'Architecture & Terrain',
    description:
      'Une corde marquant la frontière entre le sacré et le monde ordinaire. Enroulée autour de lieux sacrés et d\'arbres sacrés, elle est dite agir comme une barrière contre les impuretés.',
  },
  {
    term: 'Komainu',
    icon: '🦁',
    reading: '狛犬 / komainu',
    category: 'Architecture & Terrain',
    description:
      'Une paire de statues de lions-chiens généralement placées devant le bâtiment du sanctuaire. Elles servent de figures gardiennes repoussant le mal, l\'une représentée bouche ouverte (« a ») et l\'autre bouche fermée (« un »).',
  },
  {
    term: 'Chinju no Mori',
    icon: '🌲',
    reading: '鎮守の杜 / chinju no mori',
    category: 'Architecture & Terrain',
    description:
      'La forêt sacrée entourant ou jouxtant le terrain d\'un sanctuaire. Longtemps protégées en tant que demeure des kami, ces forêts préservent une verdure luxuriante même au cœur des villes.',
  },
  {
    term: 'Nirei Nihakushu Ichirei (Deux Révérences, Deux Battements de Mains, Une Révérence)',
    icon: '🙇',
    reading: '二礼二拍手一礼 / nirei nihakushu ichirei',
    category: 'Étiquette de Visite',
    description:
      'La forme standard de culte dans la plupart des sanctuaires : deux révérences profondes, deux battements de mains, puis une dernière révérence. Certains sanctuaires suivent une forme différente.',
  },
  {
    term: 'Hatsuho-ryo',
    icon: '💴',
    reading: '初穂料 / hatsuho-ryō',
    category: 'Étiquette de Visite',
    description:
      'L\'offrande ou les frais versés à un sanctuaire. Le terme vient de la coutume d\'offrir le premier riz récolté de l\'année (hatsuho). Il est utilisé pour les prières, les bénédictions et le goshuin.',
  },
  {
    term: 'Goshuin',
    icon: '🖋️',
    reading: '御朱印 / goshuin',
    category: 'Étiquette de Visite',
    description:
      'Un tampon délivré comme preuve de visite, comportant généralement le nom du sanctuaire, un sceau et la date. À l\'origine preuve d\'une offrande de sutra, il est aujourd\'hui courant d\'apporter un goshuincho (carnet de tampons) pour en recevoir un au bureau du sanctuaire.',
  },
  {
    term: 'Goshintai',
    icon: '✨',
    reading: '御神体 / goshintai',
    category: 'Étiquette de Visite',
    description:
      'L\'objet physique — miroir, épée, montagne ou pierre — censé abriter le kami. Conservé au plus profond du honden, il n\'est presque jamais vu par les visiteurs ordinaires.',
  },
  {
    term: 'Yaoyorozu no Kami',
    icon: '🌌',
    reading: '八百万の神 / yaoyorozu no kami',
    category: 'Divinités & Croyances',
    description:
      'Un terme collectif désignant les innombrables divinités vénérées dans le shintoïsme. Il reflète la vision religieuse ancienne du Japon, dans laquelle les phénomènes naturels, les plantes, les animaux et même des figures historiques peuvent être vénérés comme des kami.',
  },
  {
    term: 'Ujigami',
    icon: '🏘️',
    reading: '氏神 / ujigami',
    category: 'Divinités & Croyances',
    description:
      'Désignant à l\'origine la divinité ancestrale d\'un clan, le terme désigne aujourd\'hui couramment le kami protecteur de la région où l\'on habite — en somme, sa « divinité locale ».',
  },
  {
    term: 'Ubusunagami',
    icon: '👶',
    reading: '産土神 / ubusunagami',
    category: 'Divinités & Croyances',
    description:
      'La divinité protectrice de la terre où une personne est née. Censée veiller sur cette personne tout au long de sa vie, c\'est la divinité derrière des coutumes comme la visite au sanctuaire (omiyamairi) pour les nouveau-nés.',
  },
  {
    term: 'Guji',
    icon: '👘',
    reading: '宮司 / gūji',
    category: 'Divinités & Croyances',
    description:
      'Le prêtre shinto le plus haut placé d\'un sanctuaire donné, responsable de la conduite des rites et de la supervision générale du sanctuaire.',
  },
  {
    term: 'Shikinen Sengu',
    icon: '🏗️',
    reading: '式年遷宮 / shikinen sengū',
    category: 'Fêtes & Autres',
    description:
      'La pratique consistant à reconstruire périodiquement les bâtiments d\'un sanctuaire à neuf et à y transférer le kami. À Ise Jingu, cela a lieu tous les vingt ans, et permet aussi de transmettre les techniques architecturales et les traditions à la génération suivante.',
  },
  {
    term: 'Kannazuki / Kamiarizuki',
    icon: '🗓️',
    reading: '神無月・神在月 / kannazuki, kamiarizuki',
    category: 'Fêtes & Autres',
    description:
      'Noms de l\'ancien dixième mois lunaire. Comme tous les kami du Japon seraient réunis à Izumo durant ce mois, on l\'appelle « Kamiarizuki » (« le mois avec les dieux ») dans la région d\'Izumo, et « Kannazuki » (« le mois sans dieux ») partout ailleurs.',
  },
  {
    term: 'Reitaisai',
    icon: '🎊',
    reading: '例大祭 / reitaisai',
    category: 'Fêtes & Autres',
    description:
      'La fête annuelle la plus importante d\'un sanctuaire, célébrée à date fixe chaque année. Elle est souvent liée à une date associée à la fondation du sanctuaire ou à son kami vénéré, et attire de nombreux visiteurs.',
  },
  {
    term: 'Kagura-den',
    icon: '🎭',
    reading: '神楽殿 / kagura-den',
    category: 'Architecture & Terrain',
    description:
      'Le pavillon dédié aux représentations de kagura (danses et musiques sacrées) offertes aux kami. Des mariages et des bénédictions y sont parfois célébrés ; on le trouve généralement à proximité du haiden.',
  },
  {
    term: 'Chigi et Katsuogi',
    icon: '🏯',
    reading: '千木・鰹木 / chigi, katsuogi',
    category: 'Architecture & Terrain',
    description:
      'Les chigi sont les pièces décoratives qui se croisent aux deux extrémités du toit du honden, tandis que les katsuogi sont les pièces en forme de rondins disposées horizontalement au sommet du toit. Leur forme varie selon les sanctuaires et indiquerait même le genre du kami vénéré.',
  },
  {
    term: 'Tamagaki',
    icon: '🚧',
    reading: '玉垣 / tamagaki',
    category: 'Architecture & Terrain',
    description:
      'La clôture ou palissade entourant le honden ou le domaine sacré. Elle marque la frontière entre le lieu sacré et le reste du terrain, et porte parfois les noms des donateurs qui ont financé sa construction.',
  },
  {
    term: 'Shamusho',
    icon: '🏢',
    reading: '社務所 / shamusho',
    category: 'Architecture & Terrain',
    description:
      'Le bâtiment administratif d\'un sanctuaire. C\'est généralement ici, ou au bureau des授与 (授与所), que l\'on reçoit le goshuin et les amulettes, et que l\'on s\'inscrit pour une bénédiction.',
  },
  {
    term: 'Goshinboku',
    icon: '🌳',
    reading: '御神木 / goshinboku',
    category: 'Architecture & Terrain',
    description:
      'Un arbre sacré du terrain, censé abriter un kami. Il est souvent entouré d\'un shimenawa, et nombre d\'entre eux sont des arbres majestueux vieux de plusieurs siècles.',
  },
  {
    term: 'Saisen',
    icon: '🪙',
    reading: '賽銭 / saisen',
    category: 'Étiquette de Visite',
    description:
      'L\'offrande d\'argent déposée dans le tronc dédié lors du culte. Elle est offerte en signe de gratitude ou pour accompagner un vœu ; il n\'existe pas de montant fixé, bien que certains privilégient une pièce de cinq yens pour son homophone évoquant le lien (go-en).',
  },
  {
    term: 'Seichu',
    icon: '🎯',
    reading: '正中 / seichū',
    category: 'Étiquette de Visite',
    description:
      'La partie centrale du sando, l\'allée menant au sanctuaire. Considérée comme le passage réservé aux kami, il est de bon usage pour les visiteurs de l\'éviter en marchant légèrement sur le côté.',
  },
  {
    term: 'Tamagushi Hoten',
    icon: '🌿',
    reading: '玉串奉奠 / tamagushi hōten',
    category: 'Étiquette de Visite',
    description:
      'Le geste, lors d\'un culte cérémoniel comme une bénédiction, consistant à offrir devant le kami un tamagushi — une branche de sakaki ornée de bandes de papier shide. Il se pratique en suivant les indications du prêtre shinto.',
  },
  {
    term: 'Shinshoku',
    icon: '📿',
    reading: '神職 / shinshoku',
    category: 'Divinités & Croyances',
    description:
      'Le terme général désignant les personnes au service d\'un sanctuaire qui célèbrent les rites et cérémonies shinto. Le guji désigne le prêtre le plus haut placé d\'un sanctuaire, tandis que shinshoku s\'emploie pour désigner les prêtres shinto en général.',
  },
  {
    term: 'Miko',
    icon: '💃',
    reading: '巫女 / miko',
    category: 'Divinités & Croyances',
    description:
      'Une femme au service d\'un sanctuaire, qui participe aux offrandes de kagura, assiste les prêtres shinto et délivre amulettes et goshuin. Sa tenue traditionnelle, une robe blanche et un hakama écarlate (hibakama), est largement reconnaissable.',
  },
  {
    term: 'Saijin',
    icon: '🕊️',
    reading: '祭神 / saijin',
    category: 'Divinités & Croyances',
    description:
      'Le ou les kami vénérés dans un sanctuaire donné. Lorsqu\'un sanctuaire honore plusieurs divinités, celle qui occupe la place centrale est appelée « shusaijin ».',
  },
  {
    term: 'Shinshi',
    icon: '🦊',
    reading: '神使 / shinshi',
    category: 'Divinités & Croyances',
    description:
      'Un animal considéré comme le messager d\'un kami. Le renard des sanctuaires Inari, le bœuf des sanctuaires Tenman-gū ou le singe du sanctuaire Hie-jinja en sont des exemples, chaque sanctuaire ayant son propre messager.',
  },
  {
    term: 'Sessha et Massha',
    icon: '🏮',
    reading: '摂社・末社 / sessha, massha',
    category: 'Divinités & Croyances',
    description:
      'Les petits sanctuaires annexes situés sur le terrain d\'un sanctuaire principal ou à ses abords. Ils honorent souvent des kami étroitement liés au kami principal, ou des divinités vénérées de longue date sur ce site.',
  },
  {
    term: 'Hatsumode',
    icon: '🎍',
    reading: '初詣 / hatsumōde',
    category: 'Fêtes & Autres',
    description:
      'La coutume de se rendre pour la première fois de l\'année dans un sanctuaire ou un temple, pour prier pour la sécurité et le bonheur durant l\'année à venir. La plupart des sanctuaires connaissent une affluence particulièrement importante entre le réveillon du Nouvel An et les trois premiers jours de janvier.',
  },
  {
    term: 'Shichi-Go-San',
    icon: '🎏',
    reading: '七五三 / shichi-go-san',
    category: 'Fêtes & Autres',
    description:
      'Une cérémonie où l\'on célèbre la croissance des enfants de trois, cinq et sept ans en les emmenant au sanctuaire. Elle se déroule généralement autour du 15 novembre, et l\'on peut voir dans tout le Japon des familles habillées de leurs plus beaux vêtements pour l\'occasion.',
  },
  {
    term: 'Mikoshi',
    icon: '🎐',
    reading: '神輿 / mikoshi',
    category: 'Fêtes & Autres',
    description:
      'Un palanquin sacré transportant l\'esprit d\'un kami lors des processions de festival. Porté à travers les rues par des porteurs, il est censé répandre la puissance du kami dans le quartier.',
  },
  {
    term: 'Chinowa Kuguri',
    icon: '⭕',
    reading: '茅の輪くぐり / chinowa kuguri',
    category: 'Fêtes & Autres',
    description:
      'Un rite de purification consistant à traverser un grand anneau tressé de roseaux (chigaya) afin de se débarrasser des impuretés accumulées durant les six derniers mois. Il est célébré dans de nombreux sanctuaires à l\'occasion du Nagoshi no Harae, fin juin.',
  },
  {
    term: 'Omamori',
    icon: '🧧',
    reading: '御守り / omamori',
    category: 'Amulettes et Porte-bonheur',
    description:
      'Une amulette protectrice censée porter chance et exaucer les vœux grâce à la bénédiction du kami. On en trouve pour la santé, la réussite aux examens, l\'amour et bien d\'autres domaines encore.',
  },
  {
    term: 'Ema',
    icon: '📝',
    reading: '絵馬 / ema',
    category: 'Amulettes et Porte-bonheur',
    description:
      'Une petite plaquette de bois sur laquelle on inscrit un vœu ou un message de gratitude avant de l\'offrir au sanctuaire. La coutume serait issue d\'une simplification de l\'ancienne offrande de chevaux vivants aux kami.',
  },
  {
    term: 'Omikuji',
    icon: '🎋',
    reading: 'おみくじ / omikuji',
    category: 'Amulettes et Porte-bonheur',
    description:
      'Un billet de papier prédisant la fortune. Il indique un degré de chance — du grand bonheur au malheur — accompagné de conseils détaillés sur l\'amour, le travail ou la santé ; on le noue généralement à une branche d\'arbre ou un support prévu à cet effet dans l\'enceinte du sanctuaire.',
  },
  {
    term: 'Ofuda',
    icon: '📄',
    reading: '御札 / ofuda',
    category: 'Amulettes et Porte-bonheur',
    description:
      'Une tablette de papier ou de bois censée abriter la puissance sacrée du kami. On la place généralement sur un autel domestique (kamidana) ou en hauteur dans la maison, pour prier la sécurité du foyer ou la prospérité des affaires.',
  },
  {
    term: 'Hamaya',
    icon: '🏹',
    reading: '破魔矢 / hamaya',
    category: 'Amulettes et Porte-bonheur',
    description:
      'Une flèche décorative censée repousser le mal et le malheur. Particulièrement appréciée comme porte-bonheur du Nouvel An, elle est généralement placée en hauteur dans la maison ou près de l\'entrée.',
  },
];

export const glossaryCategoriesFr = [...new Set(glossaryTermsFr.map((t) => t.category))];
