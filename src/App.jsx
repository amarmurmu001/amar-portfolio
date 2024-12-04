import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllProjects from './routes/AllProjects';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Routes>
      <Route path="/all-projects" element={<AllProjects />} />
      <Route path="/" element={<Portfolio />} />
    </Routes>
  );
}

export default App;