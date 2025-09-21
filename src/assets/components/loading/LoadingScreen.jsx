import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Faster loading progress
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 5, 100));
      } else {
        setLoading(false);
        clearInterval(timer);
      }
    }, 10);

    // Cleanup
    return () => clearInterval(timer);
  }, [progress]);

  if (!loading) return null;

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="loading-content">
        <div className="loading-text">
          <span className="loading-title">Loading</span>
          <span className="loading-number">{progress}%</span>
        </div>
        <div className="loading-bar-container">
          <div 
            className="loading-bar" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 