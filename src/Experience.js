import React from 'react';
import './Experience.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import chewyLogo from './images/chewy.png';


const Experience = () => {
  return (
    <div className='experience'>
      <section id="experience-section"></section>
      <h1 className='experience-header'>Engineering</h1>
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
    date="July 2025"
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    // icon={<img src={chewyLogo} alt="Chewy" style={{ width: '100%', height: '150%', borderRadius: '50%' }} />}
      
  >
    <h3 className="vertical-timeline-element-title">Software Engineer I @ Chewy</h3>
    <h4 className="vertical-timeline-element-subtitle">Bellevue, WA</h4>
    <p>
      Engineer on the Promise Team
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May 2024 - Dec 2024"
    contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
    // icon={<img src={chewyLogo} alt="Chewy" style={{ width: '100%', height: '100%'}} />}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer Co-Op @ Chewy</h3>
    <h4 className="vertical-timeline-element-subtitle">Minneapolis, MN & Bellevue, WA</h4>
    <p>
      I worked on the Order Release & Customization Service team in the Supply Chain Org. I was able to work with and gain a deeper knowledge of AWS technologies like S3, SNS, SQS, MSK, EC2, and Cloudwatch. I worked primarily in Java using Spring Boot, but also worked with Apache Kafka, Python, PostgresSQL, Docker, Git and Jenkins for development and deployment, and Cucumber and Gherkin for testing.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    date="May 2023 - Aug 2023"
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Software Development Intern @ ImageTrend</h3>
    <h4 className="vertical-timeline-element-subtitle">Greater Minneapolis-St. Paul Area</h4>
    <p>
      I worked on the Elite Team and I utilized the C#/.NET framework to create an in-house application to automatically assign PR reviews to team members in office, taking into account substantial time dedicated to meetings, partial time-off during the day, and OOO
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2023-2025"
    contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
  >
    <h3 className="vertical-timeline-element-title">Undergraduate Teaching Assistant</h3>
    <p>
        <ul>CSCI 1933 - Introduction to Data Structures and Alorithms</ul>
        <ul>CSCI 2033 - Computational Linear Algebra</ul>
        <ul>CSCI 1133 - Introduction to Computing and Programming Concepts</ul>
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>
  );
};

export default Experience;
