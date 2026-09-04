import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// 矩阵应用控制台（需要登录）
const APP_URL = 'https://app.wematrix.cc/';
// 官网主域（按实际部署域名修改）
const SITE_URL = 'https://wematrix.cc';

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
            {label: '回到首页', to: '/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Matrix`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
