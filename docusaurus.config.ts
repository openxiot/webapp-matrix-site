import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// 矩阵应用控制台（需要登录）
const APP_URL = 'https://app.wematrix.cc/';
// 官网主域（按实际部署域名修改）
const SITE_URL = 'https://wematrix.cc';

// ---- 浏览器语言自动选择 ----
// 规则：首次访问按浏览器首选语言决定页面语言——zh* 浏览器看中文(默认 locale，根路径)，
// 其他一律英文(/en)；若访问者曾在语言切换器里手动选择过，则以该选择为准(localStorage)。
// /en 路径视为显式英文，不会自动跳回中文；判定只在无前缀(中文默认)路径上触发。
// 仅生产构建注入：`npm run start` 只编译默认中文，若注入会在英文浏览器下跳到未编译的
// /en 而 404。验证请用 `npm run build && npm run serve`（仓库提供 `npm run preview`）。
const AUTO_LOCALE_KEY = 'matrix.lang';
const AUTO_LOCALE_ENABLED = process.env.NODE_ENV === 'production';
// 注意：脚本里的跳转 URL 假设 baseUrl 为 '/'（en 前缀为 '/en'）。
const browserLocaleScript = `
(function () {
  var KEY = ${JSON.stringify(AUTO_LOCALE_KEY)};
  function currentLocale() {
    // baseUrl='/'：无前缀即默认中文；'/en...' 前缀为英文
    return location.pathname.indexOf('/en') === 0 ? 'en' : 'zh-CN';
  }
  function savedLocale() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function detectByBrowser() {
    var list = (navigator.languages && navigator.languages.length)
      ? navigator.languages : [navigator.language || ''];
    var top = String(list[0] || '').toLowerCase();
    // 只要首选语言是 zh*（zh-CN / zh-TW / zh-HK...）都给中文，否则英文
    return top.indexOf('zh') === 0 ? 'zh-CN' : 'en';
  }
  var want = savedLocale() || detectByBrowser();
  if (want === 'en' && currentLocale() === 'zh-CN') {
    var rest = location.pathname;
    var target = '/en' + (rest.length > 1 ? rest : '');
    location.replace(target + location.search + location.hash);
  }
  // 记住手动切换：同一标签页里点进另一种语言的页面时写 localStorage，
  // 这样接收页(全新加载)会以本次选择为准，而不会被浏览器语言判定弹回。
  document.addEventListener('click', function (ev) {
    try {
      if (ev.defaultPrevented || ev.button !== 0 ||
          ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
      var a = ev.target && ev.target.closest ? ev.target.closest('a[href]') : null;
      if (!a || a.target === '_blank') return;
      var u = new URL(a.href, location.href);
      if (u.origin !== location.origin) return;
      var goingEn = u.pathname.indexOf('/en') === 0;
      var fromEn = currentLocale() === 'en';
      if (goingEn !== fromEn) {
        localStorage.setItem(KEY, goingEn ? 'en' : 'zh-CN');
      }
    } catch (err) {}
  }, true);
})();
`;
// ---- 浏览器语言自动选择（完） ----

const config: Config = {
  title: '矩阵',
  tagline: '连接设备、空间与场景的一站式物联网平台',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: SITE_URL,
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'openxiot',
  projectName: 'webapp-matrix-site',

  onBrokenLinks: 'throw',

  // 默认简体中文，支持英文（/en）
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
    localeConfigs: {
      'zh-CN': {
        label: '简体中文',
        htmlLang: 'zh-CN',
      },
      en: {
        label: 'English',
        htmlLang: 'en',
      },
    },
  },

  // 注入浏览器语言判定脚本（仅生产构建生效）
  ...(AUTO_LOCALE_ENABLED
    ? {
        headTags: [
          {
            tagName: 'script',
            attributes: {type: 'text/javascript'},
            innerHTML: browserLocaleScript,
          },
        ],
      }
    : {}),

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/logo.svg',
    navbar: {
      title: '矩阵',
      logo: {
        alt: '矩阵',
        src: 'img/logo.svg',
        width: 28,
        height: 28,
      },
      items: [
        {to: '/', label: '首页', position: 'left', exact: true},
        {to: '/capabilities', label: '平台能力', position: 'left'},
        {to: '/scenarios', label: '应用场景', position: 'left'},
        {to: '/apps', label: '客户端', position: 'left'},
        {type: 'localeDropdown', position: 'right'},
        {
          href: APP_URL,
          label: '登录',
          position: 'right',
          className: 'navbar-cta',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '平台',
          items: [
            {label: '平台能力', to: '/capabilities'},
            {label: '应用场景', to: '/scenarios'},
          ],
        },
        {
          title: '使用',
          items: [
            {label: '登录', href: APP_URL},
            {label: '客户端', to: '/apps'},
            {label: '回到首页', to: '/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Matrix`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
