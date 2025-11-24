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
      role: "Full Stack Developer",
      company: "Six",
      date: "Aug 2025 – Oct 2025",
      description: "Full Stack Developer role focusing on React.js, Node.js and a range of modern web technologies.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Docker", "AWS", "GraphQL"]
    },
    {
      role: "React Native Developer",
      company: "Messoka",
      date: "Aug 2024 – Jan 2025",
      description: "Developed mobile applications using React Native, delivering cross‑platform experiences.",
      technologies: ["React Native", "JavaScript", "Expo", "Firebase", "Redux", "TypeScript"]
    },
    // Add more experiences as needed
  ];

  return (
    <div className="experience-container">
      <h2 className="section-title">Experience</h2>
      
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
