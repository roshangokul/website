import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-section">
          <section id="experience-section">
          
      <h2 className="section-title">My Journey</h2>
      <div className="experience-scroll">
        <div className="experience-item">
          <h3>Software Engineer Intern</h3>
          <p><b>Company:</b> UnitedHealth Group</p>
          <p><b>Date:</b> 2023 - Present</p>
          <p>
            Worked on optimizing workflows, improving code efficiency, and 
            developing real-time data monitoring systems.
          </p>
        </div>
        <div className="experience-item">
          <h3>Bachelor of Science</h3>
          <p><b>Institution:</b> University of Minnesota, Twin-Cities</p>
          <p><b>Date:</b> 2020 - 2023</p>
          <p>
            Majored in Computer Science with a focus on software engineering 
            and full-stack development.
          </p>
        </div>
        {/* Add more experience items as needed */}
      </div>
      </section>
    </div>
  );
};

export default Experience;
