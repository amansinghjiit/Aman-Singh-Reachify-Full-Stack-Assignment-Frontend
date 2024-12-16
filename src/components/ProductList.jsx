import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import ProductForm from './ProductForm';

const ProductList = ({ products, setProducts }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://aman-singh-reachify-full-stack.onrender.com/api/products/')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching products');
        setLoading(false);
      });
  }, [setProducts]);

  const handleDelete = (id) => {
    axios.delete(`https://aman-singh-reachify-full-stack.onrender.com/api/products/${id}/`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(() => {
        setError('Error deleting product');
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ProductForm setProducts={setProducts} />
      <div className="product-list">
        {products.map(product => (
          <ProductItem key={product.id} product={product} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
