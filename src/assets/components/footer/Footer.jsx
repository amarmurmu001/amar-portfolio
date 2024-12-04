import React, { useEffect, useRef } from "react";
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/amarmurmu001"
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/amarmurmu001"
    }
  ];

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-container">
        <div className="footer-content">
          <motion.div 
            className="footer-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-brand">
              <h3 className="footer-name">Amar Murmu</h3>
              <p className="footer-tagline">Full Stack Developer</p>
            </div>
            <p className="footer-copyright">
              &copy; {currentYear} All rights reserved
            </p>
          </motion.div>

          <motion.div 
            className="footer-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.icon}
                  <span className="tooltip">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <motion.p 
          className="footer-quote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Crafting digital experiences with passion
        </motion.p>
      </div>

      <div className="footer-background">
        <div className="footer-gradient"></div>
        <div className="footer-dots"></div>
      </div>
    </footer>
  );
};

export default Footer;
