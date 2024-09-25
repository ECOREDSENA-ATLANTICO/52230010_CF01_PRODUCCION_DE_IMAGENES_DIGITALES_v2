export default {
  global: {
    componenteFormativo: 'Diseño y creatividad publicitaria',
    descripcionCurso:
      'La producción de imágenes digitales facilita el desarrollo de estrategias creativas y la elaboración de diversos tipos de logos. Además, permite el diseño de un briefing creativo alineado con las necesidades del cliente y las expectativas de las empresas, asegurando así que los elementos visuales diseñados cumplan con los objetivos establecidos en la estrategia comunicativa del proyecto.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tipos de logos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Briefing',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Idea creativa',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Psicología del color',
      referencia: 'Manual de imagen corporativa del SENA 2022-2026',
      tipo: 'Página web',
      link:
        'https://sena.edu.co/es-co/transparencia/ProyectoNorma/res_1-1910_manual_identidad_corporativa_2022.pdf ',
    },
    {
      tema: 'Diseño de logos ',
      referencia: 'APA Diseño Gráfico. Curso logotipos',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=4mF9k7nEIwc',
    },
  ],
  glosario: [
    {
      termino: 'Color corporativo',
      significado:
        'colores que representan a una empresa, usados consistentemente en su logotipo y materiales de marca.',
    },
    {
      termino: 'Identidad de marca',
      significado:
        'conjunto de elementos visuales y conceptuales que definen la percepción de una marca en el mercado, con el logotipo siendo un componente clave de esta identidad',
    },
    {
      termino: 'Identidad visual',
      significado:
        'conjunto de elementos gráficos que identifican visualmente a una marca, incluidos colores, tipografías y logotipos.',
    },
    {
      termino: 'Logotipo:',
      significado:
        'es un símbolo compuesto por elementos gráficos, texto e imagen que sirve como el identificador visual de una empresa o marca, representando su identidad de maneraúnica y reconocible.',
    },
    {
      termino: 'Paleta de colores:',
      significado:
        'conjunto de colores seleccionados estratégicamente para un logotipo, basándose en la psicología del color y la identidad de la marca para evocar emociones específicasen el público.',
    },
    {
      termino: 'Psicología del color',
      significado:
        'estudio de cómo los colores afectan las emociones y percepciones de las personas, lo que influye en la elección de colores en un logotipo para transmitir los valores de la marca.',
    },
    {
      termino: 'Tipografía',
      significado:
        'conjunto de caracteres diseñados con un estilo específico que se utilizan en un logotipo para transmitir la personalidad y la identidad de la marca.',
    },
    {
      termino: 'Símbolo',
      significado:
        'Elemento gráfico que puede representar un concepto o idea, usado en los logotipos para transmitir el mensaje de la marca.',
    },
  ],
  referencias: [
    {
      referencia:
        'Pricken, Mario (2004). Publicidad Creativa. Barcelona: Ed. Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'Bazurto Loor, Moreira, V; García, D; Salazar, J. (2011). Brief Creativo: PepsiCo. Consultado el 21 denoviembre de 2014',
      link:
        'https://es.scribd.com/doc/68381546/Muestra-de-Brief-Creativo-Pepsi-Co',
    },
    {
      referencia: 'Chun, Isabel (2012). HK Starbucks Drink Campaign. ',
      link: '',
    },
    {
      referencia:
        'Douglas, S. (2011). The Guide to Great Logos. The Logo Factory Inc.',
      link: '',
    },
    {
      referencia:
        'García Guardia, M. (2009). El planner, clave de la publicidad eficaz. Estratega y orientador de creatividad.',
      link: '',
    },
    {
      referencia:
        'García-Uceda. Mariola. (2011). Las claves de la publicidad. Consultado el 21 de noviembre de 2014.',
      link:
        'http://books.google.com.co/books?id=5LDqKtCDMK8C&printsec=frontcover&dq=claves+de+la+publicidad&hl=en&sa=X&ei=6uiAVMCI4WeNsWqgrgM&ved=0CCUQ6AEwAA#v=onepage&q=claves%20de%20la%20publicidad&f=false ',
    },
    {
      referencia:
        'Gonzalez-Oñate, C. (2009). Estrategia de comunicación publicitaria para el lanzamiento de una marca.',
      link:
        'https://repositori.uji.es/xmlui/bitstream/handle/10234/22650/32448.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'gczarrias.com (Sin fecha) Diferencias entre un logotipo, un isotipo, un imagotipo, una marca. ',
      link:
        'http://zarrias.com/ALUMNOS/archivos/diseno/Diferencias%20entre%20un%20logotipo.pdf ',
    },
    {
      referencia:
        'Gómez, David (2013). La psicología del color en marketing (infografía). Consultado el 20 de noviembre de 2014.',
      link: 'http://bienpensado.com/la-psicologia-del-color-en-marketing/',
    },
    {
      referencia: 'Heredia, Héctor (2014) Diseño de Logotipo ',
      link: 'https://www.youtube.com/watch?v=NDBLrmJ6XrU',
    },
    {
      referencia:
        'Orphangrey (2014) Diseño de Logo. Los Diferentes Logos Que Existen. ',
      link: 'https://www.youtube.com/watch?v=qxbJd_CIfGY',
    },
    {
      referencia:
        'Roca, D. (2007). El" briefing" creativo en las agencias de publicidad: una aproximación cualitativa al caso español. ZER: Revista de Estudios de Comunicación= Komunikazio Ikasketen Aldizkaria, 12(23).',
      link: 'https://ojs.ehu.eus/index.php/Zer/article/view/3652/3284 ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable de Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz Elena Montoya Rendón',
          cargo: 'Asesora Pedagógica',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda',
        },
        {
          nombre: 'Marcela María Cardona Molina',
          cargo: 'Instructora',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda',
        },
        {
          nombre: 'Gilberto Herrera Delgans',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres ',
          cargo: 'Diseñador web',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculadorde recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculadorde recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
