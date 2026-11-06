import { certificates, education, experience, skills } from '../data/profile';
import { follow } from './follow';
import './About.css';

const About = () => {
  const years = certificates.map((c) => c.year).sort();
  const rows = [
    ...experience.map((job) => ({ key: job.org, when: job.period, what: job.role, where: `${job.org} · ${job.summary}` })),
    { key: 'school', when: education.year, what: education.degree, where: education.school },
    { key: 'certs', when: `${years[0]} – ${years[years.length - 1]}`, what: 'Certificates', where: certificates.map((c) => c.name).join(', ') },
  ];

  return (
    <section id="about" className="section" aria-labelledby="about-title" data-reveal>
      <div className="container">
        <p {...follow(0, 'eyebrow')}>About</p>
        <h2 id="about-title" {...follow(1, 'section-title')}>
          Experience and skills.
        </h2>

        <div className="about-grid">
          <div {...follow(2)}>
            <h3 className="about-label">Experience</h3>
            <ul className="about-list">
              {rows.map((r) => (
                <li key={r.key} className="about-row">
                  <p className="about-when">{r.when}</p>
                  <div>
                    <p className="about-what">{r.what}</p>
                    <p className="about-where">{r.where}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div {...follow(3)}>
            <h3 className="about-label">Skills</h3>
            <dl className="about-list">
              {skills.map((group) => (
                <div key={group.title} className="about-row skill-row">
                  <dt>{group.title}</dt>
                  <dd>
                    {group.items.join(', ')}
                    {group.note && <span className="skill-note">{group.note}</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
