import React from 'react';
import Nav from '../assets/components/navbar/Nav';
import Hero from '../assets/components/hero/Hero';
import ScrollingText from '../assets/components/ScrollingText';
import About from '../assets/components/about/About';
import Projects from '../routes/Projects';
import Contact from '../routes/Contact';
import Footer from '../assets/components/footer/Footer';
import './Portfolio.css';
import { getStrapiImageUrl } from '../utils/strapiService';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="content-wrapper">
        <Nav />
      </div>
      
      <section id="home">
        <Hero />
      </section>
      
      <ScrollingText />
      
      <div className="content-wrapper">
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </div>

    </div>
  );
};

export default Portfolio;