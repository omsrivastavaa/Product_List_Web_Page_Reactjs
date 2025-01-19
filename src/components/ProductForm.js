import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = ({ addProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName && productPrice) {
      addProduct({ name: productName, price: productPrice });
      setProductName('');
      setProductPrice('');
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div className="product-form-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Price</label>
          <input
            type="number"
            id="productPrice"
            placeholder="Enter product price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="add-product-button">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
