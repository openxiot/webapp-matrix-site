import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {QRCodeSVG} from 'qrcode.react';

import {
  APP_URL,
  IcAndroid,
  IcApple,
  IcArrow,
  IcCheck,
  PageHero,
  CtaBand,
} from '@site/src/components/ui';
import {useLocale, useT} from '@site/src/i18n/i18n';
import {appReleases, isReleased, notesOf, releases} from '@site/src/data/apps';
import type {AppPlatform, AppRelease} from '@site/src/data/apps';
import styles from './apps.module.css';

/* 与语言无关的平台图标（键与 static/data/apps/ 下的文件名一致） */
const platformIcons: Record<AppPlatform, typeof IcAndroid> = {
  android: IcAndroid,
  ios: IcApple,
};

function AppCard({release}: {release: AppRelease}) {
  const d = useT().apps.download;
  const locale = useLocale();
  const ready = isReleased(release);
  const Icon = platformIcons[release.platform];
  const notes = notesOf(release, locale);

  // 只展示 JSON 里确实填了的字段，缺省行不留空
  const meta: {label: string; value: string}[] = [];
  if (release.version) meta.push({label: d.labels.version, value: release.version});
  if (release.releasedAt) meta.push({label: d.labels.released, value: release.releasedAt});
  if (release.size) meta.push({label: d.labels.size, value: release.size});
  if (release.minOs) meta.push({label: d.labels.minOs, value: release.minOs});

  return (
    <article className={clsx(styles.card, !ready && styles.cardMuted)}>
      <header className={styles.head}>
        <span className={styles.icon}>
          <Icon size={26} />
        </span>
        <div className={styles.headText}>
          <h2 className={styles.name}>{d.platforms[release.platform]}</h2>
          <p className={styles.sub}>{release.version ? `v${release.version}` : d.pending}</p>
        </div>
        <span
          className={clsx('tag', styles.badge, ready ? 'tag--solid' : styles.tagMuted)}>
          {ready ? d.available : d.comingSoon}
        </span>
      </header>

      {meta.length > 0 && (
        <dl className={styles.meta}>
          {meta.map((m) => (
            <div className={styles.metaRow} key={m.label}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className={styles.action}>
        {ready ? (
          <Link className="btn btn--primary btn--lg" href={release.url}>
            {d.buttons[release.platform]} <IcArrow />
          </Link>
        ) : (
          // 未发布：按钮留在原位并保留该平台的上架后会指向哪里，避免只说一句「即将上线」
          <span className={clsx('btn', 'btn--lg', styles.btnDisabled)} aria-disabled="true">
            {d.buttons[release.platform]}
          </span>
        )}
      </div>

      {/* 扫码安装：二维码内容就是下载直链，随 android.json / ios.json 自动更新 */}
      {ready && (
        <div className={styles.qrBox}>
          <span className={styles.qrCode}>
            <QRCodeSVG
              value={release.url}
              size={160}
              level="M"
              marginSize={4}
              bgColor="#ffffff"
              fgColor="#0b2149"
              title={`${d.platforms[release.platform]} · ${d.scanTitle}`}
            />
          </span>
          <span className={styles.qrText}>
            <b>{d.scanTitle}</b>
            <span>{d.scanHint}</span>
          </span>
        </div>
      )}

      {notes.length > 0 && (
        <div className={styles.notes}>
          <h3 className={styles.notesTitle}>{d.notesTitle}</h3>
          <ul className={clsx('checks', styles.noteList)}>
            {notes.map((n) => (
              <li key={n}>
                <IcCheck size={17} />
                {n}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export default function Apps(): ReactNode {
  const t = useT();
  const {apps} = t;
  // iPhone 的安装说明随 ios.json 是否已上架切换，避免卡片已可下载而文案还在「等待上架」
  const installSteps = [
    apps.install.stepAndroid,
    isReleased(releases.ios) ? apps.install.stepIosReady : apps.install.stepIosPending,
    apps.install.stepWeb,
  ];
  return (
    <Layout title={apps.metaTitle} description={apps.metaDesc}>
      <PageHero
        eyebrow={apps.hero.eyebrow}
        title={
          <>
            {apps.hero.pre}
            <span className="text-grad">{apps.hero.grad}</span>
          </>
        }
        lead={apps.hero.lead}>
        {/* 页内锚点：用原生 a 标签，避免被客户端路由接管 */}
        <a className="btn btn--primary btn--lg" href="#download">
          {apps.hero.primary} <IcArrow />
        </a>
        <Link className="btn btn--ghost btn--lg" to="/capabilities">
          {apps.hero.secondary}
        </Link>
      </PageHero>

      {/* 客户端下载（数据来自 static/data/apps/*.json，同一份文件也可用 URL 读取） */}
      <section className="mx-section" id="download">
        <div className="container">
          <div className="mx-section-head mx-center">
            <span className="eyebrow">{apps.download.eyebrow}</span>
            <h2 className="sec-title">{apps.download.title}</h2>
            <p className="sec-lead">{apps.download.lead}</p>
          </div>
          <div className={styles.grid}>
            {appReleases.map((r) => (
              <AppCard key={r.platform} release={r} />
            ))}
          </div>
        </div>
      </section>

      {/* 安装说明 */}
      <section className="mx-section mx-section--tint" id="install">
        <div className="container">
          <div className="mx-section-head mx-center">
            <span className="eyebrow">{apps.install.eyebrow}</span>
            <h2 className="sec-title">{apps.install.title}</h2>
            <p className="sec-lead">{apps.install.lead}</p>
          </div>
          <div className="mx-steps">
            {installSteps.map((s, i) => (
              <div className="mx-step" key={s.title}>
                <span className="mx-step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mx-step__title">{s.title}</h3>
                <p className="mx-step__text">{s.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.installNote}>
            <Link className="arrow-link" href={APP_URL}>
              {t.cta.primary} <IcArrow size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-section">
        <div className="container">
          <CtaBand title={apps.ctaTitle} text={apps.ctaText} />
        </div>
      </section>
    </Layout>
  );
}
