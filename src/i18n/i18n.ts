import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/* 站点全部可见文案的类型定义（两种语言共用同一结构） */
export type Card = {title: string; text: string};
export type Step = {title: string; text: string};
export type Section = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  checks: string[];
  link: string;
};
export type Head = {eyebrow: string; title: string; lead: string};

export interface Dict {
  /** 导航栏品牌文字 + logo alt（左上角词标） */
  brandName: string;
  /** 浏览器标题默认站点名（<title> 后缀） */
  siteTitle: string;
  /** 页脚版权行的品牌部分 */
  legal: string;
  cta: {primary: string; secondary: string};
  home: {
    metaDesc: string;
    pill: string;
    heroA: string;
    heroB: string;
    heroSub: string;
    heroCtaSecondary: string;
    points: string[];
    mock: {
      scanTag: string;
      sceneTag: string;
      windowTitle: string;
      liveTag: string;
      rail: string[];
      tiles: {name: string; value: string; sub: string}[];
      foot: string;
    };
    capHead: Head;
    capItems: Card[];
    scnHead: Head;
    scnItems: Card[];
    scnLink: string;
    stepsHead: Head;
    steps: Step[];
    ctaTitle: string;
    ctaText: string;
  };
  capability: {
    metaTitle: string;
    metaDesc: string;
    hero: {eyebrow: string; pre: string; grad: string; lead: string; secondary: string};
    sections: Section[];
    access: {
      clients: string[];
      hubTitle: string;
      hubSub: string;
      gateways: string[];
      devices: string[];
    };
    space: {
      root: string;
      nodes: string[]; // 第 1/2 层
      leaves: {name: string; count: string}[];
      types: string[];
    };
    model: {
      name: string;
      badge: string;
      rows: {name: string; kind: string; writable: boolean}[];
      foot: string;
    };
    control: {
      tileTitle: string;
      tileSub: string;
      live: {text: string; ok: boolean}[];
      rules: {name: string; desc: string}[];
    };
    ctaTitle: string;
    ctaText: string;
  };
  scenario: {
    metaTitle: string;
    metaDesc: string;
    hero: {eyebrow: string; pre: string; grad: string; lead: string; secondary: string};
    list: {
      items: {index: string; title: string; lead: string; bullets: string[]; spaces: string[]; keywords: string[]}[];
    };
    more: {eyebrow: string; text: string};
    ctaTitle: string;
    ctaText: string;
  };
  apps: {
    metaTitle: string;
    metaDesc: string;
    hero: {eyebrow: string; pre: string; grad: string; lead: string; primary: string; secondary: string};
    download: {
      eyebrow: string;
      title: string;
      lead: string;
      /** 平台名，键与 static/data/apps/ 下的数据文件一致 */
      platforms: {android: string; ios: string};
      labels: {version: string; released: string; size: string; minOs: string};
      notesTitle: string;
      available: string;
      comingSoon: string;
      pending: string;
      buttons: {android: string; ios: string};
      scanTitle: string;
      scanHint: string;
    };
    install: {
      eyebrow: string;
      title: string;
      lead: string;
      /** Android 安装步骤 */
      stepAndroid: Step;
      /** iPhone 步骤：按 ios.json 是否已发布上架二选一 */
      stepIosPending: Step;
      stepIosReady: Step;
      /** Web 端免安装步骤 */
      stepWeb: Step;
    };
    ctaTitle: string;
    ctaText: string;
  };
}

/* ============ 简体中文 ============ */
const zh: Dict = {
  brandName: '矩阵',
  siteTitle: '矩阵',
  legal: '矩阵',
  cta: {primary: '登录', secondary: '了解平台能力'},
  home: {
    metaDesc:
      '矩阵（Matrix）是面向企业的一站式物联网云平台：设备接入、空间建模、产品物模型与场景联动一体完成，支持 Web / iOS / Android 多端使用。',
    pill: 'MATRIX · 一站式物联网云平台',
    heroA: '一站式物联网平台，',
    heroB: '让万物互联真正落地',
    heroSub:
      '矩阵（Matrix）打通设备接入、空间组织、物模型管理与场景联动，提供从边缘网关到云端控制台的完整能力——无需从零搭建，开箱即用。',
    heroCtaSecondary: '了解平台能力',
    points: ['Web · iOS · Android 多端同步', 'OAuth 账号一键登录', '组织级多人协作'],
    mock: {
      scanTag: '扫码绑定设备',
      sceneTag: '场景联动',
      windowTitle: '矩阵 · 设备总览',
      liveTag: '示意界面',
      rail: ['智慧园区', 'A 栋 · 3 层', '南区车间'],
      tiles: [
        {name: '空调', value: '26.0 ℃', sub: '制冷中 · 已下发'},
        {name: '照明', value: '已开启', sub: '场景 · 上班模式'},
        {name: '电表', value: '12.4 kW', sub: '实时上报'},
        {name: '门锁', value: '已锁定', sub: '布防中'},
      ],
      foot: '最近事件：会议室照明 → 场景「下班模式」自动执行',
    },
    capHead: {
      eyebrow: 'Platform',
      title: '一体化的能力，覆盖物联网全链路',
      lead: '从边缘设备到云端控制台，矩阵把「接入、组织、管理、联动」收拢到一套系统里。',
    },
    capItems: [
      {
        title: '多协议设备接入',
        text: '通过工业网关与多种终端协议接入设备：Modbus、MQTT、Matter、PLC、485 / 4G DTU 等，统一汇入同一套设备体系；扫码即可把设备绑定到空间。',
      },
      {
        title: '空间与场地建模',
        text: '以「园区 → 楼栋 → 楼层 → 房间」等树形空间组织设备，也支持车间、大棚、停车位等场地类型，贴合真实的物理世界。',
      },
      {
        title: '产品与物模型',
        text: '为每类设备定义产品与标准物模型，属性、状态、可写控制一目了然；接入设备即物模型下的一个实例，天然一致、可复用。',
      },
      {
        title: '实时监控与控制',
        text: '设备状态实时上报，属性远程可读可写，随时下发开关与参数指令，在一个界面里总览并运维全部设备。',
      },
      {
        title: '场景与自动联动',
        text: '基于规则与事件触发实现自动化：门锁开启即联动照明、空调按温度自动启停，让设备之间自己协作。',
      },
      {
        title: '组织与权限协作',
        text: '以组织为单位多人共管一套平台，成员与权限分级；OAuth 账号一键登录，无需再维护一套自建账号体系。',
      },
    ],
    scnHead: {
      eyebrow: 'Scenarios',
      title: '一套平台，适配多种业态',
      lead: '无论是一栋楼、一座厂，还是一间温室、一片停车场，矩阵都能组织并管理其中的每一台设备。',
    },
    scnItems: [
      {
        title: '智慧楼宇与园区',
        text: '楼层 / 房间级精细管控，照明、空调、门禁集中纳管。',
      },
      {
        title: '工业与车间',
        text: 'Modbus、PLC 产线设备联网上云，让老旧设备获得新能力。',
      },
      {
        title: '农业与温室',
        text: '大棚环境监测与自动控制，浇水通风无需值守。',
      },
      {
        title: '社区与停车',
        text: '车位、道闸、安防设备统一接入，一处可视、一键管理。',
      },
    ],
    scnLink: '查看应用场景',
    stepsHead: {
      eyebrow: 'Get started',
      title: '四条路径，完成从登录到上线',
      lead: '不需要自建后台，登录即拥有自己的组织、空间与设备体系。',
    },
    steps: [
      {title: '登录即用', text: '使用 OAuth 账号（如 GitHub）一键登录，创建或加入你的组织。'},
      {title: '搭好空间', text: '按真实布局建立园区、楼栋、房间等空间结构，像搭积木一样简单。'},
      {title: '绑定设备', text: '选择已定义好的产品物模型，或直接扫码，把设备放进对应空间。'},
      {
        title: '联动与运维',
        text: '配置属性监控与场景规则，通过 Web、iOS、Android 多端实时查看与下发。',
      },
    ],
    ctaTitle: '让每一台设备，都真正连起来',
    ctaText: '现在进入矩阵平台，创建你的第一个组织与空间，把设备接入数字世界。',
  },

  capability: {
    metaTitle: '平台能力',
    metaDesc:
      '矩阵物联网平台能力：多协议设备接入、空间与场地建模、产品物模型、实时监控与场景自动联动。',
    hero: {
      eyebrow: 'Platform capabilities',
      pre: '从接入到联动，',
      grad: '平台能力全链路',
      lead: '矩阵把设备接入、空间组织、物模型管理与场景自动化整合进同一套系统，让搭建物联网应用不再是一堆零散工具的组合。',
      secondary: '看看应用场景',
    },
    sections: [
      {
        eyebrow: 'Capability 01 · 设备接入',
        title: '多协议接入，让终端轻松上云',
        paragraphs: [
          '矩阵通过「云平台 + 网关」的组合，把不同年代、不同协议的设备带进同一套体系——无论是 Modbus 现场总线、MQTT 智能设备，还是 Matter、PLC，都可统一接入、统一纳管。',
        ],
        checks: [
          '支持 Modbus RTU / TCP、MQTT 等主流协议，覆盖常见工业与楼宇现场',
          'Matter、PLC 等消费级与行业协议持续接入',
          '4G DTU、485 网关透传，存量设备无需更换即可联网',
          '扫码绑定 + 设备唯一标识，接入即可命名、定位与管理',
        ],
        link: '在平台中完成一次接入',
      },
      {
        eyebrow: 'Capability 02 · 空间建模',
        title: '空间即结构，设备随空间「长」进去',
        paragraphs: [
          '设备不是孤立存在的，而是属于某一片空间。用园区、楼栋、楼层、房间等层级还原真实布局，从「整园」看到「单间」都同样直观。',
        ],
        checks: [
          '园区 / 楼栋 / 楼层 / 房间，以及车间、大棚、停车场等场地类型',
          '树形结构逐级下钻，任意设备快速可达',
          '按空间维度汇总，同一楼层 / 园区的状态一目了然',
          '层级随业态自由增减，结构可不断生长',
        ],
        link: '在不同业态中如何组织空间',
      },
      {
        eyebrow: 'Capability 03 · 产品物模型',
        title: '产品即标准，设备即实例',
        paragraphs: ['同类设备只定义一次产品与物模型，即可批量接入、反复复用，让数据与上层控制始终保持一致。'],
        checks: [
          '为设备定义产品与物模型：属性、类型、可读写一目了然',
          '属性实时上报，控制指令统一下发到对应设备实例',
          '全生命周期管理：开发中 → 预览版 → 已发布',
          '同型号即同模型：接入自动对齐，换机不换逻辑',
        ],
        link: '在平台中定义一个产品',
      },
      {
        eyebrow: 'Capability 04 · 监控与场景联动',
        title: '看得见、控得住、还能自己动',
        paragraphs: [
          '实时状态上屏、指令一键下发只是基础。矩阵更进一步：基于规则与事件的自动化，让整套系统按你的方式自主运转。',
        ],
        checks: [
          '设备属性与事件实时上屏，运行历史可回溯',
          '远程下发开关与参数，Web / iOS / Android 体验一致',
          '场景一键执行：上班、回家、离园……一次触发一组联动',
          '规则自动化：温度超限、门锁开启等条件，自动触发设备动作',
        ],
        link: '查看典型联动场景',
      },
    ],
    access: {
      clients: ['Web / iOS / Android', 'Open API'],
      hubTitle: '矩阵平台',
      hubSub: '统一接入 · 统一建模 · 统一控制',
      gateways: ['485 / TCP 网关', '4G DTU', 'MQTT', 'Matter / PLC'],
      devices: ['空调', '照明', '电表', '温湿度', '门锁', '产线设备'],
    },
    space: {
      root: '智慧园区',
      nodes: ['A 栋', '3 层'],
      leaves: [
        {name: '会议室', count: '2 台设备'},
        {name: '前台', count: '1 台设备'},
      ],
      types: ['园区', '楼栋', '楼层', '房间', '车间', '大棚', '停车场', '区域'],
    },
    model: {
      name: '产品 · 环境监测仪',
      badge: '已发布',
      rows: [
        {name: '温度', kind: '数值 · 上报', writable: false},
        {name: '湿度', kind: '数值 · 上报', writable: false},
        {name: '风机开关', kind: '布尔 · 控制', writable: true},
        {name: '运行状态', kind: '枚举 · 状态', writable: false},
      ],
      foot: '接入设备即该产品下的「实例」，属性与控制自动对齐',
    },
    control: {
      tileTitle: '实时监控',
      tileSub: '会议室',
      live: [
        {text: '温度 26.0℃', ok: false},
        {text: '照明 已开启', ok: false},
        {text: '指令下发成功', ok: true},
      ],
      rules: [
        {name: '规则「下班联动」', desc: '17:30 或最后一人离开 → 关闭照明、空调切换节能、门锁布防'},
        {name: '规则「高温告警」', desc: '温湿度超限 → 推送告警并自动开启风机'},
      ],
    },
    ctaTitle: '从设备到平台再到应用，全链路打通',
    ctaText: '现在就进入矩阵平台，体验从定义产品、接入设备，到配置场景联动的一站式流程。',
  },

  scenario: {
    metaTitle: '应用场景',
    metaDesc: '矩阵物联网平台典型应用场景：智慧楼宇与园区、工业与车间、农业与温室大棚、商办与社区停车。',
    hero: {
      eyebrow: 'Use scenarios',
      pre: '从楼宇到车间，',
      grad: '矩阵都能帮你管起来',
      lead: '基于空间建模与多协议接入，矩阵天然适配建筑、工业、农业、社区等多种业态。以下场景仅作示例——平台的边界远不止于此。',
      secondary: '了解平台能力',
    },
    list: {
      items: [
        {
          index: '01',
          title: '智慧楼宇与园区',
          lead: '以楼层、房间为单位的精细管控，照明、空调、门禁与能耗集中纳管，让整栋楼都在一张图上。',
          bullets: [
            '按园区 / 楼栋 / 楼层 / 房间组织空间树，设备随归属逐级下钻',
            '空调、照明集中远程开关，门锁统一布防与撤防',
            '楼层级能耗与设备状态汇总，异常及时告警',
            '门禁、访客联动，形成「上班 — 会议 — 下班」的完整场景',
          ],
          spaces: ['园区', '楼栋', '楼层', '房间'],
          keywords: ['楼宇自控', '能耗管理', '门禁安防', '会议室'],
        },
        {
          index: '02',
          title: '工业与车间',
          lead: '让老旧 Modbus / PLC 产线设备联网上云，把生产现场的「哑设备」变成可监控、可追溯的数据源。',
          bullets: [
            'Modbus RTU / TCP、PLC 直连或经网关采集产线运行状态',
            '设备属性与告警实时上屏，值班人员一屏掌握车间',
            '关键设备远程运维与参数下发，减少到场次数',
            '事件全程留痕，为产能与故障分析积累数据',
          ],
          spaces: ['车间', '区域'],
          keywords: ['设备联网', '产线监控', '远程运维', '数据留痕'],
        },
        {
          index: '03',
          title: '农业与温室大棚',
          lead: '对温室环境持续监测、按需自动控制，浇水、通风、遮阳不再依赖人工值守。',
          bullets: [
            '温湿度、光照、土壤等传感器数据实时采集',
            '温度超限自动开启风机，湿度过低联动灌溉',
            '大棚按场地独立建模，多棚统一管理、分区控制',
            '异常即时推送，无需专人 24 小时盯守',
          ],
          spaces: ['大棚', '田间', '区域'],
          keywords: ['环境监测', '自动灌溉', '通风遮阳', '分区管理'],
        },
        {
          index: '04',
          title: '商办与社区停车',
          lead: '把车位、道闸、安防与公共区域设备统一接入，一处可视、一键管理，服务更规范。',
          bullets: [
            '车位占位与道闸状态接入，车位与缴费情况透明化',
            '门禁、公共照明按区域统一调度，减少空转能耗',
            '访客进出与物业流程打通，形成完整闭环',
            '面向物业的多项目、多业态统一视图',
          ],
          spaces: ['停车场', '区域', '楼栋'],
          keywords: ['车位管理', '道闸', '安防门禁', '公共照明'],
        },
      ],
    },
    more: {
      eyebrow: 'More to come',
      text: '矩阵的可扩展空间模型与开放接入能力，也在持续落地到更多方向——能源管理、冷链仓储、连锁门店、智慧酒店……',
    },
    ctaTitle: '找到属于你的那个场景',
    ctaText: '把你的场地与设备装进矩阵，从一个组织、一片空间开始。',
  },

  apps: {
    metaTitle: '客户端下载',
    metaDesc:
      '矩阵物联网平台客户端 App 下载：Android 版与 iPhone 版，扫码绑定设备、实时查看状态、远程控制与场景联动。',
    hero: {
      eyebrow: 'Apps · 客户端',
      pre: '手机上的矩阵，',
      grad: '设备随时在手边',
      lead: '矩阵客户端 App 覆盖 Android 与 iPhone：扫码绑定设备、实时查看状态、远程下发指令，与 Web 端共用同一套组织和数据。',
      primary: '下载客户端',
      secondary: '了解平台能力',
    },
    download: {
      eyebrow: 'Download',
      title: '选择你的设备平台',
      lead: '安装后使用 OAuth 账号登录，即可看到与 Web 端一致的组织、空间与设备。',
      platforms: {android: 'Android 版', ios: 'iPhone 版'},
      labels: {version: '版本', released: '更新日期', size: '安装包大小', minOs: '系统要求'},
      notesTitle: '升级信息',
      available: '可下载',
      comingSoon: '即将上线',
      pending: '暂未开放下载',
      buttons: {android: '下载 APK', ios: '前往 App Store'},
      scanTitle: '扫码安装',
      scanHint: '用手机相机扫描二维码，直接在手机上下载安装',
    },
    install: {
      eyebrow: 'Install',
      title: '装好就能用',
      lead: 'Android 安装包直接来自对象存储，不经过第三方市场；登录后与 Web 端共用同一套账号与数据。',
      stepAndroid: {
        title: '安装 Android 版',
        text: '点击「下载 APK」后浏览器直接下载安装包，在手机上打开安装；若系统提示，请在设置中允许本次「安装未知来源应用」。',
      },
      stepIosPending: {
        title: '等待 iPhone 版上架',
        text: 'iPhone 版将通过 App Store 分发，上架后在本页即可看到商店入口，商店内搜索安装。',
      },
      stepIosReady: {
        title: '安装 iPhone 版',
        text: '点击「前往 App Store」或扫描二维码跳转商店，也可在 App Store 中搜索「矩阵」安装。',
      },
      stepWeb: {
        title: '或直接用 Web 端',
        text: '不想安装？用手机浏览器打开 app.wematrix.cc，同一账号登录即可使用全部功能。',
      },
    },
    ctaTitle: '把设备装进口袋',
    ctaText: '下载矩阵客户端，随时随地查看设备状态、下发控制指令。',
  },
};

/* ============ English ============ */
const en: Dict = {
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

const dicts = {zh, en} as const;

/** 当前语言标识（'zh-CN' | 'en'） */
export function useLocale(): string {
  return useDocusaurusContext().i18n.currentLocale;
}

/** 按当前语言返回文案字典 */
export function useT(): Dict {
  return (useLocale() === 'en' ? dicts.en : dicts.zh) as Dict;
}
