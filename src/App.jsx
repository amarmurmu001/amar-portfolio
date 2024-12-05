import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  );
}

export default App;