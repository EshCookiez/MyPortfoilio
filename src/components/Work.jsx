import { featured, moreProjects } from '../data/profile';
import { follow } from './follow';
import './Work.css';

// A screenshot, or for the mobile apps, three phone screens side by side.
const Visual = ({ visual }) => {
  if (visual.kind === 'phones') {
    return (
      <figure className="work-phones">
        {visual.screens.map((s) => (
          <img key={s.src} src={s.src} alt={s.alt} width="372" height="720" loading="lazy" decoding="async" />
        ))}
      </figure>
    );
  }
  return (
    <figure className="work-shot">
      <img src={visual.src} alt={visual.alt} width="1408" height="880" loading="lazy" decoding="async" />
    </figure>
  );
};

const Work = () => (
  <section id="work" className="section surface-a" aria-labelledby="work-title" data-reveal>
    <div className="container">
      <p {...follow(0, 'eyebrow')}>Work</p>
      <h2 id="work-title" {...follow(1, 'section-title')}>
        Four things I built in 2026.
      </h2>

      <div className="work-grid">
        {featured.map((p, i) => (
          // Each project is its own reveal, so its screens boot as it scrolls in.
          <article key={p.id} {...follow(2 + i, 'work-item')} aria-labelledby={`work-${p.id}`} data-reveal>
            <Visual visual={p.visual} />
            <div className="work-head">
              <span className="work-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 id={`work-${p.id}`}>{p.title}</h3>
            </div>
            <p className="work-meta">
              {p.period} · {p.role}
            </p>
            <p className="work-blurb">{p.blurb}</p>
            <p className="work-stack">{p.stack.slice(0, 4).join(' · ')}</p>
            {p.links.length > 0 && (
              <p className="work-links">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                    {l.code && <span className="visually-hidden"> for {p.title}</span>}
                  </a>
                ))}
              </p>
            )}
          </article>
        ))}
      </div>

      <p {...follow(6, 'work-also')}>
        <strong>Also built:</strong>{' '}
        {moreProjects.map((p, i) => (
          <span key={p.title}>
            {i > 0 && ', '}
            <a href={p.demo || p.code} target="_blank" rel="noopener noreferrer">
              {p.title}
            </a>
            {p.year && ` (${p.year})`}
          </span>
        ))}
        . School and hackathon projects.
      </p>
    </div>
  </section>
);

export default Work;
