export interface GlossaryTerm {
  term: string;
  reading: string;
  category: string;
  description: string;
}

export const glossaryTermsEs: GlossaryTerm[] = [
  {
    term: 'Torii',
    reading: '鳥居 / torii',
    category: 'Arquitectura y Recinto',
    description:
      'Un pórtico que marca el límite entre el mundo sagrado y el mundo cotidiano. Situado a la entrada de un santuario, atravesarlo se considera un paso hacia el espacio sagrado del kami.',
  },
  {
    term: 'Sando',
    reading: '参道 / sandō',
    category: 'Arquitectura y Recinto',
    description:
      'El camino de acceso desde el torii hasta el edificio principal. Su centro se considera la ruta propia del kami, por lo que, por cortesía, los visitantes suelen caminar ligeramente hacia un lado.',
  },
  {
    term: 'Honden',
    reading: '本殿 / honden',
    category: 'Arquitectura y Recinto',
    description:
      'El edificio más sagrado de un santuario, donde reside el kami. En la mayoría de los santuarios, los visitantes comunes no pueden entrar al honden.',
  },
  {
    term: 'Haiden',
    reading: '拝殿 / haiden',
    category: 'Arquitectura y Recinto',
    description:
      'El salón donde los visitantes acuden a presentar sus respetos, situado frente al honden. Aquí es donde realmente se ofrece una moneda y se juntan las palmas de las manos.',
  },
  {
    term: 'Temizuya',
    reading: '手水舎 / temizuya, chōzuya',
    category: 'Arquitectura y Recinto',
    description:
      'Un pabellón con agua para purificar las manos y la boca antes de orar. La forma correcta es tomar agua con el cucharón, enjuagar ambas manos y la boca, y purificar así el cuerpo y la mente antes de acercarse al edificio principal.',
  },
  {
    term: 'Shimenawa',
    reading: '注連縄 / shimenawa',
    category: 'Arquitectura y Recinto',
    description:
      'Una cuerda que marca el límite entre lo sagrado y lo cotidiano. Se dice que, al rodear lugares y árboles sagrados, actúa como barrera contra la impureza.',
  },
  {
    term: 'Komainu',
    reading: '狛犬 / komainu',
    category: 'Arquitectura y Recinto',
    description:
      'Un par de estatuas de perro-león que suelen colocarse frente al salón del santuario. Actúan como guardianes que ahuyentan el mal, y normalmente una tiene la boca abierta ("a") y la otra cerrada ("un").',
  },
  {
    term: 'Chinju no Mori',
    reading: '鎮守の杜 / chinju no mori',
    category: 'Arquitectura y Recinto',
    description:
      'El bosque sagrado que rodea o linda con el recinto de un santuario. Protegidos durante siglos como morada del kami, estos bosques conservan una vegetación exuberante incluso en pleno centro de las ciudades.',
  },
  {
    term: 'Nirei Nihakushu Ichirei (Dos Reverencias, Dos Palmadas, Una Reverencia)',
    reading: '二礼二拍手一礼 / nirei nihakushu ichirei',
    category: 'Etiqueta de Visita',
    description:
      'La forma habitual de orar en la mayoría de los santuarios: dos reverencias profundas, dos palmadas y una última reverencia. Algunos santuarios siguen una forma distinta.',
  },
  {
    term: 'Hatsuho-ryo',
    reading: '初穂料 / hatsuho-ryō',
    category: 'Etiqueta de Visita',
    description:
      'La ofrenda o tarifa que se entrega a un santuario. El término proviene de la costumbre de ofrecer el primer arroz cosechado del año (hatsuho). Se utiliza para oraciones, bendiciones y el goshuin.',
  },
  {
    term: 'Goshuin',
    reading: '御朱印 / goshuin',
    category: 'Etiqueta de Visita',
    description:
      'Un sello que se entrega como prueba de la visita, con el nombre del santuario, un sello y la fecha. Originalmente era prueba de una ofrenda de sutras; hoy es habitual llevar un goshuincho (cuaderno de sellos) y recibirlo en la oficina del santuario.',
  },
  {
    term: 'Goshintai',
    reading: '御神体 / goshintai',
    category: 'Etiqueta de Visita',
    description:
      'El objeto físico —un espejo, una espada, una montaña o una piedra— en el que se cree que reside el kami. Guardado en lo más profundo del honden, casi nunca es visto por los visitantes comunes.',
  },
  {
    term: 'Yaoyorozu no Kami',
    reading: '八百万の神 / yaoyorozu no kami',
    category: 'Deidades y Fe',
    description:
      'Un término colectivo para los innumerables dioses venerados en el sintoísmo. Refleja la antigua cosmovisión religiosa de Japón, en la que fenómenos naturales, plantas, animales e incluso figuras históricas pueden ser venerados como kami.',
  },
  {
    term: 'Ujigami',
    reading: '氏神 / ujigami',
    category: 'Deidades y Fe',
    description:
      'Originalmente se refería a la deidad ancestral de un clan; hoy en día suele significar el kami protector del lugar donde uno vive, es decir, la "deidad local" de cada persona.',
  },
  {
    term: 'Ubusunagami',
    reading: '産土神 / ubusunagami',
    category: 'Deidades y Fe',
    description:
      'La deidad protectora de la tierra donde nació una persona. Se cree que vela por ella durante toda su vida, y es la deidad asociada a costumbres como la visita al santuario tras el nacimiento (omiyamairi).',
  },
  {
    term: 'Guji',
    reading: '宮司 / gūji',
    category: 'Deidades y Fe',
    description:
      'El sacerdote sintoísta de mayor rango en un santuario determinado, encargado de dirigir los ritos y supervisar el santuario en su conjunto.',
  },
  {
    term: 'Shikinen Sengu',
    reading: '式年遷宮 / shikinen sengū',
    category: 'Eventos y Otros',
    description:
      'La práctica de reconstruir periódicamente las estructuras de un santuario y trasladar al kami a ellas. En Ise Jingu ocurre cada 20 años, y también sirve para transmitir técnicas y tradiciones arquitectónicas a la siguiente generación.',
  },
  {
    term: 'Kannazuki / Kamiarizuki',
    reading: '神無月・神在月 / kannazuki, kamiarizuki',
    category: 'Eventos y Otros',
    description:
      'Nombres del antiguo décimo mes lunar. Como se dice que todos los kami de Japón se reúnen en Izumo durante ese mes, en la región de Izumo se le llama "Kamiarizuki" ("mes con los dioses"), y en el resto del país, "Kannazuki" ("mes sin dioses").',
  },
  {
    term: 'Reitaisai',
    reading: '例大祭 / reitaisai',
    category: 'Eventos y Otros',
    description:
      'El festival anual más importante de un santuario, celebrado en una fecha fija cada año. Suele estar vinculado a una fecha relacionada con la fundación del santuario o con su kami principal, y atrae a grandes multitudes.',
  },
  {
    term: 'Kagura-den',
    reading: '神楽殿 / kagura-den',
    category: 'Arquitectura y Recinto',
    description:
      'El edificio donde se representa el kagura, danza y música ofrecidas al kami. En ocasiones también se celebran allí bodas y oraciones, y suele estar situado cerca del haiden en muchos santuarios.',
  },
  {
    term: 'Chigi / Katsuogi',
    reading: '千木・鰹木 / chigi, katsuogi',
    category: 'Arquitectura y Recinto',
    description:
      'Los chigi son los maderos decorativos que se cruzan en ambos extremos del tejado del honden, mientras que los katsuogi son los adornos en forma de tronco colocados horizontalmente sobre el tejado. Su forma varía según el santuario, y se dice que puede indicar el género de la deidad venerada.',
  },
  {
    term: 'Tamagaki',
    reading: '玉垣 / tamagaki',
    category: 'Arquitectura y Recinto',
    description:
      'La cerca o valla que rodea el honden o el área sagrada de un santuario. Funciona como límite entre lo sagrado y lo cotidiano, y en ocasiones lleva grabados los nombres de las personas que hicieron donaciones.',
  },
  {
    term: 'Shamusho',
    reading: '社務所 / shamusho',
    category: 'Arquitectura y Recinto',
    description:
      'El edificio donde se gestionan los asuntos administrativos de un santuario. El goshuin, la entrega de amuletos y la recepción de solicitudes de oración suelen tramitarse aquí o en la oficina de entrega (juyosho).',
  },
  {
    term: 'Goshinboku',
    reading: '御神木 / goshinboku',
    category: 'Arquitectura y Recinto',
    description:
      'Un árbol sagrado dentro del recinto del santuario en el que se cree que reside un kami. Suele estar rodeado de una shimenawa, y no es raro encontrar ejemplares centenarios de gran tamaño.',
  },
  {
    term: 'Saisen',
    reading: '賽銭 / saisen',
    category: 'Etiqueta de Visita',
    description:
      'El dinero que se deposita en la caja de ofrendas (saisen-bako) durante la visita. Se ofrece como muestra de gratitud o para expresar un deseo al kami; no existe una cantidad fija, aunque algunas personas prefieren la moneda de 5 yenes por su juego de palabras con "en" (vínculo o destino).',
  },
  {
    term: 'Seichu',
    reading: '正中 / seichū',
    category: 'Etiqueta de Visita',
    description:
      'La línea central del sando, el camino de acceso al santuario. Se considera la ruta reservada al kami, por lo que la etiqueta correcta es evitarla y caminar ligeramente hacia un lado.',
  },
  {
    term: 'Tamagushi Hoten',
    reading: '玉串奉奠 / tamagushi hōten',
    category: 'Etiqueta de Visita',
    description:
      'El acto ritual, realizado durante oraciones y ceremonias oficiales, de ofrecer al kami un tamagushi: una rama de sakaki con tiras de papel shide. Generalmente se lleva a cabo siguiendo las indicaciones de un sacerdote sintoísta.',
  },
  {
    term: 'Shinshoku',
    reading: '神職 / shinshoku',
    category: 'Deidades y Fe',
    description:
      'El término general para las personas que sirven en un santuario y llevan a cabo ritos y ceremonias. Mientras que gūji designa al sacerdote de mayor rango de un santuario en concreto, shinshoku se usa para referirse a los sacerdotes sintoístas en general.',
  },
  {
    term: 'Miko',
    reading: '巫女 / miko',
    category: 'Deidades y Fe',
    description:
      'Una mujer que sirve en el santuario, participando en las ofrendas de kagura, asistiendo a los sacerdotes y entregando amuletos y goshuin. Es conocida por su atuendo tradicional de kimono blanco (byakue) y hakama rojo (hibakama).',
  },
  {
    term: 'Saijin',
    reading: '祭神 / saijin',
    category: 'Deidades y Fe',
    description:
      'La deidad venerada en un santuario determinado. En los santuarios que veneran a varias deidades, se llama shusaijin a la que ocupa el lugar central.',
  },
  {
    term: 'Shinshi',
    reading: '神使 / shinshi',
    category: 'Deidades y Fe',
    description:
      'El animal considerado mensajero de un kami. Por ejemplo, el zorro en los santuarios Inari, el buey en los Tenman o el mono en los Hie: cada santuario transmite su propio shinshi.',
  },
  {
    term: 'Sessha / Massha',
    reading: '摂社・末社 / sessha, massha',
    category: 'Deidades y Fe',
    description:
      'Los pequeños santuarios subordinados situados dentro o cerca del recinto del santuario principal. Suelen albergar deidades estrechamente relacionadas con el kami principal, o divinidades veneradas en ese lugar desde tiempos antiguos.',
  },
  {
    term: 'Hatsumode',
    reading: '初詣 / hatsumōde',
    category: 'Eventos y Otros',
    description:
      'La costumbre de visitar un santuario o templo por primera vez en el nuevo año para orar por la seguridad y la felicidad durante todo el año. Muchos santuarios reciben una gran afluencia de visitantes desde la víspera de Año Nuevo hasta los primeros tres días de enero.',
  },
  {
    term: 'Shichi-Go-San',
    reading: '七五三 / shichi-go-san',
    category: 'Eventos y Otros',
    description:
      'La celebración del crecimiento de los niños de 3, 5 y 7 años mediante una visita al santuario. Suele tener lugar alrededor del 15 de noviembre, y es habitual ver por todo el país a familias ataviadas con trajes de gala para la ocasión.',
  },
  {
    term: 'Mikoshi',
    reading: '神輿 / mikoshi',
    category: 'Eventos y Otros',
    description:
      'Un vehículo con forma de palanquín que transporta el espíritu del kami y se pasea por las calles durante los festivales. Se cree que, al recorrer la ciudad a hombros de los porteadores, el poder del kami se extiende por toda la zona.',
  },
  {
    term: 'Chinowa Kuguri',
    reading: '茅の輪くぐり / chinowa kuguri',
    category: 'Eventos y Otros',
    description:
      'El ritual de atravesar un gran aro tejido con cañas (kaya) para purificarse de las impurezas acumuladas durante medio año. Se celebra en muchos santuarios a finales de junio, durante el rito conocido como Nagoshi no Harae.',
  },
  {
    term: 'Omamori',
    reading: '御守り / omamori',
    category: 'Amuletos y Talismanes',
    description:
      'Un amuleto imbuido con la bendición de un kami para proteger a quien lo porta y ayudar a cumplir sus deseos. Se entregan muchos tipos distintos, como los dedicados a la salud, al éxito académico o al buen amor (enmusubi).',
  },
  {
    term: 'Ema',
    reading: '絵馬 / ema',
    category: 'Amuletos y Talismanes',
    description:
      'Una placa de madera en la que se escribe un deseo o un mensaje de agradecimiento antes de ofrecerla en el santuario. Se dice que es una versión simplificada de la antigua costumbre de ofrecer un caballo vivo al kami.',
  },
  {
    term: 'Omikuji',
    reading: 'おみくじ / omikuji',
    category: 'Amuletos y Talismanes',
    description:
      'Una tira de papel con la que se adivina la buena o mala fortuna. Además del nivel de suerte (gran fortuna, mala fortuna, etc.), incluye consejos por categorías como el amor, el trabajo o la salud, y suele atarse a la rama de un árbol dentro del recinto.',
  },
  {
    term: 'Ofuda',
    reading: '御札 / ofuda',
    category: 'Amuletos y Talismanes',
    description:
      'Un talismán de papel o madera en el que se cree que reside el poder divino de un kami. Se suele colocar en un kamidana (altar doméstico) o en un lugar alto de la casa, con la intención de proteger el hogar o favorecer la prosperidad, entre otros fines.',
  },
  {
    term: 'Hamaya',
    reading: '破魔矢 / hamaya',
    category: 'Amuletos y Talismanes',
    description:
      'Una flecha decorativa que se cree que ahuyenta el mal y la mala suerte. Especialmente popular como amuleto de Año Nuevo, suele exhibirse en un lugar alto del hogar o cerca de la entrada.',
  },
];

export const glossaryCategoriesEs = [...new Set(glossaryTermsEs.map((t) => t.category))];
