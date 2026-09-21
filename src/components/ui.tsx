import type {CSSProperties, ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useT} from '@site/src/i18n/i18n';

export const APP_URL = 'https://app.wematrix.cc/';

/* ============================================================================
 * 线性图标集（stroke = currentColor）
 * ========================================================================== */
type IconProps = {size?: number; className?: string};

function makeIcon(inner: ReactNode) {
  return function Icon({size = 24, className}: IconProps) {
    return (
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false">
        {inner}
      </svg>
    );
  };
}

export const IcArrow = makeIcon(
  <>
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </>,
);
export const IcCheck = makeIcon(<path d="M20 6 9 17l-5-5" />);
export const IcChip = makeIcon(
  <>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    <rect x="10" y="10" width="4" height="4" rx="0.5" />
  </>,
);
export const IcLayers = makeIcon(
  <>
    <path d="m12 2 9 4.9-9 4.9-9-4.9Z" />
    <path d="m3 12 9 4.9 9-4.9" />
    <path d="m3 17 9 4.9 9-4.9" />
  </>,
);
export const IcBox = makeIcon(
  <>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </>,
);
export const IcActivity = makeIcon(
  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
);
export const IcZap = makeIcon(
  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />,
);
export const IcUsers = makeIcon(
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>,
);
export const IcShield = makeIcon(
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </>,
);
export const IcWifi = makeIcon(
  <>
    <path d="M5 13a10 10 0 0 1 14 0" />
    <path d="M8.5 16.5a5 5 0 0 1 7 0" />
    <path d="M2 9.5a15 15 0 0 1 20 0" />
    <circle cx="12" cy="19" r="1.4" />
  </>,
);
export const IcScan = makeIcon(
  <>
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    <path d="M7 9v6M11 9v6M15 9v3M19 9v3" />
  </>,
);
export const IcTerminal = makeIcon(
  <>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </>,
);
export const IcBuilding = makeIcon(
  <>
    <rect x="4" y="2" width="16" height="20" rx="1.5" />
    <path d="M9 22v-5h6v5" />
    <path d="M9 6h.01M15 6h.01M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
  </>,
);
export const IcFactory = makeIcon(
  <>
    <path d="M2 20h20" />
    <path d="M3 20V8l5 3.5V8l5 3.5V8l8 4.5V20" />
    <path d="M8 14h.01M13 14h.01M16 14h.01" />
  </>,
);
export const IcLeaf = makeIcon(
  <>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </>,
);
export const IcPark = makeIcon(
  <>
    <path d="M19 17h2a1 1 0 0 0 1-1v-3a4 4 0 0 0-4-4h-3a8 8 0 0 0-6-2.8H5a2 2 0 0 0-2 2V12a2 2 0 0 0 2 2h1" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
    <path d="M9 17h6" />
  </>,
);
export const IcLock = makeIcon(
  <>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    <path d="M12 15v2" />
  </>,
);
export const IcBulb = makeIcon(
  <>
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z" />
  </>,
);
export const IcGauge = makeIcon(
  <>
    <path d="M12 14 15 9" />
    <path d="M3.3 18a9 9 0 1 1 17.4 0" />
    <path d="M3.3 18h17.4" />
  </>,
);
export const IcWind = makeIcon(
  <>
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    <path d="M17.7 7.7a2 2 0 1 1 2.3 2.3H2" />
  </>,
);
export const IcRefresh = makeIcon(
  <>
    <path d="M21 12a9 9 0 1 1-2.64-6.36L21 8" />
    <path d="M21 3v5h-5" />
  </>,
);

/* 实心图标：品牌标识这类无法用线条忠实表达的图形 */
function makeSolidIcon(inner: ReactNode, viewBox: string) {
  return function Icon({size = 24, className}: IconProps) {
    return (
      <svg
        className={className}
        width={size}
        height={size}
        viewBox={viewBox}
        fill="currentColor"
        aria-hidden="true"
        focusable="false">
        {inner}
      </svg>
    );
  };
}

/** Android（机器人头部：天线 + 双眼） */
export const IcAndroid = makeIcon(
  <>
    <path d="M6.5 12.5a5.5 5.5 0 0 1 11 0" />
    <path d="M6.5 12.5h11" />
    <path d="m8.4 8.6-1.5-2.4" />
    <path d="m15.6 8.6 1.5-2.4" />
    <path d="M10 10.4h.01" />
    <path d="M14 10.4h.01" />
  </>,
);

/** Apple */
export const IcApple = makeSolidIcon(
  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />,
  '0 0 384 512',
);

/* ============================================================================
 * 共享排版组件（样式来自全局 custom.css）
 * ========================================================================== */
type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  children?: ReactNode; // 行动按钮区
};
export function PageHero({eyebrow, title, lead, children}: PageHeroProps) {
  return (
    <header className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__lead">{lead}</p>
        {children && <div className="page-hero__actions btn-row">{children}</div>}
      </div>
    </header>
  );
}

type CtaBandProps = {title: string; text: ReactNode; style?: CSSProperties};
export function CtaBand({title, text, style}: CtaBandProps) {
  const t = useT();
  return (
    <div className="cta-band" style={style}>
      <h2 className="cta-band__title">{title}</h2>
      <p className="cta-band__text">{text}</p>
      <div className="btn-row">
        <Link className="btn btn--white btn--lg" href={APP_URL}>
          {t.cta.primary}
          <IcArrow />
        </Link>
        <Link className="btn btn--ghost-on-dark btn--lg" to="/capabilities">
          {t.cta.secondary}
        </Link>
      </div>
    </div>
  );
}
