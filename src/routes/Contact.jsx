import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiTwitter } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const emailRef = useRef(null);
  const email = "itsofficialamar@gmail.com";

  const handleEmailClick = () => {
    navigator.clipboard.writeText(email);
    const tooltip = document.createElement('div');
    tooltip.className = 'copied-tooltip';
    tooltip.textContent = 'Email Copied!';
    emailRef.current.appendChild(tooltip);
    
    setTimeout(() => {
      tooltip.remove();
    }, 2000);
  };

  return (
    <motion.div 
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="contact-content">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>
        
        <motion.p 
          className="contact-description"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a project in mind? Let's bring your ideas to life. Feel free to reach out!
        </motion.p>

        <motion.div 
          className="contact-email"
          ref={emailRef}
          onClick={handleEmailClick}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -5 }}
        >
          <FiMail className="email-icon" />
          <span className="email-text">{email}</span>
          <span className="email-hint">Click to copy</span>
        </motion.div>

        <motion.div 
          className="social-links"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="https://github.com/amarmurmu001" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FiGithub />
            <span>GitHub</span>
          </a>
          <a 
            href="https://twitter.com/amarmurmu001" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FiTwitter />
            <span>Twitter</span>
          </a>
        </motion.div>
      </div>

      <div className="contact-background">
        <div className="gradient-circle"></div>
        <div className="dots-pattern"></div>
      </div>
    </motion.div>
  );
};

export default Contact;