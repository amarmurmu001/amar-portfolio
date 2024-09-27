import React, { useState, useEffect } from 'react';
import './Projects.css';
import { fetchProjects } from '../utils/strapiService';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };

    getProjects();
  }, []);

  return (
    <>
      <div className='slogan'>Projects</div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target='_blank' rel="noopener noreferrer" className="project-card">
            
              <img
                src={`http://localhost:1337${project.image.url}`}
                alt={project.title}
              />
            
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </>
  );
};

export default Projects;
