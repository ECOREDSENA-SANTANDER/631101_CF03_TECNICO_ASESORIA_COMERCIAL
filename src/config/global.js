export default {
  global: {
    Name: 'Tecnologías de la Información y la Comunicación (TIC)',
    Description:
      'En este componente se abordará la selección, uso y verificación de herramientas de Tecnologías de la Información y la Comunicación (TIC), orientadas a la gestión eficiente de la información. Se desarrollarán conocimientos para aplicar procedimientos, estándares, manuales de funcionamiento y buenas prácticas, de acuerdo con los requerimientos tecnológicos, las necesidades identificadas y el contexto del proceso comercial.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
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
        titulo: 'La información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Datos, información y conocimiento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia de la información',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fuentes de información',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Técnicas de recolección de información',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Análisis de la información',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Variables de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de variables en el análisis de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación de las variables según su relación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procesamiento de la información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Análisis de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Antecedentes del análisis de datos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de análisis de datos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas de análisis de datos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Técnicas de evaluación de la información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Informes y documentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Informe',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos de informes',
            hash: 't_6_2',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Análisis de datos',
      significado:
        'Proceso de examinar, organizar, comparar e interpretar datos para identificar comportamientos, tendencias o relaciones y obtener información útil para la toma de decisiones.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Conjunto organizado de datos almacenados de manera estructurada para facilitar su registro, consulta, actualización y utilización.',
    },
    {
      termino: 'Conocimiento',
      significado:
        'Resultado de interpretar y utilizar la información para comprender una situación, generar aprendizajes o fundamentar una decisión.',
    },
    {
      termino: 'Datos',
      significado:
        'Representaciones básicas de hechos, características o situaciones que pueden expresarse mediante números, palabras, fechas, categorías o registros.',
    },
    {
      termino: 'Encuesta',
      significado:
        'Técnica de recolección que utiliza preguntas previamente definidas para obtener información de un grupo de personas.',
    },
    {
      termino: 'Entrevista',
      significado:
        'Técnica de recolección de información basada en una conversación orientada por preguntas relacionadas con un propósito determinado.',
    },
    {
      termino: 'Fuente de información',
      significado:
        'Recurso del cual pueden obtenerse datos o conocimientos, como personas, documentos, bases de datos, registros, publicaciones o plataformas digitales.',
    },
    {
      termino: 'Información',
      significado:
        'Resultado de organizar, relacionar y contextualizar datos para otorgarles significado y utilidad.',
    },
    {
      termino: 'Informe',
      significado:
        'Documento que presenta de manera organizada información sobre una actividad, situación o proceso para comunicar resultados, conclusiones o recomendaciones.',
    },
    {
      termino: 'Minería de datos',
      significado:
        'Conjunto de técnicas utilizadas para explorar datos e identificar patrones, relaciones o tendencias que pueden aportar información útil.',
    },
    {
      termino: 'Observación',
      significado:
        'Técnica de recolección que consiste en registrar de manera organizada hechos, situaciones o comportamientos relacionados con el propósito establecido.',
    },
    {
      termino: 'Procesamiento de la información',
      significado:
        'Conjunto de actividades mediante las cuales los datos se revisan, depuran, clasifican, organizan y preparan para su análisis e interpretación.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'Proceso de seleccionar una alternativa o acción a partir del análisis de información pertinente y confiable.',
    },
    {
      termino: 'Variable cualitativa',
      significado:
        'Característica que representa cualidades o categorías, como el tipo de cliente, medio de pago o nivel de satisfacción.',
    },
    {
      termino: 'Variable cuantitativa',
      significado:
        'Característica expresada mediante valores numéricos que pueden medirse o contarse, como número de compras, edad o valor de una venta.',
    },
  ],
  referencias: [
    {
      referencia:
        'Espinoza Freire, E. E. (2018). Las variables y su operacionalización en la investigación educativa. Conrado, 14(65), 39–49.',
      link: '',
    },
    {
      referencia:
        'Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: Las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Education.',
      link: '',
    },
    {
      referencia: 'IBM. (2025). Data quality dimensions. IBM.',
      link: '',
    },
    {
      referencia: 'IBM. (s. f.). Data quality dimensions. IBM Documentation.',
      link: '',
    },
    {
      referencia: 'IBM. (s. f.). Managing data quality. IBM Documentation.',
      link: '',
    },
    {
      referencia:
        'Lind, D. A., Marchal, W. G., & Wathen, S. A. (2019). Estadística aplicada a los negocios y la economía (17.ª ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia: 'QuestionPro. (s. f.). Análisis de datos. QuestionPro.',
      link: '',
    },
    {
      referencia:
        'QuestionPro. (2026). Análisis descriptivo: Qué es y mejores consejos para investigadores. QuestionPro.',
      link: '',
    },
    {
      referencia:
        'SAS Institute Inc. (s. f.). Minería de datos: Qué es y por qué es importante. SAS.',
      link: '',
    },
    {
      referencia:
        'Comisión Económica para América Latina y el Caribe. (s. f.). Biblioguías: Gestión del conocimiento (GDC): Datos, información y conocimiento. CEPAL.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier del Carmen Martínez Pérez',
          cargo: 'Instructor técnico',
          centro: 'Regional Bolívar - Centro de Comercio y Servicio',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
}
