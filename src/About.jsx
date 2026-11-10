const toolkit = [
  ['Languages', 'Java, Python, C#, JavaScript'],
  ['Backend', 'Spring Boot, Node.js, Express, PostgreSQL'],
  ['Systems', 'Kafka, AWS, Docker, Terraform'],
  ['Observability', 'Datadog, Splunk, CloudWatch'],
];

function About() {
  return (
    <section className="section page-width about" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="section-label">A little more</p>
        <h2 id="about-title">About</h2>
      </div>
      <div className="about__content">
        <p className="about__statement">
          I like understanding what happens after code leaves my editor—how services communicate,
          grow, and stay dependable.
        </p>
        <p>
          That curiosity has pulled me toward backend development and distributed systems, while
          teaching computer science and mathematics has shaped how I work with others. I value
          thoughtful questions, clear explanations, and software people can reason about. Lately,
          I’ve also been exploring machine learning and where it fits into the systems I enjoy
          building.
        </p>
        <dl className="toolkit">
          {toolkit.map(([category, tools]) => (
            <div key={category}>
              <dt>{category}</dt>
              <dd>{tools}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default About;
