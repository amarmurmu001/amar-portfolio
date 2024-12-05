import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import scriptImg from '../assets/img/script.png';
import alumniImg from '../assets/img/alumni.png';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ScriptGenius",
      description: "An AI-powered script generation tool that helps content creators and writers develop engaging narratives. Features include dynamic script formatting, real-time collaboration, and customizable templates for various content types.",
      image: alumniImg,
      link: "https://script-generator-iota.vercel.app/"
    },
    {
      id: 2,
      title: "Alumni Association",
      description: "A comprehensive platform for college alumni to connect, network, and stay updated with their alma mater. Features include event management, member directory, donation portal, and interactive discussion forums.",
      image: scriptImg,
      link: "https://alumni-frontend-five.vercel.app/"
    }
  ];

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
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
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
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
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
        ))}
      </div>
    </div>
  );
};

export default Projects;
