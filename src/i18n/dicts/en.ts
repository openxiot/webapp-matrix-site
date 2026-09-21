import type {Dict} from '../types';

/* English —— 默认语言（defaultLocale），站点根路径 `/` 即此语言。
 * 本文件同时是其余 10 种语言的**结构与语义基准**：新增文案先加在这里。 */
export const en: Dict = {
  brandName: 'Matrix',
  siteTitle: 'Matrix',
  legal: 'Matrix',
  cta: {primary: 'Sign in', secondary: 'Explore capabilities'},
  home: {
    metaDesc:
      'Matrix is a one-stop IoT cloud platform for teams: device onboarding, space modeling, product models and scene automation in a single system, on Web, iOS and Android.',
    pill: 'MATRIX · One-stop IoT platform',
    heroA: 'A one-stop IoT platform —',
    heroB: 'make everything connect for real',
    heroSub:
      'Matrix brings device access, space organization, product models and scene automation together, from edge gateways to a cloud console. Nothing to build from scratch — just sign in and go.',
    heroCtaSecondary: 'Explore capabilities',
    points: ['Web · iOS · Android sync', 'One-click OAuth sign-in', 'Team collaboration by org'],
    mock: {
      scanTag: 'Scan to bind a device',
      sceneTag: 'Scene automation',
      windowTitle: 'Matrix · Device overview',
      liveTag: 'Illustration',
      rail: ['Smart Campus', 'Bldg A · Floor 3', 'South Workshop'],
      tiles: [
        {name: 'AC', value: '26.0 ℃', sub: 'Cooling · applied'},
        {name: 'Lighting', value: 'On', sub: 'Scene · Office mode'},
        {name: 'Power meter', value: '12.4 kW', sub: 'Live report'},
        {name: 'Door lock', value: 'Locked', sub: 'Armed'},
      ],
      foot: 'Latest event: Meeting-room lights → scene “Leave office” triggered',
    },
    capHead: {
      eyebrow: 'Platform',
      title: 'One platform, the whole IoT journey',
      lead: 'From edge devices to a cloud console, Matrix folds access, organization, management and automation into a single system.',
    },
    capItems: [
      {
        title: 'Multi-protocol device access',
        text: 'Onboard devices over industrial gateways and many protocols — Modbus, MQTT, Matter, PLC, 485 / 4G DTU — into one consistent device model. Scan a QR code to bind a device to a space.',
      },
      {
        title: 'Spaces & sites modeling',
        text: 'Organize devices in a tree of spaces — campus → building → floor → room — plus workshops, greenhouses and parking lots, mirroring the physical world.',
      },
      {
        title: 'Products & thing models',
        text: 'Define a product and its standard model once: properties, states and writable controls are all visible. Every connected device is an instance of a model — consistent and reusable.',
      },
      {
        title: 'Live monitoring & control',
        text: 'Device state streams in real time; properties are remotely readable and writable. Send switches and parameters anytime, and operate every device from one view.',
      },
      {
        title: 'Scenes & automation',
        text: 'Automation driven by rules and events: unlock a door to switch on the lights, or let HVAC respond to temperature — devices work together by themselves.',
      },
      {
        title: 'Organizations & permissions',
        text: 'Run a platform together around an organization, with tiered members and permissions. Sign in with OAuth — no separate account system to maintain.',
      },
    ],
    scnHead: {
      eyebrow: 'Scenarios',
      title: 'One platform for many domains',
      lead: 'A building, a factory, a greenhouse or a parking lot — Matrix can organize and manage every device inside each of them.',
    },
    scnItems: [
      {
        title: 'Smart buildings & campuses',
        text: 'Floor- and room-level control with lighting, HVAC and access managed in one place.',
      },
      {
        title: 'Industry & workshops',
        text: 'Bring Modbus and PLC line equipment online and give legacy machines new capability.',
      },
      {
        title: 'Agriculture & greenhouses',
        text: 'Monitor the environment and automate watering and ventilation — no one needs to stay on site.',
      },
      {
        title: 'Communities & parking',
        text: 'Parking, barriers, security and common-area devices unified in one view, one click.',
      },
    ],
    scnLink: 'View scenarios',
    stepsHead: {
      eyebrow: 'Get started',
      title: 'Four steps from sign-in to live devices',
      lead: 'No backend to stand up — once you sign in, your org, spaces and device estate are ready.',
    },
    steps: [
      {
        title: 'Sign in',
        text: 'Log in with your OAuth account (e.g. GitHub) and create or join an organization.',
      },
      {
        title: 'Map your spaces',
        text: 'Build the campus / building / floor structure to match the real world, like blocks.',
      },
      {
        title: 'Bind devices',
        text: 'Pick a product model you already defined, or scan a QR code, and drop devices into spaces.',
      },
      {
        title: 'Automate & operate',
        text: 'Configure monitoring and scene rules, then view and control from Web, iOS and Android.',
      },
    ],
    ctaTitle: 'Get every device truly connected',
    ctaText: 'Step into Matrix now — create your first organization and space, and bring your devices into the digital world.',
  },

  capability: {
    metaTitle: 'Capabilities',
    metaDesc:
      'Matrix IoT platform capabilities: multi-protocol device access, space & site modeling, product thing-models, live monitoring and scene automation.',
    hero: {
      eyebrow: 'Platform capabilities',
      pre: 'From onboarding to automation — ',
      grad: 'the full platform, end to end',
      lead: 'Matrix integrates device access, space organization, thing-model management and automation into one system, so building an IoT app is no longer an assembly of scattered tools.',
      secondary: 'See use cases',
    },
    sections: [
      {
        eyebrow: 'Capability 01 · Device access',
        title: 'Multi-protocol access, easy onboarding',
        paragraphs: [
          'Matrix pairs a cloud platform with gateways to bring devices of any age and protocol into one system — whether Modbus fieldbus, MQTT smart devices, Matter or PLC, all connect and are managed uniformly.',
        ],
        checks: [
          'Mainstream protocols such as Modbus RTU / TCP and MQTT for common industrial and building sites',
          'Consumer and vertical protocols like Matter and PLC are continuously added',
          '4G DTU and 485 gateway tunneling — legacy devices connect without being replaced',
          'QR-code binding plus a unique device id: connected means named, located and managed',
        ],
        link: 'Do your first onboarding in the platform',
      },
      {
        eyebrow: 'Capability 02 · Space modeling',
        title: 'Space is the structure — devices grow into it',
        paragraphs: [
          'Devices are not islands; they belong to a space. Model the real layout with campus, building, floor and room levels, and see everything from “whole campus” down to “a single room”.',
        ],
        checks: [
          'Campus / building / floor / room, plus site types like workshop, greenhouse and parking',
          'A tree you can drill into level by level to reach any device fast',
          'Roll-ups per space — the state of a whole floor or campus at a glance',
          'Levels grow freely as your business changes shape',
        ],
        link: 'How spaces map across different domains',
      },
      {
        eyebrow: 'Capability 03 · Products & thing models',
        title: 'Products are the standard; devices are instances',
        paragraphs: [
          'Define a product and its thing model once, then onboard and reuse devices in batches — keeping data and downstream control consistent.',
        ],
        checks: [
          'Define products and models with properties, types and read/write access in plain sight',
          'Properties report in real time; control commands fan out to the right device instances',
          'Full lifecycle: in development → preview → released',
          'Same model means same device — plug in and align automatically, swap units without swapping logic',
        ],
        link: 'Define a product in the platform',
      },
      {
        eyebrow: 'Capability 04 · Monitoring & scene automation',
        title: 'See it, control it — and let it act on its own',
        paragraphs: [
          'Live state on screen and one-tap commands are only the baseline. Matrix goes further with rules and events, so the whole system runs the way you want.',
        ],
        checks: [
          'Properties and events stream live; history stays traceable',
          'Remote switches and parameters, with identical Web / iOS / Android experiences',
          'One-tap scenes: arrive, go home, leave campus — one action, a cascade of commands',
          'Rule automation: conditions like over-temperature or door-open trigger device actions',
        ],
        link: 'See typical automation scenes',
      },
    ],
    access: {
      clients: ['Web / iOS / Android', 'Open API'],
      hubTitle: 'Matrix platform',
      hubSub: 'One access · one model · one control',
      gateways: ['485 / TCP gateway', '4G DTU', 'MQTT', 'Matter / PLC'],
      devices: ['AC', 'Lights', 'Power meter', 'Temp / humidity', 'Door lock', 'Line devices'],
    },
    space: {
      root: 'Smart Campus',
      nodes: ['Building A', 'Floor 3'],
      leaves: [
        {name: 'Meeting room', count: '2 devices'},
        {name: 'Lobby', count: '1 device'},
      ],
      types: ['Campus', 'Building', 'Floor', 'Room', 'Workshop', 'Greenhouse', 'Parking', 'Zone'],
    },
    model: {
      name: 'Product · Environment monitor',
      badge: 'Released',
      rows: [
        {name: 'Temperature', kind: 'Number · report', writable: false},
        {name: 'Humidity', kind: 'Number · report', writable: false},
        {name: 'Fan switch', kind: 'Boolean · control', writable: true},
        {name: 'Run state', kind: 'Enum · state', writable: false},
      ],
      foot: 'Every connected device is an “instance” of this product — properties and control align automatically',
    },
    control: {
      tileTitle: 'Live monitoring',
      tileSub: 'Meeting room',
      live: [
        {text: 'Temperature 26.0℃', ok: false},
        {text: 'Lighting on', ok: false},
        {text: 'Command applied', ok: true},
      ],
      rules: [
        {name: 'Rule “Departure routine”', desc: 'At 17:30, or when the last person leaves → lights off, AC to eco, doors armed'},
        {name: 'Rule “Overheat alert”', desc: 'Threshold exceeded → notify and auto-start the fan'},
      ],
    },
    ctaTitle: 'Devices, platform, apps — the whole chain, connected',
    ctaText: 'Step into Matrix now and experience the full journey: define a product, onboard devices, and set up scene automation.',
  },

  scenario: {
    metaTitle: 'Scenarios',
    metaDesc:
      'Typical Matrix IoT scenarios: smart buildings & campuses, industry & workshops, agriculture & greenhouses, and community parking.',
    hero: {
      eyebrow: 'Use scenarios',
      pre: 'From buildings to workshops — ',
      grad: 'Matrix has you covered',
      lead: 'Thanks to space modeling and multi-protocol access, Matrix fits buildings, industry, agriculture and communities out of the box. These are examples — the platform goes far beyond them.',
      secondary: 'Explore capabilities',
    },
    list: {
      items: [
        {
          index: '01',
          title: 'Smart buildings & campuses',
          lead: 'Floor- and room-level precision control: lighting, HVAC, access and energy under one roof, on one screen.',
          bullets: [
            'A campus / building / floor / room tree with devices reachable level by level',
            'Central remote on/off for AC and lighting; one command to arm or disarm door locks',
            'Floor-level energy and state roll-ups, with alerts the moment something is off',
            'Access and visitor flows wired in — a full arrive / meet / leave loop',
          ],
          spaces: ['Campus', 'Building', 'Floor', 'Room'],
          keywords: ['Building control', 'Energy', 'Access control', 'Meeting rooms'],
        },
        {
          index: '02',
          title: 'Industry & workshops',
          lead: 'Bring legacy Modbus and PLC line equipment online, turning “dumb machines” on the shop floor into monitorable, traceable data sources.',
          bullets: [
            'Collect line state over Modbus RTU / TCP or PLC, direct or via gateway',
            'Properties and alarms stream to a single screen the operator watches',
            'Remote maintenance and parameter pushes cut on-site visits',
            'Every event is kept — a growing dataset for output and fault analysis',
          ],
          spaces: ['Workshop', 'Zone'],
          keywords: ['Machine connectivity', 'Line monitoring', 'Remote O&M', 'Data trails'],
        },
        {
          index: '03',
          title: 'Agriculture & greenhouses',
          lead: 'Monitor the greenhouse environment and control it on demand — watering, ventilation and shading no longer wait for someone on site.',
          bullets: [
            'Real-time readings from temperature, humidity, light and soil sensors',
            'Over-temperature auto-starts the fan; low humidity triggers irrigation',
            'Each greenhouse modeled as its own site, managed together with per-zone control',
            'Alerts push the moment something is off — no 24/7 patrolling',
          ],
          spaces: ['Greenhouse', 'Field', 'Zone'],
          keywords: ['Environment sensing', 'Auto irrigation', 'Ventilation & shading', 'Zone control'],
        },
        {
          index: '04',
          title: 'Commercial & community parking',
          lead: 'Unify parking spots, barriers, security and common-area devices in one view with one-tap management and smoother service.',
          bullets: [
            'Occupancy and barrier state connected — parking and payments become transparent',
            'Access and common lighting scheduled per zone to cut idle energy',
            'Visitor flows wired into property operations for a complete loop',
            'One dashboard across multiple properties and domains for the operator',
          ],
          spaces: ['Parking', 'Zone', 'Building'],
          keywords: ['Parking management', 'Barriers', 'Access security', 'Common lighting'],
        },
      ],
    },
    more: {
      eyebrow: 'More to come',
      text: 'Matrix’s extensible space model and open access keep landing in new directions — energy management, cold-chain warehousing, retail chains, smart hotels…',
    },
    ctaTitle: 'Find the scenario that’s yours',
    ctaText: 'Put your sites and devices into Matrix — starting with one organization, one space.',
  },

  apps: {
    metaTitle: 'Get the app',
    metaDesc:
      'Download the Matrix IoT platform client: Android and iPhone apps for binding devices, live status, remote control and scene automation.',
    hero: {
      eyebrow: 'Apps',
      pre: 'Matrix in your pocket — ',
      grad: 'your devices, always at hand',
      lead: 'The Matrix client covers Android and iPhone: bind devices by QR code, watch live status and send commands from anywhere — on the same account and data as the Web console.',
      primary: 'Download the app',
      secondary: 'Explore capabilities',
    },
    download: {
      eyebrow: 'Download',
      title: 'Pick your platform',
      lead: 'Install and sign in with OAuth to see the same organizations, spaces and devices you have on the Web.',
      platforms: {android: 'Android', ios: 'iPhone'},
      labels: {version: 'Version', released: 'Released', size: 'Package size', minOs: 'Requires'},
      notesTitle: "What's new",
      available: 'Available',
      comingSoon: 'Coming soon',
      pending: 'Not available yet',
      buttons: {android: 'Download APK', ios: 'Get on the App Store'},
      scanTitle: 'Scan to install',
      scanHint: 'Point your phone camera at the code to download it on your phone',
    },
    install: {
      eyebrow: 'Install',
      title: 'Install and go',
      lead: 'The Android package comes straight from object storage — no third-party marketplace — and signs in to the same account and data as the Web console.',
      stepAndroid: {
        title: 'Install on Android',
        text: 'Tap “Download APK” and the browser saves the package; open it on your phone to install. If prompted, allow installing from unknown sources for this one time.',
      },
      stepIosPending: {
        title: 'Wait for the iPhone release',
        text: 'The iPhone app ships through the App Store. Once it is live, the store link appears on this page — search for Matrix in the store.',
      },
      stepIosReady: {
        title: 'Install on iPhone',
        text: 'Tap “Get on the App Store” or scan the code to open the store — or search for Matrix in the App Store.',
      },
      stepWeb: {
        title: 'Or just use the Web',
        text: 'Prefer not to install? Open app.wematrix.cc in your phone browser and sign in — every feature is there.',
      },
    },
    ctaTitle: 'Put your devices in your pocket',
    ctaText: 'Download the Matrix client and check status or send commands from anywhere.',
  },
};
