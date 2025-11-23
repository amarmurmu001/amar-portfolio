import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Experience.css';

const ExperienceCard = ({ experience, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      className={`experience-card ${index % 2 === 0 ? 'left' : 'right'}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="experience-content">
        <div className="experience-date">{experience.date}</div>
        <h3 className="experience-role">{experience.role}</h3>
        <h4 className="experience-company">{experience.company}</h4>
        <p className="experience-description">{experience.description}</p>
        <div className="experience-tech">
          {experience.technologies.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
      <div className="timeline-dot"></div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      date: "2023 - Present",
      description: "Developing custom websites and web applications for diverse clients. Specializing in React, Node.js, and modern UI/UX design.",
      technologies: ["React", "Node.js", "Figma", "Tailwind CSS"]
    },
    {
      role: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      date: "2022 - 2023",
      description: "Collaborated with the design team to implement responsive user interfaces. Optimized website performance and improved accessibility.",
      technologies: ["HTML", "CSS", "JavaScript", "React"]
    },
    // Add more experiences as needed
  ];

  return (
    <div className="experience-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <div className="timeline">
        <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
