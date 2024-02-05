import React from "react";
import "./Hero.css";
import amarbg from "../../img/amar-bg.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="text-container">
          <h1>amar</h1>
          <h1>amar</h1>
          <h1>amar</h1>
        </div>
        <div className="character">
          <img src={amarbg} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
