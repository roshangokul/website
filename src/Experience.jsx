import { experience } from './content';

function ExperienceItem({ item }) {
  return (
    <article className="experience-item" data-kind={item.kind ?? 'engineering'}>
      <div className="experience-item__main">
        <h3>{item.company}</h3>
        <p className="experience-item__role">{item.role}</p>
        <p className="experience-item__summary">{item.summary}</p>
        {item.technologies.length > 0 && (
          <ul className="technology-list" aria-label={`Technologies used at ${item.company}`}>
            {item.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="experience-item__meta">
        <p>{item.dates}</p>
        {item.location && <p>{item.location}</p>}
      </div>
    </article>
  );
}

function Experience() {
  return (
    <section className="section page-width" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="section-label">Selected experience</p>
        <h2 id="experience-title">Experience</h2>
      </div>
      <div className="experience-list">
        {experience.map((item) => (
          <ExperienceItem key={`${item.company}-${item.role}`} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
