// pages/EfficiencyPage.js
import React, { useState, useEffect } from 'react';
import EfficiencyTable from '../components/EfficiencyTable';
import '../styles/EfficiencyPage.css';

const EfficiencyPage = () => {
  const [tables, setTables] = useState([1, 2, 3]);

  const loadMoreTables = () => {
    setTables((prevTables) => [...prevTables, prevTables.length + 1]);
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    loadMoreTables();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="efficiency-page">
      <h1>생활 효율 계산기</h1>
      {tables.map((id) => (
        <EfficiencyTable key={id} />
      ))}
    </div>
  );
};

export default EfficiencyPage;
