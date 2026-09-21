import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type {Dict} from './types';

export type {Card, Step, Section, Head, Dict} from './types';

/* 客户端读取文案的唯一入口。
 *
 * 字典不在这里 import——构建期由 docusaurus.config.ts 按当前语言选出一份放进
 * customFields，运行时从 context 取。这样每种语言的产物里只带自己那一份字典。
 * 详见 src/i18n/dicts/index.ts 顶部说明。
 */

/** 当前语言标识（'en' | 'zh-CN' | 'ja' | 'ar' | ...） */
export function useLocale(): string {
  return useDocusaurusContext().i18n.currentLocale;
}

/** 按当前语言返回文案字典 */
export function useT(): Dict {
  const dict = (useDocusaurusContext().siteConfig.customFields as {dict?: Dict} | undefined)
    ?.dict;
  if (!dict) {
    // 只可能发生在 customFields 没接上时；宁可构建期响亮地失败，
    // 也不要静默渲染出空白页面。见 docusaurus.config.ts 的 customFields。
    throw new Error(
      '[i18n] customFields.dict 缺失：docusaurus.config.ts 未能按当前语言注入文案字典',
    );
  }
  return dict;
}
