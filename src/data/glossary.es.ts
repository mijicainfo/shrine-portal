export interface GlossaryTerm {
  term: string;
  icon: string;
  reading: string;
  category: string;
  description: string;
}

export const glossaryTermsEs: GlossaryTerm[] = [
  {
    term: 'Jinja',
    icon: '⛩️',
    reading: '神社 / jinja',
    category: 'Sufijos de Nombres de Santuarios',
    description:
      'El nombre más básico y general para referirse a un lugar donde se venera a un kami. Términos como "Jingu" o "Taisha" son, en un sentido amplio, también tipos de jinja; simplemente difieren en el shago (la forma de denominarlos).',
  },
  {
    term: 'Jingu',
    icon: '👑',
    reading: '神宮 / jingū',
    category: 'Sufijos de Nombres de Santuarios',
    description:
      'Un shago que se emplea en santuarios con vínculos especialmente profundos con la familia imperial. Se ve con frecuencia en santuarios que veneran a deidades ancestrales imperiales o a emperadores fallecidos, como Ise Jingu (Amaterasu Omikami) o Meiji Jingu (el emperador Meiji). Por costumbre, al decir simplemente "Jingu" a menudo se hace referencia a Ise Jingu en particular.',
  },
  {
    term: 'Taisha',
    icon: '🏯',
    reading: '大社 / taisha',
    category: 'Sufijos de Nombres de Santuarios',
    description:
      'Un shago usado tradicionalmente para santuarios de gran tamaño y con una devoción especialmente arraigada. Antes de la Segunda Guerra Mundial, solo Izumo Taisha empleaba oficialmente este nombre, pero tras la guerra, otros santuarios prominentes de todo el país —como Suwa Taisha o Sumiyoshi Taisha— comenzaron también a adoptar el título de "Taisha".',
  },
  {
    term: 'Gu',
    icon: '👑',
    reading: '宮 / gū',
    category: 'Sufijos de Nombres de Santuarios',
    description:
      'Al igual que "Jingu", es un shago que se emplea a menudo en santuarios vinculados a la familia imperial o que veneran a una figura histórica deificada. Ejemplos de ello son Nikko Toshogu, que venera a Tokugawa Ieyasu, o los santuarios Tenmangu descritos más abajo.',
  },
  {
    term: 'Hachimangu',
    icon: '🏹',
    reading: '八幡宮 / hachimangū',
    category: 'Sufijos de Nombres de Santuarios',
    description:
      'Un santuario que venera a Hachiman, conocido como el dios de la fortuna militar y de la victoria. Se dice que existen más de 40.000 en todo Japón, lo que lo convierte en el linaje de santuarios más numeroso del país. Tsurugaoka Hachimangu es un ejemplo representativo, al igual que Usa Jingu que, pese a ser el santuario principal de todos los Hachimangu, lleva el nombre de "Jingu" en lugar de "Hachimangu".',
  },
  {
    term: 'Tenmangu / Tenjin',
    icon: '📚',
    reading: '天満宮・天神 / tenmangū, tenjin',
    category: 'Sufijos de Nombres de Santuarios',
    description:
      'Un santuario que venera a Sugawara no Michizane, deificado como "Tenjin-sama", el dios del saber y los estudios. Dazaifu Tenmangu y Kitano Tenmangu son especialmente famosos, y durante la temporada de exámenes reciben una gran afluencia de visitantes que oran por el éxito académico.',
  },
  {
    term: 'Inari Jinja',
    icon: '🦊',
    reading: '稲荷神社 / inari jinja',
    category: 'Sufijos de Nombres de Santuarios',
    description:
      'Un santuario que venera a Inari, la deidad de la abundancia de los cinco cereales y de la prosperidad comercial. Se caracteriza por las estatuas de zorro (kitsune), consideradas los mensajeros (shinshi) de la deidad, y por los "Senbon Torii", las hileras de torii bermellón. Fushimi Inari Taisha es su santuario principal.',
  },
  {
    term: 'Shinto',
    icon: '⛩️',
    reading: '神道 / shintō',
    category: 'Sintoísmo',
    description:
      'La fe autóctona de Japón. No tiene un fundador ni escrituras específicas, y se caracteriza por venerar como kami los propios fenómenos naturales —montañas, mar, viento y lluvia— así como a los antepasados, valorando la pureza y la armonía con la naturaleza. Más que una religión que se «cree o no se cree», como ocurre con el budismo, se ha transmitido como una costumbre y una cultura arraigadas en la vida cotidiana.',
  },
  {
    term: 'Shinbutsu Shugo / Shinbutsu Bunri',
    icon: '☯️',
    reading: '神仏習合・神仏分離 / shinbutsu shūgō, shinbutsu bunri',
    category: 'Sintoísmo',
    description:
      'El sintoísmo y el budismo se fueron fusionando a lo largo de los siglos, hasta el punto de que había budas venerados en santuarios y torii en templos budistas; a este estado se le llama «shinbutsu shūgō». El edicto de separación del sintoísmo y el budismo (shinbutsu bunri), promulgado en 1868, el primer año de la era Meiji, separó institucionalmente santuarios y templos, aunque hoy en día todavía pueden verse en muchos santuarios vestigios de aquella antigua unión.',
  },
  {
    term: 'Ujiko',
    icon: '🏘️',
    reading: '氏子 / ujiko',
    category: 'Sintoísmo',
    description:
      'Las personas que viven en los alrededores del santuario donde se venera a su ujigami y que sostienen ese santuario dentro de la comunidad. A menudo participan en la organización de festivales y en el mantenimiento del santuario, actuando como el nexo entre el santuario y la comunidad local.',
  },
  {
    term: 'Sukeisha',
    icon: '🙏',
    reading: '崇敬者 / sūkeisha',
    category: 'Sintoísmo',
    description:
      'A diferencia de los ujiko, no viven necesariamente en un área concreta, pero veneran un santuario determinado y acuden a él —a menudo desde lejos— para visitarlo y hacer ofrendas. Cuanto más famoso es un santuario a nivel nacional, mayor suele ser el número de sūkeisha que tiene.',
  },
  {
    term: 'Kegare / Harai',
    icon: '💧',
    reading: '穢れ・祓い / kegare, harai',
    category: 'Sintoísmo',
    description:
      'En el sintoísmo, se denomina «kegare» a la impureza que se cree que se va acumulando en el cuerpo y el espíritu a lo largo de la vida cotidiana, y «harai» al acto de eliminarla. El lavado ritual en el temizuya, el paso a través del chinowa (aro de juncos) o los ritos de purificación son todos ellos formas de purificar esta kegare.',
  },
  {
    term: 'Naorai',
    icon: '🍶',
    reading: '直会 / naorai',
    category: 'Sintoísmo',
    description:
      'Un rito celebrado tras una ceremonia sintoísta, en el que los participantes comparten el sake sagrado (omiki) y las ofrendas de comida (shinsen) presentadas al kami. Compartir la comida con el kami simboliza recibir una parte de su poder.',
  },
  {
    term: 'Torii',
    icon: '⛩️',
    reading: '鳥居 / torii',
    category: 'Arquitectura y Recinto',
    description:
      'Un pórtico que marca el límite entre el mundo sagrado y el mundo cotidiano. Situado a la entrada de un santuario, atravesarlo se considera un paso hacia el espacio sagrado del kami.',
  },
  {
    term: 'Sando',
    icon: '🚶',
    reading: '参道 / sandō',
    category: 'Arquitectura y Recinto',
    description:
      'El camino de acceso desde el torii hasta el edificio principal. Su centro se considera la ruta propia del kami, por lo que, por cortesía, los visitantes suelen caminar ligeramente hacia un lado.',
  },
  {
    term: 'Honden',
    icon: '🏛️',
    reading: '本殿 / honden',
    category: 'Arquitectura y Recinto',
    description:
      'El edificio más sagrado de un santuario, donde reside el kami. En la mayoría de los santuarios, los visitantes comunes no pueden entrar al honden.',
  },
  {
    term: 'Haiden',
    icon: '🛕',
    reading: '拝殿 / haiden',
    category: 'Arquitectura y Recinto',
    description:
      'El salón donde los visitantes acuden a presentar sus respetos, situado frente al honden. Aquí es donde realmente se ofrece una moneda y se juntan las palmas de las manos.',
  },
  {
    term: 'Temizuya',
    icon: '💧',
    reading: '手水舎 / temizuya, chōzuya',
    category: 'Arquitectura y Recinto',
    description:
      'Un pabellón con agua para purificar las manos y la boca antes de orar. La forma correcta es tomar agua con el cucharón, enjuagar ambas manos y la boca, y purificar así el cuerpo y la mente antes de acercarse al edificio principal.',
  },
  {
    term: 'Shimenawa',
    icon: '🪢',
    reading: '注連縄 / shimenawa',
    category: 'Arquitectura y Recinto',
    description:
      'Una cuerda que marca el límite entre lo sagrado y lo cotidiano. Se dice que, al rodear lugares y árboles sagrados, actúa como barrera contra la impureza.',
  },
  {
    term: 'Komainu',
    icon: '🦁',
    reading: '狛犬 / komainu',
    category: 'Arquitectura y Recinto',
    description:
      'Un par de estatuas de perro-león que suelen colocarse frente al salón del santuario. Actúan como guardianes que ahuyentan el mal, y normalmente una tiene la boca abierta ("a") y la otra cerrada ("un").',
  },
  {
    term: 'Chinju no Mori',
    icon: '🌲',
    reading: '鎮守の杜 / chinju no mori',
    category: 'Arquitectura y Recinto',
    description:
      'El bosque sagrado que rodea o linda con el recinto de un santuario. Protegidos durante siglos como morada del kami, estos bosques conservan una vegetación exuberante incluso en pleno centro de las ciudades.',
  },
  {
    term: 'Nirei Nihakushu Ichirei (Dos Reverencias, Dos Palmadas, Una Reverencia)',
    icon: '🙏',
    reading: '二礼二拍手一礼 / nirei nihakushu ichirei',
    category: 'Etiqueta de Visita',
    description:
      'La forma habitual de orar en la mayoría de los santuarios: dos reverencias profundas, dos palmadas y una última reverencia. Algunos santuarios siguen una forma distinta.',
  },
  {
    term: 'Hatsuho-ryo',
    icon: '💴',
    reading: '初穂料 / hatsuho-ryō',
    category: 'Etiqueta de Visita',
    description:
      'La ofrenda o tarifa que se entrega a un santuario. El término proviene de la costumbre de ofrecer el primer arroz cosechado del año (hatsuho). Se utiliza para oraciones, bendiciones y el goshuin.',
  },
  {
    term: 'Goshuin',
    icon: '🖋️',
    reading: '御朱印 / goshuin',
    category: 'Etiqueta de Visita',
    description:
      'Un sello que se entrega como prueba de la visita, con el nombre del santuario, un sello y la fecha. Originalmente era prueba de una ofrenda de sutras; hoy es habitual llevar un goshuincho (cuaderno de sellos) y recibirlo en la oficina del santuario.',
  },
  {
    term: 'Goshintai',
    icon: '✨',
    reading: '御神体 / goshintai',
    category: 'Etiqueta de Visita',
    description:
      'El objeto físico —un espejo, una espada, una montaña o una piedra— en el que se cree que reside el kami. Guardado en lo más profundo del honden, casi nunca es visto por los visitantes comunes.',
  },
  {
    term: 'Yaoyorozu no Kami',
    icon: '🌌',
    reading: '八百万の神 / yaoyorozu no kami',
    category: 'Deidades y Fe',
    description:
      'Un término colectivo para los innumerables dioses venerados en el sintoísmo. Refleja la antigua cosmovisión religiosa de Japón, en la que fenómenos naturales, plantas, animales e incluso figuras históricas pueden ser venerados como kami.',
  },
  {
    term: 'Ujigami',
    icon: '🏘️',
    reading: '氏神 / ujigami',
    category: 'Deidades y Fe',
    description:
      'Originalmente se refería a la deidad ancestral de un clan; hoy en día suele significar el kami protector del lugar donde uno vive, es decir, la "deidad local" de cada persona.',
  },
  {
    term: 'Ubusunagami',
    icon: '👶',
    reading: '産土神 / ubusunagami',
    category: 'Deidades y Fe',
    description:
      'La deidad protectora de la tierra donde nació una persona. Se cree que vela por ella durante toda su vida, y es la deidad asociada a costumbres como la visita al santuario tras el nacimiento (omiyamairi).',
  },
  {
    term: 'Guji',
    icon: '👘',
    reading: '宮司 / gūji',
    category: 'Deidades y Fe',
    description:
      'El sacerdote sintoísta de mayor rango en un santuario determinado, encargado de dirigir los ritos y supervisar el santuario en su conjunto.',
  },
  {
    term: 'Shikinen Sengu',
    icon: '🏗️',
    reading: '式年遷宮 / shikinen sengū',
    category: 'Eventos y Otros',
    description:
      'La práctica de reconstruir periódicamente las estructuras de un santuario y trasladar al kami a ellas. En Ise Jingu ocurre cada 20 años, y también sirve para transmitir técnicas y tradiciones arquitectónicas a la siguiente generación.',
  },
  {
    term: 'Kannazuki / Kamiarizuki',
    icon: '🗓️',
    reading: '神無月・神在月 / kannazuki, kamiarizuki',
    category: 'Eventos y Otros',
    description:
      'Nombres del antiguo décimo mes lunar. Como se dice que todos los kami de Japón se reúnen en Izumo durante ese mes, en la región de Izumo se le llama "Kamiarizuki" ("mes con los dioses"), y en el resto del país, "Kannazuki" ("mes sin dioses").',
  },
  {
    term: 'Reitaisai',
    icon: '🎊',
    reading: '例大祭 / reitaisai',
    category: 'Eventos y Otros',
    description:
      'El festival anual más importante de un santuario, celebrado en una fecha fija cada año. Suele estar vinculado a una fecha relacionada con la fundación del santuario o con su kami principal, y atrae a grandes multitudes.',
  },
  {
    term: 'Kagura-den',
    icon: '🕺',
    reading: '神楽殿 / kagura-den',
    category: 'Arquitectura y Recinto',
    description:
      'El edificio donde se representa el kagura, danza y música ofrecidas al kami. En ocasiones también se celebran allí bodas y oraciones, y suele estar situado cerca del haiden en muchos santuarios.',
  },
  {
    term: 'Chigi / Katsuogi',
    icon: '🏯',
    reading: '千木・鰹木 / chigi, katsuogi',
    category: 'Arquitectura y Recinto',
    description:
      'Los chigi son los maderos decorativos que se cruzan en ambos extremos del tejado del honden, mientras que los katsuogi son los adornos en forma de tronco colocados horizontalmente sobre el tejado. Su forma varía según el santuario, y se dice que puede indicar el género de la deidad venerada.',
  },
  {
    term: 'Tamagaki',
    icon: '🚧',
    reading: '玉垣 / tamagaki',
    category: 'Arquitectura y Recinto',
    description:
      'La cerca o valla que rodea el honden o el área sagrada de un santuario. Funciona como límite entre lo sagrado y lo cotidiano, y en ocasiones lleva grabados los nombres de las personas que hicieron donaciones.',
  },
  {
    term: 'Shamusho',
    icon: '🏢',
    reading: '社務所 / shamusho',
    category: 'Arquitectura y Recinto',
    description:
      'El edificio donde se gestionan los asuntos administrativos de un santuario. El goshuin, la entrega de amuletos y la recepción de solicitudes de oración suelen tramitarse aquí o en la oficina de entrega (juyosho).',
  },
  {
    term: 'Goshinboku',
    icon: '🌳',
    reading: '御神木 / goshinboku',
    category: 'Arquitectura y Recinto',
    description:
      'Un árbol sagrado dentro del recinto del santuario en el que se cree que reside un kami. Suele estar rodeado de una shimenawa, y no es raro encontrar ejemplares centenarios de gran tamaño.',
  },
  {
    term: 'Saisen',
    icon: '🪙',
    reading: '賽銭 / saisen',
    category: 'Etiqueta de Visita',
    description:
      'El dinero que se deposita en la caja de ofrendas (saisen-bako) durante la visita. Se ofrece como muestra de gratitud o para expresar un deseo al kami; no existe una cantidad fija, aunque algunas personas prefieren la moneda de 5 yenes por su juego de palabras con "en" (vínculo o destino).',
  },
  {
    term: 'Seichu',
    icon: '🎯',
    reading: '正中 / seichū',
    category: 'Etiqueta de Visita',
    description:
      'La línea central del sando, el camino de acceso al santuario. Se considera la ruta reservada al kami, por lo que la etiqueta correcta es evitarla y caminar ligeramente hacia un lado.',
  },
  {
    term: 'Tamagushi Hoten',
    icon: '🌿',
    reading: '玉串奉奠 / tamagushi hōten',
    category: 'Etiqueta de Visita',
    description:
      'El acto ritual, realizado durante oraciones y ceremonias oficiales, de ofrecer al kami un tamagushi: una rama de sakaki con tiras de papel shide. Generalmente se lleva a cabo siguiendo las indicaciones de un sacerdote sintoísta.',
  },
  {
    term: 'Shinshoku',
    icon: '📿',
    reading: '神職 / shinshoku',
    category: 'Deidades y Fe',
    description:
      'El término general para las personas que sirven en un santuario y llevan a cabo ritos y ceremonias. Mientras que gūji designa al sacerdote de mayor rango de un santuario en concreto, shinshoku se usa para referirse a los sacerdotes sintoístas en general.',
  },
  {
    term: 'Miko',
    icon: '💃',
    reading: '巫女 / miko',
    category: 'Deidades y Fe',
    description:
      'Una mujer que sirve en el santuario, participando en las ofrendas de kagura, asistiendo a los sacerdotes y entregando amuletos y goshuin. Es conocida por su atuendo tradicional de kimono blanco (byakue) y hakama rojo (hibakama).',
  },
  {
    term: 'Saijin',
    icon: '🕊️',
    reading: '祭神 / saijin',
    category: 'Deidades y Fe',
    description:
      'La deidad venerada en un santuario determinado. En los santuarios que veneran a varias deidades, se llama shusaijin a la que ocupa el lugar central.',
  },
  {
    term: 'Shinshi',
    icon: '🐴',
    reading: '神使 / shinshi',
    category: 'Deidades y Fe',
    description:
      'El animal considerado mensajero de un kami. Por ejemplo, el zorro en los santuarios Inari, el buey en los Tenman o el mono en los Hie: cada santuario transmite su propio shinshi.',
  },
  {
    term: 'Sessha / Massha',
    icon: '⛩️',
    reading: '摂社・末社 / sessha, massha',
    category: 'Deidades y Fe',
    description:
      'Los pequeños santuarios subordinados situados dentro o cerca del recinto del santuario principal. Suelen albergar deidades estrechamente relacionadas con el kami principal, o divinidades veneradas en ese lugar desde tiempos antiguos.',
  },
  {
    term: 'Hatsumode',
    icon: '🎍',
    reading: '初詣 / hatsumōde',
    category: 'Eventos y Otros',
    description:
      'La costumbre de visitar un santuario o templo por primera vez en el nuevo año para orar por la seguridad y la felicidad durante todo el año. Muchos santuarios reciben una gran afluencia de visitantes desde la víspera de Año Nuevo hasta los primeros tres días de enero.',
  },
  {
    term: 'Shichi-Go-San',
    icon: '🎏',
    reading: '七五三 / shichi-go-san',
    category: 'Eventos y Otros',
    description:
      'La celebración del crecimiento de los niños de 3, 5 y 7 años mediante una visita al santuario. Suele tener lugar alrededor del 15 de noviembre, y es habitual ver por todo el país a familias ataviadas con trajes de gala para la ocasión.',
  },
  {
    term: 'Mikoshi',
    icon: '🏮',
    reading: '神輿 / mikoshi',
    category: 'Eventos y Otros',
    description:
      'Un vehículo con forma de palanquín que transporta el espíritu del kami y se pasea por las calles durante los festivales. Se cree que, al recorrer la ciudad a hombros de los porteadores, el poder del kami se extiende por toda la zona.',
  },
  {
    term: 'Chinowa Kuguri',
    icon: '⭕',
    reading: '茅の輪くぐり / chinowa kuguri',
    category: 'Eventos y Otros',
    description:
      'El ritual de atravesar un gran aro tejido con cañas (kaya) para purificarse de las impurezas acumuladas durante medio año. Se celebra en muchos santuarios a finales de junio, durante el rito conocido como Nagoshi no Harae.',
  },
  {
    term: 'Omamori',
    icon: '🧧',
    reading: '御守り / omamori',
    category: 'Amuletos y Talismanes',
    description:
      'Un amuleto imbuido con la bendición de un kami para proteger a quien lo porta y ayudar a cumplir sus deseos. Se entregan muchos tipos distintos, como los dedicados a la salud, al éxito académico o al buen amor (enmusubi).',
  },
  {
    term: 'Ema',
    icon: '📝',
    reading: '絵馬 / ema',
    category: 'Amuletos y Talismanes',
    description:
      'Una placa de madera en la que se escribe un deseo o un mensaje de agradecimiento antes de ofrecerla en el santuario. Se dice que es una versión simplificada de la antigua costumbre de ofrecer un caballo vivo al kami.',
  },
  {
    term: 'Omikuji',
    icon: '🎋',
    reading: 'おみくじ / omikuji',
    category: 'Amuletos y Talismanes',
    description:
      'Una tira de papel con la que se adivina la buena o mala fortuna. Además del nivel de suerte (gran fortuna, mala fortuna, etc.), incluye consejos por categorías como el amor, el trabajo o la salud, y suele atarse a la rama de un árbol dentro del recinto.',
  },
  {
    term: 'Ofuda',
    icon: '📄',
    reading: '御札 / ofuda',
    category: 'Amuletos y Talismanes',
    description:
      'Un talismán de papel o madera en el que se cree que reside el poder divino de un kami. Se suele colocar en un kamidana (altar doméstico) o en un lugar alto de la casa, con la intención de proteger el hogar o favorecer la prosperidad, entre otros fines.',
  },
  {
    term: 'Hamaya',
    icon: '🏹',
    reading: '破魔矢 / hamaya',
    category: 'Amuletos y Talismanes',
    description:
      'Una flecha decorativa que se cree que ahuyenta el mal y la mala suerte. Especialmente popular como amuleto de Año Nuevo, suele exhibirse en un lugar alto del hogar o cerca de la entrada.',
  },
];

export const glossaryCategoriesEs = [...new Set(glossaryTermsEs.map((t) => t.category))];
