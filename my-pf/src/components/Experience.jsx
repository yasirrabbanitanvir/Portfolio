import React from "react";
import experienceData from "../data/experience.json";
import "../App.css";

const Experience = () => {
  return (
    <section id="experience" data-aos="fade-right">
      <div className="container py-5">
        <h2 className="text-center mb-5">Experience</h2>
        <div className="row">
          {experienceData.map((experience, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="experience-item p-4 shadow rounded bg-light h-100">
                <h3 className="mb-2">{experience.role}</h3>
                <h4 className="mb-1 text-muted">{experience.company}</h4>
                <p className="duration mb-2" style={{ fontWeight: "500", color: "#555" }}>
                  {experience.duration}
                </p>
                <p style={{ fontSize: "0.95rem", color: "#444" }}>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;