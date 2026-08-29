import type { DeityInsight } from './deityInsights';

/**
 * Spanish translations of deityInsights.ts, keyed by the same shrine id.
 * Mirrors the Japanese file's fallback behavior: any shrine id missing here
 * gets an auto-generated minimal card on /es/deities/ instead of being omitted.
 */
export const deityInsightsEs: Record<string, DeityInsight> = {
  'ise-jingu': {
    category: 'Deidad mitológica (ancestra imperial, diosa del sol)',
    description:
      'Considerada la deidad suprema de la mitología japonesa, Amaterasu Omikami es la diosa del sol. Es conocida por su pacto con su hermano Susanoo y por el mito de la "Cueva Celestial de Roca", en el que se ocultó del mundo, y ha sido venerada durante siglos como una de las deidades más excelsas, ancestra de la familia imperial.',
    chant: {
      title: 'Tokoto no Kami no Ju (el Canto Sagrado de Diez Sílabas)',
      text: 'Amaterasu Omikami',
      note: 'Recitar el nombre de la deidad en diez sílabas, una práctica transmitida durante generaciones entre los sacerdotes sintoístas de Ise.',
    },
  },
  'izumo-taisha': {
    category: 'Deidad mitológica (constructor de la nación, dios de las buenas relaciones)',
    description:
      'Se dice que Okuninushi construyó la tierra de Izumo. En la mitología japonesa es conocido sobre todo por rescatar a la "Liebre Blanca de Inaba" tras ser atormentada por sus hermanos dioses, y por el mito de la "Cesión de la Tierra", en el que entregó el reino que gobernaba a Amaterasu Omikami. También se le venera como deidad que rige el mundo invisible y los lazos entre las personas.',
  },
  'meiji-jingu': {
    category: 'Deidad ancestral imperial',
    description:
      'El Emperador Meiji fue el 122.º emperador, quien guio a Japón a través de la turbulenta transición de la era Edo hacia la era moderna. Su consorte, la Emperatriz Shoken, fue conocida por su dedicación a la educación y al bienestar social; ambos son venerados juntos.',
  },
  'fushimi-inari': {
    category: 'Deidad mitológica (dios de la cosecha)',
    description:
      'Conocida cariñosamente como "Oinari-san", el nombre de esta deidad incorpora "uka", una antigua palabra para el grano y los alimentos. Venerada originalmente como dios de la agricultura, con el tiempo pasó a ser adorada también ampliamente como patrona de la prosperidad en los negocios.',
  },
  'dazaifu-tenmangu': {
    category: 'Figura histórica deificada (dios del saber)',
    description:
      'Aquí se venera a Sugawara no Michizane, erudito y estadista del período Heian. Tras su muerte, la corte imperial le otorgó el título divino de "Tenman Daijizai Tenjin", y gracias a su fama de brillante erudito llegó a ser venerado en todo el país como "Tenjin-sama", dios del saber.',
    chant: {
      title: 'Título divino',
      text: 'Tenman Daijizai Tenjin',
      note: 'El título divino otorgado a Michizane, origen del nombre "Tenmangu" que llevan los santuarios dedicados a él.',
    },
  },
  itsukushima: {
    category: 'Deidad mitológica (diosa del mar)',
    description:
      'Una de las "Tres Diosas de Munakata", nacida según la leyenda del pacto entre Amaterasu Omikami y Susanoo. Venerada desde antiguo como protectora de la navegación segura, ha recibido una profunda devoción por parte de la gente del mar a lo largo de la historia.',
  },
  'hokkaido-jingu': {
    category: 'Deidad mitológica (dios del desarrollo de la tierra)',
    description:
      'Onamuchi no Kami es considerado otro nombre de Okuninushi. Junto con Sukunahikona no Kami, se dice que impulsó la construcción de la nación y difundió el conocimiento de la agricultura y la medicina entre el pueblo. Fue venerado para velar por el desarrollo de Hokkaido.',
  },
  'shiogama-jinja': {
    category: 'Deidades mitológicas (dioses del mar, dioses de la guerra)',
    description:
      'Se dice que Shiotsuchi no Oji no Kami enseñó a la gente el arte de fabricar sal. Las deidades coveneradas Takemikazuchi no Kami y Futsunushi no Kami son los dioses guerreros enviados a Izumo en el mito de la "Cesión de la Tierra", y también se dice que participaron en la pacificación de la región de Tohoku.',
  },
  kotohiragu: {
    category: 'Deidad mitológica (dios del mar)',
    description:
      'Se dice que Omononushi no Kami representa el "nigi-mitama" —el aspecto apacible y benevolente— de Okuninushi. Como dios del mar, ha recibido durante siglos una profunda devoción de quienes se dedican a la pesca y al transporte marítimo.',
  },
  'usa-jingu': {
    category: 'Figura histórica deificada (dios de la fortuna militar)',
    description:
      'Hachiman Okami es considerado el espíritu divino del 15.º emperador, Ojin. Venerado como dios del éxito militar, fue especialmente reverenciado en la era de los samuráis, y durante el período de sincretismo sintoísta-budista también se le conoció como "Hachiman Daibosatsu".',
    chant: {
      title: 'Título divino',
      text: 'Namu Hachiman Daibosatsu',
      note: 'Un canto que se extendió durante el período de sincretismo sintoísta-budista, invocado según la tradición por numerosos guerreros, entre ellos Minamoto no Yoshitsune, antes de la batalla.',
    },
  },
  samuhara: {
    category: 'Deidades mitológicas (las tres deidades creadoras)',
    description:
      'Según el Kojiki, estas tres deidades fueron las primeras en aparecer en el amanecer de la creación. "Samuhara" funciona como un carácter sagrado colectivo para las tres, transmitido durante generaciones como protección contra la mala suerte.',
    chant: {
      title: 'Carácter sagrado',
      text: 'Samuhara',
      note: 'Se cree que posee el poder de ahuyentar la mala suerte; este carácter especial habría sido llevado por los soldados que partían a la guerra. El carácter original no puede mostrarse en la mayoría de los ordenadores o teléfonos, por lo que aquí se representa en katakana por comodidad.',
    },
  },
};
