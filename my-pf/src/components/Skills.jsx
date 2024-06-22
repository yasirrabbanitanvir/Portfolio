import React from "react";
import skillsData from "../data/skills.json"; // Corrected import path
import "../App.css"; // Adjust the path if necessary

const Skills = () => {
  return (
    <section id="skills" data-aos="fade-right">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-list">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-item">
              <h3>{skill.name}</h3>
              <p>Level: {skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
