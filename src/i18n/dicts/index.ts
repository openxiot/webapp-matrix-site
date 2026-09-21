import type {Dict} from '../types';
import {en} from './en';
import {zhCN} from './zh-CN';
import {es} from './es';
import {ptBR} from './pt-BR';
import {de} from './de';
import {fr} from './fr';
import {ja} from './ja';
import {ko} from './ko';
import {ru} from './ru';
import {it} from './it';
import {ar} from './ar';

/* 全部语言的文案字典。
 *
 * 这里只被 **构建期** 使用：docusaurus.config.ts import 本模块，按
 * process.env.DOCUSAURUS_CURRENT_LOCALE 选出当前语言那一份，塞进 customFields，
 * 客户端再从 customFields 读。因此这里 import 了 11 份字典并不会让访客多下载
 * 10 份——只有被选中的那一份会进入该语言的产物。
 *
 * ⚠️ 客户端代码（src/i18n/i18n.ts、页面、主题覆盖）**绝对不能** import 本模块，
 * 一旦 import 就会把全部语言重新打包回每个页面。要走 useT()。
 */

/** locale id → 字典。键必须与下面的 LOCALE_LABELS、以及 Docusaurus 的 locale id 完全一致。
 *
 * **书写顺序即语言下拉里的顺序**（LOCALES 取自 Object.keys），按受众优先级排。 */
export const dicts: Record<string, Dict> = {
  en,
  'zh-CN': zhCN,
  es,
  'pt-BR': ptBR,
  de,
  fr,
  ja,
  ko,
  ru,
  it,
  ar,
};

/** 每种语言的展示信息（语言下拉里的名字、<html lang>、书写方向）
 *
 * label 一律用**该语言自己的写法**，下拉里不出现 "Arabic" 这种英文名。 */
export const LOCALE_LABELS: Record<
  string,
  {label: string; htmlLang: string; direction?: 'ltr' | 'rtl'}
> = {
  en: {label: 'English', htmlLang: 'en'},
  'zh-CN': {label: '简体中文', htmlLang: 'zh-CN'},
  es: {label: 'Español', htmlLang: 'es'},
  'pt-BR': {label: 'Português (Brasil)', htmlLang: 'pt-BR'},
  de: {label: 'Deutsch', htmlLang: 'de'},
  fr: {label: 'Français', htmlLang: 'fr'},
  ja: {label: '日本語', htmlLang: 'ja'},
  ko: {label: '한국어', htmlLang: 'ko'},
  ru: {label: 'Русский', htmlLang: 'ru'},
  it: {label: 'Italiano', htmlLang: 'it'},
  // 阿拉伯语从右向左书写：direction 会让 theme-classic 注入 <html dir="rtl">、
  // 换用 Infima 的 default-rtl.css，并对全部自定义 CSS 跑 rtlcss 自动镜像
  ar: {label: 'العربية', htmlLang: 'ar', direction: 'rtl'},
};

/** 站点实际启用的语言（顺序即语言下拉的顺序），由已就绪的字典决定 */
export const LOCALES: string[] = Object.keys(dicts);

/** 默认语言 = 根路径 `/` 的语言 */
export const DEFAULT_LOCALE = 'en';

/** 取某个语言的字典；未就绪时回退默认语言（构建期兜底，见 config 的说明） */
export const dictFor = (locale: string): Dict => dicts[locale] ?? dicts[DEFAULT_LOCALE]!;
