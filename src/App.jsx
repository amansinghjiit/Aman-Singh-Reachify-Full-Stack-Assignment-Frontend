import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="app">
      <h1>Product Management</h1>
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
};

export default App;
