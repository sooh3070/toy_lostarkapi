// pages/EfficiencyPage.js
import React, { useState, useEffect } from 'react';
import EfficiencyTable from '../components/EfficiencyTable';
import '../styles/EfficiencyPage.css';

const EfficiencyPage = () => {
  // 초기 테이블 데이터 배열을 정의합니다.
  // 이 배열은 처음 렌더링 시 사용할 기본 테이블 데이터를 포함합니다.
  const initialTables = [
    {
      title: '4T 고고학(만생기 기준)',
      itemCount: '10',
      pricePerHundred: '1000',
      totalGold: '100',
      timeWithLeap: '30',
      totalGoldWithLeap: '500',
      timeWithoutLeap: '40',
      totalGoldWithoutLeap: '600'
    },
    {
      title: '4T 벌목(만생기 기준)',
      itemCount: '20',
      pricePerHundred: '1500',
      totalGold: '200',
      timeWithLeap: '35',
      totalGoldWithLeap: '700',
      timeWithoutLeap: '45',
      totalGoldWithoutLeap: '800'
    },
    {
      title: '4T 채광(만생기 기준)',
      itemCount: '30',
      pricePerHundred: '2000',
      totalGold: '300',
      timeWithLeap: '40',
      totalGoldWithLeap: '900',
      timeWithoutLeap: '50',
      totalGoldWithoutLeap: '1000'
    }
  ];

  // tables 상태는 렌더링할 테이블 데이터를 저장합니다.
  const [tables, setTables] = useState(initialTables);

  // 스크롤이 끝에 도달하면 새로운 테이블 데이터를 추가합니다.
  const loadMoreTables = () => {
    setTables((prevTables) => [
      ...prevTables,
      {
        title: `New Table ${prevTables.length + 1}`, // 새 테이블 제목을 자동으로 생성
        itemCount: '0', // 초기 값
        pricePerHundred: '0', // 초기 값
        totalGold: '0', // 초기 값
        timeWithLeap: '0', // 초기 값
        totalGoldWithLeap: '0', // 초기 값
        timeWithoutLeap: '0', // 초기 값
        totalGoldWithoutLeap: '0' // 초기 값
      }
    ]);
  };

  // 스크롤 이벤트 핸들러: 페이지의 맨 끝에 도달했는지 확인하고, 끝에 도달하면 새로운 테이블을 로드합니다.
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    loadMoreTables();
  };

  // 컴포넌트가 처음 마운트될 때 스크롤 이벤트 리스너를 추가하고,
  // 컴포넌트가 언마운트될 때 리스너를 제거합니다.
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="efficiency-page">
      <h1>생활 효율 계산기</h1>
      {/* tables 배열을 순회하면서 각 테이블 데이터를 EfficiencyTable 컴포넌트에 전달 */}
      {tables.map((table, index) => (
        <EfficiencyTable
          key={index} // 각 테이블에 고유한 키를 설정
          title={table.title} // 제목
          itemCount={table.itemCount} // 아이템 개수
          pricePerHundred={table.pricePerHundred} // 100개 기준 가격
          totalGold={table.totalGold} // 총 골드
          timeWithLeap={table.timeWithLeap} // 도약 시 예상 소요 시간
          totalGoldWithLeap={table.totalGoldWithLeap} // 도약 시 총 골드
          timeWithoutLeap={table.timeWithoutLeap} // 도약 없이 예상 소요 시간
          totalGoldWithoutLeap={table.totalGoldWithoutLeap} // 도약 없이 총 골드
        />
      ))}
    </div>
  );
};

export default EfficiencyPage;
