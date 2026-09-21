import type {Dict} from '../types';

/* Español —— /es/...
 * 结构与语义以 en.ts 为基准逐键对应；术语统一：dispositivo / espacio / escena /
 * producto / modelo de objeto / propiedad / pasarela / automatización / organización /
 * campus / edificio / planta / sala / taller / invernadero / parking / zona /
 * monitorización en vivo / alta / regla。 */
export const es: Dict = {
  brandName: 'Matrix',
  siteTitle: 'Matrix',
  legal: 'Matrix',
  cta: {primary: 'Iniciar sesión', secondary: 'Ver capacidades'},
  home: {
    metaDesc:
      'Matrix es una plataforma IoT en la nube todo en uno para empresas: alta de dispositivos, modelado de espacios, modelos de objeto de producto y automatización por escenas en un solo sistema, en Web, iOS y Android.',
    pill: 'MATRIX · Plataforma IoT todo en uno',
    heroA: 'Una plataforma IoT todo en uno,',
    heroB: 'para que todo conecte de verdad',
    heroSub:
      'Matrix reúne el acceso de dispositivos, la organización de espacios, los modelos de objeto y la automatización por escenas, desde la pasarela de borde hasta la consola en la nube. Sin montar nada desde cero: entra y empieza.',
    heroCtaSecondary: 'Ver capacidades',
    points: ['Web · iOS · Android sincronizados', 'Acceso con OAuth en un clic', 'Colaboración por organización'],
    mock: {
      scanTag: 'Escanea para vincular',
      sceneTag: 'Automatización por escenas',
      windowTitle: 'Matrix · Vista de dispositivos',
      liveTag: 'Ilustración',
      rail: ['Campus inteligente', 'Edif. A · Planta 3', 'Taller Sur'],
      tiles: [
        {name: 'Clima', value: '26.0 ℃', sub: 'Enfriando · aplicado'},
        {name: 'Luces', value: 'Encendidas', sub: 'Escena · Modo oficina'},
        {name: 'Medidor', value: '12.4 kW', sub: 'Reporte en vivo'},
        {name: 'Cerradura', value: 'Bloqueada', sub: 'Armada'},
      ],
      foot: 'Último evento: luces de la sala de reuniones → escena “Salir de la oficina” activada',
    },
    capHead: {
      eyebrow: 'Plataforma',
      title: 'Una plataforma, todo el ciclo IoT',
      lead: 'Desde los dispositivos de borde hasta la consola en la nube, Matrix reúne acceso, organización, gestión y automatización en un solo sistema.',
    },
    capItems: [
      {
        title: 'Acceso de dispositivos multiprotocolo',
        text: 'Conecta dispositivos por pasarelas industriales y múltiples protocolos —Modbus, MQTT, Matter, PLC, 485 / 4G DTU— a un mismo modelo de dispositivo. Escanea un código QR para vincular un dispositivo a un espacio.',
      },
      {
        title: 'Modelado de espacios y emplazamientos',
        text: 'Organiza los dispositivos en un árbol de espacios —campus → edificio → planta → sala— y también talleres, invernaderos y parkings, a imagen del mundo físico.',
      },
      {
        title: 'Productos y modelos de objeto',
        text: 'Define una vez el producto y su modelo de objeto estándar: propiedades, estados y controles escribibles, todo a la vista. Cada dispositivo conectado es una instancia de un modelo: coherente y reutilizable.',
      },
      {
        title: 'Monitorización y control en vivo',
        text: 'El estado de cada dispositivo llega en tiempo real y las propiedades se leen y se escriben en remoto. Envía interruptores y parámetros cuando quieras y opera todos los dispositivos desde una sola vista.',
      },
      {
        title: 'Escenas y automatización',
        text: 'Automatización guiada por reglas y eventos: abrir una puerta enciende las luces, o la climatización responde a la temperatura. Los dispositivos colaboran solos.',
      },
      {
        title: 'Organizaciones y permisos',
        text: 'Gestiona la plataforma en equipo alrededor de una organización, con miembros y permisos por niveles. Entra con OAuth: sin mantener un sistema de cuentas propio.',
      },
    ],
    scnHead: {
      eyebrow: 'Escenarios',
      title: 'Una plataforma para muchos sectores',
      lead: 'Un edificio, una fábrica, un invernadero o un parking: Matrix organiza y gestiona cada dispositivo que hay dentro.',
    },
    scnItems: [
      {
        title: 'Edificios y campus inteligentes',
        text: 'Control por planta y por sala, con iluminación, climatización y accesos gestionados en un mismo lugar.',
      },
      {
        title: 'Industria y talleres',
        text: 'Conecta equipos de línea Modbus y PLC y da nuevas capacidades a la maquinaria antigua.',
      },
      {
        title: 'Agricultura e invernaderos',
        text: 'Monitoriza el ambiente y automatiza el riego y la ventilación sin que nadie tenga que estar presente.',
      },
      {
        title: 'Comunidades y parkings',
        text: 'Parkings, barreras, seguridad y equipos de zonas comunes en una sola vista y con un clic.',
      },
    ],
    scnLink: 'Ver escenarios',
    stepsHead: {
      eyebrow: 'Primeros pasos',
      title: 'Cuatro pasos desde el acceso hasta los dispositivos en marcha',
      lead: 'Sin backend que montar: al entrar, tu organización, tus espacios y tu parque de dispositivos ya están listos.',
    },
    steps: [
      {
        title: 'Inicia sesión',
        text: 'Entra con tu cuenta OAuth (por ejemplo, GitHub) y crea o únete a una organización.',
      },
      {
        title: 'Dibuja tus espacios',
        text: 'Construye la estructura campus / edificio / planta que refleje el mundo real, como si fueran bloques.',
      },
      {
        title: 'Vincula dispositivos',
        text: 'Elige un modelo de producto ya definido, o escanea un código QR, y coloca los dispositivos en sus espacios.',
      },
      {
        title: 'Automatiza y opera',
        text: 'Configura la monitorización y las reglas de escena, y consulta y controla desde Web, iOS y Android.',
      },
    ],
    ctaTitle: 'Consigue que cada dispositivo conecte de verdad',
    ctaText: 'Entra en Matrix ahora, crea tu primera organización y tu primer espacio, y lleva tus dispositivos al mundo digital.',
  },

  capability: {
    metaTitle: 'Capacidades',
    metaDesc:
      'Capacidades de la plataforma IoT Matrix: acceso de dispositivos multiprotocolo, modelado de espacios y emplazamientos, modelos de objeto de producto, monitorización en vivo y automatización por escenas.',
    hero: {
      eyebrow: 'Capacidades de la plataforma',
      pre: 'Del alta a la automatización: ',
      grad: 'toda la plataforma, de principio a fin',
      lead: 'Matrix integra el acceso de dispositivos, la organización de espacios, la gestión de modelos de objeto y la automatización en un solo sistema, para que crear una aplicación IoT deje de ser un conjunto de herramientas dispersas.',
      secondary: 'Ver casos de uso',
    },
    sections: [
      {
        eyebrow: 'Capacidad 01 · Acceso de dispositivos',
        title: 'Acceso multiprotocolo, alta sencilla',
        paragraphs: [
          'Matrix combina plataforma en la nube y pasarelas para llevar dispositivos de cualquier generación y protocolo a un mismo sistema: ya sea bus de campo Modbus, dispositivos inteligentes MQTT, Matter o PLC, todos conectan y se gestionan de forma uniforme.',
        ],
        checks: [
          'Protocolos mayoritarios como Modbus RTU / TCP y MQTT, presentes en instalaciones industriales y de edificios',
          'Protocolos de consumo y de sector como Matter y PLC se incorporan de forma continua',
          'Túnel con 4G DTU y pasarela 485: los equipos existentes conectan sin sustituirse',
          'Vinculación por código QR y un id único: conectado es igual a nombrado, ubicado y gestionado',
        ],
        link: 'Haz tu primer alta en la plataforma',
      },
      {
        eyebrow: 'Capacidad 02 · Modelado de espacios',
        title: 'El espacio es la estructura; los dispositivos crecen dentro',
        paragraphs: [
          'Los dispositivos no son islas: pertenecen a un espacio. Modela la distribución real con niveles de campus, edificio, planta y sala, y observa todo desde “todo el campus” hasta “una sola sala”.',
        ],
        checks: [
          'Campus / edificio / planta / sala, más tipos de emplazamiento como taller, invernadero y parking',
          'Un árbol por el que bajar nivel a nivel y llegar a cualquier dispositivo en segundos',
          'Agregación por espacio: el estado de toda una planta o de un campus de un vistazo',
          'Los niveles crecen libremente cuando cambia la forma del negocio',
        ],
        link: 'Cómo se organizan los espacios en cada sector',
      },
      {
        eyebrow: 'Capacidad 03 · Productos y modelos de objeto',
        title: 'El producto es el estándar; el dispositivo, la instancia',
        paragraphs: [
          'Define una vez el producto y su modelo de objeto, y después da de alta y reutiliza dispositivos por lotes, manteniendo coherentes los datos y el control posterior.',
        ],
        checks: [
          'Define productos y modelos con propiedades, tipos y acceso de lectura / escritura a la vista',
          'Las propiedades se reportan en tiempo real; las órdenes de control llegan a las instancias correctas',
          'Ciclo de vida completo: en desarrollo → vista previa → publicado',
          'Mismo modelo, mismo dispositivo: al conectar se alinea solo y cambias el equipo sin cambiar la lógica',
        ],
        link: 'Define un producto en la plataforma',
      },
      {
        eyebrow: 'Capacidad 04 · Monitorización y automatización por escenas',
        title: 'Verlo, controlarlo y dejar que actúe solo',
        paragraphs: [
          'El estado en vivo en pantalla y las órdenes con un toque son solo el punto de partida. Matrix va más allá con reglas y eventos, para que todo el sistema funcione como tú quieras.',
        ],
        checks: [
          'Propiedades y eventos en vivo; el histórico queda rastreable',
          'Interruptores y parámetros en remoto, con la misma experiencia en Web / iOS / Android',
          'Escenas con un toque: llegar, volver a casa, salir del campus… una acción, una cascada de órdenes',
          'Automatización por reglas: condiciones como temperatura excesiva o puerta abierta disparan acciones en los dispositivos',
        ],
        link: 'Ver escenas de automatización típicas',
      },
    ],
    access: {
      clients: ['Web / iOS / Android', 'Open API'],
      hubTitle: 'Plataforma Matrix',
      hubSub: 'Un acceso · un modelo · un control',
      gateways: ['Pasarela 485 / TCP', '4G DTU', 'MQTT', 'Matter / PLC'],
      devices: ['Clima', 'Luces', 'Medidor', 'Temp. / humedad', 'Cerradura', 'Equipos de línea'],
    },
    space: {
      root: 'Campus inteligente',
      nodes: ['Edificio A', 'Planta 3'],
      leaves: [
        {name: 'Sala de reuniones', count: '2 dispositivos'},
        {name: 'Vestíbulo', count: '1 dispositivo'},
      ],
      types: ['Campus', 'Edificio', 'Planta', 'Sala', 'Taller', 'Invernadero', 'Parking', 'Zona'],
    },
    model: {
      name: 'Producto · Monitor ambiental',
      badge: 'Publicado',
      rows: [
        {name: 'Temperatura', kind: 'Número · reporte', writable: false},
        {name: 'Humedad', kind: 'Número · reporte', writable: false},
        {name: 'Ventilador', kind: 'Booleano · control', writable: true},
        {name: 'Estado de marcha', kind: 'Enum · estado', writable: false},
      ],
      foot: 'Cada dispositivo conectado es una “instancia” de este producto: propiedades y control se alinean solos',
    },
    control: {
      tileTitle: 'Monitorización en vivo',
      tileSub: 'Sala de reuniones',
      live: [
        {text: 'Temperatura 26.0℃', ok: false},
        {text: 'Luces encendidas', ok: false},
        {text: 'Orden aplicada', ok: true},
      ],
      rules: [
        {name: 'Regla “Rutina de salida”', desc: 'A las 17:30, o cuando se va la última persona → luces apagadas, clima en modo eco, puertas armadas'},
        {name: 'Regla “Aviso de sobrecalentamiento”', desc: 'Se supera el umbral → notifica y arranca el ventilador automáticamente'},
      ],
    },
    ctaTitle: 'Dispositivos, plataforma y apps: toda la cadena, conectada',
    ctaText: 'Entra en Matrix ahora y recorre todo el proceso: define un producto, da de alta dispositivos y configura la automatización por escenas.',
  },

  scenario: {
    metaTitle: 'Escenarios',
    metaDesc:
      'Escenarios típicos de la plataforma IoT Matrix: edificios y campus inteligentes, industria y talleres, agricultura e invernaderos, y parkings de comunidades.',
    hero: {
      eyebrow: 'Casos de uso',
      pre: 'De los edificios a los talleres: ',
      grad: 'Matrix te lo cubre',
      lead: 'Gracias al modelado de espacios y al acceso multiprotocolo, Matrix encaja desde el primer día en edificios, industria, agricultura y comunidades. Estos son ejemplos: la plataforma llega mucho más lejos.',
      secondary: 'Ver capacidades',
    },
    list: {
      items: [
        {
          index: '01',
          title: 'Edificios y campus inteligentes',
          lead: 'Control preciso por planta y por sala: iluminación, climatización, accesos y energía bajo un mismo techo y en una misma pantalla.',
          bullets: [
            'Un árbol campus / edificio / planta / sala con los dispositivos accesibles nivel a nivel',
            'Encendido y apagado central en remoto para clima y luces; una orden para armar o desarmar las cerraduras',
            'Agregación de energía y estado por planta, con alertas en cuanto algo se sale de lo previsto',
            'Accesos y visitantes integrados: un ciclo completo de llegar, reunirse y salir',
          ],
          spaces: ['Campus', 'Edificio', 'Planta', 'Sala'],
          keywords: ['Control de edificios', 'Energía', 'Control de accesos', 'Salas de reuniones'],
        },
        {
          index: '02',
          title: 'Industria y talleres',
          lead: 'Conecta equipos de línea Modbus y PLC antiguos y convierte la maquinaria “sin datos” de la planta en fuentes de datos monitorizables y rastreables.',
          bullets: [
            'Recoge el estado de la línea por Modbus RTU / TCP o PLC, en directo o a través de pasarela',
            'Propiedades y alarmas llegan a una sola pantalla que el operario vigila',
            'El mantenimiento remoto y el envío de parámetros reducen las visitas a planta',
            'Todo evento queda registrado: un conjunto de datos que crece para analizar producción y fallos',
          ],
          spaces: ['Taller', 'Zona'],
          keywords: ['Equipos conectados', 'Monitorización de línea', 'O&M remoto', 'Trazabilidad de datos'],
        },
        {
          index: '03',
          title: 'Agricultura e invernaderos',
          lead: 'Monitoriza el ambiente del invernadero y actúa cuando haga falta: el riego, la ventilación y el sombreo ya no dependen de que haya alguien presente.',
          bullets: [
            'Lecturas en tiempo real de sensores de temperatura, humedad, luz y suelo',
            'Si la temperatura se pasa, arranca el ventilador; si baja la humedad, se dispara el riego',
            'Cada invernadero se modela como su propio emplazamiento, gestionado en conjunto y con control por zona',
            'Las alertas llegan al momento: sin vigilancia 24 horas',
          ],
          spaces: ['Invernadero', 'Campo', 'Zona'],
          keywords: ['Sensores ambientales', 'Riego automático', 'Ventilación y sombreo', 'Control por zonas'],
        },
        {
          index: '04',
          title: 'Parkings comerciales y de comunidad',
          lead: 'Unifica plazas, barreras, seguridad y equipos de zonas comunes en una sola vista, con gestión en un clic y un servicio más ágil.',
          bullets: [
            'Ocupación y estado de las barreras conectados: plazas y pagos, transparentes',
            'Accesos y luces comunes programados por zona para recortar el consumo en vacío',
            'Los flujos de visitantes se integran en la operación del inmueble, en un ciclo completo',
            'Un único panel para varios inmuebles y sectores, pensado para el operador',
          ],
          spaces: ['Parking', 'Zona', 'Edificio'],
          keywords: ['Gestión de plazas', 'Barreras', 'Seguridad y accesos', 'Alumbrado común'],
        },
      ],
    },
    more: {
      eyebrow: 'Muy pronto',
      text: 'El modelo de espacios extensible y el acceso abierto de Matrix siguen llegando a nuevos terrenos: gestión energética, almacenes frigoríficos, cadenas de tiendas, hoteles inteligentes…',
    },
    ctaTitle: 'Encuentra el escenario que es tuyo',
    ctaText: 'Lleva tus emplazamientos y dispositivos a Matrix, empezando por una organización y un espacio.',
  },

  apps: {
    metaTitle: 'Descarga la app',
    metaDesc:
      'Descarga el cliente de la plataforma IoT Matrix: apps para Android y iPhone con las que vincular dispositivos, ver el estado en vivo, controlar en remoto y automatizar escenas.',
    hero: {
      eyebrow: 'Apps',
      pre: 'Matrix en tu bolsillo: ',
      grad: 'tus dispositivos, siempre a mano',
      lead: 'El cliente Matrix cubre Android y iPhone: vincula dispositivos con código QR, consulta el estado en vivo y envía órdenes desde cualquier lugar, con la misma cuenta y los mismos datos que la consola Web.',
      primary: 'Descargar la app',
      secondary: 'Ver capacidades',
    },
    download: {
      eyebrow: 'Descarga',
      title: 'Elige tu plataforma',
      lead: 'Instala e inicia sesión con OAuth para ver las mismas organizaciones, espacios y dispositivos que tienes en Web.',
      platforms: {android: 'Android', ios: 'iPhone'},
      labels: {version: 'Versión', released: 'Publicada', size: 'Tamaño', minOs: 'Requiere'},
      notesTitle: 'Novedades',
      available: 'Disponible',
      comingSoon: 'Muy pronto',
      pending: 'Aún no disponible',
      buttons: {android: 'Descargar APK', ios: 'Ver en App Store'},
      scanTitle: 'Escanea para instalar',
      scanHint: 'Apunta con la cámara del móvil al código para descargarla en tu teléfono',
    },
    install: {
      eyebrow: 'Instalación',
      title: 'Instala y listo',
      lead: 'El paquete de Android llega directamente desde el almacenamiento de objetos, sin pasar por mercados de terceros, y entra con la misma cuenta y los mismos datos que la consola Web.',
      stepAndroid: {
        title: 'Instalar en Android',
        text: 'Toca “Descargar APK” y el navegador guarda el paquete; ábrelo en el móvil para instalarlo. Si el sistema lo pide, permite esa vez la instalación desde fuentes desconocidas.',
      },
      stepIosPending: {
        title: 'Espera al lanzamiento en iPhone',
        text: 'La app para iPhone se distribuye por el App Store. Cuando esté disponible, el enlace a la tienda aparecerá en esta página: búscala en la tienda.',
      },
      stepIosReady: {
        title: 'Instalar en iPhone',
        text: 'Toca “Ver en App Store” o escanea el código para abrir la tienda, o busca Matrix en el App Store.',
      },
      stepWeb: {
        title: 'O usa simplemente la Web',
        text: '¿Prefieres no instalar nada? Abre app.wematrix.cc en el navegador del móvil e inicia sesión: todas las funciones están ahí.',
      },
    },
    ctaTitle: 'Lleva tus dispositivos en el bolsillo',
    ctaText: 'Descarga el cliente Matrix y consulta el estado o envía órdenes desde cualquier lugar.',
  },
};
