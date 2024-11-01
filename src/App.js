// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EfficiencyPage from './pages/EfficiencyPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<EfficiencyPage />} />
    </Routes>
  );
};

export default App;
