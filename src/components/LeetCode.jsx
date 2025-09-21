import { useState, useEffect } from 'react';
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
        recentSubmissions: [],
        loading: true,
        error: null
    });

    const username = 'liveamar';

    useEffect(() => {
        const fetchLeetCodeStats = async () => {
            // First, get the CSRF token
            try {
                const csrfResponse = await fetch('/leetcode-api/graphql/', {
                    method: 'GET',
                    credentials: 'include',
                });

                const csrfToken = csrfResponse.headers.get('x-csrftoken');

                const query = `
                    query getUserProfile($username: String!) {
                        allQuestionsCount {
                            difficulty
                            count
                        }
                        matchedUser(username: $username) {
                            username
                            submitStats: submitStatsGlobal {
                                acSubmissionNum {
                                    difficulty
                                    count
                                    submissions
                                }
                                totalSubmissionNum {
                                    difficulty
                                    count
                                    submissions
                                }
                            }
                            profile {
                                ranking
                                reputation
                                starRating
                            }
                        }
                    }
                `;

                const response = await fetch('/leetcode-api/graphql/', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-csrftoken': csrfToken || '',
                        'Referer': 'https://leetcode.com',
                    },
                    body: JSON.stringify({
                        query,
                        variables: { username }
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const { data } = await response.json();
                
                if (!data || !data.matchedUser) {
                    throw new Error('User not found');
                }

                const submitStats = data.matchedUser.submitStats.acSubmissionNum.reduce((acc, curr) => {
                    acc[curr.difficulty.toLowerCase()] = curr.count;
                    return acc;
                }, {});

                const totalAc = data.matchedUser.submitStats.acSubmissionNum.reduce((sum, curr) => sum + curr.count, 0);
                const totalSubmissions = data.matchedUser.submitStats.totalSubmissionNum.reduce((sum, curr) => sum + curr.count, 0);
                const acceptanceRate = totalSubmissions > 0 ? (totalAc / totalSubmissions) * 100 : 0;

                setLeetCodeStats({
                    totalSolved: totalAc,
                    easySolved: submitStats.easy || 0,
                    mediumSolved: submitStats.medium || 0,
                    hardSolved: submitStats.hard || 0,
                    acceptanceRate,
                    ranking: data.matchedUser.profile.ranking || 0,
                    loading: false,
                    error: null
                });

            } catch (error) {
                console.error('Error fetching LeetCode stats:', error);
                setLeetCodeStats(prev => ({
                    ...prev,
                    loading: false,
                    error: error.message || 'Failed to load LeetCode stats'
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
                <div className="stat-card ranking">
                    <h3>Global Ranking</h3>
                    <p>#{leetCodeStats.ranking.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default LeetCode;