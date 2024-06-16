import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const scrollTo = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="App">
  <div id="navbar">
    <div id="navLeft">
      <h4 id="navName">Roshan Gokul</h4>
    </div>

    <div id="navRight">
      <button id="navButton" onClick={() => scrollTo('experience')}>Experience</button>
      <button id="navButton" onClick={() => scrollTo('projects')}>Projects</button>
      <button id="navButton" onClick={() => scrollTo('projects')}>GitHub</button>
      <a id="navButton" href="https://github.com/roshangokul">Contact Me</a>
    </div>
  </div>

  <div id="aboutMe" className="section">
        


      </div>
      <div id="experience" className="section">
        <h3>Experiences</h3>
        <div className="job">
          <h2>experiene 1</h2>
          <h3>Company</h3>
          <p>quick description</p>
        </div>
        <div className="job">
          <h2>experiene 1</h2>
          <h3>Company</h3>
          <p>quick description</p>
        </div>
      </div>
      <div id="projects" className="section">
      <h3>Projects</h3>
        <div className="job">
          <h2>experiene 1</h2>
          <h3>Company</h3>
          <p>quick description</p>
        </div>
        <div className="job">
          <h2>experiene 1</h2>
          <h3>Company</h3>
          <p>quick description</p>
        </div>
      </div>
    </div>
  );
}

export default App;