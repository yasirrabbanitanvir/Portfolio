import React from "react";
import experienceData from "../data/experience.json"; // Adjust the path as needed
import "../App.css"; // Make sure to import the CSS file

const Experience = () => {
  return (
    <section id="experience" data-aos="fade-right">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-list">
          {experienceData.map((experience, index) => (
            <div key={index} className="experience-item">
              <h3>{experience.role}</h3>
              <h4>{experience.company}</h4>
              <p className="duration">{experience.duration}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
