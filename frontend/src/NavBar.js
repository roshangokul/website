import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import githubLogo from './images/github-mark.png';
import linkedinLogo from './images/LI-In-Bug.png';
import './NavBar.css';

const NavBar = () => {
  const scrollTo = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="NavBar">
      <div id="navbar">
        <div id="navLeft">
          <h4 id="navName">Roshan Gokul</h4>
        </div>

        <div id="navRight">
          <button id="navButton" onClick={() => scrollTo('experience')}>Experience</button>
          <button id="navButton" onClick={() => scrollTo('projects')}>Projects</button>
          <a id="navButton" href="https://github.com/roshangokul">
            <img id="navButton" src={githubLogo} alt="GitHub" />
          </a>
          <a id="navButton"  href="https://www.linkedin.com/in/roshangokul/">
            <img id="navButton" src={linkedinLogo} alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;