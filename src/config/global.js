export default {
  global: {
    componenteFormativo:
      'Condiciones de bioseguridad frente al programa estructurado',
    descripcionCurso:
      'El componente formativo aborda la bioseguridad en acuicultura, destacando la identificación y control de riesgos mediante el sistema HACCP. Incluye principios, procedimientos de verificación, y la importancia de mantener registros para garantizar la inocuidad alimentaria y la seguridad del personal. Además, proporciona guías para el manejo de desechos, protección ambiental y conservación de la flora y fauna, buscando un entorno acuícola sostenible.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        titulo: 'Examen de puntos críticos en el programa de bioseguridad',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Mapa de riesgos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Sistema de Análisis de Peligros y de Puntos Críticos de Control (HACCP)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Verificación',
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
        download: 'downloads/72340050_CF03_DU.pdf',
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
      tema: 'Examen de puntos críticos en el programa de bioseguridad.',
      referencia:
        'Universidad de Zaragoza. (2013). Bioseguridad en Acuicultura.',
      tipo: 'Documento',
      link:
        'https://www.mapa.gob.es/es/ganaderia/temas/sanidad-animal-higiene-ganadera/11-a-bioseguridad_acuicultura_tcm30-111507.pdf',
    },
    {
      tema: 'Mapa de riesgos.',
      referencia: 'ICA. (s.f.). Acuícolas.',
      tipo: 'Página web',
      link:
        'https://www.ica.gov.co/getdoc/b082c759-18c7-47da-bed6-0ebe76b48fe0/acuicolas-(1).aspx',
    },
    {
      tema:
        'Sistema de Análisis de Peligros y de Puntos Críticos de Control (HACCP).',
      referencia:
        'FAO. (s.f.). Manual de control de calidad de los productos de la acuicultura.',
      tipo: 'Documento',
      link:
        'https://www.infopesca.org/sites/default/files/complemento/publilibreacceso/320/manual-de-control-de-calidad-de-los-productos-de-la-acuicultura.pdf',
    },
    {
      tema:
        'Sistema de Análisis de Peligros y de Puntos Críticos de Control (HACCP).',
      referencia:
        'OMS. (2012). Código de prácticas para el pescado y los productos pesqueros.',
      tipo: 'Documento',
      link: 'https://www.fao.org/4/i2382s/i2382s.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acciones correctivas',
      significado:
        'procedimientos aplicados cuando se detecta que un límite crítico no ha sido respetado.',
    },
    {
      termino: 'Acciones preventivas',
      significado:
        'medidas implementadas para evitar la ocurrencia de riesgos en el proceso.',
    },
    {
      termino: 'Evaluación de riesgos',
      significado:
        'identificación y análisis de los peligros que pueden afectar la seguridad de un alimento.',
    },
    {
      termino: 'HACCP',
      significado:
        'sistema de análisis de peligros y puntos críticos de control que asegura la inocuidad alimentaria.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'garantía de que un alimento no causará daño al consumidor cuando se prepare y consuma.',
    },
    {
      termino: 'Límites críticos',
      significado:
        'parámetros que no deben ser excedidos para mantener la seguridad en un proceso alimentario.',
    },
    {
      termino: 'Monitorización',
      significado:
        'observación y registro continuo de un proceso para asegurar el cumplimiento de los límites críticos.',
    },
    {
      termino: 'Puntos críticos de control',
      significado:
        'etapas donde se aplican medidas para prevenir, eliminar o reducir riesgos a niveles aceptables.',
    },
    {
      termino: 'Registro de control',
      significado:
        'documento donde se anotan los resultados de la monitorización y verificación de un proceso.',
    },
    {
      termino: 'Verificación',
      significado:
        'proceso de comprobación del cumplimiento de los procedimientos establecidos en HACCP.',
    },
  ],
  referencias: [
    {
      referencia:
        'FAO. (2011). <em>Instrumentos de la FAO sobre la bioseguridad</em>.',
      link: 'http://www.fao.org/docrep/010/a1140s/a1140s00.htm',
    },
    {
      referencia:
        'FAO. (2011). <em>Sistema de análisis de peligros y de puntos críticos de control (HACCP) y directrices para su aplicación</em>.',
      link: 'http://www.fao.org/docrep/005/y1579s/y1579s03.htm',
    },
    {
      referencia:
        'Departamento de Agricultura de Estados Unidos, Programa Nacional de Acreditación Veterinaria. (2011). <em>Módulo 15: Bioseguridad y prevención de enfermedades en la acuicultura</em>.',
      link:
        'http://www.cfsph.iastate.edu/pdf-library/Acreditacion-Veterinaria/NVAP-Mod-15-AQBIO.pdf',
    },
    {
      referencia:
        'Instituto de Patología Animal, Facultad de Ciencias Veterinarias, Universidad de Chile. (s.f.). <em>Conceptos de bioseguridad. Sistemas productivos acuícolas</em>.',
      link:
        'http://www.cesaibc.org/sitio/archivos/7-BIOSEGURIDAD%20ACUICOLA_141015153104.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Frank Esquivel Acosta',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y servicios - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
