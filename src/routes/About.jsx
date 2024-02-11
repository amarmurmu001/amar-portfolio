import React from 'react';
import './About.css'; // Ensure you have the CSS file named About.css

const About = () => {
  return (
    <div className="about">
      <div className="intro">
        <h1>Hi, I am  <br /><span className="highlight">Amar Murmu</span></h1>
        <p>UI/UX Designer with a passion for designing beautiful and functional user experiences...</p>
        <button className="btn">Hire Me</button>
        {/* Social Media Icons */}
      </div>
      <div className="stats">
        {/* Numbers like "10+ Years Experience" */}
      </div>
      <div className="bio">
        <div className="education">
          {/* Education Details */}
        </div>
        <div className="work-experience">
          {/* Work Experience Details */}
        </div>
      </div>
      <div className="companies-worked">
        {/* Company Logos */}
      </div>
    </div>
  );
};

export default About;
