function Hero() {
  return (
    <section className="hero page-width" aria-labelledby="hero-title">
      <p className="eyebrow">Software Engineer</p>
      <h1 id="hero-title">Hey there! I’m Roshan.</h1>
      <p className="hero__description">
        I'm a software engineer currently working at Chewy where I develop software for Chewy's estimated delivery date, promised delivery date, ship by date, and WIZMO, which stands for Where Is My Order, and is Chewy's source of truth for order and package information. I'm highly interested in backend development, distributed systems, and learning more about machine learning. But am highly curious about everything relate
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
