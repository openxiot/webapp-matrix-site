import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import {
  APP_URL,
  IcArrow,
  IcActivity,
  IcBox,
  IcBuilding,
  IcBulb,
  IcCheck,
  IcChip,
  IcFactory,
  IcGauge,
  IcLayers,
  IcLeaf,
  IcLock,
  IcPark,
  IcScan,
  IcUsers,
  IcWind,
  IcZap,
  CtaBand,
} from '@site/src/components/ui';
import {useT} from '@site/src/i18n/i18n';
import styles from './index.module.css';

/* 与语言无关的图标顺序（与字典条目一一对应） */
const capIcons = [IcChip, IcLayers, IcBox, IcActivity, IcZap, IcUsers];
const scnIcons = [IcBuilding, IcFactory, IcLeaf, IcPark];
const mockIcons = [IcWind, IcBulb, IcGauge, IcLock];

/* ============================ 首页头部（Hero）============================ */

function Hero() {
  const t = useT();
  const {home} = t;
  return (
    <section className={styles.hero}>
      <div className={clsx('container', styles.heroWrap)}>
        <div className={styles.heroCopy}>
          <span className={styles.heroPill}>
            <span className={styles.heroPillDot} />
            {home.pill}
          </span>
          <Heading as="h1" className={styles.heroTitle}>
            {home.heroA}
            <br />
            <span className={styles.heroGrad}>{home.heroB}</span>
          </Heading>
          <p className={styles.heroSub}>{home.heroSub}</p>
          <div className={clsx('btn-row', styles.heroActions)}>
            <Link className="btn btn--primary btn--lg" href={APP_URL}>
              {t.cta.primary}
              <IcArrow />
            </Link>
            <Link className="btn btn--ghost btn--lg" to="/capabilities">
              {home.heroCtaSecondary}
            </Link>
          </div>
          <ul className={styles.heroPoints}>
            {home.points.map((p) => (
              <li key={p}>
                <IcCheck size={16} />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <MockConsole />
      </div>
    </section>
  );
}

/* —— Hero 右侧：示意设备控制台（纯装饰示意，非真实界面）—— */
function MockConsole() {
  const t = useT();
  const {mock} = t.home;
  const dotClass = [styles.onDot, styles.onDot, styles.onDot, styles.lockDot];
  return (
    <div className={styles.mockWrap} aria-hidden="true">
      <span className={styles.floatTag1}>
        <IcScan size={15} /> {mock.scanTag}
      </span>
      <span className={styles.floatTag2}>
        <IcZap size={15} /> {mock.sceneTag}
      </span>

      <div className={styles.mock}>
        <div className={styles.mockHead}>
          <span className={styles.dots}>
            <i />
            <i />
            <i />
          </span>
          <span className={styles.mockTitle}>{mock.windowTitle}</span>
          <span className={styles.mockLive}>{mock.liveTag}</span>
        </div>

        <div className={styles.mockBody}>
          <ul className={styles.rail}>
            {mock.rail.map((r, i) => (
              <li key={r} className={i === 0 ? styles.railOn : undefined}>
                {i === 0 && <i className={styles.railDot} />}
                {r}
              </li>
            ))}
          </ul>

          <div className={styles.tiles}>
            {mock.tiles.map((tile, i) => {
              const Icon = mockIcons[i];
              return (
                <div className={styles.tile} key={i}>
                  <div className={styles.tileTop}>
                    <Icon size={15} />
                    <span className={styles.tileName}>{tile.name}</span>
                    <span className={dotClass[i]} />
                  </div>
                  <div className={styles.tileVal}>{tile.value}</div>
                  <div className={styles.tileSub}>{tile.sub}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.mockFoot}>{mock.foot}</div>
      </div>
    </div>
  );
}

/* ============================ 页面主体 ============================ */

export default function Home(): ReactNode {
  const t = useT();
  const {home} = t;
  return (
    <Layout
      title={t.siteTitle}
      description={home.metaDesc}>

      <Hero />

      {/* 平台能力 */}
      <section className="mx-section" id="capabilities">
        <div className="container">
          <div className="mx-section-head mx-center">
            <span className="eyebrow">{home.capHead.eyebrow}</span>
            <h2 className="sec-title">{home.capHead.title}</h2>
            <p className="sec-lead">{home.capHead.lead}</p>
          </div>
          <div className="mx-grid">
            {home.capItems.map((item, i) => {
              const Icon = capIcons[i];
              return (
                <article className="mx-card" key={item.title}>
                  <span className="mx-card__icon">
                    <Icon />
                  </span>
                  <h3 className="mx-card__title">{item.title}</h3>
                  <p className="mx-card__text">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 应用场景 */}
      <section className="mx-section mx-section--tint" id="scenarios">
        <div className="container">
          <div className="mx-section-head mx-center">
            <span className="eyebrow">{home.scnHead.eyebrow}</span>
            <h2 className="sec-title">{home.scnHead.title}</h2>
            <p className="sec-lead">{home.scnHead.lead}</p>
          </div>
          <div className="mx-grid">
            {home.scnItems.map((item, i) => {
              const Icon = scnIcons[i];
              return (
                <article className="mx-card" key={item.title}>
                  <span className="mx-card__icon">
                    <Icon />
                  </span>
                  <h3 className="mx-card__title">{item.title}</h3>
                  <p className="mx-card__text">{item.text}</p>
                  <div className="mx-card__more">
                    <Link className="arrow-link" to="/scenarios">
                      {home.scnLink} <IcArrow size={15} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 快速开始 */}
      <section className="mx-section mx-section--soft-grad" id="start">
        <div className="container">
          <div className="mx-section-head mx-center">
            <span className="eyebrow">{home.stepsHead.eyebrow}</span>
            <h2 className="sec-title">{home.stepsHead.title}</h2>
            <p className="sec-lead">{home.stepsHead.lead}</p>
          </div>
          <div className="mx-steps">
            {home.steps.map((item, i) => (
              <div className="mx-step" key={item.title}>
                <span className="mx-step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mx-step__title">{item.title}</h3>
                <p className="mx-step__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-section">
        <div className="container">
          <CtaBand title={home.ctaTitle} text={home.ctaText} />
        </div>
      </section>
    </Layout>
  );
}
