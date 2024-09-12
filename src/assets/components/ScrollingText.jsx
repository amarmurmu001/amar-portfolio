import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './ScrollingText.css';

const ScrollingText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const textWidth = text.offsetWidth;

    gsap.set(text, { xPercent: 0 });

    gsap.to(text, {
      duration: 20,
      xPercent: -50,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  const items = ["Web Designer", "UI/UX Designer", "Frontend Developer", "Graphic Designer"];

  return (
    <div className="scrolling-text-container" ref={containerRef}>
      <div className="scrolling-text" ref={textRef}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <span className="text-item">{item}</span>
            {index !== items.length - 1 && <span className="dot">•</span>}
          </React.Fragment>
        ))}
        {items.map((item, index) => (
          <React.Fragment key={index + items.length}>
            <span className="text-item">{item}</span>
            {index !== items.length - 1 && <span className="dot">•</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;