import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching products from the backend API
  useEffect(() => {
    axios.get('https://aman-singh-reachify-full-stack.onrender.com/api/products/')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching products');
        setLoading(false);
      });
  }, []);

  // Handle delete action
  const handleDelete = (id) => {
    axios.delete(`https://aman-singh-reachify-full-stack.onrender.com/api/products/${id}/`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(err => {
        setError('Error deleting product');
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ProductList;
