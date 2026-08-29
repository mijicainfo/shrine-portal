import type { JuyohinItem } from './juyohin';

export const juyohinItemsEs: JuyohinItem[] = [
  {
    id: 'ofuda',
    name: 'Ofuda (Talismán para el Hogar)',
    reading: '御札 / ofuda, shinsatsu',
    theme: 'indigo',
    summary: 'Un talismán consagrado en el hogar, imbuido con el poder del kami.',
    description:
      'Colocado en un altar doméstico (kamidana), el ofuda funciona como un amuleto protector para el hogar. Muchas familias consagran el ofuda del Gran Santuario de Ise (jingu taima) junto con uno de su santuario local (ujigami).',
    howTo:
      'Si tienes un kamidana, colócalo en el centro. Si no, móntalo o colócalo en un lugar luminoso y limpio, por encima del nivel de los ojos, orientado hacia el sur o el este. Reemplázalo por uno nuevo cada año.',
    priceRange: 'Aproximadamente ¥500–1.000',
    link: { href: '/es/kamidana/', label: 'Leer la guía del altar doméstico' },
  },
  {
    id: 'omamori',
    name: 'Omamori (Amuleto)',
    reading: 'お守り / omamori',
    theme: 'vermillion',
    summary: 'El tipo de amuleto más popular, que se lleva encima para recibir la protección del kami.',
    description:
      'Una pequeña bolsa que contiene un talismán interior (naifu) imbuido con el poder del kami. Los omamori existen en muchas variedades según su propósito: buenas relaciones, parto seguro, seguridad vial, éxito académico, salud y longevidad, entre otros.',
    howTo:
      'Llévalo en una bolsa, en la cartera o contigo. Se considera de mala educación abrirlo para mirar en su interior. Pasado aproximadamente un año, es costumbre devolverlo al santuario donde lo recibiste (o a uno cercano) y recibir uno nuevo.',
    priceRange: 'Aproximadamente ¥500–1.000',
  },
  {
    id: 'goshuin',
    name: 'Goshuin (Sello del Santuario)',
    reading: '御朱印 / goshuin',
    theme: 'vermillion',
    summary: 'Un sello especial que certifica la visita, con el nombre del santuario, su sello y la fecha.',
    description:
      'Originalmente se entregaba como prueba de una ofrenda de sutras; hoy se da simplemente como recuerdo de una visita. Cada santuario tiene un sello distintivo propio, y algunos ofrecen caligrafía de temporada. Algunos se trazan a mano en el momento ("kakioki" designa la versión preescrita que se recibe en su lugar).',
    howTo:
      'Lleva un goshuincho (libreta de sellos) y solicita el goshuin en la oficina del santuario. Es costumbre recibirlo después de presentar tus respetos. La tinta puede estar aún húmeda, así que déjala secar un momento antes de cerrar la libreta.',
    priceRange: 'Aproximadamente ¥300–500',
  },
  {
    id: 'goshuincho',
    name: 'Goshuincho (Libreta de Sellos)',
    reading: '御朱印帳 / goshuinchō',
    theme: 'gold',
    summary: 'Una libreta dedicada a coleccionar goshuin: tu compañera para registrar cada visita.',
    description:
      'Suele ser una libreta plegada en acordeón, a menudo disponible con diseños de portada exclusivos de cada santuario, lo que hace que elegir tu favorita sea parte de la diversión. La mayoría de las oficinas de los santuarios las venden.',
    howTo:
      'Lleva tu goshuincho contigo y entrégala en la oficina del santuario al solicitar un goshuin. Algunas personas prefieren usar libretas separadas para santuarios sintoístas y templos budistas.',
    priceRange: 'Aproximadamente ¥1.500–3.000',
  },
  {
    id: 'hamaya',
    name: 'Hamaya (Flecha Contra el Mal)',
    reading: '破魔矢 / hamaya',
    theme: 'indigo',
    summary: 'Una flecha decorativa a la que se atribuye el poder de alejar el mal y la mala suerte.',
    description:
      'Con raíces en un antiguo ritual de tiro con arco de Año Nuevo, el hamaya se entrega hoy como una flecha decorativa. Se dice que disipa la mala suerte del hogar o la oficina y atrae la buena fortuna, por lo que es especialmente popular como amuleto de Año Nuevo.',
    howTo:
      'Exhíbela en un lugar elevado del hogar, como junto a la entrada o en la alcoba tokonoma, orientada hacia la dirección auspiciosa del año o hacia el noreste, tradicionalmente considerado desfavorable. Pasado un año, devuélvela a un santuario para que sea quemada ritualmente.',
    priceRange: 'Aproximadamente ¥1.000–3.000',
  },
  {
    id: 'ema',
    name: 'Ema (Placa Votiva)',
    reading: '絵馬 / ema',
    theme: 'vermillion',
    summary: 'Una placa de madera pentagonal en la que los visitantes escriben un deseo y lo dedican al kami.',
    description:
      'Se dice que se originó en la antigua costumbre de ofrecer un caballo vivo al kami como oración, simplificada más tarde en la ofrenda de una placa de madera pintada con un caballo. Muchos santuarios ofrecen diseños adaptados a deseos específicos, como el éxito académico o el amor.',
    howTo:
      'Escribe tu deseo y tu nombre en el reverso, y luego cuélgala en el soporte para ema dentro del recinto del santuario. Se dice que ayuda ser específico sobre lo que deseas.',
    priceRange: 'Aproximadamente ¥500–1.000',
  },
  {
    id: 'omikuji',
    name: 'Omikuji (Papel de la Fortuna)',
    reading: 'おみくじ / omikuji',
    theme: 'gold',
    summary: 'Una fina tira de papel con la fortuna que ofrece un mensaje del kami.',
    description:
      'Además de una clasificación general de la suerte (desde gran bendición hasta gran maldición), los omikuji incluyen consejos sobre temas concretos como el amor, el trabajo y la salud. Más que fijarse en si el resultado es bueno o malo, lo mejor es tomar el mensaje como una guía para la vida diaria.',
    howTo:
      'Puedes llevártelo a casa o atarlo en el lugar designado dentro del recinto del santuario. Llevártelo y releerlo de vez en cuando también es una buena forma de tener presente su consejo.',
    priceRange: 'Aproximadamente ¥100–300',
  },
  {
    id: 'kumade',
    name: 'Kumade (Rastrillo de la Suerte)',
    reading: '熊手 / kumade',
    theme: 'vermillion',
    summary: 'Un rastrillo decorativo que se dice que "recoge" la buena fortuna.',
    description:
      'Inspirado en un rastrillo agrícola, el kumade es un amuleto de la suerte basado en el juego de palabras de "recoger" fortuna y prosperidad, y es especialmente apreciado como amuleto para el éxito en los negocios. Es célebremente repartido en los mercados de Tori-no-Ichi ("Feria del Gallo") de noviembre.',
    howTo:
      'Exhíbelo en un lugar elevado y visible desde el exterior, como una entrada o un escaparate, orientado hacia el acceso. La tradición dice que debes cambiarlo cada año por uno ligeramente más grande.',
    priceRange: 'Desde varios miles de yenes, según el tamaño',
  },
  {
    id: 'omiki',
    name: 'Omiki (Sake Sagrado)',
    reading: '御神酒 / omiki',
    theme: 'gold',
    summary: 'Sake sagrado ofrecido primero al kami y luego compartido entre los fieles.',
    description:
      'Una de las ofrendas rituales de alimentos (shinsen) presentadas al kami, que a veces se reparte en festivales o después de una ceremonia de oración. Se cree que beber lo que fue ofrecido al kami permite compartir la bendición de la deidad.',
    howTo:
      'Es costumbre compartirlo entre los miembros de la familia, u ofrecerlo en el altar doméstico antes de beberlo.',
    priceRange: 'Generalmente se reparte en festivales o ceremonias de oración',
  },
];
