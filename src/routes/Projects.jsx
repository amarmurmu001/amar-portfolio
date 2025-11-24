import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import alumniImg from '../assets/img/script.png';
import scriptImg from '../assets/img/alumni.png';
import votingImg from '../assets/img/voting-dapp.jpg';

import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ScriptGenius",
      description: "An AI-powered script generation tool that helps content creators and writers develop engaging narratives. Features include dynamic script formatting, real-time collaboration, and customizable templates for various content types.",
      image: scriptImg,
      link: "https://script-generator-iota.vercel.app/",
      github: "https://github.com/amarmurmu001/scriptgenius"
    },
    {
      id: 2,
      title: "Alumni Association",
      description: "A comprehensive platform for college alumni to connect, network, and stay updated with their alma mater. Features include event management, member directory, donation portal, and interactive discussion forums.",
      image: alumniImg,
      link: "https://alumni-frontend-five.vercel.app/",
      github: "https://github.com/amarmurmu001/alumni-association"
    },{
      id: 3,
      title: "Solana Voting Dapp",
      description: "VotingDApp uses smart contracts deployed on the Solana blockchain to manage the entire voting process. Each proposal is stored as a unique account on the blockchain, containing all relevant information such as the proposal details, voting period, and current results.",
      image: votingImg,
      link: "https://voting-dapp-frontend-vert.vercel.app/",
      github: "https://github.com/amarmurmu001/voting-dapp"
    }
  ];

  return (
    <div className="projects-section">
      <h1 
        className="section-title"
       
      >
        Featured Projects
      </h1>
      
      <motion.div 
        className="projects-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                    >
                      <FiExternalLink />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                    >
                      <FiGithub />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
