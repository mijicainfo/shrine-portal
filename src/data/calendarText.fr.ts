/**
 * Calendrier des jours fastes 2027 (/fr/calendar/2027/) : textes d’interface en français.
 * Traduction de calendarText.ja.ts (référence). Mêmes clés, même forme.
 */
import type { CalendarText } from './calendarText.ja';

const WEEKDAYS_FR = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'] as const;
const MONTHS_FR = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'] as const;
const MONTHS_FR_SHORT = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'] as const;

/** « de mai » / « d’avril » (élision devant une voyelle) */
const deMois = (m: number): string => {
  const name = MONTHS_FR[m - 1];
  return /^[aeiouyhâéèêîô]/i.test(name) ? `d’${name}` : `de ${name}`;
};

export const calendarTextFr: CalendarText = {
  weekdays: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
  dateShort: (m, d, w) => `${d === 1 ? '1er' : d} ${MONTHS_FR_SHORT[m - 1]} (${WEEKDAYS_FR[w]})`,
  monthName: (m) => MONTHS_FR[m - 1],
  yearLabel: '2027 (Reiwa 9)',
  koyomi: {
    tensha: {
      name: 'Tenshanichi (天赦日)',
      label: 'Tenshanichi',
      desc: 'Dans les rekichū, on dit que c’est le jour où « les cent divinités montent au ciel et où le ciel pardonne tous les péchés » ; il est réputé être le meilleur jour faste, qui ne revient que quelques fois par an.',
    },
    ichiryumanbai: {
      name: 'Ichiryū-manbai-bi (一粒万倍日)',
      label: 'Ichiryū-manbai',
      desc: 'Son nom évoque « un grain de riz qui en produit dix mille » ; ce jour est réputé favorable pour commencer quelque chose.',
    },
    tora: {
      name: 'Jour du Tigre (寅の日)',
      label: 'Jour du Tigre',
      desc: 'En référence au tigre, dont on dit qu’il « parcourt mille ri et revient de mille ri », ce jour est réputé favorable à la prospérité financière et aux départs en voyage (tous les 12 jours).',
    },
    mi: {
      name: 'Jour du Serpent (巳の日)',
      label: 'Jour du Serpent',
      desc: 'En référence au serpent, considéré comme le messager de Benzaiten, ce jour est réputé lié à la prospérité financière et aux arts (tous les 12 jours).',
    },
    tsuchinotomi: {
      name: 'Tsuchinoto-mi (己巳の日)',
      label: 'Tsuchinoto-mi',
      desc: 'Parmi les jours du Serpent, c’est celui qui est tenu pour particulièrement faste, car jour de fête de Benzaiten (tous les 60 jours).',
    },
    kinoene: {
      name: 'Kinoe-ne (甲子の日)',
      label: 'Kinoe-ne',
      desc: 'Jour de fête de Daikokuten, réputé favorable à la prospérité financière et à la réussite des affaires (tous les 60 jours).',
    },
  },
  holidays: {
    ganjitsu: 'Jour de l’An',
    seijin: 'Jour de la majorité',
    kenkoku: 'Jour de la fondation nationale',
    tennou: 'Anniversaire de l’Empereur',
    shunbun: 'Jour de l’équinoxe de printemps',
    furikae: 'Jour férié compensatoire',
    showa: 'Jour de Shōwa',
    kenpou: 'Jour de la Constitution',
    midori: 'Jour de la verdure',
    kodomo: 'Jour des enfants',
    umi: 'Jour de la mer',
    yama: 'Jour de la montagne',
    keirou: 'Jour du respect des aînés',
    shubun: 'Jour de l’équinoxe d’automne',
    sports: 'Jour du sport',
    bunka: 'Jour de la culture',
    kinrou: 'Jour de Thanksgiving du travail',
  },
  sekki: {
    shokan: 'Shōkan (petit froid)',
    daikan: 'Daikan (grand froid)',
    risshun: 'Risshun (début du printemps)',
    usui: 'Usui (eaux de pluie)',
    keichitsu: 'Keichitsu (réveil des insectes)',
    shunbun: 'Shunbun (équinoxe de printemps)',
    seimei: 'Seimei (clarté pure)',
    kokuu: 'Kokuu (pluies de grain)',
    rikka: 'Rikka (début de l’été)',
    shoman: 'Shōman (petite plénitude)',
    boshu: 'Bōshu (grains à barbe)',
    geshi: 'Geshi (solstice d’été)',
    shousho: 'Shōsho (petite chaleur)',
    taisho: 'Taisho (grande chaleur)',
    risshuu: 'Risshū (début de l’automne)',
    shosho: 'Shosho (fin de la chaleur)',
    hakuro: 'Hakuro (rosée blanche)',
    shubun: 'Shūbun (équinoxe d’automne)',
    kanro: 'Kanro (rosée froide)',
    soukou: 'Sōkō (descente du givre)',
    ritto: 'Rittō (début de l’hiver)',
    shosetsu: 'Shōsetsu (petite neige)',
    taisetsu: 'Taisetsu (grande neige)',
    toji: 'Tōji (solstice d’hiver)',
  },
  zassetsu: {
    'doyo-fuyu': 'Doyō no iri (début du doyō), hiver',
    setsubun: 'Setsubun (veille du changement de saison)',
    'higan-haru': 'Higan no iri (début des higan), printemps',
    'doyo-haru': 'Doyō no iri (début du doyō), printemps',
    hachijuhachiya: 'Hachijūhachiya (88e nuit)',
    nyubai: 'Nyūbai (entrée dans la saison des pluies)',
    hangesho: 'Hangeshō (repère de la mi-saison d’été)',
    'doyo-natsu': 'Doyō no iri (début du doyō), été',
    nihyakutoka: 'Nihyakutōka (210e jour)',
    'higan-aki': 'Higan no iri (début des higan), automne',
    'doyo-aki': 'Doyō no iri (début du doyō), automne',
    hatsuuma: 'Hatsuuma (premier jour du Cheval)',
    'doyo-ushi': 'Doyō no ushi no hi d’été (jour du Bœuf du doyō d’été)',
  },
  moon: { new: 'Nouvelle lune (saku, 朔)', full: 'Pleine lune (bō, 望)' },
  rokuyo: {
    senshou: { name: 'Senshō (先勝)', desc: 'On dit qu’il vaut mieux se hâter en toutes choses ; la matinée est réputée faste et l’après-midi néfaste.' },
    tomobiki: { name: 'Tomobiki (友引)', desc: 'Son nom évoque « entraîner un ami » ; on a l’habitude d’éviter les funérailles ce jour-là. Le matin et le soir sont réputés fastes, le midi néfaste.' },
    senbu: { name: 'Senbu (先負)', desc: 'On dit qu’il vaut mieux rester discret en toutes choses ; la matinée est réputée néfaste et l’après-midi faste.' },
    butsumetsu: { name: 'Butsumetsu (仏滅)', desc: 'Parmi les rokuyo, c’est le jour réputé le plus néfaste.' },
    taian: { name: 'Taian (大安)', desc: 'Son nom signifie « grande paix » ; la journée entière est réputée faste. On le choisit souvent comme date de mariage, par exemple.' },
    shakku: { name: 'Shakkō (赤口)', desc: 'Seules les heures autour de midi sont réputées fastes, le reste de la journée étant néfaste. Certaines personnes évitent d’y célébrer des événements heureux.' },
  },
  ui: {
    sectionName: 'Calendrier des jours fastes (開運カレンダー)',
    legendHeading: 'Légende des couleurs et des repères',
    legendKoyomi: 'Rekichū (coutumes, non officiel)',
    legendOfficial: 'Données officielles (Observatoire astronomique national, Cabinet Office)',
    legendHoliday: 'Jour férié',
    legendTensha: 'Tenshanichi',
    year: {
      title: 'Calendrier des jours fastes 2027 : Tenshanichi, Ichiryū-manbai-bi',
      description:
        'En 2027, le Tenshanichi tombe 6 fois, dont 3 jours coïncident avec un Ichiryū-manbai-bi. Liste mensuelle des jours fastes et des sanctuaires adaptés (les rekichū sont des coutumes, non officielles).',
      h1: 'Calendrier des jours fastes 2027 (Reiwa 9)',
      lead:
        'Tenshanichi, Ichiryū-manbai-bi, jour du Tigre, jour du Serpent, Tsuchinoto-mi et Kinoe-ne sont réunis dans un calendrier mensuel pour 2027. Les jours fériés, les 24 termes solaires, les zassetsu et les phases de la lune reposent sur les données de l’Observatoire astronomique national et du Cabinet Office, et sont présentés séparément des rekichū. Pour chaque jour, les sanctuaires dont les bienfaits correspondent sont aussi affichés automatiquement.',
      keyDatesHeading: 'Principaux jours fastes de 2027',
      tenshaLine: (n, d) => `Tenshanichi (${n} fois) : ${d}`,
      overlapLine: (n, d) => `Jours où Tenshanichi et Ichiryū-manbai-bi coïncident (${n} jours) : ${d}`,
      tsuchinotomiLine: (n, d) => `Tsuchinoto-mi (${n} fois) : ${d}`,
      monthsHeading: 'Calendrier mensuel',
      monthLink: (m) => `Jours fastes ${deMois(m)}`,
      rokuyoPromo: 'Les rokuyo (Taian, Butsumetsu, etc.) sont présentés à titre indicatif sur une page séparée.',
      guidesHeading: 'À lire aussi',
      guideKinun: '6 sanctuaires réputés pour la prospérité financière',
      guideEnmusubi: '10 sanctuaires célèbres pour les unions et les rencontres (tout le Japon)',
      faqHeading: 'Questions fréquentes',
    },
    month: {
      title: (m, t) => `Jours fastes ${deMois(m)} 2027 : ${t ? `Tenshanichi (${t}), ` : ''}Ichiryū-manbai-bi, Tigre, Serpent`,
      description: (m) => `Tenshanichi, Ichiryū-manbai-bi, jours du Tigre et du Serpent, Tsuchinoto-mi, Kinoe-ne, jours fériés et termes solaires ${deMois(m)} 2027, avec les sanctuaires adaptés (les rekichū sont des coutumes, non officielles).`,
      h1: (m) => `Jours fastes ${deMois(m)} 2027`,
      gridHeading: 'Calendrier',
      detailHeading: 'Jours de rekichū de ce mois',
      noKoyomi: 'Ce mois ne compte aucun jour de rekichū.',
      relatedHeading: 'Sanctuaires adaptés à ce jour',
      relatedNote: 'Les sanctuaires dont les bienfaits (tags) correspondent sont affichés automatiquement. Cela ne signifie pas qu’une visite ce jour-là aurait un effet.',
      prev: (m) => `← ${MONTHS_FR[m - 1]}`,
      next: (m) => `${MONTHS_FR[m - 1]} →`,
      backToYear: 'Retour au calendrier des jours fastes 2027',
      officialHeading: 'Jours fériés, 24 termes solaires, zassetsu et phases de la lune (données officielles)',
    },
    rokuyoPage: {
      title: 'Calendrier des rokuyo 2027 (Taian, Butsumetsu) : à titre indicatif',
      description: 'Liste mensuelle des rokuyo 2027 (Senshō, Tomobiki, Senbu, Butsumetsu, Taian, Shakkō), à titre indicatif. Les rokuyo sont des rekichū issus de l’ancien calendrier lunaire, sans lien avec la doctrine shintō.',
      h1: 'Calendrier des rokuyo 2027 (à titre indicatif)',
      lead: 'Page de référence réunissant, mois par mois, les rokuyo (Taian, Butsumetsu, etc.). À consulter comme simple repère pour choisir une date, indépendamment des rekichū du calendrier des jours fastes.',
      aboutHeading: 'Que sont les rokuyo ?',
      aboutBody: [
        'Les rokuyo sont au nombre de six (Senshō, Tomobiki, Senbu, Butsumetsu, Taian et Shakkō) ; ce sont des rekichū attribués dans l’ordre selon le mois et le jour de l’ancien calendrier lunaire. D’origine chinoise, dit-on, ils se seraient répandus parmi la population au Japon à partir de la fin de l’époque d’Edo.',
        'Les rokuyo n’ont aucun lien avec la doctrine shintō et n’ont été fixés ni par l’État ni par un organisme public. Ils ne figurent pas non plus dans le Rekiyōkō de l’Observatoire astronomique national. Nous ne garantissons ni leur fondement ni leur effet : nous les présentons comme une coutume dont beaucoup de gens tiennent compte pour choisir la date d’un mariage ou de funérailles, par exemple.',
      ],
      tableHeading: 'Les rokuyo mois par mois',
      calcNote: 'Les rokuyo sont calculés à partir des nouvelles lunes (saku) et des 24 termes solaires publiés par l’Observatoire astronomique national, qui servent à déterminer le mois et le jour de l’ancien calendrier lunaire. Ceux-ci sont indiqués entre parenthèses.',
      backToYear: 'Retour au calendrier des jours fastes 2027',
      noteBadge: 'Indicatif',
    },
    notice: {
      heading: 'Avant de consulter ce calendrier',
      body:
        'L’Ichiryū-manbai-bi, le Tenshanichi, le jour du Tigre, le jour du Serpent, le Tsuchinoto-mi et le Kinoe-ne sont des « rekichū » (annotations du calendrier traditionnel) : des coutumes consignées de longue date dans les calendriers populaires comme repères pour choisir une date. Elles n’ont été fixées ni par l’État ni par un organisme public, ne garantissent ni fondement ni effet, et les jours retenus peuvent varier selon le calendrier ou l’école. Pour les limites de mois utilisées pour l’Ichiryū-manbai-bi et les jours similaires, nous suivons la méthode courante, qui fait commencer le nouveau mois le jour même du « setsu » (le terme solaire qui ouvre chaque mois) parmi les 24 termes solaires. Les jours fériés, les 24 termes solaires, les zassetsu et les phases de la lune reposent sur les données du Cabinet Office et de l’Observatoire astronomique national. Utilisez ces dates comme un repère pour le plaisir des jours fastes.',
    },
    sources: {
      heading: 'Sources',
      items: [
        { label: 'Jours fériés nationaux', text: 'Cabinet Office, « À propos des jours fériés nationaux » (en japonais)', href: 'https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html' },
        { label: '24 termes solaires et zassetsu', text: 'Observatoire astronomique national, Rekiyōkō, Reiwa 9 (2027) (en japonais)', href: 'https://eco.mtk.nao.ac.jp/koyomi/yoko/2027/rekiyou272.html' },
        { label: 'Phases de la lune (nouvelle lune, pleine lune)', text: 'Observatoire astronomique national, Rekiyōkō, Reiwa 9 (2027) (en japonais)', href: 'https://eco.mtk.nao.ac.jp/koyomi/yoko/2027/rekiyou273.html' },
        { label: 'Rekichū (Tenshanichi, Ichiryū-manbai-bi, etc.)', text: 'Calculés par ce site à partir du signe du jour (eto) et du « setsu » des 24 termes solaires, selon les règles courantes des calendriers populaires (il ne s’agit pas de données officielles). Les significations rapportées proviennent d’explications courantes sur le calendrier et ne garantissent aucun effet.' },
      ],
    },
    faq: (c) => [
      {
        q: `Quelles sont les dates du Tenshanichi en ${c.year} ?`,
        a: `En ${c.year}, le Tenshanichi tombe ${c.tenshaCount} fois dans l’année : ${c.tensha} (calcul fondé sur les règles courantes des rekichū).`,
      },
      {
        q: `Quand le Tenshanichi coïncide-t-il avec un Ichiryū-manbai-bi ?`,
        a: `En ${c.year}, cela concerne ${c.tenshaIchiryuCount} jours : ${c.tenshaIchiryu}. Il y a ${c.ichiryuCount} jours d’Ichiryū-manbai-bi dans l’année.`,
      },
      {
        q: 'Le Tenshanichi et l’Ichiryū-manbai-bi appartiennent-ils à un calendrier officiel ?',
        a: 'Non. Ils n’ont été fixés ni par l’État ni par un organisme public : ce sont des coutumes appelées « rekichū », consignées de longue date dans les calendriers populaires comme repères pour choisir une date. Les jours peuvent varier selon l’école ou le calendrier, et aucun effet n’est garanti.',
      },
      {
        q: 'Quand tombe le Tsuchinoto-mi ?',
        a: `En ${c.year}, le Tsuchinoto-mi tombe ${c.tsuchinotomiCount} fois dans l’année : ${c.tsuchinotomi}.`,
      },
      {
        q: 'Les rokuyo (Taian, Butsumetsu) figurent-ils dans ce calendrier ?',
        a: 'Les rokuyo sont des rekichū issus de l’ancien calendrier lunaire, sans lien avec le shintō ; ils sont donc réunis sur une page de référence distincte du calendrier des jours fastes.',
      },
    ],
    relatedShrinesAria: 'Sanctuaires adaptés à ce jour',
  },
};
