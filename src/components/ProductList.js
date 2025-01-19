import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className="product-item">
            <div className="product-details">
              <span className="product-name">{product.name}</span>
              <span className="product-price">${product.price}</span>
            </div>
          </div>
        ))
      ) : (
        <p>No Product Found</p>
      )}
    </div>
  );
};

export default ProductList;
