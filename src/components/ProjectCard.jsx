// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
