import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ setProducts }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [brand, setBrand] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure price is a float and quantity is an integer
    const newProduct = {
      name,
      description,
      price: parseFloat(price), // Convert price to float
      quantity: parseInt(quantity, 10), // Convert quantity to integer
      brand,
    };

    // Log the new product data for debugging
    console.log('Submitting product:', newProduct);

    axios
      .post('https://aman-singh-reachify-full-stack.onrender.com/api/products/', newProduct)
      .then((response) => {
        // Update the product list instantly by adding the new product
        setProducts((prevProducts) => [...prevProducts, response.data]);

        // Reset form fields
        setName('');
        setDescription('');
        setPrice('');
        setQuantity('');
        setBrand('');
      })
      .catch((error) => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
