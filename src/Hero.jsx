function Hero() {
  return (
    <section className="hero page-width" aria-labelledby="hero-title">
      <p className="eyebrow">Software Engineer</p>
      <h1 id="hero-title">Hey, I’m Roshan.</h1>
      <p className="hero__description">
        Software engineer focused on backend development, distributed systems, and machine learning.
      </p>
      <div className="hero__actions" aria-label="Featured links">
        <a className="text-link" href="#experience">
          View work <span aria-hidden="true">↓</span>
        </a>
        <a
          className="text-link"
          href="https://github.com/roshangokul"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
