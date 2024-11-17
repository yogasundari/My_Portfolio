import React from "react";
import { useState } from "react";
import "./project.css";
import plantLeafImg from "./images/plant-leaf.jpg";
import KidneyImg from "./images/kidney-disease.jpg";
import GrainImg from "./images/grain-quality.jpg";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null); 
  const projectData = [
    {
      title: "Plant Leaf Disease Detection",
      description:
        "Machine learning model for identifying diseased and healthy leaves using Random Forest.",
      image: plantLeafImg,
    },
    {
      title: "Chronic Kidney Disease Detection",
      description:
        "IBM project to predict early-stage chronic kidney disease based on vital stats.",
      image: KidneyImg, // Replace with your image path
    },
    {
      title: "Grain Quality Classification",
      description:
        "Deep learning project for identifying grain types and assessing quality using CNN.",
      image: GrainImg, // Replace with your image path
    },
  ];
  const toggleDescription = (index) => {
    setActiveProject((prevIndex) => (prevIndex === index ? null : index)); // Toggle the description
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-item" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <h3>{project.title}</h3>
            {activeProject === index && <p>{project.description}</p>} {/* Show description if active */}
            <button
              className="project-btn"
              onClick={() => toggleDescription(index)}
            >
              {activeProject === index ? "Hide Details" : "Learn More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
