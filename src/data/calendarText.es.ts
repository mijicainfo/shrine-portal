/**
 * Textos del calendario de días auspiciosos 開運カレンダー (/es/calendar/2027/). Traducción al español de calendarText.ja.ts (versión base).
 * Las fechas y las etiquetas son comunes a todos los idiomas (src/data/calendar2027.ts).
 */
import type { CalendarText } from './calendarText.ja';

const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const MONTHS_ABBR = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const WEEKDAYS: [string, string, string, string, string, string, string] = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
const monthName = (m: number): string => MONTHS[m - 1];
const cap = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);

export const calendarTextEs: CalendarText = {
  weekdays: WEEKDAYS,
  dateShort: (m, d, w) => `${d} ${MONTHS_ABBR[m - 1]} (${WEEKDAYS[w]})`,
  monthName,
  yearLabel: '2027 (Reiwa 9)',
  koyomi: {
    tensha: {
      name: 'Tenshanichi (天赦日)',
      label: 'Tenshanichi',
      desc: 'En los rekichū se dice que es el día en que «los cien dioses ascienden al cielo y el cielo perdona todos los pecados», y se considera el día más auspicioso, con solo unas pocas ocasiones al año.',
    },
    ichiryumanbai: {
      name: 'Ichiryū-manbai-bi (一粒万倍日)',
      label: 'Ichiryū-manbai',
      desc: 'Por la idea de que «un solo grano de arroz se multiplica por diez mil», se considera un buen día para empezar algo.',
    },
    tora: {
      name: 'Día del Tigre (寅の日)',
      label: 'Día del Tigre',
      desc: 'Por el tigre, del que se dice que «recorre mil ri y regresa mil ri», se considera un buen día para la fortuna económica y para emprender un viaje (una vez cada 12 días).',
    },
    mi: {
      name: 'Día de la Serpiente (巳の日)',
      label: 'Día de la Serpiente',
      desc: 'Por la serpiente, considerada mensajera de Benzaiten, se considera un día con afinidad con la fortuna económica y las artes (una vez cada 12 días).',
    },
    tsuchinotomi: {
      name: 'Tsuchinoto-mi (己巳の日)',
      label: 'Tsuchinoto-mi',
      desc: 'Entre los Días de la Serpiente, se considera especialmente propicio por ser el día de culto (ennichi) de Benzaiten (una vez cada 60 días).',
    },
    kinoene: {
      name: 'Kinoe-ne (甲子の日)',
      label: 'Kinoe-ne',
      desc: 'Se considera el día de culto (ennichi) de Daikokuten y un buen día para la fortuna económica y la prosperidad en los negocios (una vez cada 60 días).',
    },
  },
  holidays: {
    ganjitsu: 'Año Nuevo',
    seijin: 'Día de la Mayoría de Edad',
    kenkoku: 'Día de la Fundación Nacional',
    tennou: 'Cumpleaños del Emperador',
    shunbun: 'Día del Equinoccio de Primavera',
    furikae: 'Día festivo compensatorio',
    showa: 'Día de Showa',
    kenpou: 'Día de la Conmemoración de la Constitución',
    midori: 'Día del Verdor',
    kodomo: 'Día del Niño',
    umi: 'Día del Mar',
    yama: 'Día de la Montaña',
    keirou: 'Día del Respeto a los Mayores',
    shubun: 'Día del Equinoccio de Otoño',
    sports: 'Día del Deporte',
    bunka: 'Día de la Cultura',
    kinrou: 'Día de Acción de Gracias por el Trabajo',
  },
  sekki: {
    shokan: 'Shōkan (frío menor)',
    daikan: 'Daikan (frío mayor)',
    risshun: 'Risshun (inicio de la primavera)',
    usui: 'Usui (aguas de lluvia)',
    keichitsu: 'Keichitsu (despertar de los insectos)',
    shunbun: 'Shunbun (equinoccio de primavera)',
    seimei: 'Seimei (claridad pura)',
    kokuu: 'Kokuu (lluvia de cereales)',
    rikka: 'Rikka (inicio del verano)',
    shoman: 'Shōman (plenitud menor)',
    boshu: 'Bōshu (grano en espiga)',
    geshi: 'Geshi (solsticio de verano)',
    shousho: 'Shōsho (calor menor)',
    taisho: 'Taisho (calor mayor)',
    risshuu: 'Risshū (inicio del otoño)',
    shosho: 'Shosho (fin del calor)',
    hakuro: 'Hakuro (rocío blanco)',
    shubun: 'Shūbun (equinoccio de otoño)',
    kanro: 'Kanro (rocío frío)',
    soukou: 'Sōkō (descenso de la escarcha)',
    ritto: 'Rittō (inicio del invierno)',
    shosetsu: 'Shōsetsu (nieve menor)',
    taisetsu: 'Taisetsu (nieve mayor)',
    toji: 'Tōji (solsticio de invierno)',
  },
  zassetsu: {
    'doyo-fuyu': 'Doyō-no-iri de invierno (inicio del doyō de invierno)',
    setsubun: 'Setsubun (víspera del cambio de estación)',
    'higan-haru': 'Higan-no-iri de primavera (inicio del Higan de primavera)',
    'doyo-haru': 'Doyō-no-iri de primavera (inicio del doyō de primavera)',
    hachijuhachiya: 'Hachijūhachiya (noche 88)',
    nyubai: 'Nyūbai (inicio de la temporada de lluvias)',
    hangesho: 'Hangeshō (brote del hange)',
    'doyo-natsu': 'Doyō-no-iri de verano (inicio del doyō de verano)',
    nihyakutoka: 'Nihyakutōka (día 210)',
    'higan-aki': 'Higan-no-iri de otoño (inicio del Higan de otoño)',
    'doyo-aki': 'Doyō-no-iri de otoño (inicio del doyō de otoño)',
    hatsuuma: 'Hatsuuma (primer Día del Caballo)',
    'doyo-ushi': 'Doyō-no-ushi-no-hi de verano (Día del Buey del doyō de verano)',
  },
  moon: { new: 'Luna nueva (saku)', full: 'Luna llena (bō)' },
  rokuyo: {
    senshou: { name: 'Sensho (先勝)', desc: 'Se considera que conviene darse prisa en todo; es un día en que la mañana se considera propicia y la tarde desfavorable.' },
    tomobiki: { name: 'Tomobiki (友引)', desc: 'Significa «arrastrar al amigo»; es un día en que existe la costumbre de evitar los funerales. Se considera propicio por la mañana y al atardecer, y desfavorable al mediodía.' },
    senbu: { name: 'Senbu (先負)', desc: 'Se considera que conviene ser discreto en todo; es un día en que la mañana se considera desfavorable y la tarde propicia.' },
    butsumetsu: { name: 'Butsumetsu (仏滅)', desc: 'Se considera el día más desfavorable de los rokuyō.' },
    taian: { name: 'Taian (大安)', desc: 'Significa «gran tranquilidad»; se considera un día propicio durante toda la jornada. Suele elegirse para fechas de bodas y similares.' },
    shakku: { name: 'Shakku (赤口)', desc: 'Solo se considera propicio hacia el mediodía y desfavorable el resto de la jornada. Hay quien evita celebrar festejos este día.' },
  },
  ui: {
    sectionName: 'Calendario de días auspiciosos (開運カレンダー)',
    legendHeading: 'Cómo leer los colores y las marcas',
    legendKoyomi: 'Rekichū (costumbre, no oficial)',
    legendOfficial: 'Datos oficiales (Observatorio Astronómico Nacional de Japón y Oficina del Gabinete)',
    legendHoliday: 'Día festivo',
    legendTensha: 'Tenshanichi',
    year: {
      title: 'Calendario de días propicios 2027: Tenshanichi, Ichiryū-manbai-bi',
      description:
        'En 2027 hay 6 Tenshanichi y 3 días en que coinciden con Ichiryū-manbai-bi. Lista mensual de días propicios y santuarios afines (los rekichū son costumbres, no oficiales).',
      h1: 'Calendario de días auspiciosos 2027 (Reiwa 9)',
      lead:
        'Hemos reunido en un calendario mensual de 2027 el Tenshanichi, el Ichiryū-manbai-bi, el Día del Tigre, el Día de la Serpiente, el Tsuchinoto-mi y el Kinoe-ne. Los días festivos, los 24 términos solares, los zassetsu y las fases de la luna se basan en los datos del Observatorio Astronómico Nacional de Japón y de la Oficina del Gabinete, y se muestran diferenciados de los rekichū. Para cada día también se muestran automáticamente los santuarios cuyas etiquetas de beneficios coinciden.',
      keyDatesHeading: 'Principales días auspiciosos de 2027',
      tenshaLine: (n, d) => `Tenshanichi (${n} veces): ${d}`,
      overlapLine: (n, d) => `Días en que coinciden Tenshanichi e Ichiryū-manbai-bi (${n}): ${d}`,
      tsuchinotomiLine: (n, d) => `Tsuchinoto-mi (${n} veces): ${d}`,
      monthsHeading: 'Calendario mensual',
      monthLink: (m) => `Días propicios de ${monthName(m)}`,
      rokuyoPromo: 'Los rokuyō (Taian, Butsumetsu, etc.) se recogen como información de referencia en otra página.',
      guidesHeading: 'Artículos relacionados',
      guideKinun: '6 santuarios con fama de favorecer la fortuna económica',
      guideEnmusubi: '10 santuarios famosos por los lazos del destino (en-musubi) [todo Japón]',
      faqHeading: 'Preguntas frecuentes',
    },
    month: {
      title: (m, t) => `Días propicios de ${monthName(m)} de 2027: ${t ? `Tenshanichi (${t}) e ` : ''}Ichiryū-manbai-bi`,
      description: (m) =>
        `Días del calendario tradicional de ${monthName(m)} de 2027 (Tenshanichi, Ichiryū-manbai-bi, Tigre, Serpiente), festivos y santuarios afines. Los rekichū son costumbres, no oficiales.`,
      h1: (m) => `Días propicios de ${monthName(m)} de 2027`,
      gridHeading: 'Calendario',
      detailHeading: 'Días de rekichū de este mes',
      noKoyomi: 'Este mes no tiene días de rekichū.',
      relatedHeading: 'Santuarios afines a este día',
      relatedNote: 'Se muestran automáticamente los santuarios cuyas etiquetas de beneficios, entre otros criterios, coinciden. No indica que visitar el santuario en este día tenga algún efecto.',
      prev: (m) => `← ${cap(monthName(m))}`,
      next: (m) => `${cap(monthName(m))} →`,
      backToYear: 'Volver al calendario de días auspiciosos de 2027',
      officialHeading: 'Festivos, 24 términos solares, zassetsu y fases de la luna (datos oficiales)',
    },
    rokuyoPage: {
      title: 'Calendario Rokuyō 2027 (Taian, Butsumetsu): referencia',
      description: 'Rokuyō de 2027 por meses (Sensho, Tomobiki, Senbu, Butsumetsu, Taian, Shakku), solo como referencia. Provienen del calendario lunar antiguo y no se relacionan con el sintoísmo.',
      h1: 'Calendario Rokuyō 2027 (referencia)',
      lead: 'Página de referencia con los rokuyō (Taian, Butsumetsu, etc.) por meses. Aparte de los rekichū del calendario de días auspiciosos, puede consultarse como «orientación al pensar en una fecha».',
      aboutHeading: 'Qué son los rokuyō',
      aboutBody: [
        'Los rokuyō son seis días —Sensho (先勝), Tomobiki (友引), Senbu (先負), Butsumetsu (仏滅), Taian (大安) y Shakku (赤口)— que son un rekichū determinado en orden a partir del mes y el día del calendario lunar antiguo. Se dice que proceden de China y que se difundieron entre la gente común en Japón hacia finales del período Edo.',
        'Los rokuyō no guardan relación con la doctrina sintoísta ni los ha establecido el Estado ni ningún organismo público. Tampoco figuran en el Rekiyōkō (anuario del calendario) del Observatorio Astronómico Nacional de Japón. No garantizan fundamento ni efecto alguno sobre lo favorable o desfavorable; se presentan como una costumbre a la que mucha gente presta atención al elegir la fecha de una boda o un funeral, por ejemplo.',
      ],
      tableHeading: 'Rokuyō por meses',
      calcNote: 'Los rokuyō se calculan a partir de la luna nueva (saku) y de los 24 términos solares publicados por el Observatorio Astronómico Nacional de Japón, con los que se obtiene el mes y el día del calendario lunar antiguo. Entre paréntesis se indican el mes y el día de dicho calendario.',
      backToYear: 'Volver al calendario de días auspiciosos de 2027',
      noteBadge: 'Referencia',
    },
    notice: {
      heading: 'Antes de usar este calendario',
      body:
        'El Ichiryū-manbai-bi, el Tenshanichi, el Día del Tigre, el Día de la Serpiente, el Tsuchinoto-mi y el Kinoe-ne son «rekichū» (れきちゅう, anotaciones del calendario tradicional): costumbres que desde hace mucho se incluyen en los calendarios populares como orientación para elegir fechas, y no han sido establecidas por el Estado ni por ningún organismo público. Tampoco garantizan fundamento ni efecto alguno sobre lo favorable o desfavorable, y los días que se adoptan pueden variar según el calendario o la escuela. Para el cambio de mes en el caso del Ichiryū-manbai-bi y similares se sigue el método habitual, según el cual el mes nuevo comienza el mismo día del «setsu» de los 24 términos solares. Los días festivos, los 24 términos solares, los zassetsu y las fases de la luna se basan en los datos de la Oficina del Gabinete y del Observatorio Astronómico Nacional de Japón. Le invitamos a usar las fechas como una orientación para disfrutar de lo auspicioso.',
    },
    sources: {
      heading: 'Fuentes',
      items: [
        { label: 'Días festivos nacionales', text: 'Oficina del Gabinete, «Sobre los días festivos nacionales» (Kokumin no shukujitsu ni tsuite)', href: 'https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html' },
        { label: '24 términos solares y zassetsu', text: 'Observatorio Astronómico Nacional de Japón, Rekiyōkō del año Reiwa 9 (2027)', href: 'https://eco.mtk.nao.ac.jp/koyomi/yoko/2027/rekiyou272.html' },
        { label: 'Fases lunares (luna nueva y luna llena)', text: 'Observatorio Astronómico Nacional de Japón, Rekiyōkō del año Reiwa 9 (2027)', href: 'https://eco.mtk.nao.ac.jp/koyomi/yoko/2027/rekiyou273.html' },
        { label: 'Rekichū (Tenshanichi, Ichiryū-manbai-bi, etc.)', text: 'Calculados por este sitio a partir del signo del calendario sexagesimal del día y del «setsu» de los 24 términos solares, según las reglas habituales de los calendarios populares (no son datos oficiales). Los significados se basan en explicaciones generales del calendario y no garantizan ningún efecto.' },
      ],
    },
    faq: (c) => [
      {
        q: `¿Qué días cae el Tenshanichi en ${c.year}?`,
        a: `En ${c.year}, el Tenshanichi se da ${c.tenshaCount} veces al año: ${c.tensha} (cálculo basado en las reglas generales de los rekichū).`,
      },
      {
        q: `¿Cuándo coinciden el Tenshanichi y el Ichiryū-manbai-bi?`,
        a: `En ${c.year}, coinciden ${c.tenshaIchiryuCount} días: ${c.tenshaIchiryu}. Hay ${c.ichiryuCount} días de Ichiryū-manbai-bi al año.`,
      },
      {
        q: '¿Son el Tenshanichi o el Ichiryū-manbai-bi parte de un calendario oficial?',
        a: 'No han sido establecidos por el Estado ni por ningún organismo público: son una costumbre llamada «rekichū», que desde hace mucho se incluye en los calendarios populares como orientación para elegir fechas. Los días pueden variar según la escuela o el calendario, y tampoco se garantiza ningún efecto.',
      },
      {
        q: '¿Cuándo cae el Tsuchinoto-mi?',
        a: `En ${c.year}, el Tsuchinoto-mi se da ${c.tsuchinotomiCount} veces al año: ${c.tsuchinotomi}.`,
      },
      {
        q: '¿Figuran los rokuyō (Taian, Butsumetsu)?',
        a: 'Los rokuyō son un rekichū de origen lunar antiguo sin relación con el sintoísmo, por lo que se recogen en una página de referencia aparte del calendario de días auspiciosos.',
      },
    ],
    relatedShrinesAria: 'Santuarios afines a este día',
  },
};
