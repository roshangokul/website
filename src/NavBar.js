import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className="site-header" id="top">
      {/* This link is hidden until it receives keyboard focus. It lets keyboard
          users bypass repeated navigation and move directly to the page. */}
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="site-header__inner">
        <a
          className="site-brand"
          href="#top"
          aria-label="Roshan Gokul, back to top"
        >
          <span className="site-brand__name">Roshan Gokul</span>
          <span className="site-brand__role">Software Engineer</span>
        </a>

        <nav aria-label="Primary navigation">
          <ul className="primary-nav">
            <li>
              <a className="primary-nav__link" href="#about">About</a>
            </li>
            <li>
              <a className="primary-nav__link" href="#experience">Experience</a>
            </li>
            <li>
              <a
                className="primary-nav__link primary-nav__link--external"
                href="https://github.com/roshangokul"
                aria-label="GitHub, external site"
              >
                GitHub <span className="external-arrow" aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a
                className="primary-nav__link primary-nav__link--external"
                href="https://www.linkedin.com/in/roshangokul/"
                aria-label="LinkedIn, external site"
              >
                LinkedIn <span className="external-arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
