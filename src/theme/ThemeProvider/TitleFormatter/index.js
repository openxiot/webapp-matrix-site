import React from 'react';
import {TitleFormatterProvider} from '@docusaurus/theme-common/internal';
import {useT} from '@site/src/i18n/i18n';

/**
 * 自定义 <title> 组装逻辑：站点名后缀按当前语言输出。
 * - 简体中文：默认仍是 config.title「矩阵 Matrix」（页面标题 `xxx | 矩阵 Matrix`）
 * - English：使用纯英文站点名「Matrix」（页面标题 `xxx | Matrix`）
 */
export default function ThemeProviderTitleFormatter({children}) {
  const t = useT();

  const formatter = (params) => {
    const trimmedTitle = params.title?.trim();
    // 页面没单独给 title、给的 title 是默认 siteConfig.title，
    // 或是本地化的站点名本身：都直接输出站点名（首页显式传了 t.siteTitle）。
    if (
      !trimmedTitle ||
      trimmedTitle === params.siteTitle ||
      trimmedTitle === t.siteTitle
    ) {
      return t.siteTitle;
    }
    return `${trimmedTitle} ${params.titleDelimiter} ${t.siteTitle}`;
  };

  return (
    <TitleFormatterProvider formatter={formatter}>
      {children}
    </TitleFormatterProvider>
  );
}
