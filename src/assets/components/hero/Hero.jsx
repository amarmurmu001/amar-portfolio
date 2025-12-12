import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Reduced particle count for better performance
    const particlesContainer = particlesRef.current;
    const numParticles = 20; // Reduced from 50

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.setProperty("--x", `${Math.random() * 100}%`);
      particle.style.setProperty("--y", `${Math.random() * 100}%`);
      particle.style.setProperty("--duration", `${3 + Math.random() * 2}s`);
      particle.style.setProperty("--delay", `${Math.random()}s`);
      particlesContainer.appendChild(particle);
    }

    // Optimized GSAP animation
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-title span", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
    }).from(
      ".hero-subtitle",
      {
        y: 20,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.3"
    );

    return () => {
      while (particlesContainer.firstChild) {
        particlesContainer.removeChild(particlesContainer.firstChild);
      }
    };
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="particles-container" ref={particlesRef}></div>
        <div className="gradient-overlay"></div>
        <div className="grid-overlay"></div>
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="status-badge">
          <span className="status-dot"></span>
          Open to Work
        </div>
        <h1 className="hero-title">
          {["Hi,", "I'm", "Amar"].map((word, index) => (
            <span key={index} className="title-word">
              {word}{" "}
            </span>
          ))}
        </h1>
        <p className="hero-subtitle">
          22, Freelancer, Full stack developer & Content creator.
        </p>

        <div className="hero-cta">
          <motion.a
            href="#projects"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </div>
      </motion.div>

      <div className="spline-bottom">
        <spline-viewer url="https://prod.spline.design/4K3OvxMCmeizfT4g/scene.splinecode"></spline-viewer>
      </div>
    </div>
  );
};

export default Hero;
