/* 站点全部可见文案的类型定义（所有语言共用同一结构）。
 *
 * 类型单独放在这里，是为了让 src/i18n/dicts/<locale>.ts 能够 import 它，
 * 而不必反向依赖 i18n.ts（那会形成 dicts → i18n → dicts 的循环）。
 * 每份字典都标注为 `const x: Dict`，因此漏键、拼错键、少一个数组元素
 * 都会在 `npm run typecheck` 时直接报错——这是 11 种语言保持一致的主要保障。
 */

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
