import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div className="app">
      <h1>Product Management</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default App;

