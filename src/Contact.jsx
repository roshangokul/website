const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/roshangokul' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/roshangokul/' },
  { label: 'Email Me', href: 'mailto:roshangokul@gmail.com' }
];

function Contact() {
  return (
    <section className="section page-width contact" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="section-label">Say hello</p>
        <h2 id="contact-title">Have something interesting in mind?</h2>
        <p className="contact__description">
          I’m always happy to talk about software, systems, or a problem worth thinking through.
        </p>
      </div>
      <div className="contact__links">
        {contactLinks.map((link) => (
          <a
            className="text-link"
            href={link.href}
            key={link.label}
            target="_blank"
            rel="noreferrer"
          >
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
