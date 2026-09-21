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
  /**
   * 升级信息，按语言分组，键为 locale id（'en' | 'zh-CN' | 'ja' | ...）。
   *
   * 每种语言**都可以缺省**——发版脚本只写 `en` 也能正常上线，其余语言按回退链
   * 取值（见 notesOf）。这样 App 仓库不必被迫一次补齐 11 种语言。
   */
  notes: Record<string, string[]>;
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

/** 旧键名 → locale id。App 仓库早期写的是 `{zh, en}`，保留别名，
 *  免得还没改过来的仓库让中文访客静默掉到英文。 */
const LEGACY_KEYS: Record<string, string> = {zh: 'zh-CN'};

/** 归一化 notes：接受字符串或字符串数组，丢掉空项，空值不留键 */
function toNotes(v: unknown): Record<string, string[]> {
  const raw = (v ?? {}) as Record<string, unknown>;
  const byId: Record<string, string[]> = {};
  const legacy: Record<string, string[]> = {};
  for (const [key, val] of Object.entries(raw)) {
    const list = toList(val);
    if (list.length === 0) continue;
    const id = LEGACY_KEYS[key];
    if (id) legacy[id] = list;
    else byId[key] = list;
  }
  // 规范键名优先：同时写了 zh 与 zh-CN 时以 zh-CN 为准
  return {...legacy, ...byId};
}

function normalize(platform: AppPlatform, src: unknown): AppRelease {
  const o = (src ?? {}) as Record<string, unknown>;
  return {
    platform,
    version: toStr(o.version),
    releasedAt: toStr(o.releasedAt) || undefined,
    size: toStr(o.size) || undefined,
    minOs: toStr(o.minOs) || undefined,
    url: toStr(o.url),
    notes: toNotes(o.notes),
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

/**
 * 升级信息的回退链：当前语言 → 英文 → 中文 → 任意一种已有语言 → 空。
 *
 * 之所以不是「缺了就报错」：App 发版脚本不该被 11 种语言卡住。只写 `en`
 * 就能发布，其余语言先显示英文，之后再逐步补译。
 */
const NOTES_FALLBACK = ['en', 'zh-CN'];

/** 按当前语言取升级信息 */
export function notesOf(r: AppRelease, locale: string): string[] {
  const direct = r.notes[locale];
  if (direct && direct.length > 0) return direct;
  for (const fb of NOTES_FALLBACK) {
    const v = r.notes[fb];
    if (v && v.length > 0) return v;
  }
  for (const v of Object.values(r.notes)) {
    if (v.length > 0) return v;
  }
  return [];
}
