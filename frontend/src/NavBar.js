import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import githubLogo from './images/github-mark.png';
import linkedinLogo from './images/LI-In-Bug.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div id="navbar">
          <a className="navButton" href="#experience-section">Experience</a>
          <a className="navButton" href="#projects">Projects</a>
          <a className="navButton" href="https://github.com/roshangokul">
            <img src={githubLogo} alt="GitHub" />
          </a>
          <a className="navButton" href="https://www.linkedin.com/in/roshangokul/">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
        </div>
    </div>
  );
}

export default NavBar;
