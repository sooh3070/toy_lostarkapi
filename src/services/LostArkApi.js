// services/LostArkApi.js
import axios from 'axios';

const API_BASE_URL = 'https://developer-lostark.game.onstove.com';
const JWT_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDA1NjY1NTIifQ.JdyWXbgAOQZMnIWXSXrB-ZEmqgHILQVzpr_VblnPA-aS7ORwd_UJMJ6v-9CXDKeQ14DtUC864OZ9IXL3jYJz0W8exzxwkKj747A704ce-3CvHWTnueWgn8lBfoV49EDYLTT-D6Ud5JXiPIL0iqx-hh4bn_TImqHaLDs4ZD3aFGu5vEcQoVk4RrevkhB8mbLPjjPQDc0tAXchcBLkBfxT3fjyhzYWCUPvZ6jsgplin_3H-hcdc2JKmjqP_JsTRU050PlS4jbQwC5Xq7Wz3zYKzPtHjJtYNM91eApE21-spsQGRD8pILoFKA9h3vjbb9bo83mSjrwnNPEImccGMYVFHg'; // 실제 JWT 토큰을 입력하세요

// 아이템 ID로 Lost Ark API에서 시장 아이템 정보를 가져오는 함수
export const fetchItemById = async (itemId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/markets/items/${itemId}`, {
      headers: {
        Authorization: `bearer ${JWT_TOKEN}`,
        'Accept': 'application/json'
      }
    });
    console.log(`Response for item ID ${itemId}:`, response.data); // API로 받은 JSON 데이터를 콘솔에 출력
    return response.data;
  } catch (error) {
    console.error('아이템 정보를 가져오는 중 오류 발생:', error);
    return null;
  }
};
// 카테고리 코드로 정보를 가져오는 함수
export const fetchItemsByCategory = async (categoryCode) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/markets/items`,
        {
          Sort: "GRADE",
          CategoryCode: categoryCode,
          PageNo: 1,
          SortCondition: "ASC"
        },
        {
          headers: {
            Authorization: `bearer ${JWT_TOKEN}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );
      console.log(`Fetched items for category ${categoryCode}:`, response.data); // 콘솔에 데이터 출력
      return response.data;
    } catch (error) {
      console.error('아이템 목록을 가져오는 중 오류 발생:', error);
      return null;
    }
  };
