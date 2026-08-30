import { academicContent, interfaceCopy, type BilingualText } from './content';

function english(value: BilingualText) {
  return value.en;
}

export default function Home() {
  const ui = interfaceCopy.en;
  const profile = academicContent.profile;
  const hasContactLinks = Boolean(profile.email || profile.externalLinks.length);
  const hasExperience = academicContent.experience.length > 0;
  const hasCredentials = academicContent.education.length > 0 || academicContent.honors.length > 0;
  const credentialsNumber = hasExperience ? '04' : '03';
  const contactNumber = String(3 + Number(hasExperience) + Number(hasCredentials)).padStart(2, '0');

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={english(profile.name)}>
          {ui.wordmark}
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {ui.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <span className="header-balance" aria-hidden="true" />
      </header>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {ui.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>

      <section className="hero" id="top" aria-labelledby="page-title">
        <div className="hero-meta">
          <span className="status-dot" aria-hidden="true" />
          <span>{ui.sample}</span>
        </div>
        <div className="hero-grid">
          <div>
            <p className="role">{english(profile.role)}</p>
            <h1 id="page-title">{english(profile.name)}</h1>
          </div>
          <div className="hero-intro">
            <p className="statement">{english(profile.statement)}</p>
            <p className="bio">{english(profile.bio)}</p>
            {profile.cvHref && <a className="text-link" href={profile.cvHref}>{ui.cv} ↗</a>}
          </div>
        </div>
        <a className="scroll-cue" href="#research">
          <span>{ui.scroll}</span><span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="section research-section" id="research" aria-labelledby="research-title">
        <p className="section-number">01</p>
        <div className="section-heading">
          <p className="eyebrow">{ui.researchEyebrow}</p>
          <h2 id="research-title">{ui.researchTitle}</h2>
        </div>
        <ol className="research-list">
          {academicContent.researchAreas.map((area) => (
            <li key={area.number}>
              <div className="list-topline">
                <span>{area.number}</span><span aria-hidden="true">↗</span>
              </div>
              <h3>{english(area.title)}</h3>
              <p>{english(area.description)}</p>
              <small>{english(area.keywords)}</small>
            </li>
          ))}
        </ol>
      </section>

      <section className="section publications-section" id="publications" aria-labelledby="publications-title">
        <div className="section-intro">
          <p className="section-number">02</p>
          <div className="section-heading">
            <p className="eyebrow">{ui.publicationsEyebrow}</p>
            <h2 id="publications-title">{ui.publicationsTitle}</h2>
          </div>
          <p className="section-description">{ui.publicationsIntro}</p>
        </div>
        {academicContent.publications.length > 0 ? (
          <div className="publication-list">
            {academicContent.publications.map((publication, index) => (
              <article className="publication" key={`${publication.year}-${index}`}>
                <div className="publication-meta">
                  <span>{publication.year}</span>
                  {publication.featured && <span className="badge">{ui.featured}</span>}
                </div>
                <div>
                  <h3>{english(publication.title)}</h3>
                  <p className="authors">{publication.authors}</p>
                  <p className="venue">{english(publication.venue)}</p>
                </div>
                {publication.links.length > 0 && (
                  <div className="publication-links">
                    {publication.links.map((link) => (
                      <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                        {english(link.label)} ↗
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p className="publication-empty">{ui.publicationsPending}</p>
        )}
      </section>

      {hasExperience && (
        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-intro compact-intro">
            <p className="section-number">03</p>
            <div className="section-heading">
              <p className="eyebrow">{ui.experienceEyebrow}</p>
              <h2 id="experience-title">{ui.experienceTitle}</h2>
            </div>
          </div>
          <div className="timeline">
            {academicContent.experience.map((item, index) => (
              <article className="timeline-item" key={`${item.period}-${index}`}>
                <span className="timeline-period">{item.period}</span>
                <div>
                  <h3>{english(item.title)}</h3>
                  <p>{english(item.institution)}</p>
                  {item.detail && <small>{english(item.detail)}</small>}
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
              <p className="eyebrow">{ui.educationEyebrow}</p>
              <h2 id="credentials-title">{ui.educationTitle}</h2>
            </div>
          </div>
          <div className="credentials-grid">
            {academicContent.education.length > 0 && (
              <div>
                <h3 className="column-label">{ui.educationLabel}</h3>
                {academicContent.education.map((item, index) => (
                  <article className="credential-item" key={`${item.period}-${index}`}>
                    <span>{item.period}</span>
                    <div>
                      <h4>{english(item.title)}</h4>
                      <p>{english(item.institution)}</p>
                      {item.detail && <small>{english(item.detail)}</small>}
                    </div>
                  </article>
                ))}
              </div>
            )}
            {academicContent.honors.length > 0 && (
              <div>
                <h3 className="column-label">{ui.honorsLabel}</h3>
                {academicContent.honors.map((honor, index) => (
                  <article className="credential-item" key={`${honor.year}-${index}`}>
                    <span>{honor.year}</span>
                    <div><h4>{english(honor.title)}</h4></div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">{contactNumber} · {ui.contactEyebrow}</p>
        <h2 id="contact-title">{ui.contactTitle}</h2>
        <div className="contact-grid">
          <p>{ui.contactBody}</p>
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
        <span>{ui.footer}</span>
        <span>{ui.updated}</span>
        <a href="#top">↑ Top</a>
      </footer>
    </main>
  );
}
