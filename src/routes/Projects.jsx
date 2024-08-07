import React from 'react';
import './Projects.css';

import stakeimg from "../assets/img/stake-mines.png";

const projects = [
  {
    title: "Mines Game",
    description: "Mines game inspired by stake.",
    image: stakeimg,
    link: "https://mines-game-lovat.vercel.app/", // Add link here
  },
  {
    title: "Mines Game",
    description: "Mines game inspired by stake.",
    image: stakeimg,
    link: "https://example.com/mines-game-2", // Add link here
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className='slogan'>Projects</div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target='_blank' className="project-card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
