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
    term: 'Hamaya',
    reading: '破魔矢 / hamaya',
    category: 'Eventos y Otros',
    description:
      'Una flecha decorativa que se cree que ahuyenta el mal y la mala suerte. Especialmente popular como amuleto de Año Nuevo, suele exhibirse en un lugar alto del hogar o cerca de la entrada.',
  },
];

export const glossaryCategoriesEs = [...new Set(glossaryTermsEs.map((t) => t.category))];
