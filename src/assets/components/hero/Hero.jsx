import {useEffect} from "react";
import gsap from "gsap";

import "./Hero.css";
import amarbg from "../../img/amar-bg.png";

const Hero = () => {
  useEffect(() => {
    gsap.from(".character", { duration: 1, y: '100%', ease: 'expo.out',scale:0.6 });

    gsap.to(".spread1", { duration: 1, y: -15, ease: 'power2.out' }); 
    gsap.to(".spread2", { duration: 1, y: 15, ease: 'power2.out' });
  }, []);
  return (
    <div className="hero">
      <div className="container">
        <div className="text-container">
          {/* <h1>amar </h1>  */}
          <h1 className="spread1">amar </h1> 
          <h1 className="spread2">amar </h1> 
          
        </div>
        <div className="character">
          <img src={amarbg} alt="Amar Murmu"  />
        </div>
      </div>
    </div>
  );
};

export default Hero;
