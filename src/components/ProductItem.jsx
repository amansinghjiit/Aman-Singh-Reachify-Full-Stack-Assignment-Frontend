import React from 'react';

const ProductItem = ({ product, handleDelete }) => {
  return (
    <div className="product-item">
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>Rs {product.price}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <button onClick={() => handleDelete(product.id)}>Delete</button>
    </div>
  );
};

export default ProductItem;
