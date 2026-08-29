import type { JuyohinItem } from './juyohin';

export const juyohinItemsFr: JuyohinItem[] = [
  {
    id: 'ofuda',
    name: 'Ofuda (Talisman Domestique)',
    reading: '御札 / ofuda, shinsatsu',
    theme: 'indigo',
    summary: 'Un talisman vénéré à la maison, imprégné du pouvoir du kami.',
    description:
      'Placé sur un autel domestique (kamidana), l\'ofuda fonctionne comme un charme protecteur pour le foyer. De nombreuses familles vénèrent l\'ofuda d\'Ise Jingu (jingu taima) aux côtés de celui de leur sanctuaire ujigami local.',
    howTo:
      'Si vous possédez un kamidana, placez-le au centre. Sinon, fixez-le ou posez-le debout dans un endroit lumineux et propre, au-dessus du niveau des yeux, orienté vers le sud ou l\'est. Remplacez-le par un nouveau chaque année.',
    priceRange: 'Environ 500 à 1 000 ¥',
    link: { href: '/fr/kamidana/', label: 'Lire le guide de l\'autel domestique' },
  },
  {
    id: 'omamori',
    name: 'Omamori (Amulette)',
    reading: 'お守り / omamori',
    theme: 'vermillion',
    summary: 'Le charme le plus populaire, porté sur soi pour recevoir la protection du kami.',
    description:
      'Une petite pochette contenant un talisman intérieur (naifu) imprégné du pouvoir du kami. Les omamori se déclinent en de nombreuses variétés selon leur usage — bonnes relations, accouchement sans risque, sécurité routière, réussite scolaire, santé et longévité, et bien d\'autres.',
    howTo:
      'Portez-le dans un sac, un portefeuille, ou sur vous. L\'ouvrir pour regarder à l\'intérieur est considéré comme impoli. Après environ un an, il est de coutume de le rapporter au sanctuaire où vous l\'avez reçu (ou à un sanctuaire proche) et d\'en recevoir un nouveau.',
    priceRange: 'Environ 500 à 1 000 ¥',
  },
  {
    id: 'goshuin',
    name: 'Goshuin (Tampon du Sanctuaire)',
    reading: '御朱印 / goshuin',
    theme: 'vermillion',
    summary: 'Un tampon spécial délivré comme preuve de visite, comportant le nom du sanctuaire, un sceau et la date.',
    description:
      'À l\'origine délivré comme preuve d\'une offrande de sutra, il est aujourd\'hui simplement remis en souvenir d\'une visite. Chaque sanctuaire possède son propre sceau distinctif, et certains proposent une calligraphie saisonnière. Certains sont tracés à la main sur place (« kakioki » désigne une version pré-écrite que l\'on reçoit à la place).',
    howTo:
      'Apportez un goshuincho (carnet de tampons) et demandez un goshuin au bureau du sanctuaire. Il est de coutume de le recevoir après avoir présenté ses respects. L\'encre peut encore être humide, laissez-la sécher un instant avant de refermer le carnet.',
    priceRange: 'Environ 300 à 500 ¥',
  },
  {
    id: 'goshuincho',
    name: 'Goshuincho (Carnet de Tampons)',
    reading: '御朱印帳 / goshuinchō',
    theme: 'gold',
    summary: 'Un carnet dédié à la collecte des goshuin — votre compagnon pour garder une trace de chaque visite.',
    description:
      'Généralement un carnet à pliage en accordéon, souvent proposé avec une couverture illustrée propre au sanctuaire, ce qui rend le choix de son préféré une partie du plaisir. La plupart des bureaux de sanctuaires en vendent.',
    howTo:
      'Apportez votre goshuincho avec vous et remettez-le au bureau du sanctuaire lorsque vous demandez un goshuin. Certaines personnes préfèrent tenir des carnets séparés pour les sanctuaires et les temples.',
    priceRange: 'Environ 1 500 à 3 000 ¥',
  },
  {
    id: 'hamaya',
    name: 'Hamaya (Flèche Porte-Bonheur)',
    reading: '破魔矢 / hamaya',
    theme: 'indigo',
    summary: 'Une flèche décorative censée repousser le mal et le malheur.',
    description:
      'Issu d\'un ancien rituel de tir à l\'arc du Nouvel An, le hamaya est aujourd\'hui offert sous forme de flèche décorative. Il est dit dissiper le malheur du foyer ou du bureau et attirer la bonne fortune, ce qui en fait un porte-bonheur particulièrement apprécié au Nouvel An.',
    howTo:
      'Exposez-le en hauteur dans la maison, par exemple près de l\'entrée ou dans l\'alcôve tokonoma, orienté vers la direction faste de l\'année ou vers le nord-est, traditionnellement néfaste. Après un an, rapportez-le à un sanctuaire pour qu\'il soit rituellement brûlé.',
    priceRange: 'Environ 1 000 à 3 000 ¥',
  },
  {
    id: 'ema',
    name: 'Ema (Plaquette Votive)',
    reading: '絵馬 / ema',
    theme: 'vermillion',
    summary: 'Une plaquette de bois pentagonale sur laquelle les visiteurs inscrivent un vœu et la dédient au kami.',
    description:
      'Dit provenir de l\'ancienne coutume d\'offrir un cheval vivant au kami en guise de prière, plus tard simplifiée en une offrande de plaquette de bois peinte d\'un cheval. De nombreux sanctuaires proposent des modèles adaptés à des vœux spécifiques, tels que la réussite scolaire ou l\'amour.',
    howTo:
      'Écrivez votre vœu et votre nom au dos, puis accrochez-la sur le présentoir à ema du terrain du sanctuaire. On dit qu\'il est utile d\'être précis sur ce que l\'on souhaite.',
    priceRange: 'Environ 500 à 1 000 ¥',
  },
  {
    id: 'omikuji',
    name: 'Omikuji (Tirage de Fortune)',
    reading: 'おみくじ / omikuji',
    theme: 'gold',
    summary: 'Une fine bande de papier de fortune offrant un message du kami.',
    description:
      'En plus d\'un classement de fortune global (de la grande bénédiction à la grande malédiction), les omikuji proposent des conseils sur des sujets précis comme l\'amour, le travail et la santé. Plutôt que de se focaliser sur le caractère bon ou mauvais du résultat, mieux vaut prendre le message comme un guide pour la vie quotidienne.',
    howTo:
      'Vous pouvez le rapporter chez vous ou le nouer à l\'emplacement prévu à cet effet dans le terrain du sanctuaire. Le rapporter chez soi et le relire de temps en temps est aussi une bonne façon de garder ses conseils en tête.',
    priceRange: 'Environ 100 à 300 ¥',
  },
  {
    id: 'kumade',
    name: 'Kumade (Râteau Porte-Bonheur)',
    reading: '熊手 / kumade',
    theme: 'vermillion',
    summary: 'Un râteau décoratif censé « ratisser » la bonne fortune.',
    description:
      'Inspiré d\'un râteau agricole, le kumade est un porte-bonheur fondé sur le jeu de mots consistant à « ramasser » fortune et prospérité, et il est particulièrement prisé comme charme pour la réussite des affaires. Il est célèbre pour être distribué lors des marchés Tori-no-Ichi (« foire du coq ») de novembre.',
    howTo:
      'Exposez-le en hauteur, visible depuis l\'extérieur, par exemple à l\'entrée ou en devanture, orienté vers l\'entrée. La tradition veut que l\'on en échange chaque année contre un légèrement plus grand.',
    priceRange: 'À partir de quelques milliers de yens, selon la taille',
  },
  {
    id: 'omiki',
    name: 'Omiki (Saké Sacré)',
    reading: '御神酒 / omiki',
    theme: 'gold',
    summary: 'Un saké sacré d\'abord offert au kami, puis partagé entre les fidèles.',
    description:
      'L\'une des offrandes rituelles de nourriture (shinsen) présentées au kami, parfois distribuée lors des fêtes ou après une cérémonie de prière. Boire ce qui a été offert au kami est censé permettre de partager la bénédiction de la divinité.',
    howTo:
      'Il est de coutume de le partager en famille, ou de l\'offrir sur son autel domestique avant de le boire.',
    priceRange: 'Généralement distribué lors des fêtes ou des cérémonies de prière',
  },
];
