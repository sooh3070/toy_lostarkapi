// pages/EfficiencyPage.js
import React, { useState, useEffect } from 'react';
import EfficiencyTable from '../components/EfficiencyTable';
import '../styles/EfficiencyPage.css';
import Header from '../components/Header';

const EfficiencyPage = () => {
  // 초기 테이블 데이터 배열을 정의합니다.
  const initialTables = [
    {
      title: '4T 고고학(만생기 기준)',
      items: [
        { name: '고대 유물', count: 10, pricePerHundred: 1000, totalGold: 100 },
        { name: '진귀한 유물', count: 5, pricePerHundred: 2000, totalGold: 150 },
        { name: '희귀한 유물', count: 7, pricePerHundred: 1500, totalGold: 120 }
      ],
      timeWithLeap: '30',
      totalGoldWithLeap: '500',
      timeWithoutLeap: '40',
      totalGoldWithoutLeap: '600'
    },
    {
      title: '4T 벌목(만생기 기준)',
      items: [
        { name: '목재', count: 8, pricePerHundred: 1200, totalGold: 90 },
        { name: '튼튼한 목재', count: 6, pricePerHundred: 1800, totalGold: 130 },
        { name: '부드러운 목재', count: 4, pricePerHundred: 1700, totalGold: 85 }
      ],
      timeWithLeap: '25',
      totalGoldWithLeap: '450',
      timeWithoutLeap: '35',
      totalGoldWithoutLeap: '550'
    },
    {
      title: '4T 채광(만생기 기준)',
      items: [
        { name: '철광석', count: 10, pricePerHundred: 1000, totalGold: 100 },
        { name: '묵직한 철광석', count: 5, pricePerHundred: 2000, totalGold: 150 },
        { name: '단단한 철광석', count: 7, pricePerHundred: 1500, totalGold: 120 }
      ],
      timeWithLeap: '40',
      totalGoldWithLeap: '900',
      timeWithoutLeap: '50',
      totalGoldWithoutLeap: '1000'
    }
  ];

  const [tables, setTables] = useState(initialTables);

  const loadMoreTables = () => {
    setTables((prevTables) => [
      ...prevTables,
      {
        title: `New Table ${prevTables.length + 1}`,
        items: [
          { name: 'New Item', count: 0, pricePerHundred: 0, totalGold: 0 }
        ],
        timeWithLeap: '0',
        totalGoldWithLeap: '0',
        timeWithoutLeap: '0',
        totalGoldWithoutLeap: '0'
      }
    ]);
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
      <Header />
      <h1>생활 효율 계산기</h1>
      {tables.map((table, index) => (
        <EfficiencyTable
          key={index}
          title={table.title}
          items={table.items}
          timeWithLeap={table.timeWithLeap}
          totalGoldWithLeap={table.totalGoldWithLeap}
          timeWithoutLeap={table.timeWithoutLeap}
          totalGoldWithoutLeap={table.totalGoldWithoutLeap}
        />
      ))}
    </div>
  );
};

export default EfficiencyPage;
