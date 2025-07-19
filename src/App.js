import React from 'react';
import './App.css';
import Experience from './Experience';
import { FaLinkedin } from 'react-icons/fa';

function App() {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Cisco System Canada Co.',
      location: 'Vancouver, BC',
      date: 'Oct 2023 - Present',
      description: [
        'Architect and implement novel frontend core libraries and platforms with React, driving innovation and enhancing user experience.',
        'Optimize and streamline package dependencies while actively contributing to the maintenance and improvement of the build pipeline.',
        'Elevate the frontend UI library for consumer teams by maintaining and enhancing it with Angular and React.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Cisco System Inc',
      location: 'San Jose, CA',
      date: 'Mar 2021 - Oct 2023',
      description: [
        'Spearheaded the maintenance of the frontend core UI library using Angular, ensuring seamless experiences for frontend consumer teams.',
        'Collaborated closely with UI designers and frontend library consumers to conceptualize and deliver new components and features.',
        'Enhanced APM products by delivering a unique, config-driven UI for comprehensive full-stack observability.',
        'Developed and delivered a UI kit of essential components for data visualization, widely adopted by other teams.'
      ]
    },
    {
      title: 'Computer System Analyst',
      company: 'Foxconn Assembly LLC',
      location: 'Houston, TX',
      date: 'Nov 2020 - Jan 2021',
      description: [
        'Administered and maintained MSSQL databases, including the design and implementation of stored procedures.',
        'Designed and developed a frontend GUI for manufacturing part number mapping using ASP.NET.'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Copart Inc',
      location: 'Dallas, TX',
      date: 'Feb 2020 - Aug 2020',
      description: [
        'Led the decoupling of the auction system and refactored the back-end with Java Spring Boot to improve modularity and maintainability.',
        'Boosted application performance by implementing caching strategies with Redis and optimizing entity loading.',
        'Pioneered the development of a modern, user-friendly front-end website with Angular and PrimeNG, replacing a legacy command-line interface.',
        'Managed the deployment and orchestration of projects using Spinnaker and Jenkins.'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'TrendMicro Inc',
      location: 'Irving, TX',
      date: 'May 2019 - Aug 2019',
      description: [
        'Provided critical customer support by analyzing logs, devising workarounds, and implementing bug fixes.',
        'Adapted and extended tools and scripts in C++ to meet customer feature requests, including an offline server transfer solution.'
      ]
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://avatars.githubusercontent.com/u/11359312?v=4" alt="Yen-Ting Chou" className="profile-pic" />
        <div className="header-info">
          <h1>Yen-Ting Chou</h1>
          <p>Software Engineer</p>
        </div>
        <a href="https://www.linkedin.com/in/yen-ting-chou/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
          <FaLinkedin size={30} />
        </a>
      </header>
      <div className="container">
        <section className="section">
          <h2>Professional Experience</h2>
          {experiences.map((exp, index) => (
            <Experience key={index} {...exp} />
          ))}
        </section>
        <section className="section">
          <h2>Education</h2>
          <div className="job">
            <h3>Master of Science in Computer Science</h3>
            <p className="company">University of Texas at Dallas | 2018 - 2020</p>
          </div>
          <div className="job">
            <h3>Bachelor of Science in Computer Science</h3>
            <p className="company">National Chiao Tung University | 2013 - 2017</p>
          </div>
        </section>
        <section className="section">
          <h2>Technical Skills</h2>
          <div className="skills">
            <span className="skill-item">React</span>
            <span className="skill-item">Angular</span>
            <span className="skill-item">TypeScript</span>
            <span className="skill-item">Python</span>
            <span className="skill-item">Java</span>
            <span className="skill-item">Git</span>
          </div>
        </section>
        <section className="section">
          <h2>Languages</h2>
          <div className="skills">
            <span className="skill-item language-item">Mandarin (Native)</span>
            <span className="skill-item language-item">English (Proficient)</span>
            <span className="skill-item language-item">Taiwanese (Basic)</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
