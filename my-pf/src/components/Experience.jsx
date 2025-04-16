import React from "react";
import experienceData from "../data/experience.json";
import "../App.css";

const Experience = () => {
  return (
    <section id="experience" data-aos="fade-right">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-list">
          {experienceData.map((experience, index) => (
            <div key={index} className="experience-item">
              <h3>{experience.role}</h3>
              <h5 className="mono-style">{experience.company}</h5>
              <p className="mono-style">{experience.duration}</p>
              <p className="mono-style">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;