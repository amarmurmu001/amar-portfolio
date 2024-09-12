import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Hero.css";
import bodyImage from "../../img/body.png"; // Import only the body image

const GlitchText = ({ text, className = '' }) => {
  const [glitchText, setGlitchText] = useState(text);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChars = 'アマルＡＭＲ';
      const newText = text
        .split('')
        .map((char, index) => 
          Math.random() > 0.8 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
        )
        .join('');
      setGlitchText(newText);
    }, 100);

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <div 
      className={`glitch-text ${className}`}
      style={{
        textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
      }}
    >
      {glitchText}
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const container = containerRef.current;

    gsap.from(".body-image", { 
      duration: 2, 
      scale: 0.8,
      ease: 'expo.out',
      opacity: 0,
    });

    gsap.from(".text-container", {
      duration: 1.5,
      opacity: 0,
      x: -50,
      ease: 'power3.out',
      stagger: 0.2
    });

    gsap.from(".background-name", {
      duration: 2,
      opacity: 0,
      scale: 1.2,
      ease: 'power3.out',
    });

    const updateDate = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-US', { 
        day: '2-digit', 
        month: 'short',
        year: 'numeric'
      });
      setCurrentDate(formattedDate);
    };

    updateDate();
    const intervalId = setInterval(updateDate, 1000);

    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      gsap.to(".body-image", {
        duration: 0.5,
        x: mouseX * 20 - 10,
        y: mouseY * 20 - 10,
      });
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="hero">
      <div className="container" ref={containerRef}>
        <div className="background-name">
          <GlitchText text="amar" className="background-glitch" />
        </div>
        <div className="text-container">
          <h1 className="name">Amar Murmu</h1>
          <p className="title">Web Designer & Developer</p>
          <p className="date">{currentDate}</p>
        </div>
        <div className="body-image">
          <img src={bodyImage} alt="Amar Murmu" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Hero;