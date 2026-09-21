import androidRaw from '@site/static/data/apps/android.json';
import iosRaw from '@site/static/data/apps/ios.json';

/* ============================================================================
 * 客户端 App 发布信息
 *
 * 每个平台一个数据文件（static/data/apps/android.json / ios.json），由对应
 * App 仓库在发版时独立改写并提交，提交后触发本工程重新构建。一个仓库只碰
 * 自己的文件，两个平台的发布流水线不会互相覆盖。
 *
 * 为什么放在 static/ 而不是 src/：
 * Docusaurus 只把 static/ 原样复制到产物目录，src/ 不会。放在 static/ 下，
 * 同一份文件既能在构建期被 import（内容内联进静态 HTML，SEO 友好、不依赖 JS），
 * 又能作为独立文件对外提供，直接用 URL 读取：
 *     /data/apps/android.json    /data/apps/ios.json
 * 一份数据两个用途，不会出现「网页显示的版本」与「URL 读到的版本」不一致。
 *
 * 这里负责把 JSON 读成带默认值的结构，页面只管渲染。
 * ========================================================================== */

/** 平台标识，一个平台对应 apps/ 下的一个数据文件 */
export type AppPlatform = 'android' | 'ios';

/** 客户端版本信息（字段已归一化，可安全渲染） */
export type AppRelease = {
  platform: AppPlatform;
  /** 版本号；未发布时为空串 */
  version: string;
  /** 更新日期，如 "2026-09-21"；未提供时为空 */
  releasedAt?: string;
  /** 安装包大小，如 "54.4 MB"；未提供时为空 */
  size?: string;
  /** 最低系统要求，如 "Android 8.0+"；未提供时为空 */
  minOs?: string;
  /** 下载地址；为空串表示尚未开放下载，页面按「即将上线」展示 */
  url: string;
  /** 升级信息，按语言分组；英文缺失时回退中文 */
  notes: {zh: string[]; en: string[]};
};

/** 展示顺序：Android → iPhone（也决定了下载页卡片的先后） */
export const APP_PLATFORMS: AppPlatform[] = ['android', 'ios'];

/** 平台 → 数据文件。新增平台时补一条，并同步 Dict 与页面图标 */
const sources: Record<AppPlatform, unknown> = {
  android: androidRaw,
  ios: iosRaw,
};

const toStr = (v: unknown): string => (typeof v === 'string' ? v.trim() : '');

/** 升级信息容错：接受字符串或字符串数组，逐条去空白、丢空项 */
function toList(v: unknown): string[] {
  const arr = Array.isArray(v) ? v : typeof v === 'string' ? [v] : [];
  return arr.map(toStr).filter(Boolean);
}

function normalize(platform: AppPlatform, src: unknown): AppRelease {
  const o = (src ?? {}) as Record<string, unknown>;
  const notes = (o.notes ?? {}) as Record<string, unknown>;
  const zh = toList(notes.zh);
  const en = toList(notes.en);
  return {
    platform,
    version: toStr(o.version),
    releasedAt: toStr(o.releasedAt) || undefined,
    size: toStr(o.size) || undefined,
    minOs: toStr(o.minOs) || undefined,
    url: toStr(o.url),
    notes: {zh, en: en.length > 0 ? en : zh},
  };
}

/** 平台 → 版本信息 */
export const releases: Record<AppPlatform, AppRelease> = APP_PLATFORMS.reduce(
  (acc, p) => {
    acc[p] = normalize(p, sources[p]);
    return acc;
  },
  {} as Record<AppPlatform, AppRelease>,
);

/** 全部客户端版本信息（按展示顺序） */
export const appReleases: AppRelease[] = APP_PLATFORMS.map((p) => releases[p]);

/** 是否已开放下载（以对应数据文件中是否填写 url 为准） */
export const isReleased = (r: AppRelease): boolean => r.url !== '';

/** 按当前语言取升级信息 */
export const notesOf = (r: AppRelease, locale: string): string[] =>
  locale === 'en' ? r.notes.en : r.notes.zh;
