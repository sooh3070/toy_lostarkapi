// components/EfficiencyTable.js
import React from 'react';
import '../styles/EfficiencyTable.css';

const EfficiencyTable = ({
  title,
  itemCount,
  pricePerHundred,
  totalGold,
  timeWithLeap,
  totalGoldWithLeap,
  timeWithoutLeap,
  totalGoldWithoutLeap  
}) => {
  return (
    <div className="efficiency-table">
      <div className="table-header">{title}</div>
      <div className="table-row">
        <div className="cell">회득개수</div>
        <div className="cell">시세(100개 기준)</div>
        <div className="cell">회득골드</div>
      </div>
      <div className="table-row">
        <div className="cell">고대 유물: {itemCount}개</div>
        <div className="cell">{pricePerHundred}골드</div>
        <div className="cell">{totalGold}골드</div>
      </div>
      <div className="table-footer">
        도약 O 예상 소요 시간: {timeWithLeap}분 합계: {totalGoldWithLeap}골드 | 도약 X 예상 소요 시간: {timeWithoutLeap}분 합계: {totalGoldWithoutLeap}골드
      </div>
    </div>
  );
};

export default EfficiencyTable;

/*
// App.js 또는 다른 부모 컴포넌트
import React from 'react';
import EfficiencyTable from './components/EfficiencyTable';

const App = () => {
  return (
    <EfficiencyTable
      title="4T 고고학(만생기 기준)"
      itemCount="10"
      pricePerHundred="1000"
      totalGold="100"
      timeWithLeap="30"
      totalGoldWithLeap="500"
      timeWithoutLeap="40"
      totalGoldWithoutLeap="600"
    />
  );
};

export default App;

 */