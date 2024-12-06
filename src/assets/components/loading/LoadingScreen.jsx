import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 1, 100));
      } else {
        setLoading(false);
      }
    }, 15);

    return () => clearTimeout(timer);
  }, [progress]);

  const slideUp = {
    initial: {
      y: 0
    },
    exit: {
      y: '-100vh',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  const opacity = {
    initial: {
      opacity: 1
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  return (
    <motion.div 
      className="loading-screen"
      variants={slideUp}
      initial="initial"
      animate={loading ? "initial" : "exit"}
    >
      <motion.div 
        className="loading-content"
        variants={opacity}
      >
        <div className="loading-text">
          <span className="loading-title">Loading...</span>
          <span className="loading-number">{progress}%</span>
        </div>
        <div className="loading-bar-container">
          <div 
            className="loading-bar" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen; 