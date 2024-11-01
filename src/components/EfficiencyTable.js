// components/EfficiencyTable.js
import React from 'react';
import '../styles/EfficiencyTable.css';

const EfficiencyTable = ({
  title, // 테이블의 제목
  itemCount, // 아이템의 개수
  pricePerHundred, // 100개 기준 가격
  totalGold, // 회득 골드
  timeWithLeap, // 도약 시 예상 소요 시간
  totalGoldWithLeap, // 도약 시 총 골드
  timeWithoutLeap, // 도약 없이 예상 소요 시간
  totalGoldWithoutLeap // 도약 없이 총 골드
}) => {
  return (
    <div className="efficiency-table">
      {/* 테이블의 제목을 표시 */}
      <div className="table-header">{title}</div>
      
      {/* 회득 개수, 시세, 회득 골드 등 기본 정보를 표시 */}
      <div className="table-row">
        <div className="cell">회득개수</div>
        <div className="cell">시세(100개 기준)</div>
        <div className="cell">회득골드</div>
      </div>
      
      {/* 실제 데이터로 표를 채웁니다 */}
      <div className="table-row">
        <div className="cell">고대 유물: {itemCount}개</div>
        <div className="cell">{pricePerHundred}골드</div>
        <div className="cell">{totalGold}골드</div>
      </div>
      
      {/* 테이블 하단에 도약 유무에 따른 예상 소요 시간과 골드 합계를 표시 */}
      <div className="table-footer">
        도약 O 예상 소요 시간: {timeWithLeap}분 합계: {totalGoldWithLeap}골드 | 도약 X 예상 소요 시간: {timeWithoutLeap}분 합계: {totalGoldWithoutLeap}골드
      </div>
    </div>
  );
};

export default EfficiencyTable;
