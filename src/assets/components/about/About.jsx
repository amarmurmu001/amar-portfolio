import React from 'react'
import './About.css'
import amarbg from "../../../assets/img/ChatGPT Image Jul 9, 2025, 04_24_01 PM.png";

const About = () => {
  return (
    <div className="about">
      <div className='headline'>About me</div>
      <div className='slogan'>Exploring the depths of Creativity</div>
      <div className='bio'>
        <div className='profile-img'>
          <img 
            src={amarbg} 
            alt="Amar Murmu" 
            loading="lazy"
            width="300"
            height="300"
          />
        </div>
        <div className='bio-text'>
          <div className='bio-headline'>Hellooo! I'm Amar Murmu..</div>
          <div className='bio-normal'>
            A web designer from India with 3 years of experience.
            Specializing in Figma, I create visually stunning and user-friendly websites. 
            My design philosophy focuses on seamless user experiences. 
            Check out my portfolio for a glimpse of my work, 
            and let's bring your digital visions to life!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
