import { Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import SEO from './components/SEO';
import { Analytics } from '@vercel/analytics/react';

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
      </Routes>
      <Analytics />
    </ThemeProvider>
  );
}

export default App;