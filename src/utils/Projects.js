
import React from 'react';

const Projects = pr => {
    return (
      <div className="project-list">
        {pr.projects.map(project => (
          <div className="project" key={project.id}>
            <h2>{project.project_name}</h2>
            <p>{project.project_description}</p>
          </div>
        ))}
      </div>
    );
  };

export default Projects;