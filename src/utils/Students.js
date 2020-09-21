import React from 'react';

const Projects = pr => {
    return (
      <div className="project-list">
        {pr.projects.map(project => (
          <div className="project" key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.notes}</p>
          </div>
        ))}
      </div>
    );
  };

export default Projects;