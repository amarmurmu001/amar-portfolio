import React from 'react';
import './Projects.css';
import stakeimg from "../assets/img/stake-mines.png";
import alumniimg from "../assets/img/alumni.jpg";

const projects = [
  {
    title: "Alumni Association",
    description: "Alumni Association Platform Stay connected, grow your network, and support your alma mater",
    image: alumniimg,
    link: "https://alumni-frontend-five.vercel.app/", 
  },
  {
    title: "Mines Game",
    description: "Mines game inspired by stake.",
    image: stakeimg,
    link: "https://example.com/mines-game-2", 
  },
];

const Projects = () => {
  return (
    <>
      <div className='slogan'>Projects</div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target='_blank' rel="noopener noreferrer" className="project-card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </>
  );
};

export default Projects;
