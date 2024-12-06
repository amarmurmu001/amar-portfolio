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

  const menuItems = [
    { id: 'home', text: 'Home' },
    { id: 'projects', text: 'Projects' },
    { id: 'about', text: 'About' },
    { id: 'contact', text: 'Contact' }
  ];

  const navMenu = (
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      {menuItems.map((item, index) => (
        <li 
          key={item.id} 
          onClick={() => scrollToSection(item.id)}
          style={{ '--i': index + 1 }}
        >
          <a 
            href={`#${item.id}`}
            data-text={item.text}
          >
            {item.text}
          </a>
        </li>
      ))}
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
            <FaTimes size={20} style={{ color: "var(--text-color)" }} />
          ) : (
            <FaBars size={20} style={{ color: "var(--text-color)" }} />
          )}
        </div>
      </div>
      {isMobile && navMenu}
    </nav>
  );
};

export default Nav;
