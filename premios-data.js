// Datos base del Registro de Distinciones y Premios UNSL
// Cada registro incluye 'ambito' (clasificación temática aproximada) y 'extra' (facultad/dependencia proponente, cuando el dato existe en el Excel original).
const BASE_DATA = [
  {
    "id": 1,
    "category": "Honoris Causa UNSL",
    "year": "2026",
    "name": "Dr. Carlos Bernardo Skliar",
    "description": "El Consejo Superior de la Universidad Nacional de San Luis (UNSL) aprobó por unanimidad el 28 de julio de 2026 otorgar el título de Doctor Honoris Causa al Dr. Carlos Bernardo Skliar, en reconocimiento a sus invaluables aportes al pensamiento pedagógico latinoamericano, la filosofía de la educación y las ciencias humanas. Esta distinción, impulsada por la Dra. Liliana Guzmán Muñoz y respaldada por todas las facultades de la universidad, resalta la destacada trayectoria de Skliar como fonoaudiólogo, escritor e investigador del CONICET y FLACSO. Su vasta obra teórica, enfocada en la pedagogía de las diferencias, la ética de la alteridad, la inclusión de la comunidad sorda y la defensa de la educación pública, le ha valido un amplio reconocimiento internacional, múltiples premios en derechos humanos y educación especial, y un Doctorado Honoris Causa previo otorgado por la Universidad Nacional de Cuyo en el año 2022.",
    "resolution": "RCS - 172 / 2026",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 2,
    "category": "Honoris Causa UNSL",
    "year": "2026",
    "name": "Prof. Rita SEGATO",
    "description": "Coordinadora del curso de Especialización en Estudios Afro Latinoamericanos y caribeños de CLACSO; integrante del Consejo Asesor de Expertas de la Comisión Interamericana de Mujeres (CIM) de la organización de los Estados Americanos (OEA) y del grupo de preparación del plan estratégico para la Mesa de Diálogo Político del Consejo Episcopal Latinoamericano (CELAM).",
    "resolution": "RCS - 330 / 2025",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 3,
    "category": "Honoris Causa UNSL",
    "year": "2025",
    "name": "Dra. Adriana Cristina Serquis",
    "description": "Destacada trayectoria científica, académica y de gestión en nanociencia, nanotecnología y energía (Directora de la CNEA).",
    "resolution": "RCS - 218 / 2025",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 4,
    "category": "Honoris Causa UNSL",
    "year": "2024",
    "name": "Dr. Humberto Tommasino Ferraro",
    "description": "Invaluables contribuciones académicas y sociales en el campo de la extensión universitaria en América Latina y el Caribe.",
    "resolution": "RCS - 194 / 2024",
    "extra": "",
    "ambito": "Educativo e Institucional"
  },
  {
    "id": 5,
    "category": "Honoris Causa UNSL",
    "year": "2024",
    "name": "Prof. Dr. Wilfried Tjalk TYSOE",
    "description": "Profesor de la Universidad de Wisconsin (EE. UU.), por su colaboración en enseñanza e investigación en Física por más de 30 años con la UNSL.",
    "resolution": "RCS - 181 / 2024",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 6,
    "category": "Honoris Causa UNSL",
    "year": "2023",
    "name": "Dr. Galo Juan de Ávila Arturo Soler Illia",
    "description": "Contribución invaluable a la UNSL mediante la formación de docentes investigadores y producción científica en Química y Nanomateriales.",
    "resolution": "RCS 272 / 2023",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 7,
    "category": "Honoris Causa UNSL",
    "year": "2023",
    "name": "Prof. Dr. Diego Miguel CORTÉS MARTÍNEZ",
    "description": "Destacado farmacéutico y químico español, referente en química medicinal y farmacología, con una trayectoria académica que abarca universidades de España y Francia. Su investigación se especializa en el diseño y síntesis de moléculas bioactivas a partir de fuentes naturales, logrando importantes avances en la relación estructura-actividad para el desarrollo de fármacos, lo que se traduce en un sólido índice h de 36 y múltiples patentes con la industria farmacéutica. Más allá de su producción científica, ha sido un pilar fundamental para la UNSL, colaborando desde 2001 en la formación de recursos humanos, promoviendo proyectos internacionales y publicaciones conjuntas que han fortalecido significativamente a los Departamentos de Química y Farmacia de nuestra institución.",
    "resolution": "RCS 271 / 23",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 8,
    "category": "Honoris Causa UNSL",
    "year": "2023",
    "name": "Dra. Elizabeth Jelin",
    "description": "Prestigiosa socióloga e Investigadora Superior del CONICET, reconocida como una figura clave en el estudio de los derechos humanos, la memoria y el género en Argentina. Con una trayectoria distinguida por los premios Konex y Houssay a la Trayectoria, ha ocupado roles estratégicos en la gestión científica nacional (ANPCyT y CONICET) y ha ejercido como profesora visitante en instituciones de élite como la Universidad de Texas, el Colegio de México y la Universidad Hebrea de Jerusalén. Su prolífica labor incluye la dirección de programas de posgrado y una vasta producción bibliográfica sobre violencia política y problemáticas sociales, consolidándose como una referente académica internacional en las Ciencias Sociales.",
    "resolution": "RCS 270 / 23",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 9,
    "category": "Honoris Causa UNSL",
    "year": "2023",
    "name": "Profesor Dr. Edvard Ingjald MOSER.",
    "description": "Renombrado psicólogo y neurocientífico noruego, distinguido con el Premio Nobel de Fisiología o Medicina en 2014 por el descubrimiento de las \"células de red\" (grid cells), que conforman el sistema de posicionamiento interno del cerebro. Director fundador del Instituto Kavli de Neurociencia de Sistemas, su carrera se ha centrado en desentrañar cómo los microcircuitos neuronales codifican el espacio y el tiempo, utilizando tecnología de vanguardia como sondas Neopixels. Con una sólida formación interdisciplinaria en matemáticas, estadística y neurobiología, Moser es miembro de las academias científicas más prestigiosas del mundo y un referente global cuya presencia en la UNSL resalta su constante colaboración con la comunidad científica internacional.",
    "resolution": "RCS 105 / 2023",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 10,
    "category": "Honoris Causa UNSL",
    "year": "2023",
    "name": "Dr. José Luis ZAMORANO GÓMEZ",
    "description": "Es un cardiólogo español de renombre internacional, considerado un referente mundial en diagnóstico cardiovascular no invasivo y ecocardiografía. Doctorado con honores por la Universidad Complutense de Madrid, ha liderado instituciones clave como el Instituto Cardiovascular del Hospital Clínico San Carlos y se destaca por una producción científica excepcional que lo sitúa en el Top 2% de los científicos más citados del mundo. A lo largo de su carrera, ha sido distinguido con la Medalla de Oro de diversas sociedades internacionales y el Premio Nacional de Honor de la Real Academia de Medicina de España. Su estrecho vínculo con la región, avalado por la Federación Argentina de Cardiología, y su vasta labor como docente y autor de más de 20 libros, sustentan su reconocimiento como una figura de autoridad máxima en la salud del corazón.",
    "resolution": "RCS 95 / 23",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 11,
    "category": "Honoris Causa UNSL",
    "year": "2023",
    "name": "Cantautor argentino Raúl Alberto Antonio GIECO",
    "description": "León Gieco (Santa Fe, 1951) es uno de los músicos y compositores más emblemáticos de la cultura argentina, cuya trayectoria se define por la fusión innovadora del rock nacional, el folclore y la música popular. Su obra, marcada desde sus inicios por un profundo compromiso social y la denuncia de las injusticias, lo llevó a sufrir la censura y el exilio durante la última dictadura militar. Más que un cantautor, Gieco es un referente de la solidaridad activa, colaborando estrechamente con organismos de Derechos Humanos como Madres y Abuelas de Plaza de Mayo, y liderando proyectos de inmenso valor cultural y federal como \"De Ushuaia a la Quiaca\". Su coherencia entre el arte y la acción social le ha valido el reconocimiento de diversas universidades nacionales y su consolidación como una voz imprescindible en la lucha por la paz y la dignidad de los pueblos.",
    "resolution": "R.C.S. N° 18-23",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 12,
    "category": "Honoris Causa UNSL",
    "year": "2022",
    "name": "Dr. José Alberto MUJICA CORDANO",
    "description": "José Alberto \"Pepe\" Mujica (Montevideo, 1935) es un referente político latinoamericano que ejerció como el 40° presidente de Uruguay (2010-2015). Su gestión se caracterizó por profundas reformas sociales, educativas y una diplomacia activa que incluyó la resolución de conflictos regionales y políticas pioneras en salud pública. Destacado mundialmente por su austeridad y coherencia, Mujica asumió la responsabilidad histórica del Estado uruguayo por las violaciones a los Derechos Humanos durante la dictadura y ha sido distinguido con más de una veintena de Doctorados Honoris Causa y condecoraciones internacionales, como el Collar de la Orden del Libertador General San Martín. Su vida, marcada por una militancia inquebrantable, representa un legado de lucha por la justicia social y el fortalecimiento de la democracia en toda la región",
    "resolution": "R.C.S. N° 132-22",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 13,
    "category": "Honoris Causa UNSL",
    "year": "2021",
    "name": "Dr. Héctor FERNÁNDEZ ÁLVAREZ",
    "description": "es un referente indiscutido de la psicología a nivel mundial y un pilar en la formación de posgrado de la Universidad Nacional de San Luis, donde obtuvo su doctorado en 1995. Pionero en el enfoque cognitivo-integrativo, su liderazgo se refleja en la creación del Cuestionario de Evaluación del Estilo Personal del Terapeuta (EPT-C) —herramienta traducida y aplicada globalmente— y en la fundación de la prestigiosa Revista Argentina de Clínica Psicológica. Con una trayectoria laureada con distinciones internacionales de máximo nivel, como el Premio Sigmund Freud de Viena y el premio de la American Psychological Association (APA), ha dedicado su vida a la investigación de la efectividad psicoterapéutica y a la docencia en universidades de América y Europa, manteniendo un compromiso histórico y sistemático con la excelencia académica de nuestra Facultad.",
    "resolution": "R.C.S. N° 218-21",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 14,
    "category": "Honoris Causa UNSL",
    "year": "2019",
    "name": "Dr. Emilio Fernando GONZALEZ DIAZ.",
    "description": "es un geólogo pionero y referente máximo de la geomorfología moderna en Argentina. Graduado y doctorado en la Universidad Nacional de La Plata, fue responsable de integrar el estudio científico de las formas del paisaje en la currícula universitaria y en el ámbito profesional, permitiendo avances clave en planificación territorial y gestión de riesgos naturales. Con una trayectoria de campo heroica que abarcó desde la Puna hasta la Patagonia —en épocas de mulas y mapas rudimentarios—, se desempeñó como Director del actual SEGEMAR y estructuró la cátedra de Geomorfología en la UBA. Su vínculo con la UNSL es histórico: autor del estudio geomorfológico base de la provincia de San Luis, docente de posgrado y mentor de investigadores, ha consolidado su legado con la reciente donación de su invaluable biblioteca personal y archivo científico a nuestra institución, un acervo que incluye fotos aéreas y textos únicos para la docencia y la investigación.",
    "resolution": "R.C.S. N° 298-19",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 15,
    "category": "Honoris Causa UNSL",
    "year": "2019",
    "name": "Dr. Eugenio Emilio VOGEL MATAMALA",
    "description": "destacado físico nacido en Temuco y doctorado por la Johns Hopkins University, es un referente internacional en el estudio de la Materia Condensada, con aportes clave en el efecto Jahn-Teller y sistemas magnéticos desordenados. Con una trayectoria docente centrada en la Universidad de La Frontera (Chile) y colaboraciones en instituciones de prestigio como el Max-Planck-Institute, se distingue por su incansable labor en la formación de recursos humanos y la divulgación científica. Su vínculo histórico con la Universidad Nacional de San Luis ha sido fundamental para el desarrollo de la física regional, destacándose especialmente como el impulsor de la creación del TREFEMAC en el año 2003.",
    "resolution": "R.C.S. N° 181-19",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 16,
    "category": "Honoris Causa UNSL",
    "year": "2019",
    "name": "Dra. Silvia Natalia RIVERA CUSICANQUI.",
    "description": "La Dra. Silvia Natalia Rivera Cusicanqui es una destacada socióloga, historiadora y ensayista boliviana, Profesora Emérita de la Universidad Mayor de San Andrés, cuya trayectoria se caracteriza por un profundo compromiso con la epistemología decolonial y el pensamiento Chi'xi. Reconocida internacionalmente con distinciones de instituciones como la Universidad de Columbia y becas de la Fundación Guggenheim, su labor integra la investigación académica con una activa militancia en el movimiento Katarista Aymara y la defensa de los derechos indígenas. Debido a su excepcional contribución a las ciencias sociales contemporáneas y su impacto en el pensamiento latinoamericano",
    "resolution": "R.C.S. N° 103-19",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 17,
    "category": "Honoris Causa UNSL",
    "year": "2018",
    "name": "Dr. Alberto Carlos TAQUINI(H)",
    "description": "Dr. Alberto Carlos Taquini (hijo) es un distinguido médico e investigador argentino, graduado y doctorado por la Universidad de Buenos Aires , cuya trayectoria ha sido fundamental para la descentralización y federalización de la educación superior en Argentina. Reconocido por su labor científica con más de 60 trabajos sobre hipertensión arterial y su paso por instituciones de prestigio como el CONICET y la Universidad de Michigan , su legado más trascendente es el denominado \"Plan Taquini\". Este proyecto, presentado formalmente en 1968, impulsó la creación de 14 nuevas universidades nacionales entre 1971 y 1973 —incluyendo la autonomía de la Universidad Nacional de San Luis— con el objetivo de adaptar la enseñanza a las necesidades del desarrollo regional y el crecimiento poblacional",
    "resolution": "RCS-1-289-18",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 18,
    "category": "Honoris Causa UNSL",
    "year": "2018",
    "name": "Dra. Janine PUGET",
    "description": "La Dra. Janine Puget (1926) es una prestigiosa médica psicoanalista nacida en Francia y formada en la Universidad de Buenos Aires, reconocida mundialmente por sus aportes pioneros en la clínica vincular de parejas, familias y grupos. Miembro fundadora de la Asociación Argentina de Psicología y Psicoterapia de Grupo en 1954, su obra destaca por el análisis de los traumas sociales y la violencia de Estado, plasmado en libros fundamentales como \"Violencia de Estado y Psicoanálisis\". Con una trayectoria que incluye distinciones como el Premio Mary S. Sigourney y membresías de honor en instituciones de Francia, Perú, Uruguay y Colombia, su pensamiento es referencia obligada en la promoción de la salud mental contextualizada",
    "resolution": "RCS -12- 265/18",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 19,
    "category": "Honoris Causa UNSL",
    "year": "2018",
    "name": "Dr. Alberto Pascual MAIZTEGUI",
    "description": "Dr. Alberto Pascual Maiztegui (1920) fue un eminente físico y educador argentino, cuya trayectoria transformó la enseñanza de las ciencias en el país a través de obras fundamentales como \"Introducción a la Física\", escrita junto a Jorge Sábato. Formó parte del primer plantel docente del Instituto Balseiro y lideró instituciones clave como la Academia Nacional de Ciencias y el IMAF en Córdoba, además de ser el impulsor de las Olimpíadas Argentinas de Física y las Ferias de Ciencias a nivel nacional. Su legado combina la investigación científica con una incansable labor pedagógica que le valió reconocimientos como el título de Profesor Emérito de la UNC y el premio de la Sociedad Científica Argentina. En honor a su inmensurable aporte a la educación y su capacidad de gestión institucional",
    "resolution": "RCS-3-66/18",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 20,
    "category": "Honoris Causa UNSL",
    "year": "2018",
    "name": "Dr. Gabriel Adrián RABINOVICH",
    "description": "El Dr. Gabriel Adrián Rabinovich es un eminente bioquímico y científico argentino, nacido en Córdoba, cuya labor en investigación biomédica y glico-inmunología le ha valido un reconocimiento internacional de primer nivel. Egresado con honores de la Universidad Nacional de Córdoba y doctorado en la misma institución, se desempeña como investigador principal del CONICET, vicedirector del IBYME y profesor titular en la UBA. Con más de 350 comunicaciones científicas y miles de citas, su trayectoria ha sido galardonada con prestigiosos premios como el Konex de Platino, el Bunge & Born y la membresía en la Academia Nacional de Ciencias. Debido a sus méritos excepcionales en la enseñanza y sus aportes sustantivos al desarrollo de la ciencia en Argentina",
    "resolution": "RCS-2- 65-18",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 21,
    "category": "Honoris Causa UNSL",
    "year": "2017",
    "name": "Nora Irma MORALES de CORTIÑAS",
    "description": "Sra. Nora Irma Morales de Cortiñas (1930) es una emblemática referente de los derechos humanos en Argentina, cofundadora de la organización Madres de Plaza de Mayo y actual integrante de su Línea Fundadora. Su incansable militancia comenzó en 1977 tras la desaparición forzada de su hijo, Carlos Gustavo, y se extendió globalmente en defensa de los sectores populares y diversas causas sociales. Además de su labor activista, es Psicóloga Social y Profesora Titular en la Universidad de Buenos Aires, donde ha investigado la relación entre la dictadura militar y la deuda externa. Reconocida previamente con doctorados honoríficos por las universidades de Bruselas, Salta y la UBA",
    "resolution": "RCS-4-314/17",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 22,
    "category": "Honoris Causa UNSL",
    "year": "2016",
    "name": "Dr. Jesús Liberato TOBARES.",
    "description": "El Dr. Jesús Liberato Tobares (1929) es un prestigioso abogado, historiador y poeta puntano, considerado un referente ineludible en el estudio del folklore y la identidad de la provincia de San Luis. Graduado de la Universidad Nacional de La Plata, desarrolló una destacada carrera judicial que incluyó la presidencia del Superior Tribunal de Justicia de San Luis y su participación en la reforma constitucional de la provincia en 1962. Su vasta obra escrita, que abarca la investigación histórica, folklórica y la producción literaria, destaca por rescatar las voces y tradiciones de las comunidades urbanas y rurales de la región, con títulos fundamentales como \"Folklore sanluiseño\" y \"La puntanidad\". Reconocido como \"Tesoro Viviente de la Cultura\" y \"Mayor Notable Argentino\" por su compromiso con la visibilización de la idiosincrasia local",
    "resolution": "RCS-4-296/16 rectificada RCS-4-298/16",
    "extra": "",
    "ambito": "Artístico y Cultural"
  },
  {
    "id": 23,
    "category": "Honoris Causa UNSL",
    "year": "2016",
    "name": "Profesora Manuela Amanda TOUBES",
    "description": "La Profesora Manuela Amanda Toubes (1930) es una destacada académica y referente nacional en el campo de la educación popular y de adultos, cuya trayectoria se define por una incansable militancia social en defensa de los derechos humanos y los sectores más empobrecidos. Formada en la UBA y especializada en instituciones de prestigio en Inglaterra y Francia, fue pionera en implementar programas de alfabetización y educación no formal en Argentina, además de haber sido testigo y denunciante de la censura cultural durante la última dictadura militar. A lo largo de su carrera, se ha desempeñado como Directora del Instituto de Investigaciones en Ciencias de la Educación (IICE) y ha recibido numerosos galardones, como el premio \"Maestros de Vida\" de CTERA y la distinción de Ciudadana Ilustre de Paraná. En reconocimiento a su compromiso con la justicia social y el derecho a la educación de los grupos vulnerados",
    "resolution": "RCS-4-78/16",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 24,
    "category": "Honoris Causa UNSL",
    "year": "2016",
    "name": "Dra. Noemi Elizabet ZARITZKY.",
    "description": "La Dra. Noemí Elisabet Zaritzky es una destacada ingeniera química argentina y referente mundial en el área de alimentos, reconocida por su vasta trayectoria en investigación y formación de recursos humanos. Graduada de la Universidad Nacional de La Plata y doctorada por la UBA, se desempeña como Investigadora Superior del CONICET y dirige el Centro de Investigaciones en Criotecnología de Alimentos (CIDCA), especializándose en el modelado matemático de transferencia de energía, criopreservación y desarrollo de materiales biodegradables. Su labor ha sido distinguida con numerosos galardones, incluyendo el Premio Bernardo Houssay y el Premio Consagración de la Academia Nacional de Ciencias Exactas, Físicas y Naturales, siendo además la primera mujer en integrar la Academia Nacional de Ingeniería. Debido a su constante colaboración con la Universidad Nacional de San Luis, especialmente en la acreditación de la carrera de Ingeniería en Alimentos",
    "resolution": "RCS-2-6/16",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 25,
    "category": "Honoris Causa UNSL",
    "year": "2015",
    "name": "Dra. Noemí Lidia NICOLAU",
    "description": "Esta distinción se fundamenta en su destacada trayectoria académica, que incluye su doctorado en Ciencias Jurídicas y Sociales y su labor como investigadora de categoría máxima , pero especialmente en su contribución esencial para la puesta en marcha y consolidación de las Carreras Jurídicas de la institución desde el año 2009. El documento resalta su prestigio nacional e internacional, su autoría de obras fundamentales en Derecho Contractual y su generosidad al formar recursos humanos y dictar asignaturas de Derecho Civil en la Facultad de Ciencias Económicas, Jurídicas y Sociales",
    "resolution": "RCS-15-39/15",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 26,
    "category": "Honoris Causa UNSL",
    "year": "2015",
    "name": "Dr. Ricardo Luis LORENZETTI",
    "description": "Esta distinción reconoce su vasta trayectoria como jurista de prestigio internacional, su labor docente en diversas universidades nacionales y su desempeño como Ministro y Presidente de la Corte Suprema de Justicia de la Nación. El documento destaca sus aportes fundamentales en la enseñanza del derecho, su autoría de más de 30 libros y su rol como presidente de la comisión para la unificación de los Códigos Civil y Comercial de la Nación",
    "resolution": "RCS -5-38/15",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 27,
    "category": "Honoris Causa UNSL",
    "year": "2014",
    "name": "Prof. Dr. Artur Manfred Max Neef",
    "description": "Esta distinción reconoce su extensa trayectoria académica como rector de la Universidad Austral de Chile, su activismo ecologista y sus fundamentales aportes teóricos, entre los que destacan la \"Economía Descalza\" y el \"Desarrollo a Escala Humana\". Su obra define una matriz de necesidades humanas básicas y postula que el desarrollo debe centrarse en la liberación de las capacidades creativas de las personas más que en el simple crecimiento industrial. El reconocimiento destaca además su galardón con el \"Premio Nobel Alternativo\" de economía y su compromiso con la construcción de un mundo más equitativo.",
    "resolution": "RCS-1- 236/14",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 28,
    "category": "Honoris Causa UNSL",
    "year": "2014",
    "name": "Dr. Juan Carlos Kaski",
    "description": "Esta distinción reconoce su excepcional trayectoria en la medicina cardiovascular, destacando sus investigaciones sobre la vasomoción de la arteria coronaria y la angina microvascular desarrolladas principalmente en instituciones de renombre como el Hammersmith Hospital y la Universidad de Londres. El Dr. Kaski, quien además de ser un prolífico autor con más de 450 publicaciones originales es Profesor de Ciencias Cardiovasculares en St. George, ha sido galardonado internacionalmente con premios como el RAÍCES en Argentina y la Medalla de Oro de la Sociedad Española de Cardiología",
    "resolution": "RCS-1- 53/14",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 29,
    "category": "Honoris Causa UNSL",
    "year": "2014",
    "name": "Dr. Juan Martín Maldacena",
    "description": "Esta distinción reconoce su excepcional trayectoria científica, destacando la formulación de la \"conjetura Maldacena\" (Correspondencia AdS/CFT), considerada uno de los resultados más importantes de la física teórica contemporánea por vincular la gravedad con la física cuántica. El documento resalta su formación en el Instituto Balseiro y la Universidad de Princeton, su labor como profesor en Harvard y sus investigaciones en el Institute for Advanced Study, además de los numerosos premios internacionales que lo posicionan como un referente mundial en la Teoría de Cuerdas.",
    "resolution": "RCS -1-37/14",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 30,
    "category": "Honoris Causa UNSL",
    "year": "2014",
    "name": "Post Mortem Dr. Vicente MAYAGOITIA VÁSQUEZ",
    "description": "Un distinguido científico mexicano especializado en la fisicoquímica de superficies. La distinción reconoce su excepcional trayectoria académica, que incluye más de 150 artículos científicos, una patente francesa y una labor docente de gran rigor en instituciones como la UAM-Iztapalapa y la Universidad Paul Sabatier de Toulouse. Además de su excelencia investigadora en áreas como la termodinámica estadística y los procesos capilares, la resolución destaca su generosidad personal y su impacto en la formación de recursos humanos, particularmente su estrecha relación con investigadores de la propia UNSL",
    "resolution": "RCS-1-36/14",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 31,
    "category": "Honoris Causa UNSL",
    "year": "2013",
    "name": "Dr. Horacio CERUTTI GULDBERG",
    "description": "Este reconocimiento destaca su trayectoria como uno de los máximos exponentes de la vertiente historicista de la filosofía latinoamericana y su compromiso con los procesos de emancipación política y social de la región. El documento resalta su prolífica obra académica, que incluye títulos como Filosofía de la liberación latinoamericana, así como su vasta experiencia docente en instituciones internacionales tras ser obligado al exilio por la dictadura militar argentina en los años setenta. Además de sus múltiples doctorados honorarios y premios internacionales, la resolución subraya su rol como investigador principal de la UNAM y su participación en diversas sociedades científicas de Europa y América",
    "resolution": "RCS-1-77/13",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 32,
    "category": "Honoris Causa UNSL",
    "year": "2013",
    "name": "Prof. Héctor Nahúm SCHMUCLER",
    "description": "por su excepcional trayectoria como pionero y referente de los estudios de comunicación y cultura en América Latina. El documento destaca su formación en semiología bajo la dirección de Roland Barthes, su labor como fundador de cátedras fundamentales en la UBA y la UNLP, y su rol como director de revistas míticas como Pasado y Presente y Los Libros. Asimismo, se reconoce su compromiso ético y político, que lo llevó al exilio durante la última dictadura militar, y su capacidad para vincular el pensamiento crítico con la memoria social, aspectos respaldados por figuras como Néstor García Canclini y Armand Mattelart",
    "resolution": "RCS-4-62/13",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 33,
    "category": "Honoris Causa UNSL",
    "year": "2011",
    "name": "Sra.Enriqueta Estela BARNES de CARLOTTO",
    "description": "Este reconocimiento, impulsado por la organización Psicólogos sin Fronteras y miembros de la Facultad de Ciencias Humanas, destaca su incansable lucha por los Derechos Humanos y su liderazgo en la asociación Abuelas de Plaza de Mayo para la recuperación de nietos apropiados durante el terrorismo de Estado. El documento resalta su transformación de maestra y ama de casa a figura pública tras el secuestro de su hija Laura en 1977, así como su influencia decisiva en la legislación internacional sobre el derecho a la identidad y la creación del Banco Nacional de Datos Genéticos. Con esta distinción, aprobada por unanimidad, la universidad se suma a numerosas instituciones nacionales e internacionales que han honrado su trayectoria y testimonio de vida.",
    "resolution": "RCS-1-156/11",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 34,
    "category": "Honoris Causa UNSL",
    "year": "2011",
    "name": "Dr. Jose Gimeno Sacristan",
    "description": "Dr. José Gimeno Sacristán destacando su excelencia académica como Doctor en Pedagogía y Catedrático de la Universidad de Valencia , así como su trayectoria como profesor en las universidades Complutense, de Salamanca y Autónoma de Madrid. Se resalta su prestigio internacional como referente en materia educativa , respaldado por la publicación de más de 20 libros fundamentales y 50 capítulos de obras especializadas que son material de estudio en la UNSL. Asimismo, se mencionan sus importantes cargos en el Ministerio de Educación de España , sus múltiples premios como la Encomienda de \"Alfonso X El Sabio\" , y su estrecho vínculo con la institución local, donde ya había sido declarado Huésped de Honor en 2006",
    "resolution": "RCS-1-154/11",
    "extra": "",
    "ambito": "Educativo e Institucional"
  },
  {
    "id": 35,
    "category": "Honoris Causa UNSL",
    "year": "2010",
    "name": "Pianista Prof. Miguel Angel Estrella",
    "description": "al pianista Miguel Ángel Estrella , reconociendo su excepcional trayectoria artística y su compromiso inclaudicable como \"músico social\" en la defensa de los derechos humanos. El documento destaca su formación con maestros internacionales, su labor como Embajador de Buena Voluntad de la UNESCO y la fundación del movimiento \"Música Esperanza\", destinado a democratizar el acceso a la música en sectores desfavorecidos. Asimismo, se valoran sus numerosos galardones internacionales, como la Legión de Honor de Francia, su lucha tras ser perseguido por las dictaduras del Cono Sur y su histórica amistad con el ex Rector Mauricio Amílcar López, méritos que fundamentaron la aprobación unánime de esta distinción académica",
    "resolution": "RCS-1-278-10",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 36,
    "category": "Honoris Causa UNSL",
    "year": "2010",
    "name": "Francisco TOMÁS VERT",
    "description": "Dr. Francisco Tomás Vert, destacando su sobresaliente trayectoria como Doctor en Ciencias Químicas, Catedrático y Rector de la Universidad de Valencia. La distinción fundamenta sus méritos en una prolífica carrera científica con más de 150 artículos publicados, su vasta experiencia en gestión universitaria y su histórico compromiso con la UNSL, donde se desempeña como Profesor Estable del Doctorado en Química y ha sido declarado Huésped de Honor tanto por la institución como por la Municipalidad de San Luis. El otorgamiento, aprobado por unanimidad y a propuesta de la Facultad de Química, Bioquímica y Farmacia, reconoce su generosidad en el intercambio académico y su prestigio internacional, recientemente avalado por distinciones en instituciones como la Universidad de Sophia en Japón.",
    "resolution": "RCS-2-153/10",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 37,
    "category": "Honoris Causa UNSL",
    "year": "2010",
    "name": "Dr. Bernardo KLIKSBERG",
    "description": "Dr. Bernardo Kliksberg, reconociéndose como el creador de la gerencia social y pionero en la ética para el desarrollo y el capital social en América Latina. La distinción destaca su impresionante formación académica con cinco títulos universitarios de la UBA, su autoría en más de 40 libros fundamentales para el pensamiento crítico sobre la pobreza, y su rol como asesor principal en organismos internacionales como el PNUD, la ONU, UNICEF y la UNESCO. Asimismo, se valoran sus servicios extraordinarios a la sociedad, que le valieron condecoraciones como la Orden al Mérito Civil de España y la designación como Ciudadano Ilustre de Buenos Aires, subrayando que su incorporación prestigia a la institución debido a su relevancia intelectual y compromiso ético global.",
    "resolution": "RCS-5-142/10",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 38,
    "category": "Honoris Causa UNSL",
    "year": "2010",
    "name": "Dr. Eugenio ZAFFARONI",
    "description": "Reconociendo su excepcional trayectoria en la defensa de los Derechos Humanos y su prestigio internacional en el campo jurídico y de la investigación. La distinción resalta su labor como Profesor Emérito de la UBA, su desempeño en la judicatura, su rol como Convencional Constituyente en 1994 y su prolífica obra teórica, que incluye títulos fundamentales como el Manual de Derecho Penal y En busca de las penas perdidas. Asimismo, el documento subraya el otorgamiento del Premio Estocolmo en Criminología en 2009 por sus investigaciones sobre el genocidio y su histórica vinculación con el Centro de Criminología de la región hace más de 40 años, méritos que fundamentaron la aprobación unánime de este reconocimiento académico.",
    "resolution": "RCS-4-10/10",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 39,
    "category": "Honoris Causa UNSL",
    "year": "2009",
    "name": "Dr. Guillermo O'DONNELL",
    "description": "reconociendo su excepcional trayectoria académica y su compromiso ético con la democracia. El documento destaca sus aportes fundamentales a la ciencia política, tales como el estudio del Estado burocrático-autoritario, los procesos de transición democrática en América Latina y la conceptualización de la \"democracia delegativa\". Con esta distinción, la institución no solo honra la vasta producción intelectual del Dr. O'Donnell —quien se desempeñó en prestigiosas universidades como Yale, Notre Dame y Oxford—, sino que también busca prestigiar a la propia universidad mediante el reconocimiento de una figura clave en el análisis de la calidad institucional y los derechos humanos en la región.",
    "resolution": "RCS-5-334/09",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 40,
    "category": "Honoris Causa UNSL",
    "year": "2009",
    "name": "Dr. Heliodoro CARPINTERO CAPELL",
    "description": "El Dr. Heliodoro Carpintero Capell basándose en su eminente trayectoria como referente mundial de la historiografía y la historia de la psicología, destacando su innovador uso de la metodología sociobibliométrica para el análisis de la literatura científica. Con una prolífica producción de 25 libros y más de 350 artículos, el Dr. Carpintero no solo ha influido en la disciplina a través de obras clásicas y la formación de destacados académicos, sino que también ha mantenido un vínculo estrecho y generoso con la Universidad Nacional de San Luis, donde se desempeñó como profesor visitante, asesor de investigaciones y facilitador de pasantías internacionales, contribuyendo significativamente al fortalecimiento del posgrado y la investigación científica en nuestra institución.",
    "resolution": "RCS-4-163/09",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 41,
    "category": "Honoris Causa UNSL",
    "year": "2009",
    "name": "Posts Mortem al Ing. Agr. Fidel Antonio Roig",
    "description": "destacándose como una figura central de la botánica y la fitosociología en Argentina, especialmente en la región de Cuyo. A través de una prolífica carrera que incluyó más de 150 publicaciones, la formación de colecciones herbarias masivas y el impulso de la investigación científica en la Universidad Nacional de San Luis y el CONICET, Roig se consolidó como un pionero en el análisis de la vegetación y un maestro para múltiples generaciones de científicos. Su legado, marcado por la excelencia académica y la resiliencia ante la intolerancia política, es honrado por su invaluable contribución al patrimonio natural y su rol decisivo en el estudio de las zonas áridas y la flora nacional.",
    "resolution": "RCS-2-82/09",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 42,
    "category": "Honoris Causa UNSL",
    "year": "2008",
    "name": "Dr. Juan SEGUÍ",
    "description": "su brillante trayectoria académica iniciada en Córdoba y consolidada en Francia, donde alcanzó el rango de Director de Investigación en el CNRS. Reconocido por dirigir el histórico Laboratorio de Psicología Experimental fundado por Alfred Binet y la revista L’Année Psychologique, Seguí es valorado no solo por su vasta producción científica y su rol en la formación de investigadores a nivel internacional, sino también por su calidad humana y su estrecho vínculo con las universidades argentinas. Su perfil combina una excelencia técnica de prestigio mundial con un compromiso constante en la docencia y el desarrollo de la psicología experimental, méritos que ya le han valido honores similares en otras instituciones de renombre.",
    "resolution": "RCS-4-51/08",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 43,
    "category": "Honoris Causa UNSL",
    "year": "2007",
    "name": "Prof. Arturo Andrés Roig",
    "description": "Arturo Andrés Roig (1922–2012) fue un destacado filósofo e historiador de las ideas argentino, referente imprescindible del pensamiento latinoamericano contemporáneo y de la filosofía de la liberación. Perfil y Aportes Principales Filosofía Latinoamericana: Impulsó la revalorización de la historia del pensamiento regional, planteando que América Latina debe pensar su realidad desde su propia identidad y contexto social. Trayectoria Académica: Fue docente e investigador de renombre internacional (Universidad Nacional de Cuyo, FLACSO, entre otras instituciones). Compromiso Social y Derechos Humanos: A lo largo de su carrera vinculó el quehacer filosófico con la ética, la democracia y la justicia social. La Universidad Nacional de San Luis (UNSL) le otorgó la máxima distinción académica de Doctor Honoris Causa en reconocimiento a: Su invaluable contribución al desarrollo de las ciencias humanas y la filosofía en la región. Su compromiso ético, docente e intelectual con la universidad pública argentina y la defensa de los derechos humanos. Su valioso legado teórico que continúa siendo pilar fundamental en las facultades de ciencias humanas y sociales de la institución.",
    "resolution": "RCS-4-21/07",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 44,
    "category": "Honoris Causa UNSL",
    "year": "2007",
    "name": "Post- Mortem Dr. Rene FAVALORO",
    "description": "El 23 de septiembre de 1999, la Universidad Nacional de San Luis (UNSL) otorgó el título de Doctor Honoris Causa al Dr. René Favaloro, una de las máximas distinciones de la institución, en reconocimiento a su inestimable aporte a la medicina de la humanidad —destacándose la creación de la técnica del bypass aortocoronario—, su incansable labor pedagógica y su profunda ética cívica y social. Trágicamente, el 29 de julio de 2000, el Dr. Favaloro falleció en Buenos Aires. A partir de su deceso, la distinción recibida en la UNSL cobró una dimensión post-mortem imborrable en el patrimonio socio-cultural y académico de la universidad. Excelencia Médica y Científica: Honor a su contribución mundial a la cirugía cardiovascular y su visión holística de la salud pública, entendiendo a la medicina como un acto de servicio social y no de comercio. Compromiso Ético y Humanista: Reconocimiento a su constante prédica sobre la honestidad, la educación pública y la justicia social, valores alineados con el espíritu fundacional de la educación superior pública. Legado Institucional: La figura del Dr. Favaloro permanece como un referente ético indispensable dentro de la comunidad universitaria de la UNSL, sirviendo de inspiración continua para estudiantes, docentes e investigadores en el campo de la salud y la ética social.",
    "resolution": "RCS-3-14/07",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 45,
    "category": "Honoris Causa UNSL",
    "year": "2007",
    "name": "Dr. Luis Caffarelli",
    "description": "Se le otorga por sus contribuciones extraordinarias a la matemática a nivel global, su destacada trayectoria científica e internacional, y por ser un referente indiscutible de la ciencia argentina en el mundo. Es considerado uno de los matemáticos más importantes de la era moderna en el campo de las Ecuaciones Diferenciales Parciales y sus aplicaciones. Fue galardonado con el Premio Abel (2023), considerado el equivalente al \"Premio Nobel de Matemática\". Su labor científica ha transformado la comprensión de fenómenos físicos como el flujo de fluidos, la conducción de calor y la mecánica de medios continuos. Impacto institucional: La UNSL reconoce en el Dr. Caffarelli no solo el rigor científico e intelectual, sino también el valor de la educación pública universitaria en Argentina como cuna de talento con proyección internacional.",
    "resolution": "RCS-3-3/07",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 46,
    "category": "Honoris Causa UNSL",
    "year": "2006",
    "name": "Prof.Periodista Osvaldo BAYER",
    "description": "El historiador, periodista y escritor Osvaldo Bayer (1927–2018) fue distinguido con el Doctorado Honoris Causa por la Universidad Nacional de San Luis (UNSL) en 2008, en reconocimiento a su incansable trayectoria periodística, su labor investigativa y su firme compromiso con la defensa de los derechos humanos y la memoria histórica. Defensa de los Derechos Humanos: La UNSL le otorgó su máxima distinción honorífica destacando su coherencia ética y su lucha contra la impunidad y la opresión. Aporte a la Historia Social y Periodismo Documental: Se valoró de manera fundamental su obra cumbre, La Patagonia Rebelde, así como sus investigaciones sobre el movimiento obrero argentino y las comunidades originarias (como la figura de Severino Di Giovanni y Raimundo Villaflor). Vínculo con la Universidad Pública: Durante su visita a la universidad para recibir el título, Bayer brindó conferencias magistrales, reafirmando el rol crítica, libre y transformador que debe mantener la educación pública.",
    "resolution": "RCS-4-36/06",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 47,
    "category": "Honoris Causa UNSL",
    "year": "2005",
    "name": "Dr. Imre G. CSIZMADIA (FQByF)",
    "description": "El Dr. Imre G. Csizmadia (1932–2022) fue un renombrado químico teórico y computacional canadiense-húngaro, Profesor Emérito de la Universidad de Toronto (Canadá), distinguido por la Universidad Nacional de San Luis (UNSL) con el título de Doctor Honoris Causa.Reconocimiento Académico: La UNSL le otorgó la máxima distinción académica honorífica por sus contribuciones pioneras a la química cuántica, la modelización molecular y el estudio del conformado de péptidos y proteínas. Vínculo Institucional: Mantuvo una estrecha colaboración científica con docentes e investigadores del Departamento de Química de la Facultad de Química, Bioquímica y Farmacia (FQBF) de la UNSL, impulsando el desarrollo de la química teórica y computacional en San Luis mediante proyectos conjuntos y formación de recursos humanos. Trayectoria Científica: Autor de cientos de publicaciones científicas y libros de referencia en dinámica molecular y estructura electrónica, su trabajo facilitó avances en el diseño computacional de fármacos y la comprensión estructural de biomoléculas.",
    "resolution": "RCS-2-260/05",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 48,
    "category": "Honoris Causa UNSL",
    "year": "2005",
    "name": "Dr. Miguel CEI",
    "description": "Perfil: El Dr. José Miguel Alfredo María Cei (1918–2007) fue un biólogo, zoólogo y ornitólogo italo-argentino de renombre e impacto internacional, considerado uno de los grandes referentes de la ciencia en la región de Cuyo y Argentina. Trayectoria en la UNSL: Tuvo un rol pionero en el desarrollo de la investigación biológica y la docencia universitaria en San Luis. Su trabajo sentó las bases de la ecología, ecofisiología y biogeografía de anfibios y reptiles en el Cono Sur. Aportes Científicos: Publicó cientos de trabajos académicos y libros fundamentales para el estudio de la fauna neotropical, descubriendo y describiendo múltiples especies. Su modelo de investigación integró aspectos evolutivos, morfológicos y ecológicos.",
    "resolution": "RCS-2-10/05",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 49,
    "category": "Honoris Causa UNSL",
    "year": "2004",
    "name": "Eduardo Germán Hughes Galeano",
    "description": "El Doctorado Honoris Causa es la máxima distinción académica y honorífica que otorga la Universidad Nacional de San Luis (UNSL) a personalidades de eminente trayectoria que han realizado aportes trascendentales a la cultura, la ciencia, la sociedad o la defensa de los derechos humanos. En el caso del reconocido escritor y periodista uruguayo Eduardo Galeano (Eduardo Germán Hughes Galeano), este reconocimiento puso en valor su inestimable compromiso con la memoria colectiva, la identidad latinoamericana y la justicia social. Defensa de la Identidad Latinoamericana: Se reconoció su vasta obra literaria y periodística (encabezada por obras icónicas como Las venas abiertas de América Latina y la trilogía Memoria del fuego), la cual dio voz a los pueblos invisibilizados del continente. Compromiso Ético y Social: La distinción destacó su pensamiento crítico frente a las desigualdades e injusticias, transformándolo en un referente de coherencia, libertad de expresión y derechos humanos en toda la región. Aporte a la Cultura Popular: Galeano logró conectar el lenguaje poético y literario con los saberes y luchas populares, construyendo un puente fundamental entre la academia y la sociedad civil.",
    "resolution": "RCS-1-68/04",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 50,
    "category": "Honoris Causa UNSL",
    "year": "2002",
    "name": "Dr. Adolfo Pérez Esquivel",
    "description": "Referente mundial de la no-violencia y la defensa de los derechos humanos. Tras ser perseguido y torturado por la dictadura militar, recibió el Premio Nobel de la Paz en 1980 por su incansable labor junto a los sectores más vulnerables y su rol clave en la creación de organismos solidarios en América Latina. A través de su obra artística, sus libros y su mediación en conflictos internacionales",
    "resolution": "RCS-4-166-02",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 51,
    "category": "Honoris Causa UNSL",
    "year": "2002",
    "name": "Dr. Ramon Salvador Piezzi",
    "description": "Destacado médico, científico y académico que transformó la enseñanza de la morfología en la Universidad Nacional de San Luis al organizar desde cero la Cátedra de Histología y fomentar una investigación multidisciplinaria de alto nivel. Con una trayectoria brillante que incluye el rango de Investigador Superior del CONICET, cargos directivos en la Universidad Nacional de Cuyo y colaboraciones en instituciones como el MIT y la McGill University, Piezzi ha publicado más de cien trabajos internacionales y formado a numerosas generaciones de científicos bajo un estricto enfoque ético. Su legado no solo reside en su excelencia técnica y sus aportes a la Bioética y la sociología",
    "resolution": "RCS-4-165-02",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 52,
    "category": "Honoris Causa UNSL",
    "year": "2002",
    "name": "Dr.Adolfo Pérez Esquivel",
    "description": "El Dr. Adolfo Pérez Esquivel, destacado activista, pintor, escultor y Premio Nobel de la Paz (1980), fue distinguido con el título de Doctor Honoris Causa por la Universidad Nacional de San Luis (UNSL) en reconocimiento a su incansable trayectoria en defensa de los derechos humanos, la justicia social y la paz en América Latina. Puntos clave del reconocimiento defensa irrenunciable de los Derechos Humanos: Se valoró su compromiso ético y su lucha pacífica contra las dictaduras militares en la región, encabezando organismos como el Servicio Paz y Justicia (SERPAJ).Compromiso con la Universidad Pública: La UNSL otorgó esta máxima distinción académica destacando su rol como educador popular y su constante apoyo a la educación como herramienta de emancipación social y conciencia crítica. Memoria, Verdad y Justicia: Su figura representa un pilar fundamental en la construcción de la memoria colectiva argentina y la defensa de la democracia.",
    "resolution": "RCS-1-166/02",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 53,
    "category": "Honoris Causa UNSL",
    "year": "2000",
    "name": "Dr. Marcos Aguinis",
    "description": "El Dr. Marcos Aguinis (médico neurocirujano, psicoanalista, ensayista y escritor argentino) fue galardonado con el título de Doctor Honoris Causa por la Universidad Nacional de San Luis (UNSL) en el año 2000. Trayectoria Intelectual y Literaria: Es uno de los ensayistas y novelistas más prolíficos y reconocidos de la Argentina, galardonado internacionalmente (destacándose el Premio Planeta de España y el Gran Premio de Honor de la SADE). Compromiso Democrático y Cultural: Tras el retorno de la democracia en Argentina, se desempeñó como Secretario de Cultura de la Nación, impulsando el Programa Nacional de Democratización de la Cultura (PRONDEC). Defensa de los Derechos Humanos y el Pensamiento Crítico: Su obra aborda temas clave como la libertad de expresión, la lucha contra el autoritarismo, la pluralidad de ideas, la tolerancia y el diálogo interreligioso y cultural. La UNSL le otorgó la máxima distinción académica en el marco de la nómina de personalidades ilustres del ámbito científico, humanístico y político de la Argentina, reconociendo:Su destacada contribución a las letras y al pensamiento ensayístico iberoamericano.Su labor incansable en favor de la cultura democrática, la educación para la paz y los derechos fundamentales.Su perfil multidisciplinario que articula la ciencia médica, la salud mental y la producción literaria de alto impacto social.",
    "resolution": "RCS-1-121/00",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 54,
    "category": "Honoris Causa UNSL",
    "year": "1999",
    "name": "Dr. Honoris Causa al Dr.Ricardo Etchegoyen",
    "description": "El 25 de abril de 2024, la Universidad Nacional de San Luis (UNSL) otorgó el título de Doctor Honoris Causa al Dr. Ricardo Alberto Etchegoyen, la máxima distinción honorífica que concede la institución. Trayectoria Destacada: Se reconoció su prolífica y excelente labor científica e internacional en el campo de la astrofísica de partículas y la física experimental. Proyecto Pierre Auger: Es uno de los principales referentes e impulsores en Argentina del Observatorio Pierre Auger (ubicado en Malargüe, Mendoza), el detector de rayos cósmicos más grande del mundo. Labor Institucional: Fue director e impulsor fundamental del ITEDA (Instituto de Tecnologías en Detección y Astropartículas), un referente nacional en investigación y desarrollo tecnológico. Vínculo con la UNSL: Se destacó su compromiso histórico en el fortalecimiento de lazos académicos, la formación de recursos humanos calificados y la colaboración científica continúa con el Departamento de Física y la Facultad de Ciencias Físico-Matemáticas y Naturales (FCFMyN) de la UNSL. En resumen: La UNSL le otorgó esta distinción no solo por su liderazgo en proyectos de gran envergadura internacional como el Pierre Auger, sino también por su constante aporte al desarrollo de la ciencia soberana en el país y su apoyo al crecimiento académico e investigativo de la universidad.",
    "resolution": "RCS -1-125/99",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 55,
    "category": "Honoris Causa UNSL",
    "year": "1999",
    "name": "Dr. Honoris Causa al Dr. Raúl Alfonsín",
    "description": "El reconocimiento se basó en el rol histórico de Alfonsín como el \"Padre de la Democracia moderna\" en Argentina y su fuerte vínculo con el sistema universitario nacional: Defensa de la Democracia y los Derechos Humanos: Se destacó su liderazgo en la transición democrática initiated en 1983, la creación de la CONADEP y el juzgamiento a las juntas militares, sentando bases éticas e institucionales en el país. Restablecimiento de la Autonomía Universitaria: Durante su presidencia se normalizaron las universidades nacionales, devolviendo la autonomía universitaria, el cogobierno y la gratuidad, principios fundamentales del sistema público argentino. Aporte Institucional y Republicano: Su trayectoria parlamentaria y ejecutiva en favor del diálogo político, el pluralismo y el fortalecimiento de las instituciones republicanas.",
    "resolution": "RCS -1-103/99",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 56,
    "category": "Honoris Causa UNSL",
    "year": "1998",
    "name": "Dr. Pedro Dionisio Lafourcade",
    "description": "Doctor Honoris Causa otorgada por la Universidad Nacional de San Luis (UNSL) al Dr. Pedro Dionisio Lafourcade: El Dr. Pedro Dionisio Lafourcade fue un referente indiscutido y pionero en el campo de la educación, la pedagogía universitaria y la evaluación educativa en la Argentina y América Latina. Sus aportes teóricos y metodológicos transformaron la manera de concebir el aprendizaje y la enseñanza en el nivel superior. Pionero en Evaluación Educativa: Autor de obras fundamentales (como Evaluación de los aprendizajes), que sentaron las bases científicas y cualitativas de la evaluación en las aulas latinoamericanas. Transformación Pedagógica: Impulsó la modernización curricular y la formación docente universitaria, promoviendo enfoques centrados en el desarrollo integral del estudiante. Proyección Institucional: Asesoró a múltiples universidades e instituciones educativas del país, dejando una marca profunda en la estructuración de carreras del área de las Ciencias Sociales y Humanas.",
    "resolution": "RCS -4-310/98",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 57,
    "category": "Honoris Causa UNSL",
    "year": "1994",
    "name": "Dr. Ilya Prigogine",
    "description": "",
    "resolution": "RCS - 217 / 1994",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 58,
    "category": "Honoris Causa UNSL",
    "year": "1992",
    "name": "Dr. Prof. Harold A. SCHERAGA",
    "description": "",
    "resolution": "RCS - 67 / 1992",
    "extra": "",
    "ambito": "Científico y Académico"
  },
  {
    "id": 59,
    "category": "Honoris Causa UNSL",
    "year": "1991",
    "name": "Prof. Gregorio Klimovsky",
    "description": "El Prof. Gregorio Klimovsky ha tenido una importante actuación en la enseñanza y la investigación dentro de la vida universitaria argentina. Es un académico con formación matemática cuya labor en el campo de la Lógica, la Epistemología y el Psicoanálisis es muy conocida, tanto por científicos sociales como por estudiosos de otras ciencias. Dedicó años a la investigación y la docencia, publicando una treintena de artículos en revistas nacionales y extranjeras, y es autor de más de doscientos artículos periodísticos o de divulgación. A su labor constante en pos de la jerarquización de la Universidad Argentina se suman importantes reconocimientos, como el \"PREMIO DE ROMA\" en 1989 y otros premios concedidos por sus aportes a la Lógica y a la Teoría de la Ciencia. Además de su perfil académico, es un predicador constante a favor de los Derechos Humanos y participó en la Comisión Nacional para la Desaparición de Personas (CONADEP).",
    "resolution": "RCS - 220 / 1991",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 60,
    "category": "Premio Mauricio Amílcar López",
    "year": "1994",
    "name": "Magdalena Ruiz Guiñazú",
    "description": "Mención/es: Madres de Plaza de Mayo (Mención Especial)",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 61,
    "category": "Premio Mauricio Amílcar López",
    "year": "1995",
    "name": "UNICEF Argentina",
    "description": "",
    "resolution": "RR-326/1995",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 62,
    "category": "Premio Mauricio Amílcar López",
    "year": "1996",
    "name": "Padre Farinello",
    "description": "Mención/es: Miguel Estrella",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 63,
    "category": "Premio Mauricio Amílcar López",
    "year": "1997",
    "name": "Hermana Paulina",
    "description": "Mención/es: APDH",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 64,
    "category": "Premio Mauricio Amílcar López",
    "year": "1998",
    "name": "Asociación Abuelas Plaza de Mayo",
    "description": "Mención/es: Dr. Strassera",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 65,
    "category": "Premio Mauricio Amílcar López",
    "year": "1999",
    "name": "Hna. Martha Peloni",
    "description": "Mención/es: Enrique Muñoz y Cátedra Paulo Freire",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 66,
    "category": "Premio Mauricio Amílcar López",
    "year": "2000",
    "name": "Leandro Chungo Despouy",
    "description": "Mención/es: Mauricio Lucero Daza",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 67,
    "category": "Premio Mauricio Amílcar López",
    "year": "2001",
    "name": "León Gieco",
    "description": "Mención/es: Martha Borruat",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 68,
    "category": "Premio Mauricio Amílcar López",
    "year": "2002",
    "name": "Alberto Morlachetti",
    "description": "Mención/es: Juan Carr, Domingo Vargas y Calidoscopio",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 69,
    "category": "Premio Mauricio Amílcar López",
    "year": "2003",
    "name": "Lila Amieva de Suárez",
    "description": "Mención/es: La Luciérnaga y Padre Ignacio Daminato",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 70,
    "category": "Premio Mauricio Amílcar López",
    "year": "2004",
    "name": "MEDH-Mendoza",
    "description": "Mención/es: Familia Nadal, Coordinadora de Padres San Luis y Víctor Heredia",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 71,
    "category": "Premio Mauricio Amílcar López",
    "year": "2005",
    "name": "Equipo Argentino de Antropología Forense",
    "description": "",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 72,
    "category": "Premio Mauricio Amílcar López",
    "year": "2006",
    "name": "Mons. Enrique Angelelli",
    "description": "Mención/es: Centro de Estudiantes Lucio Lucero y Madres del Dolor",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 73,
    "category": "Premio Mauricio Amílcar López",
    "year": "2007",
    "name": "Asamblea de Gualeguaychú",
    "description": "Mención/es: Mons. Jaime F. de Nevares y Colectivo de Derechos de Infancia y Adolescencia",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 74,
    "category": "Premio Mauricio Amílcar López",
    "year": "2008",
    "name": "Agrupación H.I.J.O.S.",
    "description": "Mención/es: Fundación Pequeños Gestos y Roberto Iglesias",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 75,
    "category": "Premio Mauricio Amílcar López",
    "year": "2009",
    "name": "Lilian Videla Bragagnolo",
    "description": "Mención/es: Victoria Donda Pérez y Rolando Concatti",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 76,
    "category": "Premio Mauricio Amílcar López",
    "year": "2010",
    "name": "Fundación María de los Ángeles",
    "description": "Mención/es: Dr. Enrique Ponce y Prof. Arturo Roig",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 77,
    "category": "Premio Mauricio Amílcar López",
    "year": "2011",
    "name": "Elba Lila Morales Torres",
    "description": "",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 78,
    "category": "Premio Mauricio Amílcar López",
    "year": "2012",
    "name": "Cacique Félix Díaz",
    "description": "",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 79,
    "category": "Premio Mauricio Amílcar López",
    "year": "2013",
    "name": "Lic. Nilda Esther Picco",
    "description": "",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 80,
    "category": "Premio Mauricio Amílcar López",
    "year": "2014",
    "name": "Dr. Norberto Foresti",
    "description": "Mención/es: Lic. Juana Mercedes Loizo y Lic. Mary Rinaldi",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 81,
    "category": "Premio Mauricio Amílcar López",
    "year": "2015",
    "name": "Asociación Civil Vínculos en Red",
    "description": "Mención/es: Prd. Alejandro Rodríguez y Mgtr. María del Rosario Badano",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 82,
    "category": "Premio Mauricio Amílcar López",
    "year": "2016",
    "name": "Alberto Puchmuller",
    "description": "Mención/es: Fundación Luisa Hairabedian",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 83,
    "category": "Premio Mauricio Amílcar López",
    "year": "2017",
    "name": "Abg. Pablo Salinas",
    "description": "Mención/es: Centro Educativo Isauro Arancibia y Raúl Ávila",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 84,
    "category": "Premio Mauricio Amílcar López",
    "year": "2018",
    "name": "Pueblo Famatina",
    "description": "",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 85,
    "category": "Premio Mauricio Amílcar López",
    "year": "2019",
    "name": "María Martínez de Canfaila",
    "description": "Mención/es: Cristian Rachid y Wenceslao Pedernera",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 86,
    "category": "Premio Mauricio Amílcar López",
    "year": "2020",
    "name": "Asociación de Bomberos Voluntarios «SCmt. Carlos Horacio Balduz»",
    "description": "",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 87,
    "category": "Premio Mauricio Amílcar López",
    "year": "2021",
    "name": "Dora Barrancos",
    "description": "Mención/es: Yolanda Bertazzo y Luis Alberto Santillán",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 88,
    "category": "Premio Mauricio Amílcar López",
    "year": "2022",
    "name": "Víctor Penchaszadeh",
    "description": "Mención/es: Segundo Valentín Ledesma y Dominga Zanglá (post mortem)",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 89,
    "category": "Premio Mauricio Amílcar López",
    "year": "2023",
    "name": "Curas en Opción por los Pobres",
    "description": "",
    "resolution": "",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 90,
    "category": "Premio Mauricio Amílcar López",
    "year": "2024",
    "name": "Colectivo Historias Desobedientes",
    "description": "Mención/es: Juan Pablo Melto y Juan Manuel Echandía (post mortem)",
    "resolution": "RR - 1822 / 2024",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 91,
    "category": "Premio Mauricio Amílcar López",
    "year": "2025",
    "name": "Madres de Plaza de Mayo Línea Fundadora “Taty Almeida” Lidia Stella Mercedes Miy Uranga de Almeida.",
    "description": "Mención/es: COLECTIVO DE MUJERES DE LA CIUDAD DE SAN LUIS QUE TRABAJA EN COMEDORES COMUNITARIOS Y MERENDEROS",
    "resolution": "RR - 2087 / 2025",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 92,
    "category": "Profesores Extraordinarios Eméritos UNSL",
    "year": "2026",
    "name": "Dr. Hugo Alberto Arturo Adrián Klappenbach",
    "description": "El Dr. Klappenbach cuenta con una trayectoria de más de 32 años como Profesor Titular Efectivo en la cátedra de Historia de la Psicología de la FaPsi. Graduado como Licenciado y Profesor en Psicología por la Universidad del Salvador y Doctor en Historia por la Universidad de Buenos Aires, ha dedicado su vida académica a la construcción del sistema científico nacional. Su prestigio trasciende las fronteras nacionales. Es Investigador Principal del CONICET y Co-director del Instituto de Ciencias Computacionales, Cognitivas, Psicológicas y Sociales (ICOPS). Ha presidido instituciones de relevancia global, como la Sociedad Interamericana de Psicología (SIP) entre 2015 y 2017, y la Sociedad Argentina de Historia de la Psicología (2019-2021). Ha dictado cursos de posgrado en universidades de Chile, Uruguay, Brasil, Cuba y Nicaragua. Se refleja en una vasta producción bibliográfica, que incluye los libros Historia de la Psicología Iberoamericana en autobiografías (2012) y The Palgrave Biographical Encyclopedia of Psychology in Latin America (2023), además de aproximadamente 115 artículos científicos y 77 capítulos de libros. Su compromiso con la educación pública se manifiesta en la formación de nuevas generaciones de investigadores, habiendo dirigido 17 tesis doctorales aprobadas, 16 tesis de licenciatura y a numerosos becarios/as del CONICET y otros sistemas de ciencia y técnica. A lo largo de su carrera, sus méritos han sido celebrados con múltiples galardones, entre los que destacan el Premio Interamericano de Psicología (2023), el Premio a la Consolidación de la Psicología Iberoamericana (2018) otorgado en España, y el Premio «Alberto Vilanova» por su contribución destacada al avance universitario de la disciplina.",
    "resolution": "RCS - 174 / 2026",
    "extra": "Facultad de Psicología (FaPsi)",
    "ambito": "Científico y Académico"
  },
  {
    "id": 93,
    "category": "Profesores Extraordinarios Eméritos UNSL",
    "year": "2026",
    "name": "Dr. Ricardo Daniel Enriz",
    "description": "Profesor Titular de Química Medicinal e Investigador Superior del CONICET. Su liderazgo institucional es notable, habiendo dirigido el CCT-CONICET San Luis y el IMIBIO-SL, además de gestionar proyectos financiados por organismos nacionales e internacionales que han permitido mejoras clave en el equipamiento de nuestra Casa. Con más de 240 trabajos científicos en química computacional y fisicoquímica, y una extensa red de colaboración en centros de excelencia en América y Europa, el Dr. Enriz ha sido un formador excepcional de recursos humanos, dirigiendo 25 tesis doctorales y forjando equipos de investigación interdisciplinarios que posicionan a la UNSL en la vanguardia científica global.",
    "resolution": "RCS - 2 / 2026",
    "extra": "Dra. Adriana Garro, Directora Departamento de Farmacia y el Dr. Francisco Garibotto, Director Departamento de Química elevan al Sr. Decano, y por su intermedio al Consejo Directivo FQByF",
    "ambito": "Científico y Académico"
  },
  {
    "id": 94,
    "category": "Profesores Extraordinarios Eméritos UNSL",
    "year": "2022",
    "name": "Dr. Carlos Horacio COSTA",
    "description": "El Dr. Carlos Horacio Costa cuenta con una destacada trayectoria cimentada en su formación como Licenciado y Doctor en Ciencias Geológicas por la UNSL, complementada con su título de Fotogeólogo obtenido en Colombia. A nivel internacional, ha desplegado su experiencia profesional y de campo en diversos países —como Puerto Rico, Nueva Zelanda, Chile y Jordania— respaldada por una prolífica producción científica enfocada en la Geología Estructural y la Tectónica. Su innegable vocación se evidencia en la formación global de recursos humanos, habiendo dirigido decenas de tesis de grado y posgrado, además de guiar a investigadores del CONICET. En el ámbito de la gestión institucional, dejó su impronta en nuestra Universidad como Vicedecano de la Facultad de Ciencias Físico Matemáticas y Naturales y como Director del Doctorado en Geología. Este sólido recorrido, sumado a su sostenida labor como miembro de comisiones nacionales de ciencia, tecnología y minería, le ha valido importantes distinciones a lo largo de su carrera, como el Premio de la Asociación Geológica Argentina, consolidando un legado intachable de excelencia académica y profesional.",
    "resolution": "RCS - 33 / 2022",
    "extra": "Dpto Geologia-FCFMyN",
    "ambito": "Científico y Académico"
  },
  {
    "id": 95,
    "category": "Profesores Extraordinarios Eméritos UNSL",
    "year": "2019",
    "name": "Dr. José Alejandro NEME",
    "description": "Formación Académica: Se graduó como Licenciado en Matemáticas (1975) y Doctor en Matemática (1982) en la misma UNSL. Relevancia Internacional: Realizó estancias de investigación y trabajó como profesor visitante en prestigiosas instituciones internacionales (Northwestern University, Universidad Autónoma de Barcelona, Universidad de Santiago de Compostela, entre otras). Aportes Científicos: Especialista en Teoría de Juegos y Elección Social. Cuenta con más de 50 publicaciones en revistas científicas de primer nivel internacional y colaboraciones con autoridades mundiales en su área de estudio. Labor Institucional y en CONICET: Es Investigador Principal del CONICET, organismo en el que participa desde 1983, y fue Director del Instituto de Matemática Aplicada San Luis (IMASL) entre 2001 y 2016. Premios Destacados: Recibió el Premio Konex al Mérito en Teoría Económica (2016) y fue declarado Personalidad Destacada en Ciencia de la Provincia de San Luis el mismo año. Docencia y Gestión: Ha dirigido proyectos de investigación ininterrumpidamente desde 1986, formando a numerosos becarios y tesistas de posgrado de todo el país. Además, ocupó múltiples cargos directivos y de representación en la UNSL y fue Vicepresidente de la Unión Matemática Argentina (UMA).",
    "resolution": "RCS - 366 / 2019",
    "extra": "Docentes FCFMyN",
    "ambito": "Científico y Académico"
  },
  {
    "id": 96,
    "category": "Profesores Extraordinarios Eméritos UNSL",
    "year": "2012",
    "name": "Dr. Julio Ciro BENEGAS",
    "description": "",
    "resolution": "",
    "extra": "Consejo Directivo y el Departamento de Física FCFMyN",
    "ambito": "Científico y Académico"
  },
  {
    "id": 97,
    "category": "Profesores Extraordinarios Eméritos UNSL",
    "year": "2011",
    "name": "Dr. Felipe Joaquín ZO",
    "description": "El Dr. Felipe Joaquín Zo es un referente indiscutido de la ciencia matemática. Egresado con Medalla de Oro de la UNCuyo (1968) y Doctor por la Universidad de Minnesota (1975), su impacto global quedó inmortalizado con el célebre \"Teorema de Zo\", una herramienta fundamental en el Análisis Armónico. A lo largo de su trayectoria, forjó un legado incalculable sostenido en tres pilares:Ciencia de excelencia: Investigador Principal del CONICET, autor de decenas de artículos internacionales y coautor de libros de texto esenciales para la educación de grado y posgrado. Formación y docencia: Profesor Visitante en prestigiosas universidades de Estados Unidos, España y Argentina, y mentor de investigadores que hoy ocupan lugares de privilegio en el país y el mundo. Compromiso institucional: Presidente de la Unión Matemática Argentina, evaluador del Ministerio de Educación y la CONEAU, y actor clave en los consejos de gestión de la Universidad Nacional de San Luis. Galardonado por la Academia Nacional de Ciencias Exactas, Físicas y Naturales, y calificado por sus pares de renombre mundial como \"uno de los matemáticos de mayor prestigio en Argentina\", su vida es un testimonio de vocación, excelencia y trabajo incansable",
    "resolution": "RCS - 161/2011",
    "extra": "Docentes e Investigadores de la FCFMyN",
    "ambito": "Científico y Académico"
  },
  {
    "id": 98,
    "category": "Profesores Extraordinarios Eméritos UNSL",
    "year": "2010",
    "name": "Dr. Roberto OLSINA",
    "description": "El Dr. Roberto Antonio Olsina posee una eminente trayectoria forjada en nuestra Universidad Nacional de San Luis, donde se graduó como Químico, Licenciado y, en 1977, como Doctor en Química, enriqueciendo su perfil con estancias posdoctorales en Holanda y España. Desde 1966 ha desarrollado una vocación docente ininterrumpida hasta alcanzar el cargo de Profesor Titular, dejando un legado invaluable en la formación de recursos humanos mediante la dirección de numerosas tesis de posgrado y la consolidación de sólidos equipos de investigadores y becarios. Como miembro del CONICET desde 1983 y en su rol de Investigador Principal, impulsó y dirigió el INQUISAL y la Maestría en Química Analítica, avalado por una prolífica producción que supera los 150 artículos de alto impacto internacional, tres patentes y notables aportes a la química analítica contemporánea. A su brillante perfil científico se le suma un profundo compromiso institucional y de gestión: fue Decano de la Facultad de Química, Bioquímica y Farmacia con el retorno de la democracia, y se desempeñó como Vicerrector y Secretario de Ciencia y Técnica de la UNSL entre 2001 y 2007. Su rol como gran impulsor y primer presidente de la Asociación Argentina de Químicos Analíticos, junto con prestigiosas distinciones como el Premio Universitas, el Premio Reynaldo Vanossi y el Premio Konex en Ciencia y Tecnología, coronan una vida dedicada al servicio, el liderazgo y la excelencia académica.",
    "resolution": "RCS - 277/ 2010",
    "extra": "Docentes e Investigadores del Área de Química Analítica FQByF",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 99,
    "category": "Profesores Extraordinarios Eméritos UNSL",
    "year": "2008",
    "name": "Dr. Jorge Andres ZGRABLICH",
    "description": "El Consejo Superior de la Universidad Nacional de San Luis aprobó por unanimidad, el 25 de noviembre de 2008, la designación del Dr. Jorge Andrés Zgrablich como Profesor Extraordinario Emérito, en reconocimiento a su brillante trayectoria académica, científica y humana. Licenciado en Física y Doctor por la Universidad Nacional de Cuyo, con estudios posdoctorales en Estados Unidos, el Dr. Zgrablich se consolidó como un referente internacional gracias a investigaciones pioneras como la resolución de la cascada tridimensional de nucleones y el desarrollo del Modelo Gaussiano Generalizado para la adsorción de gases. A lo largo de su carrera alcanzó las máximas categorías investigativas en el CONICET, publicó alrededor de doscientos trabajos internacionales, fundó el Laboratorio de Ciencia de Superficies y Medios Porosos, y creó la Maestría homónima en la institución. Su excelencia fue galardonada con premios como el \"Universitas\", el \"Juan José Giambiaggi\" y la beca de la Fundación Guggenheim, llegando a presidir la Asociación Física Argentina. Más allá de sus innegables méritos científicos, el Dr. Zgrablich dejó una profunda huella institucional como estrecho colaborador del ex Rector Mauricio Amílcar López; y tras verse obligado a exiliarse en México en 1976 por la dictadura cívico-militar, destacó por su incansable defensa de los derechos humanos al desarrollar sistemas informáticos para documentar y organizar los datos de los treinta mil desaparecidos, siendo recordado siempre por sus colegas como un formador de una inmensa generosidad, respeto y entrega incondicional.",
    "resolution": "RCS - 276/08",
    "extra": "Docentes de las Facultades de Ciencias Físico Matemáticas y Naturales, de Química, Bioquímica y Farmacia y de Ingeniería y Ciencias Económico-Sociales",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 100,
    "category": "Premio Polo Godoy Rojo",
    "year": "2013",
    "name": "Juan Pablo Melto",
    "description": "Mención/es: Beba Di Genaro y Luis Vilchez",
    "resolution": "",
    "extra": "Pintura",
    "ambito": "Artístico y Cultural"
  },
  {
    "id": 101,
    "category": "Premio Polo Godoy Rojo",
    "year": "2014",
    "name": "Javier Bautista",
    "description": "Mención/es: Franco Cadelago y a Edgar Atilio Palacio",
    "resolution": "",
    "extra": "Danzas",
    "ambito": "Artístico y Cultural"
  },
  {
    "id": 102,
    "category": "Premio Polo Godoy Rojo",
    "year": "2015",
    "name": "Hugo Gez",
    "description": "Mención/es: Chelco Rezzano y a la familia de José La Vía",
    "resolution": "",
    "extra": "Fotografía",
    "ambito": "Artístico y Cultural"
  },
  {
    "id": 103,
    "category": "Premio Polo Godoy Rojo",
    "year": "2016",
    "name": "Antonio Miguel Nevot",
    "description": "Mención/es: Carlos Cornejo",
    "resolution": "",
    "extra": "Escultura",
    "ambito": "Artístico y Cultural"
  },
  {
    "id": 104,
    "category": "Premio Polo Godoy Rojo",
    "year": "2017",
    "name": "Sergio Muriel",
    "description": "Mención/es: Raúl Ávila",
    "resolution": "",
    "extra": "Música",
    "ambito": "Artístico y Cultural"
  },
  {
    "id": 105,
    "category": "Premio Polo Godoy Rojo",
    "year": "2018",
    "name": "Marcelo Di Gennaro",
    "description": "Mención/es: Teatro Estudio Arte",
    "resolution": "",
    "extra": "Teatro",
    "ambito": "Artístico y Cultural"
  },
  {
    "id": 106,
    "category": "Premio Polo Godoy Rojo",
    "year": "2019",
    "name": "Lidio Sotomayor",
    "description": "Mención/es: Daniel Orellano, Graciela Barón y la Escuela Veneciana de Arte",
    "resolution": "",
    "extra": "Pintura",
    "ambito": "Artístico y Cultural"
  },
  {
    "id": 107,
    "category": "Premio Polo Godoy Rojo",
    "year": "2020",
    "name": "José Luis Rosas",
    "description": "Mención/es: Subprograma de Intercolegiales Culturales",
    "resolution": "",
    "extra": "Cine y/o Artes Audiovisuales",
    "ambito": "Artístico y Cultural"
  },
  {
    "id": 108,
    "category": "Premio Polo Godoy Rojo",
    "year": "2021",
    "name": "Gustavo Romero Borri",
    "description": "",
    "resolution": "",
    "extra": "Letras",
    "ambito": "Artístico y Cultural"
  },
  {
    "id": 109,
    "category": "Premio Polo Godoy Rojo",
    "year": "2022",
    "name": "Carlos Hugo Sosa",
    "description": "Mención/es: Francisco Sáez",
    "resolution": "RR - 640 / 2022",
    "extra": "Danzas",
    "ambito": "Artístico y Cultural"
  },
  {
    "id": 110,
    "category": "Premio Polo Godoy Rojo",
    "year": "2023",
    "name": "Raúl Cottone",
    "description": "Mención/es: Fabricio Aguilar y Luis Martín",
    "resolution": "",
    "extra": "Fotografía",
    "ambito": "Artístico y Cultural"
  },
  {
    "id": 111,
    "category": "Premio Polo Godoy Rojo",
    "year": "2024",
    "name": "Julio Melto",
    "description": "Mención/es: Mariela Fernanda Paniagua (Post Mortem) y Luis Waltehr Lucero (Post Mortem)",
    "resolution": "RR - 537 / 2024",
    "extra": "Escultura",
    "ambito": "Artístico y Cultural"
  },
  {
    "id": 112,
    "category": "Premio Polo Godoy Rojo",
    "year": "2025",
    "name": "Daniela Calderon",
    "description": "Mención/es: Sergio Cattaneo y Federico López Conde (Norte Libre)",
    "resolution": "",
    "extra": "Música",
    "ambito": "Artístico y Cultural"
  },
  {
    "id": 113,
    "category": "Premio Polo Godoy Rojo",
    "year": "2025",
    "name": "Angel Toledo",
    "description": "Mención/es: Silvana Spagnotto",
    "resolution": "RR - 503 / 2025",
    "extra": "Grabado",
    "ambito": "Artístico y Cultural"
  },
  {
    "id": 114,
    "category": "Premio Polo Godoy Rojo",
    "year": "2026",
    "name": "Cine y/o Artes Audiovisuales a Martín Héctor Ochoa Martín, categoría Teatro - Grupo de Teatro Popular Los Pirípulos,",
    "description": "Mención/es: Director Mario Alberto Palasí",
    "resolution": "R.R. N° 442/26",
    "extra": "Teatro y Cine y/o Artes Visuales",
    "ambito": "Artístico y Cultural"
  },
  {
    "id": 115,
    "category": "Premio Defensa de la Educación",
    "year": "2017",
    "name": "Mg. René Ramírez Gallegos",
    "description": "Ex Ministro de Educación de la República del Ecuador, por sus contribuciones a la transformación de la educación superior ecuatoriana.",
    "resolution": "",
    "extra": "",
    "ambito": "Educativo e Institucional"
  },
  {
    "id": 116,
    "category": "Premio Defensa de la Educación",
    "year": "2018",
    "name": "Dr. Francisco Tamarit",
    "description": "Ex Rector de la Universidad Nacional de Córdoba (UNC) y Coordinador General de la CRES.",
    "resolution": "",
    "extra": "",
    "ambito": "Educativo e Institucional"
  },
  {
    "id": 117,
    "category": "Premio Defensa de la Educación",
    "year": "2019",
    "name": "Dr. Guillermo Jaim Etcheverry",
    "description": "Médico, investigador y ex Rector de la Universidad de Buenos Aires (UBA), por su visión crítica de la educación.",
    "resolution": "",
    "extra": "",
    "ambito": "Educativo e Institucional"
  },
  {
    "id": 118,
    "category": "Premio Defensa de la Educación",
    "year": "2020",
    "name": "Dra. María Teresa Sirvent",
    "description": "Licenciada en Ciencias de la Educación, Socióloga, Investigadora Principal del CONICET y Profesora Consulta de la UBA",
    "resolution": "",
    "extra": "",
    "ambito": "Educativo e Institucional"
  },
  {
    "id": 119,
    "category": "Premio Defensa de la Educación",
    "year": "2021",
    "name": "Dr. Álvaro Maglia Canzani",
    "description": "Secretario Ejecutivo de la Asociación de Universidades Grupo Montevideo (AUGM).",
    "resolution": "",
    "extra": "",
    "ambito": "Educativo e Institucional"
  },
  {
    "id": 120,
    "category": "Premio Defensa de la Educación",
    "year": "2022",
    "name": "Dr. Hugo Juri",
    "description": "Ex Rector de la Universidad Nacional de Córdoba y referente de la educación superior.",
    "resolution": "",
    "extra": "",
    "ambito": "Educativo e Institucional"
  },
  {
    "id": 121,
    "category": "Premio Defensa de la Educación",
    "year": "2023",
    "name": "Olga Susana Pelayes (In Memoriam) y María Avelina Rinaldi (In Memoriam)",
    "description": "Docentes de la UNSL, por su trayectoria y compromiso con la defensa de la escuela pública.",
    "resolution": "",
    "extra": "",
    "ambito": "Educativo e Institucional"
  },
  {
    "id": 122,
    "category": "Premio Defensa de la Educación",
    "year": "2024",
    "name": "Dr. Roberto Escalante Semerena",
    "description": "Secretario General de la Red Unión de Universidades de América Latina y el Caribe (UDUAL).",
    "resolution": "RR - 244 / 2024",
    "extra": "",
    "ambito": "Educativo e Institucional"
  },
  {
    "id": 123,
    "category": "Premio Rector Alberto Francisco Puchmüller",
    "year": "2024",
    "name": "ASOCIACIÓN CIVIL PIRCAS",
    "description": "",
    "resolution": "Resolucion Decanal 11 - 113 / 2025",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 124,
    "category": "Premio Rector Alberto Francisco Puchmüller",
    "year": "2023",
    "name": "Sra. CECILIA FERNÁNDEZ DE GABRIEL",
    "description": "",
    "resolution": "Resolucion Decanal 11 - 49 / 2024",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 125,
    "category": "Premio Rector Alberto Francisco Puchmüller",
    "year": "2022",
    "name": "LIC. ALBERTO PEDRO TROSSERO",
    "description": "Mención/es: DR. JUAN PEDRO JOSÉ CEÑAL",
    "resolution": "Resolucion Decanal 11 - 404 / 2022",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 126,
    "category": "Premio Rector Alberto Francisco Puchmüller",
    "year": "2021",
    "name": "Padre Pablo Roberto Tissera (Post mortem)",
    "description": "Mención/es: Juan Carlos Ortega (artista, post mortem), Fundación Espacios Verdes y Escuela N° 288 \"Antonio Esteban Agüero\".",
    "resolution": "Resolucion Decanal 303/21",
    "extra": "",
    "ambito": "Social y Derechos Humanos"
  },
  {
    "id": 127,
    "category": "Premio Alberto Turco Geraiges",
    "year": "2020",
    "name": "Familia de Alberto Geraiges",
    "description": "",
    "resolution": "",
    "extra": "",
    "ambito": "Educativo e Institucional"
  },
  {
    "id": 128,
    "category": "Premio Alberto Turco Geraiges",
    "year": "2021",
    "name": "Carlos Norberto Smargiassi",
    "description": "",
    "resolution": "",
    "extra": "",
    "ambito": "Educativo e Institucional"
  },
  {
    "id": 129,
    "category": "Premio Alberto Turco Geraiges",
    "year": "2022",
    "name": "Gladys Clara Gatica",
    "description": "",
    "resolution": "R.R N° 2631/22",
    "extra": "",
    "ambito": "Educativo e Institucional"
  },
  {
    "id": 130,
    "category": "Premio Alberto Turco Geraiges",
    "year": "2023",
    "name": "Roberto Vallejos",
    "description": "",
    "resolution": "R.R. N° 2171/23",
    "extra": "",
    "ambito": "Educativo e Institucional"
  },
  {
    "id": 131,
    "category": "Premio Alberto Turco Geraiges",
    "year": "2024",
    "name": "Alba Evelia Lucero",
    "description": "",
    "resolution": "R.R Nº 1783/2024-Rec RR 1910/2024",
    "extra": "",
    "ambito": "Educativo e Institucional"
  },
  {
    "id": 132,
    "category": "Premio Alberto Turco Geraiges",
    "year": "2025",
    "name": "Carina Roxana Velázquez",
    "description": "",
    "resolution": "R.R. N° 2040/25",
    "extra": "",
    "ambito": "Educativo e Institucional"
  }
];
