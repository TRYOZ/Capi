/* ==========================================================================
   Grupo Los Capilleros — Product Data & Translations
   ========================================================================== */

const SITE_DATA = {
  company: {
    name: 'Grupo Los Capilleros',
    legal: 'A.T. CAPI-LA CURVA S.L.',
    phone: '+34 950 34 XX XX',
    email: 'info@grupoloscapilleros.com',
    whatsapp: '+34600000000',
    address: {
      street: 'Paraje Los Capilleros, s/n',
      city: 'Aguadulce',
      province: 'Almería',
      zip: '04720',
      country: 'España'
    },
    stats: {
      years: 15,
      countries: 12,
      tons: 5000,
      growers: 30
    }
  },

  // Months array for reference
  months: ['E','F','M','A','M','J','J','A','S','O','N','D'],

  products: {
    peppers: {
      id: 'peppers',
      icon: '🫑',
      items: [
        {
          id: 'california-bell',
          source: 'own',
          season: [1,1,1,1,1,1,0,0,1,1,1,1],
          colors: ['red','green','yellow','orange'],
          calibres: '60-80mm, 80-100mm, 100-120mm',
          packaging: '5kg box (40x30x12cm), 3kg flow-pack',
          palletization: '80 boxes/europallet, 96 boxes/UK pallet',
        },
        {
          id: 'lamuyo',
          source: 'own',
          season: [1,1,1,1,1,0,0,0,0,1,1,1],
          colors: ['red','green'],
          calibres: '180-220mm, 220-260mm',
          packaging: '5kg box (40x30x12cm)',
          palletization: '80 boxes/europallet',
        },
        {
          id: 'palermo',
          source: 'sourced',
          season: [1,1,1,1,1,0,0,0,0,1,1,1],
          colors: ['red','yellow','orange'],
          calibres: '150-200mm',
          packaging: '3kg box, 5kg box',
          palletization: '80-96 boxes/pallet',
        },
        {
          id: 'italian-green',
          source: 'sourced',
          season: [1,1,1,1,1,0,0,0,1,1,1,1],
          colors: ['green'],
          calibres: '150-200mm, 200-250mm',
          packaging: '5kg box (40x30x12cm)',
          palletization: '80 boxes/europallet',
        }
      ]
    },
    tomatoes: {
      id: 'tomatoes',
      icon: '🍅',
      items: [
        {
          id: 'vine-cluster',
          source: 'own',
          season: [1,1,1,1,1,1,0,0,1,1,1,1],
          colors: ['red'],
          calibres: '57-67mm (M), 67-82mm (G), 82-102mm (GG)',
          packaging: '6kg box, flowpack trays',
          palletization: '80 boxes/europallet',
        },
        {
          id: 'round-loose',
          source: 'own',
          season: [1,1,1,1,1,1,0,0,1,1,1,1],
          colors: ['red'],
          calibres: '57-67mm, 67-82mm, 82-102mm',
          packaging: '6kg box (40x30x16cm)',
          palletization: '60-80 boxes/pallet',
        },
        {
          id: 'raf',
          source: 'sourced',
          season: [1,1,1,1,0,0,0,0,0,0,1,1],
          colors: ['green-red'],
          calibres: 'G (100-120mm), GG (120-140mm)',
          packaging: '3kg premium box',
          palletization: '120 boxes/pallet',
        },
        {
          id: 'cherry-snack',
          source: 'own',
          season: [1,1,1,1,1,1,0,0,1,1,1,1],
          colors: ['red','yellow','mixed'],
          calibres: '20-30mm',
          packaging: '250g, 500g punnet; 3kg bulk',
          palletization: 'Varies by format',
        },
        {
          id: 'long-life',
          source: 'sourced',
          season: [1,1,1,1,1,0,0,0,0,1,1,1],
          colors: ['red'],
          calibres: '57-67mm, 67-82mm',
          packaging: '6kg box',
          palletization: '80 boxes/europallet',
        }
      ]
    },
    cucumbers: {
      id: 'cucumbers',
      icon: '🥒',
      items: [
        {
          id: 'dutch-type',
          source: 'own',
          season: [1,1,1,1,1,1,0,0,1,1,1,1],
          colors: ['green'],
          calibres: '300-400g, 400-500g, 500-600g',
          packaging: '5kg box, shrink-wrapped individual',
          palletization: '60 boxes/europallet',
        },
        {
          id: 'french-type',
          source: 'sourced',
          season: [1,1,1,1,1,0,0,0,1,1,1,1],
          colors: ['green'],
          calibres: '200-300g, 300-400g',
          packaging: '5kg box',
          palletization: '72 boxes/europallet',
        },
        {
          id: 'mini-spanish',
          source: 'own',
          season: [1,1,1,1,1,1,0,0,1,1,1,1],
          colors: ['green'],
          calibres: '100-150g, 150-200g',
          packaging: '250g, 500g punnet; 5kg bulk',
          palletization: 'Varies by format',
        }
      ]
    },
    courgettes: {
      id: 'courgettes',
      icon: '🥬',
      items: [
        {
          id: 'green-courgette',
          source: 'own',
          season: [1,1,1,1,1,0,0,0,1,1,1,1],
          colors: ['green'],
          calibres: '14-21cm, 21-28cm',
          packaging: '5kg box (40x30x12cm)',
          palletization: '80 boxes/europallet',
        },
        {
          id: 'white-courgette',
          source: 'sourced',
          season: [1,1,1,0,0,0,0,0,0,1,1,1],
          colors: ['white-light green'],
          calibres: '14-21cm, 21-28cm',
          packaging: '5kg box',
          palletization: '80 boxes/europallet',
        }
      ]
    },
    beans: {
      id: 'beans',
      icon: '🫘',
      items: [
        {
          id: 'bobby-bean',
          source: 'own',
          season: [1,1,1,1,0,0,0,0,0,1,1,1],
          colors: ['green'],
          calibres: '8-10mm diameter',
          packaging: '4kg box (40x30x10cm)',
          palletization: '100 boxes/europallet',
        },
        {
          id: 'flat-bean',
          source: 'sourced',
          season: [1,1,1,1,0,0,0,0,0,1,1,1],
          colors: ['green'],
          calibres: '15-20mm width',
          packaging: '4kg box (40x30x10cm)',
          palletization: '100 boxes/europallet',
        }
      ]
    },
    aubergine: {
      id: 'aubergine',
      icon: '🍆',
      items: [
        {
          id: 'long-aubergine',
          source: 'own',
          season: [1,1,1,1,1,0,0,0,1,1,1,1],
          colors: ['dark purple'],
          calibres: '200-300g, 300-400g, 400-500g',
          packaging: '5kg box (40x30x12cm)',
          palletization: '80 boxes/europallet',
        }
      ]
    },
    watermelon: {
      id: 'watermelon',
      icon: '🍉',
      items: [
        {
          id: 'striped-watermelon',
          source: 'sourced',
          season: [0,0,0,0,1,1,1,1,0,0,0,0],
          colors: ['striped green'],
          calibres: '3-5kg, 5-7kg, 7-9kg',
          packaging: 'Bulk bins, individual boxes',
          palletization: '60-80 units/pallet',
        },
        {
          id: 'black-watermelon',
          source: 'sourced',
          season: [0,0,0,0,1,1,1,1,0,0,0,0],
          colors: ['dark green'],
          calibres: '4-6kg, 6-8kg, 8-10kg',
          packaging: 'Bulk bins, individual boxes',
          palletization: '60-80 units/pallet',
        }
      ]
    }
  },

  // Translations
  i18n: {
    es: {
      lang: 'es',
      langName: 'Español',
      dir: 'es',
      // Navigation
      nav: {
        home: 'Inicio',
        about: 'Nosotros',
        products: 'Productos',
        growers: 'Productores',
        quality: 'Calidad',
        logistics: 'Logística',
        contact: 'Contacto',
      },
      // Hero
      hero: {
        label: 'Desde Almería a toda Europa',
        title: 'Hortalizas frescas de Almería para su mercado',
        subtitle: 'Producción propia y red de productores de confianza. Comercialización, control de calidad y logística integrada para mercados europeos.',
        cta1: 'Solicitar presupuesto',
        cta2: 'Ver productos',
      },
      // Stats
      stats: {
        years: 'Años de experiencia',
        countries: 'Países de destino',
        tons: 'Toneladas/temporada',
        growers: 'Productores asociados',
      },
      // Sections
      sections: {
        productsLabel: 'Nuestros productos',
        productsTitle: 'Hortalizas premium de invernadero',
        productsSubtitle: 'Amplia gama de hortalizas frescas cultivadas bajo los invernaderos de Almería, disponibles todo el año.',
        whyLabel: 'Por qué elegirnos',
        whyTitle: 'Su socio de confianza en Almería',
        seasonLabel: 'Disponibilidad',
        seasonTitle: 'Calendario de temporada',
        seasonSubtitle: 'Consulte la disponibilidad de nuestros productos a lo largo del año.',
        ctaTitle: '¿Busca un proveedor fiable?',
        ctaSubtitle: 'Contacte con nosotros para recibir un presupuesto personalizado según sus necesidades.',
        ctaBtn: 'Contactar ahora',
      },
      // Value pillars
      pillars: [
        {
          title: 'Producción propia + red de productores',
          desc: 'Cultivo en nuestros propios invernaderos complementado con una red seleccionada de productores almerienses de confianza.'
        },
        {
          title: 'Logística y transporte integrados',
          desc: 'Cadena de frío completa, flota propia y partnerships logísticos para entregas directas a destino en toda Europa.'
        },
        {
          title: 'Certificaciones de calidad',
          desc: 'GlobalGAP, GRASP, BRC y más. Cumplimos los estándares más exigentes del mercado europeo.'
        },
        {
          title: 'Directo desde Almería',
          desc: 'Desde el corazón del "mar de plástico", la mayor concentración de invernaderos de Europa.'
        }
      ],
      // Product categories
      categories: {
        peppers: { name: 'Pimientos', count: '4 variedades' },
        tomatoes: { name: 'Tomates', count: '5 variedades' },
        cucumbers: { name: 'Pepinos', count: '3 variedades' },
        courgettes: { name: 'Calabacines', count: '2 variedades' },
        beans: { name: 'Judías', count: '2 variedades' },
        aubergine: { name: 'Berenjenas', count: '1 variedad' },
        watermelon: { name: 'Sandías', count: '2 variedades' },
      },
      // Product items
      productNames: {
        'california-bell': 'Pimiento California',
        'lamuyo': 'Pimiento Lamuyo',
        'palermo': 'Pimiento Palermo',
        'italian-green': 'Pimiento Italiano Verde',
        'vine-cluster': 'Tomate en Rama',
        'round-loose': 'Tomate Redondo Suelto',
        'raf': 'Tomate Raf',
        'cherry-snack': 'Tomate Cherry / Snack',
        'long-life': 'Tomate Larga Vida',
        'dutch-type': 'Pepino Almería (Tipo Holandés)',
        'french-type': 'Pepino Tipo Francés',
        'mini-spanish': 'Mini Pepino Español',
        'green-courgette': 'Calabacín Verde',
        'white-courgette': 'Calabacín Blanco',
        'bobby-bean': 'Judía Redonda (Bobby)',
        'flat-bean': 'Judía Plana',
        'long-aubergine': 'Berenjena Larga',
        'striped-watermelon': 'Sandía Rayada',
        'black-watermelon': 'Sandía Negra',
      },
      productDescs: {
        'california-bell': 'Pimiento tipo California de excelente calibre y color uniforme. Cultivado en invernadero con control integrado de plagas. Disponible en cuatro colores durante la mayor parte de la campaña.',
        'lamuyo': 'Pimiento de tipo Lamuyo, alargado y de paredes gruesas. Ideal para el mercado de fresco y procesado.',
        'palermo': 'Pimiento tipo Palermo, dulce y alargado. Cada vez más demandado en los mercados del norte de Europa.',
        'italian-green': 'Pimiento italiano verde, fino y alargado. Muy apreciado en la gastronomía mediterránea.',
        'vine-cluster': 'Tomate en rama de maduración uniforme. Presentación en ramo para un aspecto fresco y natural en el punto de venta.',
        'round-loose': 'Tomate redondo suelto de calibre uniforme. Versátil para múltiples usos culinarios.',
        'raf': 'El auténtico tomate Raf de Almería. Sabor excepcional con el punto justo de sal por el cultivo en suelo salino.',
        'cherry-snack': 'Tomate cherry y snack de intenso sabor y alto contenido en azúcares. Disponible en múltiples formatos de envasado.',
        'long-life': 'Tomate de larga vida con excelente post-cosecha. Mantiene firmeza y sabor durante el transporte y exposición.',
        'dutch-type': 'Pepino tipo holandés (Almería), liso y de piel fina. El estándar europeo cultivado en nuestros invernaderos.',
        'french-type': 'Pepino tipo francés, más corto y de piel ligeramente rugosa. Muy demandado en el mercado francés.',
        'mini-spanish': 'Mini pepino español, crujiente y de sabor suave. Perfecto para consumo snack y ensaladas.',
        'green-courgette': 'Calabacín verde de primera calidad. Piel brillante y carne firme, cultivado en invernadero.',
        'white-courgette': 'Calabacín de color claro, menos común pero apreciado en ciertos mercados europeos.',
        'bobby-bean': 'Judía redonda tipo Bobby, tierna y de color verde intenso. Producción propia en invernadero.',
        'flat-bean': 'Judía plana ancha, tradicional y de excelente textura. Muy demandada en el mercado español e internacional.',
        'long-aubergine': 'Berenjena larga de color morado oscuro e intenso brillo. Carne firme y escasas semillas.',
        'striped-watermelon': 'Sandía rayada de temporada. Dulce y refrescante, cultivada en las fértiles tierras almerienses.',
        'black-watermelon': 'Sandía negra de piel oscura y carne roja intensa. Excelente sabor y alto contenido en azúcares.',
      },
      // Spec labels
      specs: {
        colors: 'Colores disponibles',
        calibres: 'Calibres / Tamaños',
        packaging: 'Embalaje',
        palletization: 'Paletización',
        season: 'Temporada',
        source: 'Origen',
      },
      badges: {
        own: 'Producción propia',
        sourced: 'Origen Almería',
      },
      // About page
      about: {
        label: 'Conózcanos',
        title: 'Quiénes somos',
        subtitle: 'Una empresa familiar almeriense con vocación de servicio al mercado europeo.',
        history: {
          title: 'Nuestra historia',
          p1: 'Grupo Los Capilleros nace en Aguadulce, Almería, en el corazón de la mayor zona de producción hortofrutícola bajo invernadero de Europa. Con más de 15 años de experiencia, nos hemos consolidado como una comercializadora de referencia en la exportación de hortalizas frescas a mercados europeos.',
          p2: 'Lo que comenzó como una explotación familiar se ha convertido en una operación integrada que combina producción propia con una cuidada red de productores asociados, ofreciendo a nuestros clientes una gama completa de productos durante toda la campaña.',
        },
        model: {
          title: 'Nuestro modelo: producción + red de productores',
          p1: 'Nuestro modelo de negocio se basa en dos pilares: nuestros propios invernaderos, donde controlamos cada fase del cultivo, y nuestra red de productores almerienses de confianza, que nos permite ampliar la gama y el volumen sin comprometer la calidad.',
          p2: 'Cada productor asociado cumple con nuestros mismos estándares de calidad, trazabilidad y certificaciones. Realizamos auditorías regulares y controles de residuos para garantizar la homogeneidad del producto.',
        },
        facilities: {
          title: 'Nuestras instalaciones',
          p1: 'Disponemos de almacén de confección, cámaras frigoríficas y muelles de carga propios en Aguadulce. Nuestras instalaciones están diseñadas para mantener la cadena de frío desde la recolección hasta la expedición.',
        },
        almeria: {
          title: 'La ventaja de Almería',
          p1: 'Almería cuenta con más de 3.000 horas de sol al año y un microclima ideal para el cultivo en invernadero. La proximidad al mar Mediterráneo y la protección de Sierra de Gádor crean unas condiciones únicas que permiten producir hortalizas de máxima calidad durante la mayor parte del año.',
          p2: 'Además, la ubicación estratégica de Almería permite llegar a los principales mercados europeos en 24-72 horas por carretera, garantizando la frescura del producto.',
        },
      },
      // Growers page
      growers: {
        label: 'Red de productores',
        title: 'Nuestros productores',
        subtitle: 'Una red de los mejores agricultores de Almería, unidos por los mismos estándares de calidad.',
        intro: {
          title: 'Una red de confianza',
          p1: 'Nuestro modelo de negocio va más allá de la producción propia. Trabajamos con una seleccionada red de productores almerienses que comparten nuestra visión de calidad y compromiso con el mercado europeo.',
          p2: 'Cada productor asociado es auditado regularmente y debe cumplir los mismos protocolos de calidad, trazabilidad y seguridad alimentaria que aplicamos en nuestras propias explotaciones.',
        },
        how: {
          title: 'Cómo funciona nuestra red',
          steps: [
            { title: 'Selección', desc: 'Evaluamos a cada productor según criterios estrictos de calidad, certificaciones y trazabilidad.' },
            { title: 'Auditoría', desc: 'Realizamos auditorías periódicas en campo y almacén para verificar el cumplimiento de nuestros estándares.' },
            { title: 'Control', desc: 'Análisis de residuos, controles de calidad en recepción y supervisión continua de la producción.' },
            { title: 'Integración', desc: 'Los productos de nuestros asociados se comercializan bajo los mismos estándares y con plena trazabilidad.' },
          ]
        },
        quality: {
          title: 'Estándares unificados',
          p1: 'Todos los productores de nuestra red cumplen con las certificaciones GlobalGAP, mantienen programas de control integrado de plagas y siguen protocolos de residuo cero. La trazabilidad completa está garantizada desde el invernadero hasta el cliente final.',
        },
      },
      // Quality page
      quality: {
        label: 'Compromiso con la calidad',
        title: 'Calidad y certificaciones',
        subtitle: 'Cumplimos los estándares más exigentes del mercado europeo para garantizar la seguridad y calidad de nuestros productos.',
        process: {
          title: 'Nuestro proceso de calidad',
          p1: 'Desde el invernadero hasta la entrega, cada etapa de nuestro proceso está sujeta a rigurosos controles de calidad. Nuestro equipo técnico supervisa la producción, confección y expedición para garantizar que cada producto cumple con los requisitos de nuestros clientes.',
        },
        traceability: {
          title: 'Trazabilidad completa',
          p1: 'Nuestro sistema de trazabilidad permite rastrear cada producto desde el invernadero de origen hasta el punto de entrega. Cada caja está identificada con un código que permite acceder al historial completo del producto.',
        },
        residues: {
          title: 'Control de residuos',
          p1: 'Mantenemos un programa activo de control de residuos con análisis regulares en laboratorios acreditados. Trabajamos con protocolos de Residuo Cero y cumplimos los LMR más estrictos del mercado europeo.',
        },
        certifications: [
          { name: 'GlobalGAP', desc: 'Buenas prácticas agrícolas reconocidas internacionalmente.' },
          { name: 'GRASP', desc: 'Evaluación de prácticas sociales en la explotación agrícola.' },
          { name: 'BRC Food Safety', desc: 'Estándar global de seguridad alimentaria.' },
          { name: 'ISO 22000', desc: 'Sistema de gestión de seguridad alimentaria.' },
          { name: 'Producción Ecológica', desc: 'Certificación EU de agricultura ecológica (parcial).' },
          { name: 'Residuo Cero', desc: 'Programa de productos sin residuos de fitosanitarios detectables.' },
          { name: 'SEDEX / SMETA', desc: 'Auditoría ética de comercio y condiciones laborales.' },
        ],
      },
      // Logistics page
      logistics: {
        label: 'Logística integrada',
        title: 'Logística y transporte',
        subtitle: 'Cadena de frío completa desde el invernadero hasta su almacén. Entregas directas a toda Europa.',
        fleet: {
          title: 'Flota y transporte',
          p1: 'Disponemos de flota propia y acuerdos con los principales operadores logísticos frigoríficos para garantizar entregas fiables y puntuales. Nuestros vehículos cuentan con control de temperatura GPS y registro continuo.',
        },
        coldchain: {
          title: 'Cadena de frío',
          p1: 'Mantenemos la cadena de frío ininterrumpida desde la recolección. Nuestras cámaras frigoríficas y muelles climatizados garantizan que el producto se expide en condiciones óptimas.',
        },
        delivery: {
          title: 'Tiempos de entrega',
          subtitle: 'Desde Almería a los principales mercados europeos',
          routes: [
            { dest: 'Países Bajos', time: '36h', detail: 'Holanda, Bélgica' },
            { dest: 'Alemania', time: '48h', detail: 'Destinos principales' },
            { dest: 'Reino Unido', time: '48-60h', detail: 'Vía canal de la Mancha' },
            { dest: 'Escandinavia', time: '60-72h', detail: 'Suecia, Noruega, Dinamarca' },
            { dest: 'Francia', time: '24-36h', detail: 'Perpignan, París, Norte' },
            { dest: 'Europa Central', time: '48-60h', detail: 'Austria, Suiza, Polonia' },
          ]
        },
        packaging: {
          title: 'Embalaje y paletización',
          p1: 'Trabajamos con los formatos de embalaje estándar europeo y nos adaptamos a las especificaciones de cada cliente. Cajas EPS, cartón ondulado, flowpack, mallas, bolsas y punnets.',
        },
      },
      // Contact page
      contact: {
        label: 'Contacto',
        title: 'Contacte con nosotros',
        subtitle: 'Estamos a su disposición para cualquier consulta comercial o solicitud de presupuesto.',
        form: {
          name: 'Nombre',
          company: 'Empresa',
          country: 'País',
          email: 'Correo electrónico',
          phone: 'Teléfono',
          products: 'Productos de interés',
          message: 'Mensaje',
          submit: 'Enviar solicitud',
          success: 'Gracias por su consulta. Nos pondremos en contacto con usted en breve.',
          placeholders: {
            name: 'Su nombre completo',
            company: 'Nombre de su empresa',
            country: 'Seleccione un país',
            email: 'correo@empresa.com',
            phone: '+34 600 000 000',
            message: 'Cuéntenos sus necesidades: volúmenes, productos, frecuencia de pedido...',
          }
        },
        info: {
          title: 'Información de contacto',
          hours: 'Horario de oficina',
          hoursValue: 'Lunes a Viernes: 8:00 - 18:00',
          saturday: 'Sábados: 8:00 - 14:00',
        }
      },
      // Footer
      footer: {
        desc: 'Comercialización y transporte de hortalizas frescas desde Almería. Producción propia y red de productores de confianza para el mercado europeo.',
        quickLinks: 'Enlaces rápidos',
        contactTitle: 'Contacto',
        legal: 'Legal',
        privacy: 'Política de privacidad',
        cookies: 'Política de cookies',
        terms: 'Aviso legal',
        rights: 'Todos los derechos reservados.',
      },
      // Cookie banner
      cookie: {
        message: 'Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación. Al continuar, acepta nuestra',
        policy: 'política de cookies',
        accept: 'Aceptar',
        reject: 'Rechazar',
      },
      // Common
      common: {
        requestQuote: 'Solicitar presupuesto',
        viewProducts: 'Ver productos',
        learnMore: 'Saber más',
        backToProducts: 'Volver a productos',
        allProducts: 'Todos los productos',
        months: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
        monthsFull: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
      },
      // Countries for form
      countries: ['Alemania','Austria','Bélgica','Dinamarca','España','Finlandia','Francia','Irlanda','Italia','Noruega','Países Bajos','Polonia','Portugal','Reino Unido','República Checa','Suecia','Suiza','Otro'],
    },

    en: {
      lang: 'en',
      langName: 'English',
      dir: 'en',
      nav: {
        home: 'Home',
        about: 'About',
        products: 'Products',
        growers: 'Growers',
        quality: 'Quality',
        logistics: 'Logistics',
        contact: 'Contact',
      },
      hero: {
        label: 'From Almería to all of Europe',
        title: 'Fresh produce from Almería to your market',
        subtitle: 'Own production and trusted grower network. Sourcing, quality control, and integrated logistics for European markets.',
        cta1: 'Request a quote',
        cta2: 'View products',
      },
      stats: {
        years: 'Years of experience',
        countries: 'Destination countries',
        tons: 'Tons per season',
        growers: 'Partner growers',
      },
      sections: {
        productsLabel: 'Our products',
        productsTitle: 'Premium greenhouse vegetables',
        productsSubtitle: 'Wide range of fresh vegetables grown under Almería\'s greenhouses, available year-round.',
        whyLabel: 'Why choose us',
        whyTitle: 'Your trusted partner in Almería',
        seasonLabel: 'Availability',
        seasonTitle: 'Seasonality calendar',
        seasonSubtitle: 'Check product availability throughout the year.',
        ctaTitle: 'Looking for a reliable supplier?',
        ctaSubtitle: 'Contact us for a personalized quote tailored to your requirements.',
        ctaBtn: 'Get in touch',
      },
      pillars: [
        {
          title: 'Own production + grower network',
          desc: 'Growing in our own greenhouses, complemented by a curated network of trusted Almería growers.'
        },
        {
          title: 'Integrated logistics & transport',
          desc: 'Complete cold chain, own fleet, and logistics partnerships for direct delivery across Europe.'
        },
        {
          title: 'Quality certifications',
          desc: 'GlobalGAP, GRASP, BRC, and more. Meeting the most demanding European market standards.'
        },
        {
          title: 'Direct from Almería',
          desc: 'From the heart of the "sea of plastic" — Europe\'s largest concentration of greenhouses.'
        }
      ],
      categories: {
        peppers: { name: 'Peppers', count: '4 varieties' },
        tomatoes: { name: 'Tomatoes', count: '5 varieties' },
        cucumbers: { name: 'Cucumbers', count: '3 varieties' },
        courgettes: { name: 'Courgettes', count: '2 varieties' },
        beans: { name: 'Beans', count: '2 varieties' },
        aubergine: { name: 'Aubergine', count: '1 variety' },
        watermelon: { name: 'Watermelon', count: '2 varieties' },
      },
      productNames: {
        'california-bell': 'California Bell Pepper',
        'lamuyo': 'Lamuyo Pepper',
        'palermo': 'Palermo Pepper',
        'italian-green': 'Italian Green Pepper',
        'vine-cluster': 'Vine Cluster Tomato',
        'round-loose': 'Round Loose Tomato',
        'raf': 'Raf Tomato',
        'cherry-snack': 'Cherry / Snack Tomato',
        'long-life': 'Long Life Tomato',
        'dutch-type': 'Almería Cucumber (Dutch Type)',
        'french-type': 'French Type Cucumber',
        'mini-spanish': 'Mini Spanish Cucumber',
        'green-courgette': 'Green Courgette',
        'white-courgette': 'White Courgette',
        'bobby-bean': 'Bobby Bean (Round)',
        'flat-bean': 'Flat Bean',
        'long-aubergine': 'Long Aubergine',
        'striped-watermelon': 'Striped Watermelon',
        'black-watermelon': 'Black Watermelon',
      },
      productDescs: {
        'california-bell': 'California-type bell pepper with excellent calibre and uniform colour. Greenhouse-grown using integrated pest management. Available in four colours throughout most of the season.',
        'lamuyo': 'Lamuyo-type pepper, elongated with thick walls. Ideal for fresh consumption and processing markets.',
        'palermo': 'Palermo-type pepper, sweet and elongated. Increasingly in demand across Northern European markets.',
        'italian-green': 'Italian green pepper, slender and elongated. Highly valued in Mediterranean cuisine.',
        'vine-cluster': 'Vine cluster tomato with uniform ripening. Presented on the vine for a fresh, natural appearance at point of sale.',
        'round-loose': 'Round loose tomato with uniform calibre. Versatile for multiple culinary applications.',
        'raf': 'The authentic Raf tomato from Almería. Exceptional flavour with a touch of salinity from cultivation in saline soils.',
        'cherry-snack': 'Cherry and snack tomato with intense flavour and high sugar content. Available in multiple packaging formats.',
        'long-life': 'Long life tomato with excellent post-harvest performance. Maintains firmness and flavour during transport and display.',
        'dutch-type': 'Dutch-type cucumber (Almería), smooth with thin skin. The European standard, grown in our greenhouses.',
        'french-type': 'French-type cucumber, shorter with slightly textured skin. High demand in the French market.',
        'mini-spanish': 'Spanish mini cucumber, crisp with a mild flavour. Perfect for snacking and salads.',
        'green-courgette': 'Premium green courgette with shiny skin and firm flesh. Greenhouse-grown for consistent quality.',
        'white-courgette': 'Light-coloured courgette, less common but valued in certain European markets.',
        'bobby-bean': 'Round bobby bean, tender with vibrant green colour. Own greenhouse production.',
        'flat-bean': 'Broad flat bean with excellent texture. High demand in Spanish and international markets.',
        'long-aubergine': 'Long aubergine with deep purple colour and intense shine. Firm flesh with minimal seeds.',
        'striped-watermelon': 'Seasonal striped watermelon. Sweet and refreshing, grown in the fertile Almería lands.',
        'black-watermelon': 'Black-skinned watermelon with intense red flesh. Excellent flavour and high sugar content.',
      },
      specs: {
        colors: 'Available colours',
        calibres: 'Calibres / Sizes',
        packaging: 'Packaging',
        palletization: 'Palletization',
        season: 'Season',
        source: 'Source',
      },
      badges: {
        own: 'Own Production',
        sourced: 'Almería Sourced',
      },
      about: {
        label: 'Get to know us',
        title: 'About us',
        subtitle: 'A family company from Almería with a vocation for serving the European market.',
        history: {
          title: 'Our history',
          p1: 'Grupo Los Capilleros was born in Aguadulce, Almería, in the heart of Europe\'s largest greenhouse horticultural production area. With over 15 years of experience, we have established ourselves as a leading fresh produce marketer and exporter to European markets.',
          p2: 'What started as a family farm has grown into an integrated operation combining own production with a curated network of partner growers, offering our clients a complete product range throughout the entire season.',
        },
        model: {
          title: 'Our model: production + grower network',
          p1: 'Our business model is built on two pillars: our own greenhouses, where we control every stage of cultivation, and our network of trusted Almería growers, which allows us to expand our range and volume without compromising quality.',
          p2: 'Every partner grower meets our same quality standards, traceability requirements, and certification protocols. We conduct regular audits and residue controls to ensure product consistency.',
        },
        facilities: {
          title: 'Our facilities',
          p1: 'We operate our own packing station, cold storage rooms, and loading docks in Aguadulce. Our facilities are designed to maintain the cold chain from harvest to dispatch.',
        },
        almeria: {
          title: 'The Almería advantage',
          p1: 'Almería enjoys over 3,000 hours of sunshine per year and an ideal microclimate for greenhouse cultivation. The proximity to the Mediterranean Sea and the shelter of Sierra de Gádor create unique conditions for producing top-quality vegetables for most of the year.',
          p2: 'Moreover, Almería\'s strategic location enables reaching major European markets within 24-72 hours by road, ensuring product freshness.',
        },
      },
      growers: {
        label: 'Grower network',
        title: 'Our growers',
        subtitle: 'A network of Almería\'s finest farmers, united by the same quality standards.',
        intro: {
          title: 'A trusted network',
          p1: 'Our business model goes beyond own production. We work with a carefully selected network of Almería growers who share our vision of quality and commitment to the European market.',
          p2: 'Every partner grower is regularly audited and must comply with the same quality, traceability, and food safety protocols that we apply on our own farms.',
        },
        how: {
          title: 'How our network works',
          steps: [
            { title: 'Selection', desc: 'We evaluate each grower against strict quality, certification, and traceability criteria.' },
            { title: 'Audit', desc: 'Regular field and warehouse audits to verify compliance with our standards.' },
            { title: 'Control', desc: 'Residue analysis, quality controls at reception, and ongoing production monitoring.' },
            { title: 'Integration', desc: 'Partner produce is marketed under the same standards with full traceability.' },
          ]
        },
        quality: {
          title: 'Unified standards',
          p1: 'All growers in our network are GlobalGAP certified, maintain integrated pest management programmes, and follow zero-residue protocols. Full traceability is guaranteed from greenhouse to end customer.',
        },
      },
      quality: {
        label: 'Commitment to quality',
        title: 'Quality & certifications',
        subtitle: 'Meeting the most demanding European market standards to guarantee the safety and quality of our products.',
        process: {
          title: 'Our quality process',
          p1: 'From greenhouse to delivery, every stage of our process is subject to rigorous quality controls. Our technical team oversees production, packing, and dispatch to ensure every product meets customer requirements.',
        },
        traceability: {
          title: 'Full traceability',
          p1: 'Our traceability system allows tracking every product from the source greenhouse to the delivery point. Each box is identified with a code providing access to the product\'s complete history.',
        },
        residues: {
          title: 'Residue control',
          p1: 'We maintain an active residue monitoring programme with regular analyses at accredited laboratories. We operate zero-residue protocols and comply with the strictest European MRLs.',
        },
        certifications: [
          { name: 'GlobalGAP', desc: 'Internationally recognised good agricultural practices.' },
          { name: 'GRASP', desc: 'Social practice assessment on farms.' },
          { name: 'BRC Food Safety', desc: 'Global food safety standard.' },
          { name: 'ISO 22000', desc: 'Food safety management system.' },
          { name: 'Organic Production', desc: 'EU organic agriculture certification (partial).' },
          { name: 'Zero Residue', desc: 'Products with no detectable pesticide residues.' },
          { name: 'SEDEX / SMETA', desc: 'Ethical trade and labour conditions audit.' },
        ],
      },
      logistics: {
        label: 'Integrated logistics',
        title: 'Logistics & transport',
        subtitle: 'Complete cold chain from greenhouse to your warehouse. Direct deliveries across Europe.',
        fleet: {
          title: 'Fleet & transport',
          p1: 'We operate our own fleet and maintain agreements with leading refrigerated logistics operators to ensure reliable, punctual deliveries. Our vehicles feature GPS temperature control and continuous monitoring.',
        },
        coldchain: {
          title: 'Cold chain',
          p1: 'We maintain an unbroken cold chain from harvest. Our cold rooms and climate-controlled loading docks ensure products are dispatched in optimal conditions.',
        },
        delivery: {
          title: 'Delivery times',
          subtitle: 'From Almería to major European markets',
          routes: [
            { dest: 'Netherlands', time: '36h', detail: 'Holland, Belgium' },
            { dest: 'Germany', time: '48h', detail: 'Major destinations' },
            { dest: 'United Kingdom', time: '48-60h', detail: 'Via Channel crossing' },
            { dest: 'Scandinavia', time: '60-72h', detail: 'Sweden, Norway, Denmark' },
            { dest: 'France', time: '24-36h', detail: 'Perpignan, Paris, North' },
            { dest: 'Central Europe', time: '48-60h', detail: 'Austria, Switzerland, Poland' },
          ]
        },
        packaging: {
          title: 'Packaging & palletization',
          p1: 'We work with standard European packaging formats and adapt to each client\'s specifications. EPS boxes, corrugated cardboard, flowpack, nets, bags, and punnets.',
        },
      },
      contact: {
        label: 'Contact',
        title: 'Get in touch',
        subtitle: 'We are at your disposal for any commercial enquiry or quote request.',
        form: {
          name: 'Name',
          company: 'Company',
          country: 'Country',
          email: 'Email',
          phone: 'Phone',
          products: 'Products of interest',
          message: 'Message',
          submit: 'Send enquiry',
          success: 'Thank you for your enquiry. We will get back to you shortly.',
          placeholders: {
            name: 'Your full name',
            company: 'Company name',
            country: 'Select a country',
            email: 'email@company.com',
            phone: '+44 7700 000000',
            message: 'Tell us about your needs: volumes, products, order frequency...',
          }
        },
        info: {
          title: 'Contact information',
          hours: 'Office hours',
          hoursValue: 'Monday to Friday: 8:00 - 18:00',
          saturday: 'Saturday: 8:00 - 14:00',
        }
      },
      footer: {
        desc: 'Fresh vegetable sourcing and transport from Almería. Own production and trusted grower network for the European market.',
        quickLinks: 'Quick links',
        contactTitle: 'Contact',
        legal: 'Legal',
        privacy: 'Privacy policy',
        cookies: 'Cookie policy',
        terms: 'Legal notice',
        rights: 'All rights reserved.',
      },
      cookie: {
        message: 'We use cookies to improve your browsing experience. By continuing, you accept our',
        policy: 'cookie policy',
        accept: 'Accept',
        reject: 'Decline',
      },
      common: {
        requestQuote: 'Request a quote',
        viewProducts: 'View products',
        learnMore: 'Learn more',
        backToProducts: 'Back to products',
        allProducts: 'All products',
        months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        monthsFull: ['January','February','March','April','May','June','July','August','September','October','November','December'],
      },
      countries: ['Austria','Belgium','Czech Republic','Denmark','Finland','France','Germany','Ireland','Italy','Netherlands','Norway','Poland','Portugal','Spain','Sweden','Switzerland','United Kingdom','Other'],
    },

    de: {
      lang: 'de',
      langName: 'Deutsch',
      dir: 'de',
      nav: {
        home: 'Startseite',
        about: 'Über uns',
        products: 'Produkte',
        growers: 'Erzeuger',
        quality: 'Qualität',
        logistics: 'Logistik',
        contact: 'Kontakt',
      },
      hero: {
        label: 'Von Almería nach ganz Europa',
        title: 'Frisches Gemüse aus Almería für Ihren Markt',
        subtitle: 'Eigenproduktion und vertrauenswürdiges Erzeugernetzwerk. Vermarktung, Qualitätskontrolle und integrierte Logistik für europäische Märkte.',
        cta1: 'Angebot anfordern',
        cta2: 'Produkte ansehen',
      },
      stats: {
        years: 'Jahre Erfahrung',
        countries: 'Zielländer',
        tons: 'Tonnen pro Saison',
        growers: 'Partnererzeuger',
      },
      sections: {
        productsLabel: 'Unsere Produkte',
        productsTitle: 'Premium-Gewächshausgemüse',
        productsSubtitle: 'Breites Sortiment an frischem Gemüse aus den Gewächshäusern von Almería, ganzjährig verfügbar.',
        whyLabel: 'Warum wir',
        whyTitle: 'Ihr vertrauenswürdiger Partner in Almería',
        seasonLabel: 'Verfügbarkeit',
        seasonTitle: 'Saisonkalender',
        seasonSubtitle: 'Prüfen Sie die Verfügbarkeit unserer Produkte im Jahresverlauf.',
        ctaTitle: 'Suchen Sie einen zuverlässigen Lieferanten?',
        ctaSubtitle: 'Kontaktieren Sie uns für ein individuelles Angebot nach Ihren Anforderungen.',
        ctaBtn: 'Jetzt Kontakt aufnehmen',
      },
      pillars: [
        {
          title: 'Eigenproduktion + Erzeugernetzwerk',
          desc: 'Anbau in eigenen Gewächshäusern, ergänzt durch ein ausgewähltes Netzwerk vertrauenswürdiger Erzeuger aus Almería.'
        },
        {
          title: 'Integrierte Logistik & Transport',
          desc: 'Vollständige Kühlkette, eigene Flotte und Logistikpartnerschaften für Direktlieferungen in ganz Europa.'
        },
        {
          title: 'Qualitätszertifizierungen',
          desc: 'GlobalGAP, GRASP, BRC und mehr. Wir erfüllen die anspruchsvollsten europäischen Marktstandards.'
        },
        {
          title: 'Direkt aus Almería',
          desc: 'Aus dem Herzen des "Plastikmeeres" — Europas größte Konzentration von Gewächshäusern.'
        }
      ],
      categories: {
        peppers: { name: 'Paprika', count: '4 Sorten' },
        tomatoes: { name: 'Tomaten', count: '5 Sorten' },
        cucumbers: { name: 'Gurken', count: '3 Sorten' },
        courgettes: { name: 'Zucchini', count: '2 Sorten' },
        beans: { name: 'Bohnen', count: '2 Sorten' },
        aubergine: { name: 'Auberginen', count: '1 Sorte' },
        watermelon: { name: 'Wassermelonen', count: '2 Sorten' },
      },
      productNames: {
        'california-bell': 'California Paprika',
        'lamuyo': 'Lamuyo Paprika',
        'palermo': 'Palermo Paprika',
        'italian-green': 'Italienische grüne Paprika',
        'vine-cluster': 'Rispentomate',
        'round-loose': 'Runde lose Tomate',
        'raf': 'Raf Tomate',
        'cherry-snack': 'Cherry- / Snacktomate',
        'long-life': 'Langzeittomate',
        'dutch-type': 'Almería-Gurke (Holländischer Typ)',
        'french-type': 'Französische Gurke',
        'mini-spanish': 'Spanische Minigurke',
        'green-courgette': 'Grüne Zucchini',
        'white-courgette': 'Weiße Zucchini',
        'bobby-bean': 'Bobby-Bohne (Rund)',
        'flat-bean': 'Flache Bohne',
        'long-aubergine': 'Lange Aubergine',
        'striped-watermelon': 'Gestreifte Wassermelone',
        'black-watermelon': 'Schwarze Wassermelone',
      },
      productDescs: {
        'california-bell': 'Paprika vom Typ California mit ausgezeichnetem Kaliber und gleichmäßiger Farbe. Gewächshausanbau mit integriertem Pflanzenschutz. In vier Farben während des Großteils der Saison verfügbar.',
        'lamuyo': 'Paprika vom Typ Lamuyo, länglich mit dicken Wänden. Ideal für den Frischmarkt und die Verarbeitung.',
        'palermo': 'Palermo-Paprika, süß und länglich. Zunehmend nachgefragt auf nordeuropäischen Märkten.',
        'italian-green': 'Italienische grüne Paprika, schlank und länglich. Sehr geschätzt in der mediterranen Küche.',
        'vine-cluster': 'Rispentomate mit gleichmäßiger Reifung. Am Stiel für ein frisches, natürliches Erscheinungsbild am POS.',
        'round-loose': 'Runde lose Tomate mit gleichmäßigem Kaliber. Vielseitig für verschiedene kulinarische Anwendungen.',
        'raf': 'Die authentische Raf-Tomate aus Almería. Außergewöhnlicher Geschmack mit einer Salznote durch den Anbau in salzhaltigem Boden.',
        'cherry-snack': 'Cherry- und Snacktomate mit intensivem Geschmack und hohem Zuckergehalt. In verschiedenen Verpackungsformaten erhältlich.',
        'long-life': 'Langzeittomate mit hervorragender Haltbarkeit nach der Ernte. Behält Festigkeit und Geschmack während Transport und Auslage.',
        'dutch-type': 'Gurke vom holländischen Typ (Almería), glatt mit dünner Schale. Der europäische Standard, in unseren Gewächshäusern angebaut.',
        'french-type': 'Französische Gurke, kürzer mit leicht strukturierter Schale. Hohe Nachfrage auf dem französischen Markt.',
        'mini-spanish': 'Spanische Minigurke, knackig mit mildem Geschmack. Perfekt als Snack und für Salate.',
        'green-courgette': 'Premium grüne Zucchini mit glänzender Schale und festem Fruchtfleisch. Gewächshausanbau für konstante Qualität.',
        'white-courgette': 'Hellfarbige Zucchini, weniger verbreitet aber auf bestimmten europäischen Märkten geschätzt.',
        'bobby-bean': 'Runde Bobby-Bohne, zart mit kräftig grüner Farbe. Eigenproduktion im Gewächshaus.',
        'flat-bean': 'Breite flache Bohne mit ausgezeichneter Textur. Hohe Nachfrage auf dem spanischen und internationalen Markt.',
        'long-aubergine': 'Lange Aubergine mit tiefvioletter Farbe und intensivem Glanz. Festes Fruchtfleisch mit wenig Kernen.',
        'striped-watermelon': 'Saisonale gestreifte Wassermelone. Süß und erfrischend, angebaut auf den fruchtbaren Böden von Almería.',
        'black-watermelon': 'Wassermelone mit dunkler Schale und intensiv rotem Fruchtfleisch. Ausgezeichneter Geschmack und hoher Zuckergehalt.',
      },
      specs: {
        colors: 'Verfügbare Farben',
        calibres: 'Kaliber / Größen',
        packaging: 'Verpackung',
        palletization: 'Palettierung',
        season: 'Saison',
        source: 'Herkunft',
      },
      badges: {
        own: 'Eigenproduktion',
        sourced: 'Aus Almería bezogen',
      },
      about: {
        label: 'Lernen Sie uns kennen',
        title: 'Über uns',
        subtitle: 'Ein Familienunternehmen aus Almería mit der Berufung, den europäischen Markt zu bedienen.',
        history: {
          title: 'Unsere Geschichte',
          p1: 'Grupo Los Capilleros wurde in Aguadulce, Almería, im Herzen des größten Gewächshaus-Anbaugebiets Europas gegründet. Mit über 15 Jahren Erfahrung haben wir uns als führender Vermarkter und Exporteur von frischem Gemüse für europäische Märkte etabliert.',
          p2: 'Was als Familienbetrieb begann, ist zu einem integrierten Unternehmen gewachsen, das Eigenproduktion mit einem ausgewählten Netzwerk von Partnerzeugern kombiniert und unseren Kunden ein komplettes Sortiment während der gesamten Saison bietet.',
        },
        model: {
          title: 'Unser Modell: Produktion + Erzeugernetzwerk',
          p1: 'Unser Geschäftsmodell basiert auf zwei Säulen: unseren eigenen Gewächshäusern, in denen wir jede Anbauphase kontrollieren, und unserem Netzwerk vertrauenswürdiger Erzeuger aus Almería, das es uns ermöglicht, Sortiment und Volumen zu erweitern, ohne die Qualität zu beeinträchtigen.',
          p2: 'Jeder Partnererzeuger erfüllt unsere gleichen Qualitätsstandards, Rückverfolgbarkeitsanforderungen und Zertifizierungsprotokolle. Wir führen regelmäßige Audits und Rückstandskontrollen durch, um die Produktkonsistenz zu gewährleisten.',
        },
        facilities: {
          title: 'Unsere Einrichtungen',
          p1: 'Wir betreiben eine eigene Packstation, Kühlräume und Verladerampen in Aguadulce. Unsere Einrichtungen sind darauf ausgelegt, die Kühlkette von der Ernte bis zum Versand aufrechtzuerhalten.',
        },
        almeria: {
          title: 'Der Almería-Vorteil',
          p1: 'Almería genießt über 3.000 Sonnenstunden pro Jahr und ein ideales Mikroklima für den Gewächshausanbau. Die Nähe zum Mittelmeer und der Schutz der Sierra de Gádor schaffen einzigartige Bedingungen für den Anbau von Spitzengemüse während des größten Teils des Jahres.',
          p2: 'Darüber hinaus ermöglicht die strategische Lage von Almería, die wichtigsten europäischen Märkte innerhalb von 24-72 Stunden auf dem Landweg zu erreichen und so die Frische der Produkte zu gewährleisten.',
        },
      },
      growers: {
        label: 'Erzeugernetzwerk',
        title: 'Unsere Erzeuger',
        subtitle: 'Ein Netzwerk der besten Landwirte Almerías, vereint durch die gleichen Qualitätsstandards.',
        intro: {
          title: 'Ein vertrauenswürdiges Netzwerk',
          p1: 'Unser Geschäftsmodell geht über die Eigenproduktion hinaus. Wir arbeiten mit einem sorgfältig ausgewählten Netzwerk von Erzeugern aus Almería zusammen, die unsere Vision von Qualität und Engagement für den europäischen Markt teilen.',
          p2: 'Jeder Partnererzeuger wird regelmäßig auditiert und muss die gleichen Qualitäts-, Rückverfolgbarkeits- und Lebensmittelsicherheitsprotokolle einhalten, die wir auf unseren eigenen Betrieben anwenden.',
        },
        how: {
          title: 'Wie unser Netzwerk funktioniert',
          steps: [
            { title: 'Auswahl', desc: 'Wir bewerten jeden Erzeuger nach strengen Qualitäts-, Zertifizierungs- und Rückverfolgbarkeitskriterien.' },
            { title: 'Audit', desc: 'Regelmäßige Feld- und Lageraudits zur Überprüfung der Einhaltung unserer Standards.' },
            { title: 'Kontrolle', desc: 'Rückstandsanalysen, Qualitätskontrollen bei der Annahme und laufende Produktionsüberwachung.' },
            { title: 'Integration', desc: 'Partnerprodukte werden unter den gleichen Standards mit voller Rückverfolgbarkeit vermarktet.' },
          ]
        },
        quality: {
          title: 'Einheitliche Standards',
          p1: 'Alle Erzeuger in unserem Netzwerk sind GlobalGAP-zertifiziert, pflegen integrierte Pflanzenschutzprogramme und befolgen Null-Rückstands-Protokolle. Die vollständige Rückverfolgbarkeit ist vom Gewächshaus bis zum Endkunden garantiert.',
        },
      },
      quality: {
        label: 'Qualitätsverpflichtung',
        title: 'Qualität & Zertifizierungen',
        subtitle: 'Wir erfüllen die anspruchsvollsten europäischen Marktstandards, um die Sicherheit und Qualität unserer Produkte zu garantieren.',
        process: {
          title: 'Unser Qualitätsprozess',
          p1: 'Vom Gewächshaus bis zur Lieferung unterliegt jede Stufe unseres Prozesses strengen Qualitätskontrollen. Unser technisches Team überwacht Produktion, Verpackung und Versand, um sicherzustellen, dass jedes Produkt den Kundenanforderungen entspricht.',
        },
        traceability: {
          title: 'Vollständige Rückverfolgbarkeit',
          p1: 'Unser Rückverfolgbarkeitssystem ermöglicht die Nachverfolgung jedes Produkts vom Quellgewächshaus bis zum Lieferpunkt. Jede Kiste ist mit einem Code versehen, der Zugang zur vollständigen Produkthistorie bietet.',
        },
        residues: {
          title: 'Rückstandskontrolle',
          p1: 'Wir unterhalten ein aktives Rückstandsüberwachungsprogramm mit regelmäßigen Analysen in akkreditierten Labors. Wir arbeiten mit Null-Rückstands-Protokollen und erfüllen die strengsten europäischen MRL-Werte.',
        },
        certifications: [
          { name: 'GlobalGAP', desc: 'International anerkannte gute landwirtschaftliche Praxis.' },
          { name: 'GRASP', desc: 'Bewertung sozialer Praktiken auf landwirtschaftlichen Betrieben.' },
          { name: 'BRC Food Safety', desc: 'Globaler Lebensmittelsicherheitsstandard.' },
          { name: 'ISO 22000', desc: 'Managementsystem für Lebensmittelsicherheit.' },
          { name: 'Bio-Produktion', desc: 'EU-Zertifizierung für ökologische Landwirtschaft (teilweise).' },
          { name: 'Null-Rückstand', desc: 'Produkte ohne nachweisbare Pflanzenschutzmittelrückstände.' },
          { name: 'SEDEX / SMETA', desc: 'Ethisches Handels- und Arbeitsbedingungen-Audit.' },
        ],
      },
      logistics: {
        label: 'Integrierte Logistik',
        title: 'Logistik & Transport',
        subtitle: 'Vollständige Kühlkette vom Gewächshaus bis zu Ihrem Lager. Direktlieferungen in ganz Europa.',
        fleet: {
          title: 'Flotte & Transport',
          p1: 'Wir betreiben eine eigene Flotte und pflegen Vereinbarungen mit führenden Kühllogistik-Anbietern, um zuverlässige, pünktliche Lieferungen zu gewährleisten. Unsere Fahrzeuge verfügen über GPS-Temperaturkontrolle und kontinuierliche Überwachung.',
        },
        coldchain: {
          title: 'Kühlkette',
          p1: 'Wir halten eine ununterbrochene Kühlkette von der Ernte aufrecht. Unsere Kühlräume und klimatisierten Verladerampen stellen sicher, dass Produkte unter optimalen Bedingungen versandt werden.',
        },
        delivery: {
          title: 'Lieferzeiten',
          subtitle: 'Von Almería zu den wichtigsten europäischen Märkten',
          routes: [
            { dest: 'Niederlande', time: '36h', detail: 'Holland, Belgien' },
            { dest: 'Deutschland', time: '48h', detail: 'Hauptziele' },
            { dest: 'Vereinigtes Königreich', time: '48-60h', detail: 'Über den Ärmelkanal' },
            { dest: 'Skandinavien', time: '60-72h', detail: 'Schweden, Norwegen, Dänemark' },
            { dest: 'Frankreich', time: '24-36h', detail: 'Perpignan, Paris, Norden' },
            { dest: 'Mitteleuropa', time: '48-60h', detail: 'Österreich, Schweiz, Polen' },
          ]
        },
        packaging: {
          title: 'Verpackung & Palettierung',
          p1: 'Wir arbeiten mit europäischen Standardverpackungsformaten und passen uns den Spezifikationen jedes Kunden an. EPS-Boxen, Wellpappe, Flowpack, Netze, Beutel und Punnets.',
        },
      },
      contact: {
        label: 'Kontakt',
        title: 'Kontaktieren Sie uns',
        subtitle: 'Wir stehen Ihnen für jede kommerzielle Anfrage oder Angebotsanforderung zur Verfügung.',
        form: {
          name: 'Name',
          company: 'Unternehmen',
          country: 'Land',
          email: 'E-Mail',
          phone: 'Telefon',
          products: 'Produkte von Interesse',
          message: 'Nachricht',
          submit: 'Anfrage senden',
          success: 'Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.',
          placeholders: {
            name: 'Ihr vollständiger Name',
            company: 'Firmenname',
            country: 'Land auswählen',
            email: 'email@firma.de',
            phone: '+49 170 0000000',
            message: 'Erzählen Sie uns von Ihren Bedürfnissen: Mengen, Produkte, Bestellhäufigkeit...',
          }
        },
        info: {
          title: 'Kontaktinformationen',
          hours: 'Bürozeiten',
          hoursValue: 'Montag bis Freitag: 8:00 - 18:00',
          saturday: 'Samstag: 8:00 - 14:00',
        }
      },
      footer: {
        desc: 'Vermarktung und Transport von frischem Gemüse aus Almería. Eigenproduktion und vertrauenswürdiges Erzeugernetzwerk für den europäischen Markt.',
        quickLinks: 'Schnelllinks',
        contactTitle: 'Kontakt',
        legal: 'Rechtliches',
        privacy: 'Datenschutz',
        cookies: 'Cookie-Richtlinie',
        terms: 'Impressum',
        rights: 'Alle Rechte vorbehalten.',
      },
      cookie: {
        message: 'Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern. Durch die weitere Nutzung akzeptieren Sie unsere',
        policy: 'Cookie-Richtlinie',
        accept: 'Akzeptieren',
        reject: 'Ablehnen',
      },
      common: {
        requestQuote: 'Angebot anfordern',
        viewProducts: 'Produkte ansehen',
        learnMore: 'Mehr erfahren',
        backToProducts: 'Zurück zu Produkten',
        allProducts: 'Alle Produkte',
        months: ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],
        monthsFull: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
      },
      countries: ['Belgien','Dänemark','Deutschland','Finnland','Frankreich','Irland','Italien','Niederlande','Norwegen','Österreich','Polen','Portugal','Schweden','Schweiz','Spanien','Tschechien','Vereinigtes Königreich','Andere'],
    }
  }
};

// Make globally available
if (typeof window !== 'undefined') {
  window.SITE_DATA = SITE_DATA;
}
