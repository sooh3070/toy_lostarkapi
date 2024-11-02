// pages/ItemCategorySearchPage.js
import React from 'react';
import ItemCategorySearch from '../components/ItemCategorySearch';

const ItemCategorySearchPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>카테고리별 아이템 목록</h1>
      <ItemCategorySearch />
    </div>
  );
};

export default ItemCategorySearchPage;
