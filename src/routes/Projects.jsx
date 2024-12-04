import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      if (!data) {
        console.warn('No project data received');
        setProjects([]);
        return;
      }
      if (!Array.isArray(data)) {
        console.warn('Project data is not an array:', data);
        setProjects([]);
        return;
      }
      // Only take the first 3 projects
      setProjects(data.slice(0, 3));
    };

    getProjects();
  }, []);

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
      
      <div className="projects-grid">
        {projects?.map((project, index) => {
          if (!project) return null;
          
          return (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
            >
              <motion.div 
                className="project-image"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {project?.image?.url && (
                  <img
                    src={getStrapiImageUrl(project.image.url)}
                    alt={project.title}
                    loading="lazy"
                  />
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FiExternalLink />
                        <span>View Project</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="project-content"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        className="view-all-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link to="/all-projects" className="view-all-button">
          View All Projects
        </Link>
      </motion.div>
    </div>
  );
};

export default Projects;
