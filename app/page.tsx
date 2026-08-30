'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { academicContent, interfaceCopy, type BilingualText, type Language } from './content';

type DisplayMode = Language | 'both';

const DISPLAY_MODE_KEY = 'chong-liu-display-mode';
const DISPLAY_MODE_EVENT = 'chong-liu-display-mode-change';

function readDisplayMode(): DisplayMode {
  const savedMode = window.localStorage.getItem(DISPLAY_MODE_KEY);
  return savedMode === 'zh' || savedMode === 'both' ? savedMode : 'en';
}

function subscribeToDisplayMode(onStoreChange: () => void) {
  window.addEventListener('storage', onStoreChange);
  window.addEventListener(DISPLAY_MODE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener('storage', onStoreChange);
    window.removeEventListener(DISPLAY_MODE_EVENT, onStoreChange);
  };
}

function storeDisplayMode(mode: DisplayMode) {
  window.localStorage.setItem(DISPLAY_MODE_KEY, mode);
  window.dispatchEvent(new Event(DISPLAY_MODE_EVENT));
}

type LocalizedTextProps = {
  value: BilingualText;
  mode: DisplayMode;
  inline?: boolean;
  labeled?: boolean;
};

function LocalizedText({ value, mode, inline = false, labeled = false }: LocalizedTextProps) {
  if (mode === 'en') return <span lang="en">{value.en}</span>;
  if (mode === 'zh') return <span lang="zh-CN">{value.zh}</span>;

  return (
    <span className={`localized-both${inline ? ' localized-inline' : ''}`}>
      <span className="localized-language" lang="en">
        {labeled && <span className="language-label">English</span>}
        {value.en}
      </span>
      {inline && <span className="localized-divider" aria-hidden="true">/</span>}
      <span className="localized-language localized-zh" lang="zh-CN">
        {labeled && <span className="language-label">中文</span>}
        {value.zh}
      </span>
    </span>
  );
}

function ModeSwitcher({ mode, onChange }: { mode: DisplayMode; onChange: (mode: DisplayMode) => void }) {
  const options: Array<{ value: DisplayMode; label: string; accessibleLabel: string }> = [
    { value: 'en', label: 'English', accessibleLabel: 'Show English' },
    { value: 'zh', label: '中文', accessibleLabel: '显示中文' },
    { value: 'both', label: 'Both', accessibleLabel: 'Show English and Chinese' },
  ];

  return (
    <div className="mode-switcher" role="group" aria-label="Language display mode">
      {options.map((option) => (
        <button
          aria-label={option.accessibleLabel}
          aria-pressed={mode === option.value}
          className={mode === option.value ? 'active' : undefined}
          key={option.value}
          onClick={() => onChange(option.value)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function uiText(key: Exclude<keyof typeof interfaceCopy.en, 'nav' | 'checklist'>): BilingualText {
  return {
    en: interfaceCopy.en[key] as string,
    zh: interfaceCopy.zh[key] as string,
  };
}

function bibliographicMode(originalLanguage: Language | undefined, mode: DisplayMode): DisplayMode {
  if (mode === 'both') return 'both';
  return originalLanguage ?? mode;
}

export default function Home() {
  const mode = useSyncExternalStore<DisplayMode>(subscribeToDisplayMode, readDisplayMode, () => 'en');
  const profile = academicContent.profile;
  const hasContactLinks = Boolean(profile.email || profile.externalLinks.length);
  const hasExperience = academicContent.experience.length > 0;
  const hasCredentials = academicContent.education.length > 0 || academicContent.honors.length > 0;
  const credentialsNumber = hasExperience ? '04' : '03';
  const contactNumber = String(3 + Number(hasExperience) + Number(hasCredentials)).padStart(2, '0');

  useEffect(() => {
    document.documentElement.lang = mode === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.dataset.displayMode = mode;
  }, [mode]);

  const navigation = interfaceCopy.en.nav.map((item, index) => ({
    href: item.href,
    label: { en: item.label, zh: interfaceCopy.zh.nav[index].label },
  }));

  return (
    <main className={`language-mode-${mode}`}>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Chong Liu, 刘崇">
          <LocalizedText mode={mode} value={profile.name} inline={mode === 'both'} />
        </a>
        <nav className="desktop-nav" aria-label={mode === 'zh' ? '主导航' : 'Primary navigation'}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              <LocalizedText mode={mode} value={item.label} inline={mode === 'both'} />
            </a>
          ))}
        </nav>
        <ModeSwitcher mode={mode} onChange={storeDisplayMode} />
      </header>

      <nav className="mobile-nav" aria-label={mode === 'zh' ? '移动端导航' : 'Mobile navigation'}>
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            <LocalizedText mode={mode} value={item.label} />
          </a>
        ))}
      </nav>

      <section className="hero" id="top" aria-labelledby="page-title">
        <div className="hero-meta">
          <span className="status-dot" aria-hidden="true" />
          <span><LocalizedText mode={mode} value={uiText('sample')} inline={mode === 'both'} /></span>
        </div>
        <div className="hero-grid">
          <div>
            <p className="role"><LocalizedText mode="both" value={profile.role} inline /></p>
            <h1 className="bilingual-hero-name" id="page-title"><LocalizedText mode="both" value={profile.name} inline /></h1>
            {hasContactLinks && (
              <div className="hero-links" aria-label={mode === 'zh' ? '学术链接' : 'Academic links'}>
                {profile.email && (
                  <a href={`mailto:${profile.email}`}>
                    <LocalizedText mode={mode} value={{ en: 'Email', zh: '邮箱' }} inline={mode === 'both'} /> ↗
                  </a>
                )}
                {profile.externalLinks.map((link) => (
                  <a href={link.href} key={link.href} rel="noreferrer" target="_blank">{link.label} ↗</a>
                ))}
              </div>
            )}
          </div>
          <div className="hero-intro">
            <p className="statement"><LocalizedText labeled={mode === 'both'} mode={mode} value={profile.statement} /></p>
            <p className="bio"><LocalizedText labeled={mode === 'both'} mode={mode} value={profile.bio} /></p>
            <blockquote className="hero-epigraph">
              <p className="epigraph-original" lang="zh-CN">{profile.epigraph.zh}</p>
              {mode !== 'zh' && <p className="epigraph-translation" lang="en">{profile.epigraph.en}</p>}
              <cite><LocalizedText mode={mode} value={profile.epigraphSource} inline={mode === 'both'} /></cite>
            </blockquote>
            {profile.cvHref && (
              <a className="text-link" href={profile.cvHref}>
                <LocalizedText mode={mode} value={uiText('cv')} inline={mode === 'both'} /> ↗
              </a>
            )}
          </div>
        </div>
        <a className="scroll-cue" href="#research">
          <span><LocalizedText mode={mode} value={uiText('scroll')} inline={mode === 'both'} /></span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="section research-section" id="research" aria-labelledby="research-title">
        <p className="section-number">01</p>
        <div className="section-heading">
          <p className="eyebrow"><LocalizedText mode={mode} value={uiText('researchEyebrow')} inline={mode === 'both'} /></p>
          <h2 id="research-title"><LocalizedText mode={mode} value={uiText('researchTitle')} /></h2>
        </div>
        <ol className="research-list">
          {academicContent.researchAreas.map((area) => (
            <li id={`area-${area.id}`} key={area.id}>
              <div className="list-topline">
                <span>{area.number}</span><span aria-hidden="true">↗</span>
              </div>
              <h3><LocalizedText mode={mode} value={area.title} inline={mode === 'both'} /></h3>
              <p><LocalizedText labeled={mode === 'both'} mode={mode} value={area.description} /></p>
              <small><LocalizedText mode={mode} value={area.keywords} /></small>
            </li>
          ))}
        </ol>
      </section>

      <section className="section publications-section" id="publications" aria-labelledby="publications-title">
        <div className="section-intro">
          <p className="section-number">02</p>
          <div className="section-heading">
            <p className="eyebrow"><LocalizedText mode={mode} value={uiText('publicationsEyebrow')} inline={mode === 'both'} /></p>
            <h2 id="publications-title"><LocalizedText mode={mode} value={uiText('publicationsTitle')} /></h2>
          </div>
          <p className="section-description"><LocalizedText labeled={mode === 'both'} mode={mode} value={uiText('publicationsIntro')} /></p>
        </div>
        {academicContent.publications.length > 0 ? (
          <div className="publication-list">
            {academicContent.publications.map((publication) => (
              <article className="publication" id={`publication-${publication.id}`} key={publication.id}>
                <div className="publication-meta">
                  <span>{publication.year}</span>
                  {publication.featured && <span className="badge"><LocalizedText mode={mode} value={uiText('featured')} /></span>}
                </div>
                <div>
                  <h3><LocalizedText mode={bibliographicMode(publication.originalLanguage, mode)} value={publication.title} /></h3>
                  <p className="authors">{publication.authors}</p>
                  <p className="venue"><LocalizedText mode={bibliographicMode(publication.originalLanguage, mode)} value={publication.venue} /></p>
                </div>
                {publication.links.length > 0 && (
                  <div className="publication-links">
                    {publication.links.map((link) => (
                      <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                        <LocalizedText mode={mode} value={link.label} inline={mode === 'both'} /> ↗
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p className="publication-empty"><LocalizedText labeled={mode === 'both'} mode={mode} value={uiText('publicationsPending')} /></p>
        )}
      </section>

      {hasExperience && (
        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-intro compact-intro">
            <p className="section-number">03</p>
            <div className="section-heading">
              <p className="eyebrow"><LocalizedText mode={mode} value={uiText('experienceEyebrow')} inline={mode === 'both'} /></p>
              <h2 id="experience-title"><LocalizedText mode={mode} value={uiText('experienceTitle')} /></h2>
            </div>
          </div>
          <div className="timeline">
            {academicContent.experience.map((item) => (
              <article className="timeline-item" id={`experience-${item.id}`} key={item.id}>
                <span className="timeline-period">{item.period}</span>
                <div>
                  <h3><LocalizedText mode={mode} value={item.title} /></h3>
                  <p><LocalizedText mode={mode} value={item.institution} /></p>
                  {item.detail && <small><LocalizedText labeled={mode === 'both'} mode={mode} value={item.detail} /></small>}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {hasCredentials && (
        <section className="section credentials-section" aria-labelledby="credentials-title">
          <div className="section-intro compact-intro">
            <p className="section-number">{credentialsNumber}</p>
            <div className="section-heading">
              <p className="eyebrow"><LocalizedText mode={mode} value={uiText('educationEyebrow')} inline={mode === 'both'} /></p>
              <h2 id="credentials-title"><LocalizedText mode={mode} value={uiText('educationTitle')} /></h2>
            </div>
          </div>
          <div className="credentials-grid">
            {academicContent.education.length > 0 && (
              <div>
                <h3 className="column-label"><LocalizedText mode={mode} value={uiText('educationLabel')} inline={mode === 'both'} /></h3>
                {academicContent.education.map((item) => (
                  <article className="credential-item" id={`education-${item.id}`} key={item.id}>
                    <span>{item.period}</span>
                    <div>
                      <h4><LocalizedText mode={mode} value={item.title} /></h4>
                      <p><LocalizedText mode={mode} value={item.institution} /></p>
                      {item.detail && <small><LocalizedText labeled={mode === 'both'} mode={mode} value={item.detail} /></small>}
                    </div>
                  </article>
                ))}
              </div>
            )}
            {academicContent.honors.length > 0 && (
              <div>
                <h3 className="column-label"><LocalizedText mode={mode} value={uiText('honorsLabel')} inline={mode === 'both'} /></h3>
                {academicContent.honors.map((honor, index) => (
                  <article className="credential-item" key={`${honor.year}-${index}`}>
                    <span>{honor.year}</span>
                    <div><h4><LocalizedText mode={mode} value={honor.title} /></h4></div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">{contactNumber} · <LocalizedText mode={mode} value={uiText('contactEyebrow')} inline={mode === 'both'} /></p>
        <h2 id="contact-title"><LocalizedText mode={mode} value={uiText('contactTitle')} /></h2>
        <div className="contact-grid">
          <p><LocalizedText labeled={mode === 'both'} mode={mode} value={uiText('contactBody')} /></p>
          {hasContactLinks && (
            <div className="contact-links">
              {profile.email && <a href={`mailto:${profile.email}`}>{profile.email} ↗</a>}
              {profile.externalLinks.map((link) => (
                <a href={link.href} key={link.href} rel="noreferrer" target="_blank">{link.label} ↗</a>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer>
        <span><LocalizedText mode={mode} value={{ en: 'Chong Liu', zh: '刘崇' }} inline={mode === 'both'} /></span>
        <span><LocalizedText mode={mode} value={uiText('updated')} inline={mode === 'both'} /></span>
        <a href="#top">↑ <LocalizedText mode={mode} value={{ en: 'Top', zh: '顶部' }} /></a>
      </footer>
    </main>
  );
}
