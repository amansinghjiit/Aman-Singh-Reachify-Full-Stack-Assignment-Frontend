import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);
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
  }, []);

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
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ProductList;
