import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(true);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div className="app">
      <h1>Product Management</h1>
      <ProductForm setProducts={setProducts} />
      <button onClick={toggleProducts}>
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>
      {showProducts && <ProductList />}
    </div>
  );
};

export default App;
