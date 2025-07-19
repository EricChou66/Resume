import React from 'react';
import './Experience.css';

const Experience = ({ title, company, location, date, description }) => {
  return (
    <div className="job">
      <h3 className="job-title">{title} <span className="company-name">| {company}</span></h3>
      <p className="location-date">{location} | {date}</p>
      <ul className="job-description">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;