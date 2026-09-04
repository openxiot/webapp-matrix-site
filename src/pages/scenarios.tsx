import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import {
  APP_URL,
  IcArrow,
  IcBuilding,
  IcCheck,
  IcFactory,
  IcLeaf,
  IcPark,
  PageHero,
  CtaBand,
} from '@site/src/components/ui';
import {useT} from '@site/src/i18n/i18n';
import type {Dict} from '@site/src/i18n/i18n';
import styles from './scenarios.module.css';

/* 与语言无关的图标顺序（与 list.items 一一对应） */
const coverIcons = [IcBuilding, IcFactory, IcLeaf, IcPark];

function ScenarioCard({item, Icon}: {item: Dict['scenario']['list']['items'][number]; Icon: typeof IcBuilding}) {
  return (
    <article className={styles.card}>
      <div className={styles.cover}>
        <div className={styles.coverIcon}>
          <Icon />
        </div>
        <span className={styles.coverNum}>{item.index}</span>
        <div className={styles.coverTags}>
          {item.spaces.map((sp) => (
            <span className="tag" key={sp}>
              {sp}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.body}>
        <h2 className={styles.title}>{item.title}</h2>
        <p className={styles.lead}>{item.lead}</p>
        <ul className={styles.bullets}>
          {item.bullets.map((b) => (
            <li key={b}>
              <IcCheck size={17} />
              {b}
            </li>
          ))}
        </ul>
        <div className={styles.keywords}>
          {item.keywords.map((k) => (
            <span key={k}>{k}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Scenarios(): ReactNode {
  const t = useT();
  const {scenario} = t;
  return (
    <Layout title={scenario.metaTitle} description={scenario.metaDesc}>
      <PageHero
        eyebrow={scenario.hero.eyebrow}
        title={
          <>
            {scenario.hero.pre}
            <span className="text-grad">{scenario.hero.grad}</span>
          </>
        }
        lead={scenario.hero.lead}>
        <Link className="btn btn--primary btn--lg" href={APP_URL}>
          {t.cta.primary} <IcArrow />
        </Link>
        <Link className="btn btn--ghost btn--lg" to="/capabilities">
          {scenario.hero.secondary}
        </Link>
      </PageHero>

      <section className="mx-section mx-section--tint">
        <div className="container">
          <div className={styles.stack}>
            {scenario.list.items.map((item, i) => {
              const Icon = coverIcons[i];
              return <ScenarioCard key={item.index} item={item} Icon={Icon} />;
            })}
          </div>

          <div className={styles.more}>
            <span className="eyebrow eyebrow--deep">{scenario.more.eyebrow}</span>
            <p>{scenario.more.text}</p>
          </div>
        </div>
      </section>

      <section className="mx-section">
        <div className="container">
          <CtaBand title={scenario.ctaTitle} text={scenario.ctaText} />
        </div>
      </section>
    </Layout>
  );
}
