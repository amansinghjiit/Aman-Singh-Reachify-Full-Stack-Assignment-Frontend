import React from 'react';

const ProductItem = ({ product, handleDelete }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <button onClick={() => handleDelete(product.id)}>Delete</button>
    </div>
  );
};

export default ProductItem;
