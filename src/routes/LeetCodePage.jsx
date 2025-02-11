import React, { useEffect } from 'react';
import LeetCode from '../components/LeetCode';
import './LeetCodePage.css';

const FloatingEmoji = ({ emoji, delay, duration, left, top }) => {
    return (
        <div 
            className="floating-emoji"
            style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
            }}
        >
            {emoji}
        </div>
    );
};

const LeetCodePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const emojis = [
        // Left side emojis
        { emoji: '🚀', delay: 0, duration: 8, left: 5, top: 8 },
        { emoji: '💻', delay: 2, duration: 6, left: 8, top: 35 },
        { emoji: '💡', delay: 1.5, duration: 7, left: 12, top: 65 },
        { emoji: '✨', delay: 0.5, duration: 8, left: 15, top: 20 },
        
        // Right side emojis
        { emoji: '⭐', delay: 1, duration: 7, left: 85, top: 15 },
        { emoji: '🎯', delay: 3, duration: 9, left: 88, top: 45 },
        { emoji: '🏆', delay: 2, duration: 8, left: 92, top: 25 },
        { emoji: '🔥', delay: 2.5, duration: 6, left: 82, top: 60 },
        
        // Additional emojis for better distribution
        { emoji: '🌟', delay: 1.8, duration: 7, left: 20, top: 50 },
        { emoji: '💪', delay: 3.2, duration: 8, left: 75, top: 30 },
        { emoji: '🎮', delay: 2.7, duration: 6, left: 25, top: 12 },
        { emoji: '🎨', delay: 1.2, duration: 9, left: 70, top: 70 }
    ];

    return (
        <div className="leetcode-page-wrapper">
            <div className="floating-emojis">
                {emojis.map((emoji, index) => (
                    <FloatingEmoji key={index} {...emoji} />
                ))}
            </div>
            <div className="leetcode-page-content">
                <LeetCode />
            </div>
        </div>
    );
};

export default LeetCodePage; 