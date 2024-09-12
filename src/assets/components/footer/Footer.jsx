import React from "react";
import './Footer.css'
import {FaGithub, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <p>&copy; {currentYear} Amar Murmu. All rights reserved.</p>
        </div>
        <div className="right">
            <a href="https://github.com/amarmurmu001" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://twitter.com/amarmurmu001" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
