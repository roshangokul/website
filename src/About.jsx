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
          I’m interested in building dependable systems and understanding how software behaves at
          scale.
        </p>
        <p>
          My recent work has centered on backend services and the infrastructure around production
          software. I also enjoy the teaching side of engineering—making difficult ideas easier to
          understand and use.
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
