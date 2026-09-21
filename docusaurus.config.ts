import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {
  DEFAULT_LOCALE,
  LOCALE_LABELS,
  LOCALES,
  dictFor,
} from './src/i18n/dicts';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// 矩阵应用控制台（需要登录）
const APP_URL = 'https://app.wematrix.cc/';

// 官网主域。canonical / hreflang / sitemap / og:url 全部由它生成，**必须能解析**。
// 扩到 11 种语言后这些标签会放大 11 倍，填错的代价比双语时大得多。
// 部署到预览域名（如 SWA 的编号域名）时可临时覆盖：
//   MATRIX_SITE_URL=https://xxx.azurestaticapps.net npm run build
const SITE_URL = process.env.MATRIX_SITE_URL ?? 'https://wematrix.cc';

// ---- 文案字典注入 ----
// Docusaurus 会为**每种语言**重新加载一次本配置文件：buildLocale() 在 loadSite()
// 之前设置 process.env.DOCUSAURUS_CURRENT_LOCALE，而配置以 requireCache:false 加载。
// 所以这里能知道「当前正在构建哪种语言」，只把那一份字典放进 customFields，
// 客户端再从 customFields 读（见 src/i18n/i18n.ts 的 useT）。
//
// 这一步不是可有可无的优化：字典是一个静态模块，若把 11 份都挂上去，
// webpack 无法 tree-shake，每个访客都要额外下载 10 份用不到的文案（约 190 KB）。
//
// `docusaurus start` 不带 --locale 时该变量为空，回退默认语言。
const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? DEFAULT_LOCALE;
const dict = dictFor(currentLocale);

// ---- 语言记忆 ----
// 只做一件事：记住访客在语言下拉里**显式**选过哪种语言，下次回到根路径时直接进那种语言。
//
// 刻意**不**嗅探 navigator.languages。按浏览器语言自动跳转会让搜索引擎和分享出去的
// 链接只看到一次跳转、拿不到内容，多语言站点通常都不这么做；而且语言一多，
// 几乎每个访客都会被从首页弹走。这里根路径 `/` 永远返回默认语言（英文）的完整内容。
//
// 只在根路径上跳转：深层链接（如分享出去的 /ja/apps 或 /apps）保持原语言不动。
// 仅生产构建注入：`npm run start` 只编译默认语言，注入后一旦存过别的语言，
// 根路径会跳到未编译的 /ja 而 404。验证请用 `npm run build && npm run serve`。
const AUTO_LOCALE_KEY = 'matrix.lang';
const AUTO_LOCALE_ENABLED = process.env.NODE_ENV === 'production';
// 注意：脚本里的路径拼接假设 baseUrl 为 '/'。
const browserLocaleScript = `
(function () {
  var KEY = ${JSON.stringify(AUTO_LOCALE_KEY)};
  var LOCALES = ${JSON.stringify(LOCALES)};
  var DEFAULT = ${JSON.stringify(DEFAULT_LOCALE)};
  // 路径 → 语言：'/ja/apps' → 'ja'，'/apps' 或 '/' → 默认语言
  function localeOf(pathname) {
    for (var i = 0; i < LOCALES.length; i++) {
      var l = LOCALES[i];
      if (l === DEFAULT) continue;
      if (pathname === '/' + l || pathname.indexOf('/' + l + '/') === 0) return l;
    }
    return DEFAULT;
  }
  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  // 仅当：落在根路径 + 存过非默认语言的选择 → 跳一次
  var want = saved();
  if (want && want !== DEFAULT && localeOf(location.pathname) === DEFAULT &&
      (location.pathname === '/' || location.pathname === '')) {
    location.replace('/' + want + location.search + location.hash);
  }
  // 记住手动切换：点进另一种语言的链接时写 localStorage，
  // 这样之后回到根路径会以本次选择为准。
  document.addEventListener('click', function (ev) {
    try {
      if (ev.defaultPrevented || ev.button !== 0 ||
          ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
      var a = ev.target && ev.target.closest ? ev.target.closest('a[href]') : null;
      if (!a || a.target === '_blank') return;
      var u = new URL(a.href, location.href);
      if (u.origin !== location.origin) return;
      var to = localeOf(u.pathname);
      if (to !== localeOf(location.pathname)) {
        localStorage.setItem(KEY, to);
      }
    } catch (err) {}
  }, true);
})();
`;
// ---- 语言记忆（完） ----

const config: Config = {
  title: 'Matrix',
  tagline: 'One-stop IoT platform for devices, spaces and scenes',
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

  // 默认英文（根路径 `/`），其余语言带前缀，如 /zh-CN/、/ja/、/ar/
  // 语言清单与展示名集中在 src/i18n/dicts/index.ts，加语言时只改那一处 + 补字典
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
    localeConfigs: Object.fromEntries(LOCALES.map((l) => [l, LOCALE_LABELS[l]])),
  },

  // 当前语言的文案字典，供客户端 useT() 读取（见文件顶部的说明）
  customFields: {dict},

  // 注入语言记忆脚本（仅生产构建生效）
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
      // 默认语言的源串（此处为英文）；其余语言由 i18n/<locale>/docusaurus-theme-classic/ 翻译
      title: 'Matrix',
      logo: {
        alt: 'Matrix',
        src: 'img/logo.svg',
        width: 28,
        height: 28,
      },
      items: [
        {to: '/', label: 'Home', position: 'left', exact: true},
        {to: '/capabilities', label: 'Capabilities', position: 'left'},
        {to: '/scenarios', label: 'Scenarios', position: 'left'},
        {to: '/apps', label: 'Apps', position: 'left'},
        {type: 'localeDropdown', position: 'right'},
        {
          href: APP_URL,
          label: 'Sign in',
          position: 'right',
          className: 'navbar-cta',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Platform',
          items: [
            {label: 'Capabilities', to: '/capabilities'},
            {label: 'Scenarios', to: '/scenarios'},
          ],
        },
        {
          title: 'Start',
          items: [
            {label: 'Sign in', href: APP_URL},
            {label: 'Apps', to: '/apps'},
            {label: 'Back to home', to: '/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Matrix`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
