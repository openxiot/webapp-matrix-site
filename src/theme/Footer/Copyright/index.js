import React from 'react';
import {useT} from '@site/src/i18n/i18n';

/**
 * 页脚版权行按当前语言输出品牌：
 * 中文 `Copyright © {year} Matrix (矩阵) · wematrix`
 * English `Copyright © {year} Matrix · wematrix`（不出现中文）
 */
export default function FooterCopyright() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <div className="footer__copyright">
      {`Copyright © ${year} ${t.legal}`}
    </div>
  );
}
