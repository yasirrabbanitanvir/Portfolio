import React from "react";
import projectsData from "../data/projects.json"; // Adjust the path as needed
import "../App.css"; // Make sure to import the CSS file

const Projects = () => {
  return (
    <section id="projects" data-aos="fade-left">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-list">
          {projectsData.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
