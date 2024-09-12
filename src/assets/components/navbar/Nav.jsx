import React, { useState, useEffect } from "react";
import "./Nav.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [click, setClick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleClick = () => setClick(!click);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setClick(false); // Close mobile menu after clicking
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    scrollToSection('home');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navMenu = (
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li onClick={() => scrollToSection('home')}>
        <a href="#home">Home</a>
      </li>
      <li onClick={() => scrollToSection('projects')}>
        <a href="#projects">Projects</a>
      </li>
      <li onClick={() => scrollToSection('about')}>
        <a href="#about">About</a>
      </li>
      <li onClick={() => scrollToSection('contact')}>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <a href="#home" onClick={handleLogoClick} className="logo">
          <h1>amar.</h1>
        </a>
        {!isMobile && navMenu}
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#222222" }} />
          ) : (
            <FaBars size={20} style={{ color: "#222222" }} />
          )}
        </div>
      </div>
      {isMobile && navMenu}
    </nav>
  );
};

export default Nav;
