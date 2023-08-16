import React, { useState } from "react";
import "./Nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color,setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY>=100){
      setColor(true)
    }
    else
    setColor(false);
  }
  window.addEventListener('scroll', changeColor);
  return (
    <div className={color? "navbar navbar-bg":"navbar"}>
      <a href="">
        <h1>amar.</h1>
      </a>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          {" "}
          <a href="/">Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href="/About">About</a>{" "}
        </li>
        <li>
          {" "}
          <a href="/Projects">Projects</a>{" "}
        </li>
        <li>
          {" "}
          <a href="/Contact"> Contact</a>{" "}
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#222222" }} />
        ) : (
          <FaBars size={20} style={{ color: "#222222" }} />
        )}
      </div>
    </div>
  );
};

export default Nav;
