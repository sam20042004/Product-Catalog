// Product.js
import React from 'react';

const Product = ({ id, title, description, price, thumbnail }) => (
  <div className="product">
    <img src={thumbnail} alt={title} className="product-image" />
    <h3 className="product-title">{title}</h3>
    
    <p className="product-price">${price}</p>
    <p className="product-description">{description}</p>
  </div>
);

export default Product;
