import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smoother loading with easing
    const duration = 2000; // 2 seconds total
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth progress
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const newProgress = Math.floor(easeOutQuart * 100);
      
      setProgress(newProgress);
      
      if (percentage < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        // Trigger exit animation after a brief delay
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    };
    
    requestAnimationFrame(updateProgress);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div 
          key="loading-screen"
          className="loading-screen"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ 
            duration: 0.8, 
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
        >
          <div className="loading-content">
            <motion.div 
              className="loading-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="loading-title">Loading</span>
              <motion.span 
                className="loading-number"
                key={progress}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {progress}%
              </motion.span>
            </motion.div>
            <motion.div 
              className="loading-bar-container"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="loading-bar" 
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ 
                  duration: 0.3,
                  ease: 'easeOut'
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 