// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EfficiencyPage from './pages/EfficiencyPage';
import ItemSearchPage from './pages/ItemSearchPage'; // 새로 만든 페이지 import
import ItemCategorySearchPage from './pages/ItemCategorySearchPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<EfficiencyPage />} />
      <Route path="/item-search" element={<ItemSearchPage />} />
      <Route path="/category-items" element={<ItemCategorySearchPage />} />
    </Routes>
  );
};

export default App;
