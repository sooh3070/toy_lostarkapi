// pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home">
      <h1>생활 효율 계산기</h1>
      <Link to="/efficiency">Go to Efficiency Calculator</Link>
    </div>
  );
};

export default HomePage;
