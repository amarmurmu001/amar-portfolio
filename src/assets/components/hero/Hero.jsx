import React from "react";
import "./Hero.css";
import bg from "../../img/bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="bg-img" alt="bg-img" src={bg} />
      </div>
      <div className="content">
        <h1>hello!</h1>
        <div>
          <Link to='/Projects'><button className="btn-glitch">projects</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
