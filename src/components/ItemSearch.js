// components/ItemSearch.js
import React, { useState, useEffect } from 'react';
import { fetchItemById } from '../services/LostArkApi.js';

// 검색할 아이템들의 ID와 이름을 리스트로 정의
const itemIds = [
  { id: 6882701, name: "고대 유물" },
  { id: 6882704, name: "희귀한 유물" },
  { id: 6885705, name: "진귀한 유물" }
];

const ItemSearch = () => {
  const [itemsData, setItemsData] = useState([]); // 아이템 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태를 저장
  const [error, setError] = useState(null); // 에러 메시지를 저장할 상태

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);

      try {
        const results = await Promise.all(
          itemIds.map(async ({ id, name }) => {
            // 각 아이템 ID로 데이터를 가져오고, name을 함께 저장
            const data = await fetchItemById(id);
            console.log("Fetched data for item:", name, data); // 데이터 확인을 위한 콘솔 로그

            // 배열의 첫 번째 요소를 가져오도록 수정
            return data && data[0] ? { id, name, ...data[0] } : null;
          })
        );
        setItemsData(results.filter(item => item !== null)); // 유효한 데이터만 상태에 저장
      } catch (err) {
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchItems(); // 컴포넌트가 마운트될 때 데이터를 가져옴
  }, []);

  return (
    <div>
      <h1>아이템 목록</h1>
      {loading && <p>로딩 중...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {itemsData.map(item => (
          <div key={item.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
            <h2>{item.name} ({item.Grade || '등급 없음'})</h2>
            <p>이름: {item.Name || '이름 없음'}</p>
            <p>
              어제 평균 가격:{' '}
              {item.Stats && item.Stats[0] ? `${item.Stats[0].AvgPrice} 골드` : 'N/A'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemSearch;
