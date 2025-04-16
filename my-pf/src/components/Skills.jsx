import React from "react";
import skillsData from "../data/skills.json"; 
import "../App.css"; 

const Skills = () => {
  return (
    <section id="skills" data-aos="fade-right">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-list">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-item">
              <h3>{skill.name}</h3>
              <p className="skill-level">Level: {skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
