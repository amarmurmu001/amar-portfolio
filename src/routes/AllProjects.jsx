import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './AllProjects.css';
import { fetchProjects, getStrapiImageUrl } from '../utils/strapiService';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      if (!data || !Array.isArray(data)) {
        setProjects([]);
        return;
      }
      setProjects(data);
    };

    getProjects();
  }, []);

  return (
    <div className="projects-page">
      <nav className="projects-nav">
        <Link to="/" className="back-link">
          <FiArrowLeft /> Back
        </Link>
        <h1>All Projects</h1>
        <div className="nav-spacer"></div>
      </nav>

      <div className="projects-container">
        <div className="projects-grid">
          {projects?.map((project, index) => (
            <motion.article 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
            >
              <div className="project-image">
                {project?.image?.url && (
                  <img
                    src={getStrapiImageUrl(project.image.url)}
                    alt={project.title}
                    loading="lazy"
                  />
                )}
                <div className="project-overlay">
                  <div className="project-content">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="view-project-btn"
                      >
                        View Project <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects; 