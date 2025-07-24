import React, { useEffect, useState } from 'react';
import './About.css';
import roshanPic from './images/roshanPic.jpg';

const About = () => {
  const [visible, setVisible] = useState(false);
  const [finishedTyping, setFinishedTyping] = useState(false);

  useEffect(() => {
    const timeoutVisible = setTimeout(() => {
      setVisible(true);
    }, 300); // Typing duration (3s)

    const timeoutTyping = setTimeout(() => {
      setFinishedTyping(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutVisible);
      clearTimeout(timeoutTyping);
    };
  }, []);

  return (
    <div className={`about ${visible ? 'visible' : ''} ${finishedTyping ? 'finished' : ''}`}>
  <div id="aboutElements">
        <h1>Hey there!👋🏾 I'm Roshan, a software engineer.</h1>
        <ul>
          <li><b>Tools I am proficient with:</b> Git, GitHub, Splunk, Datadog, Terraform, Jenkins, Gradle.</li>
          <li><b>Frameworks and Libraries:</b> React.js, Node.js, Spring, Express.js, Java Spring Boot.</li>
          <li><b>Programming Languages:</b> Python, Java, C#, C++, JavaScript, C.</li>
        </ul>
      </div>
      <div id="aboutPic">
        <a href="https://github.com/roshangokul">
          <img src={roshanPic} alt="profPic" />
        </a>
      </div>
    </div>
  );
};

export default About;
