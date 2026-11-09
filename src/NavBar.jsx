const navigation = [
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function NavBar() {
  return (
    <header className="site-header" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-header__inner page-width">
        <a className="site-brand" href="#top" aria-label="Roshan Gokul, back to top">
          Roshan Gokul
        </a>
        <nav aria-label="Primary navigation">
          <ul className="primary-nav">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
