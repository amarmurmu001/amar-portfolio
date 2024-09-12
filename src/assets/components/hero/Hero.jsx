import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";
import amarbg from "../../img/amar-bg.png";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.from(".character", { 
      duration: 2, 
      y: '100%', 
      ease: 'expo.out',
      scale: 0.6, 
    });

    gsap.to(".spread1", { 
      duration: 1, 
      y: -15, 
      ease: 'power2.out' 
    });

    gsap.to(".spread2", { 
      duration: 1, 
      y: 15, 
      ease: 'power2.out' 
    });

    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      gsap.to(".character", {
        duration: 0.5,
        x: mouseX * 20 - 10,
        y: mouseY * 10 - 5, // Reduced vertical movement
      });
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="hero">
      <div className="container" ref={containerRef}>
        <div className="text-container" aria-label="Amar Murmu">
          <h1 className="spread1">amar</h1>
          <h1 className="spread2">amar</h1>
        </div>
        <div className="character">
          <img src={amarbg} alt="Amar Murmu" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Hero;