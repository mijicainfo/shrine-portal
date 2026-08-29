import type { DeityInsight } from './deityInsights';

/**
 * French translations of deityInsights.ts, keyed by the same shrine id.
 * Mirrors the Japanese file's fallback behavior: any shrine id missing here
 * gets an auto-generated minimal card on /fr/deities/ instead of being omitted.
 */
export const deityInsightsFr: Record<string, DeityInsight> = {
  'ise-jingu': {
    category: 'Divinité mythologique (ancêtre impériale, déesse du soleil)',
    description:
      'Considérée comme la divinité suprême de la mythologie japonaise, Amaterasu Omikami est la déesse du soleil. Elle est connue pour son alliance avec son frère Susanoo et pour le mythe de la « Grotte Céleste » dans lequel elle se retira, et elle est vénérée de longue date comme l\'une des divinités les plus éminentes en tant qu\'ancêtre de la famille impériale.',
    chant: {
      title: 'Tokoto no Kami no Ju (l\'incantation sacrée en dix syllabes)',
      text: 'Amaterasu Omikami',
      note: 'Réciter le nom de la divinité en dix syllabes, une pratique transmise de longue date parmi les prêtres shinto d\'Ise.',
    },
  },
  'izumo-taisha': {
    category: 'Divinité mythologique (bâtisseur de la nation, dieu des bonnes relations)',
    description:
      'Okuninushi aurait bâti le territoire d\'Izumo. Dans la mythologie japonaise, il est surtout connu pour avoir secouru le « lièvre blanc d\'Inaba » tourmenté par ses frères dieux, et pour le mythe du « transfert du territoire » dans lequel il céda le royaume qu\'il gouvernait à Amaterasu Omikami. Il est également vénéré comme une divinité qui régit le monde invisible et les liens entre les personnes.',
  },
  'meiji-jingu': {
    category: 'Divinité ancêtre impérial',
    description:
      'L\'empereur Meiji fut le 122e empereur, qui guida le Japon à travers la transition tumultueuse de l\'ère Edo vers l\'ère moderne. Son épouse, l\'impératrice Shoken, était connue pour son dévouement à l\'éducation et à l\'aide sociale ; les deux sont vénérés ensemble.',
  },
  'fushimi-inari': {
    category: 'Divinité mythologique (dieu des récoltes)',
    description:
      'Affectueusement surnommée « Oinari-san », cette divinité tire son nom de « uka », un mot ancien désignant les céréales et la nourriture. Vénérée à l\'origine comme un dieu de l\'agriculture, elle en est venue par la suite à être largement adorée comme protectrice de la prospérité des affaires.',
  },
  'dazaifu-tenmangu': {
    category: 'Figure historique déifiée (dieu des études)',
    description:
      'Ce sanctuaire vénère Sugawara no Michizane, un érudit et homme d\'État de l\'époque de Heian. Après sa mort, la cour impériale lui décerna le titre divin de « Tenman Daijizai Tenjin », et en raison de sa réputation de brillant érudit, il en vint à être vénéré dans tout le pays sous le nom de « Tenjin-sama », dieu du savoir.',
    chant: {
      title: 'Titre divin',
      text: 'Tenman Daijizai Tenjin',
      note: 'Le titre divin conféré à Michizane, à l\'origine du nom « Tenmangu » utilisé par les sanctuaires qui lui sont dédiés.',
    },
  },
  itsukushima: {
    category: 'Divinité mythologique (déesse de la mer)',
    description:
      'L\'une des « Trois Déesses de Munakata », dite née de l\'alliance entre Amaterasu Omikami et Susanoo. Longtemps vénérée comme protectrice de la navigation, elle a suscité une profonde dévotion des gens de mer tout au long de l\'histoire.',
  },
  'hokkaido-jingu': {
    category: 'Divinité mythologique (dieu de l\'aménagement des terres)',
    description:
      'Onamuchi no Kami est considéré comme un autre nom d\'Okuninushi. Avec Sukunahikona no Kami, il aurait fait progresser la construction de la nation et diffusé les connaissances agricoles et médicales parmi le peuple. Il fut vénéré pour veiller sur le développement d\'Hokkaido.',
  },
  'shiogama-jinja': {
    category: 'Divinités mythologiques (dieux de la mer, dieux de la guerre)',
    description:
      'Shiotsuchi no Oji no Kami aurait enseigné aux hommes l\'art de la fabrication du sel. Les divinités co-vénérées Takemikazuchi no Kami et Futsunushi no Kami sont les dieux guerriers envoyés à Izumo dans le mythe du « transfert du territoire », et auraient également joué un rôle dans la pacification de la région du Tohoku.',
  },
  kotohiragu: {
    category: 'Divinité mythologique (dieu de la mer)',
    description:
      'Omononushi no Kami est dit représenter le « nigi-mitama » — l\'aspect doux et bienfaisant — d\'Okuninushi. En tant que dieu de la mer, il a longtemps suscité une profonde dévotion chez ceux qui pratiquent la pêche et le transport maritime.',
  },
  'usa-jingu': {
    category: 'Figure historique déifiée (dieu de la fortune martiale)',
    description:
      'Hachiman Okami est considéré comme l\'esprit divin du 15e empereur, Ojin. Vénéré comme dieu de la réussite militaire, il fut particulièrement honoré à l\'époque des samouraïs, et à l\'ère du syncrétisme shinto-bouddhique, il était également connu sous le nom de « Hachiman Daibosatsu ».',
    chant: {
      title: 'Titre divin',
      text: 'Namu Hachiman Daibosatsu',
      note: 'Une incantation répandue à l\'ère du syncrétisme shinto-bouddhique, dite invoquée par de nombreux guerriers, dont Minamoto no Yoshitsune, avant la bataille.',
    },
  },
  samuhara: {
    category: 'Divinités mythologiques (les trois divinités créatrices)',
    description:
      'Dans le Kojiki, ces trois divinités seraient les toutes premières à apparaître à l\'aube de la création. « Samuhara » sert de caractère sacré collectif pour les trois, transmis de longue date comme protection contre le malheur.',
    chant: {
      title: 'Caractère sacré',
      text: 'Samuhara',
      note: 'Censé détenir le pouvoir de repousser le malheur, ce caractère spécial aurait autrefois été porté par les soldats partant à la guerre. Le caractère original ne peut être affiché sur la plupart des ordinateurs ou smartphones, il est donc rendu ici en katakana par commodité.',
    },
  },
};
