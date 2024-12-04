import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';
import { fetchProjects } from '../utils/strapiService';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };

    getProjects();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="projects-section">
      <motion.h1 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h1>
      
      <motion.div 
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            variants={item}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-image">
              <img
                src={`http://localhost:1337${project.image.url}`}
                alt={project.title}
                loading="lazy"
              />
              <div className="project-overlay">
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiGithub />
                      <span>Code</span>
                    </a>
                  )}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiExternalLink />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies?.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
