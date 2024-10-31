// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EfficiencyPage from './pages/EfficiencyPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/efficiency" element={<EfficiencyPage />} />
    </Routes>
  );
};

export default App;
