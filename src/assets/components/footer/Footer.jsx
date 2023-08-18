import React from "react";
import './Footer.css'
import {FaGithub,FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <a href="/">
            <h1>amar.</h1>
          </a>
        </div>
        <div className="right">
            <FaGithub size={30} />
            <FaInstagram size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
