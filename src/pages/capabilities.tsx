import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import {
  APP_URL,
  IcArrow,
  IcBuilding,
  IcCheck,
  IcTerminal,
  IcZap,
  PageHero,
  CtaBand,
} from '@site/src/components/ui';
import {useT} from '@site/src/i18n/i18n';
import styles from './capabilities.module.css';

function CheckList({items}: {items: string[]}) {
  return (
    <ul className="checks">
      {items.map((it) => (
        <li key={it}>
          <IcCheck size={18} />
          {it}
        </li>
      ))}
    </ul>
  );
}

/* 段末箭头链接：internal 用 to，external 用 href */
function ArrowLink({to, href, children}: {to?: string; href?: string; children: ReactNode}) {
  return (
    <Link className="arrow-link" to={to} href={href}>
      {children} <IcArrow size={15} />
    </Link>
  );
}

/* ---- 接入链路示意 ---- */
function AccessDiagram() {
  const a = useT().capability.access;
  return (
    <div className={styles.panel}>
      <div className={styles.stackChips}>
        {a.clients.map((c) => (
          <span className={styles.devChip} key={c}>
            <IcTerminal size={14} /> {c}
          </span>
        ))}
      </div>
      <div className={styles.conn}><IcArrow size={14} /></div>
      <div className={styles.hub}>
        <span className={styles.hubIcon} />
        <span>
          <b>{a.hubTitle}</b>
          <i>{a.hubSub}</i>
        </span>
      </div>
      <div className={styles.conn}><IcArrow size={14} /></div>
      <div className={styles.gwRow}>
        {a.gateways.map((g) => (
          <span className={styles.gw} key={g}>{g}</span>
        ))}
      </div>
      <div className={styles.conn}><IcArrow size={14} /></div>
      <div className={styles.devGrid}>
        {a.devices.map((d) => (
          <span className={styles.dev} key={d}>
            <i />
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---- 空间树示意 ---- */
function SpaceDiagram() {
  const s = useT().capability.space;
  return (
    <div className={styles.panel}>
      <div className={styles.tree}>
        <span className={styles.treeRoot}><IcBuilding size={14} /> {s.root}</span>
        <div className={styles.trL1}>
          <span className={styles.treeBox}>{s.nodes[0]}</span>
        </div>
        <div className={styles.trL2}>
          <span className={styles.treeBox}>{s.nodes[1]}</span>
        </div>
        <div className={styles.trL3}>
          {s.leaves.map((l) => (
            <span className={styles.treeLeaf} key={l.name}>
              {l.name}<span>{l.count}</span>
            </span>
          ))}
        </div>
      </div>
      <div className={styles.spaceTagRow}>
        {s.types.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ---- 物模型示意 ---- */
function ModelDiagram() {
  const m = useT().capability.model;
  return (
    <div className={styles.panel}>
      <div className={styles.modelHead}>
        <span className={styles.modelName}>{m.name}</span>
        <span className={styles.modelBadge}>{m.badge}</span>
      </div>
      {m.rows.map((r) => (
        <div className={styles.modelRow} key={r.name}>
          <span>{r.name}</span><em>{r.kind}</em>
          <i className={r.writable ? styles.wrAll : styles.wrOnly} />
        </div>
      ))}
      <div className={styles.modelFoot}>{m.foot}</div>
    </div>
  );
}

/* ---- 联动示意 ---- */
function ControlDiagram() {
  const c = useT().capability.control;
  return (
    <div className={styles.panel}>
      <div className={styles.ctrlHead}>
        <span className={styles.ctrlTile}>
          <b>{c.tileTitle}</b>
          <span>{c.tileSub}</span>
        </span>
        <div className={styles.ctrlLive}>
          {c.live.map((l) => (
            <span key={l.text} className={l.ok ? styles.ok : undefined}>{l.text}</span>
          ))}
        </div>
      </div>
      {c.rules.map((r) => (
        <div className={styles.rule} key={r.name}>
          <div className={styles.ruleRow}>
            <IcZap size={15} />
            <span>{r.name}</span>
            <i className={styles.swOn} />
          </div>
          <p>{r.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function Capabilities(): ReactNode {
  const t = useT();
  const {capability} = t;
  const [secAccess, secSpace, secModel, secAuto] = capability.sections;
  // 各段「了解更多」链接目标（与 sections 顺序对应）
  const links = [
    {href: APP_URL, text: secAccess.link},
    {to: '/scenarios', text: secSpace.link},
    {href: APP_URL, text: secModel.link},
    {to: '/scenarios', text: secAuto.link},
  ];

  return (
    <Layout title={capability.metaTitle} description={capability.metaDesc}>
      <PageHero
        eyebrow={capability.hero.eyebrow}
        title={
          <>
            {capability.hero.pre}
            <span className="text-grad">{capability.hero.grad}</span>
          </>
        }
        lead={capability.hero.lead}>
        <Link className="btn btn--primary btn--lg" href={APP_URL}>
          {t.cta.primary} <IcArrow />
        </Link>
        <Link className="btn btn--ghost btn--lg" to="/scenarios">
          {capability.hero.secondary}
        </Link>
      </PageHero>

      {/* 01 接入 */}
      <section className="mx-section" id="access">
        <div className="container">
          <div className="split">
            <div className="split__copy">
              <span className="eyebrow eyebrow--deep">{secAccess.eyebrow}</span>
              <h2 className="split__title">{secAccess.title}</h2>
              <div className="split__text">
                {secAccess.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <CheckList items={secAccess.checks} />
              <div className="mx-card__more">
                <ArrowLink href={links[0].href} to={links[0].to}>{links[0].text}</ArrowLink>
              </div>
            </div>
            <div className="split__visual">
              <AccessDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* 02 空间 */}
      <section className="mx-section mx-section--tint" id="space">
        <div className="container">
          <div className={clsx('split', 'split--rev')}>
            <div className="split__copy">
              <span className="eyebrow eyebrow--deep">{secSpace.eyebrow}</span>
              <h2 className="split__title">{secSpace.title}</h2>
              <div className="split__text">
                {secSpace.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <CheckList items={secSpace.checks} />
              <div className="mx-card__more">
                <ArrowLink href={links[1].href} to={links[1].to}>{links[1].text}</ArrowLink>
              </div>
            </div>
            <div className="split__visual">
              <SpaceDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* 03 物模型 */}
      <section className="mx-section" id="model">
        <div className="container">
          <div className="split">
            <div className="split__copy">
              <span className="eyebrow eyebrow--deep">{secModel.eyebrow}</span>
              <h2 className="split__title">{secModel.title}</h2>
              <div className="split__text">
                {secModel.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <CheckList items={secModel.checks} />
              <div className="mx-card__more">
                <ArrowLink href={links[2].href} to={links[2].to}>{links[2].text}</ArrowLink>
              </div>
            </div>
            <div className="split__visual">
              <ModelDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* 04 联动 */}
      <section className="mx-section mx-section--tint" id="automation">
        <div className="container">
          <div className={clsx('split', 'split--rev')}>
            <div className="split__copy">
              <span className="eyebrow eyebrow--deep">{secAuto.eyebrow}</span>
              <h2 className="split__title">{secAuto.title}</h2>
              <div className="split__text">
                {secAuto.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <CheckList items={secAuto.checks} />
              <div className="mx-card__more">
                <ArrowLink href={links[3].href} to={links[3].to}>{links[3].text}</ArrowLink>
              </div>
            </div>
            <div className="split__visual">
              <ControlDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-section">
        <div className="container">
          <CtaBand title={capability.ctaTitle} text={capability.ctaText} />
        </div>
      </section>
    </Layout>
  );
}
