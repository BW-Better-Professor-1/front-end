import React from 'react';
import { Link } from 'react-router-dom';

const Projects = pr => {
    return (
      <div className="project-list">
        {pr.projects.map(project => (
          <div className="project" key={project.id}>
            <h2>{project.project_name}</h2>
            <p>{project.description}</p>
            <Link to={`viewprojects/${project.id}`} ><button>Edit</button></Link>
            <button onClick={() => pr.deleteProject(project.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  };

export default Projects;