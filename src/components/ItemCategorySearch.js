// components/ItemCategorySearch.js
import React, { useState, useEffect } from 'react';
import { fetchItemsByCategory } from '../services/LostArkApi.js';

const ItemCategorySearch = () => {
  const [itemsData, setItemsData] = useState([]); // 아이템 목록을 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 메시지

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);

      // 지정된 카테고리 코드(예: 90500)를 사용하여 API 호출
      const data = await fetchItemsByCategory(90500);

      if (data && data.Items) {
        setItemsData(data.Items);
      } else {
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      }
      setLoading(false);
    };

    fetchItems(); // 컴포넌트가 마운트될 때 데이터 가져오기
  }, []);

  return (
    <div>
      <h1>아이템 목록</h1>
      {loading && <p>로딩 중...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {itemsData.map(item => (
          <div key={item.Id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
            <img src={item.Icon} alt={`${item.Name} 아이콘`} style={{ width: '50px', marginRight: '10px' }} />
            <h2>{item.Name} ({item.Grade})</h2>
            <p>이름: {item.Name}</p>
            <p>어제 평균 가격: {item.YDayAvgPrice} 골드</p>
            <p>최근 가격: {item.RecentPrice} 골드</p>
            <p>최저 가격: {item.CurrentMinPrice} 골드</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCategorySearch;
