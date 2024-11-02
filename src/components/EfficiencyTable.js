// components/EfficiencyTable.js
import React from 'react';
import '../styles/EfficiencyTable.css';

const EfficiencyTable = ({
  title,
  items,
  timeWithLeap,
  totalGoldWithLeap,
  timeWithoutLeap,
  totalGoldWithoutLeap
}) => {
  return (
    <div className="efficiency-table">
      <div className="table-header">{title}</div>
      <div className="table-row">
        <div className="cell">아이템</div>
        <div className="cell">획득개수</div>
        <div className="cell">시세(100개 기준)</div>
        <div className="cell">획득골드</div>
      </div>

      {items.map((item, index) => (
        <div key={index} className="table-row">
          <div className="cell">{item.name}</div>
          <div className="cell">{item.count}개</div>
          <div className="cell">{item.pricePerHundred}골드</div>
          <div className="cell">{item.totalGold}골드</div>
        </div>
      ))}

      <div className="table-footer">
        <div className="left-footer">
          도약 O 소요 시간: <span className="highlight-time">{timeWithLeap}분</span> 획득골드: <span className="highlight-gold">{totalGoldWithLeap}골드</span>
        </div>
        <div className="right-footer">
          도약 X 소요 시간: <span className="highlight-time">{timeWithoutLeap}분</span> 획득골드: <span className="highlight-gold">{totalGoldWithoutLeap}골드</span>
        </div>
      </div>
    </div>
  );
};

export default EfficiencyTable;
