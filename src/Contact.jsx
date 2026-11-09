const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/roshangokul' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/roshangokul/' },
];

function Contact() {
  return (
    <section className="section page-width contact" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="section-label">Contact</p>
        <h2 id="contact-title">Let’s connect.</h2>
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
