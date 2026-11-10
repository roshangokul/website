function Hero() {
  return (
    <section className="hero page-width" aria-labelledby="hero-title">
      <p className="eyebrow">Software Engineer</p>
      <h1 id="hero-title">Hey there! I’m Roshan.</h1>
      <div className="hero__description">
        <p>
          I’m a software engineer drawn to backend development, distributed systems, and machine
          learning. I’m building a career around understanding complex problems, creating dependable
          software, and always finding something new to learn.
        </p>
        <p className="hero__interests">
          Lately, I’ve been working on my golf game, keeping up with One Piece, and traveling whenever
          I get the chance.
        </p>
      </div>
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
