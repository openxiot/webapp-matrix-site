# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

> **多语言**：站点支持 11 种语言（见 `src/i18n/dicts/index.ts`）。默认语言是英文，占根路径
> `/`；其余语言带前缀，如 `/zh-CN/`、`/ja/`、`/ar/`（阿拉伯语，RTL）。
> 除英文外的全部译文均为机器生成、**未经母语者复核**，状态与待办见
> [TRANSLATIONS.md](./TRANSLATIONS.md)。

## Installation

```bash
npm install
```

**Note**: feel free to use the package manager of your choice.

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### 开发服务器只有默认语言，别用它点语言下拉

`npm run start` **只编译默认语言（英文）**，其他语言的路径一律 404：

| 路径 | 开发服务器实际给出 |
| --- | --- |
| `/` | 正常英文首页 |
| `/zh-CN/`、`/ja/`、`/ar/` | **Page Not Found**（`<html lang="en">`） |

而且这些 404 页上的**语言下拉链接是坏的**：点「简体中文」会得到
`/zh-CN/zh-CN/`，在那个坏地址上再点一次就变成 `/zh-CN/zh-CN/zh-CN/`——
连点几次就叠成长串。这不是网站坏了，是开发服务器的固有限制。

原因有两层：Docusaurus 用「当前编译语言的 `baseUrl`」去剥地址栏里的语言前缀
（`@docusaurus/theme-common` 的 `useAlternatePageUtils`）；开发服务器上
`baseUrl` 恒为 `/`，剥不掉 `/zh-CN/`，于是残留的语言段被拼进了目标链接。
404 页由默认语言的包渲染，所以正好落进这个坑。

**线上产物不受影响**：每种语言各自独立构建，`baseUrl` 与地址栏一致，
11 种语言 × 4 个页面共 484 条语言下拉链接已逐条核对全部正确。

验证多语言请用构建产物：

```bash
npm run build && npm run serve     # 11 种语言都在，链接正确
```

只想调某一种语言的样式时，用 `--locale` 单独起（此时 `baseUrl` 与 URL 一致，
下拉链接也是对的，可以放心点）：

```bash
npm run start -- --locale ja       # 只访问 /ja/
```

⚠️ `--locale` 会改写项目根目录下共用的 `.docusaurus` 缓存，**同一目录同时跑
两个不同 `--locale` 的开发服务器会互相干扰**（先启动的那个会被带成另一种语言，
连默认语言路径都会渲染错）。要同时开多个，先把工程复制一份再各自启动。

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## 客户端 App 发布信息

官网的客户端下载页 `/apps`（中英双语）只读一个数据源：**`static/data/apps/`** 目录。

**一个平台一个文件**——Android 仓库只碰 `android.json`，iOS 仓库只碰 `ios.json`，
互不干扰，也不会出现两个流水线同时改写同一个文件而互相覆盖的情况。

```
static/data/apps/          # 数据文件（同时对外提供 URL 读取，见下）
├── android.json           # Android 仓库发版只改这个
└── ios.json               # iOS 仓库发版只改这个
src/data/apps/index.ts     # 类型定义 + 读取归一化（新增平台时才需要改）
```

发版后只需改写自己那个文件并提交到 `main`，本仓库的构建发布工作流
（`.github/workflows/azure-static-web-apps-*.yml`）会自动重新构建并上线新版信息，
无需改动任何页面代码。

### 用 URL 读取

数据文件放在 `static/` 下（而不是 `src/`），因为 Docusaurus 只把 `static/` 原样复制到
产物目录，`src/` 不会。同一份文件因此有两个用途：

- **构建期被 `index.ts` import** —— 内容直接内联进静态 HTML，SEO 友好、不依赖 JS；
- **作为独立文件对外提供** —— 部署后可直接用 URL 读取，返回标准 JSON：

```
https://<站点域名>/data/apps/android.json
https://<站点域名>/data/apps/ios.json
```

一份数据两个用途，不会出现「网页显示的版本」与「URL 读到的版本」不一致的情况。
改了 JSON 并部署后，URL 上的内容随之更新（线上缓存 `max-age=30`，30 秒内生效）。

### 文件内容

每个文件就是一个平台的版本信息对象，文件名即平台标识：

```jsonc
// static/data/apps/android.json
{
  "version": "1.0.5",                 // 版本号
  "releasedAt": "2026-09-21",         // 更新日期，可选
  "size": "54.4 MB",                  // 安装包大小，可选
  "minOs": "Android 8.0+",            // 系统要求，可选
  "url": "https://.../wematrix-1.0.5.apk",  // 下载直链
  "notes": {                          // 升级信息，键是 locale id
    "en": ["…", "…"],
    "zh-CN": ["…", "…"]
  }
}
```

```jsonc
// static/data/apps/ios.json —— 位置已预留，上架后填 version 与 url 即可
{
  "version": "",
  "url": "",                          // 留空 = 页面显示「即将上线」
  "notes": { "en": [] }
}
```

### 约定

| 规则 | 说明 |
| --- | --- |
| 文件名 | 即平台标识（`android` / `ios`），与 `src/data/apps/index.ts` 里的映射、页面文案的键一一对应；也决定了 URL 路径（`/data/apps/<平台>.json`） |
| 卡片顺序 | 由 `index.ts` 的 `APP_PLATFORMS` 决定，与文件无关 |
| 是否可下载 | 只由 `url` 决定：非空即渲染可点击的下载按钮，留空则渲染为「即将上线」的禁用态 |
| 可选字段 | `releasedAt`、`size`、`minOs` 缺省时该行不显示，不会留空 |
| 升级信息 | `notes` 的键是 **locale id**（`en` / `zh-CN` / `es` / `pt-BR` / `de` / `fr` / `ja` / `ko` / `ru` / `it` / `ar`），值为字符串数组；也接受单个字符串 |
| 升级信息的回退链 | 当前语言 → `en` → `zh-CN` → 任意一种已有语言 → 空。**任一语言都可缺省**，所以只写 `notes.en` 就能发布，其余 10 种语言先显示英文，之后再逐步补译 |
| 旧键名 `zh` | 仍兼容，会被当作 `zh-CN`；同时写了 `zh` 与 `zh-CN` 时以 `zh-CN` 为准。新脚本请直接写 `zh-CN` |
| 二维码 | 卡片内的「扫码安装」二维码编码的就是 `url`，随发版自动更新；`url` 为空的平台不显示二维码。窄屏（≤560px）自动隐藏——手机上扫自己的屏幕没有意义 |
| iOS | 位置已预留。上架后填入 `version` 与 App Store 链接（`url`），卡片自动变为可下载（含二维码），**且下方安装说明第 2 步会自动从「等待 iPhone 版上架」切换为「安装 iPhone 版」**，无需改代码或文案 |
| `_comment` 字段 | 文件顶部的说明字段，仅作提示用，可有可无，不会被页面渲染 |

### 发版脚本要做的事

1. 上传安装包到对象存储，拿到直链。
2. **整体覆写**自己平台的文件（如 `static/data/apps/android.json`），字段至少含 `version`、`url`、`notes.en`。
   因为是覆写而非「读—改—写」，不需要解析别人的数据。其余语言可选，缺了会回退到 `en`。
3. 提交到本仓库 `main`（建议直接提交，或提 PR 走一次构建预览）。

> 新增平台（比如 HarmonyOS）需要三处改动：`static/data/apps/` 下加数据文件、
> `index.ts` 里加映射与顺序、`src/i18n/dicts/` 下**每份**字典里补平台名与按钮文案
> （`Dict` 类型会在 `npm run typecheck` 时检查漏填）。
> 新文件放到 `static/` 下即自动获得 `/data/apps/<平台>.json` 这个 URL，无需额外配置。

App 仓库若需跨仓库提交，可用 `peter-evans/repository-dispatch` 或带 token 的 `git push`
触发本仓库 workflow，效果等同。

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
