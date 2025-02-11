import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import LeetCodePage from './routes/LeetCodePage';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import SEO from './components/SEO';

function App() {
  return (
    <ThemeProvider>
      <SEO />
      <ThemeToggle />
      <Routes>
        <Route path="/" element={
          <>
            <SEO 
              title="Amar Murmu | Web Designer & Developer"
              description="Web designer from India with 3 years of experience. Specializing in Figma, creating visually stunning and user-friendly websites."
            />
            <Portfolio />
          </>
        } />
        <Route path="/leetcode" element={
          <>
            <SEO 
              title="LeetCode Stats | Amar Murmu"
              description="Check out my LeetCode problem-solving journey and statistics. View my coding progress and solutions."
              keywords="LeetCode, coding problems, algorithms, data structures, programming"
            />
            <LeetCodePage />
          </>
        } />
      </Routes>
    </ThemeProvider>
  );
}

export default App;