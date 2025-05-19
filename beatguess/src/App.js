import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DuelPage from './pages/DuelPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/duel' element={<DuelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
