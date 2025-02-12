import React, { useState, useEffect } from 'react';
import './LeetCode.css';

const LeetCode = () => {
    const [leetCodeStats, setLeetCodeStats] = useState({
        totalSolved: 0,
        easySolved: 0,
        mediumSolved: 0,
        hardSolved: 0,
        acceptanceRate: 0,
        contributionPoints: 0,
        ranking: 0,
        loading: true,
        error: null
    });

    // Replace with your actual LeetCode username
    const username = 'liveamar';

    useEffect(() => {
        const fetchLeetCodeStats = async () => {
            try {
                const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch LeetCode stats');
                }
                const data = await response.json();
                console.log(data);
                
                setLeetCodeStats(prev => ({
                    ...prev,
                    totalSolved: data.totalSolved || 0,
                    easySolved: data.easySolved || 0,
                    mediumSolved: data.mediumSolved || 0,
                    hardSolved: data.hardSolved || 0,
                    acceptanceRate: data.acceptanceRate || 0,
                    contributionPoints: data.contributionPoints || 0,
                    ranking: data.ranking || 0,
                    loading: false,
                    error: null
                }));

            } catch (error) {
                console.error('Error fetching LeetCode stats:', error);
                setLeetCodeStats(prev => ({
                    ...prev,
                    loading: false,
                    error: 'Failed to load LeetCode stats'
                }));
            }
        };

        fetchLeetCodeStats();
    }, [username]);

    if (leetCodeStats.loading) {
        return (
            <div className="leetcode-container">
                <h2>My LeetCode Journey</h2>
                <div className="loading">Loading LeetCode stats...</div>
            </div>
        );
    }

    if (leetCodeStats.error) {
        return (
            <div className="leetcode-container">
                <h2>My LeetCode Journey</h2>
                <div className="error">{leetCodeStats.error}</div>
            </div>
        );
    }

    return (
        <div className="leetcode-container">
            <h2>My LeetCode Journey</h2>
            <div className="leetcode-stats">
                <div className="stat-card total">
                    <h3>Total Solved</h3>
                    <p>{leetCodeStats.totalSolved}</p>
                </div>
                <div className="stat-card easy">
                    <h3>Easy</h3>
                    <p>{leetCodeStats.easySolved}</p>
                </div>
                <div className="stat-card medium">
                    <h3>Medium</h3>
                    <p>{leetCodeStats.mediumSolved}</p>
                </div>
                <div className="stat-card hard">
                    <h3>Hard</h3>
                    <p>{leetCodeStats.hardSolved}</p>
                </div>
            </div>
            
            <div className="leetcode-additional-stats">
                <div className="stat-card acceptance">
                    <h3>Acceptance Rate</h3>
                    <p>{leetCodeStats.acceptanceRate.toFixed(1)}%</p>
                </div>
                <div className="stat-card points">
                    <h3>Contribution Points</h3>
                    <p>{leetCodeStats.contributionPoints}</p>
                </div>
                <div className="stat-card ranking">
                    <h3>Global Ranking</h3>
                    <p>#{leetCodeStats.ranking.toLocaleString()}</p>
                </div>
            </div>
            
            <div className="recent-submissions">
                <h3>Recent Submissions</h3>
                <p>Coming soon! This feature will show my recent LeetCode submissions.</p>
            </div>
        </div>
    );
};

export default LeetCode; 