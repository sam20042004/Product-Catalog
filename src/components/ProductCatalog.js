// ProductCatalog.js
import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/productService';
import Product from './Product';
import './ProductCatalog.css';

const websiteName = "Welcome to the Fancy Store"; // Replace with your desired name

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        const productArray = Array.isArray(data.products) ? data.products : [];
        setProducts(productArray);
        setFilteredProducts(productArray);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!products) {
      return;
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) => {
      if (sortOption === 'price') {
        return a.price - b.price;
      } else if (sortOption === 'name') {
        return a.title.localeCompare(b.title);
      } else if (sortOption === 'rating') {
        return b.rating - a.rating;
      } else {
        return 0;
      }
    });

    setFilteredProducts(sorted);
  }, [searchTerm, sortOption, products]);

  return (
    <div className="product-catalog-container">
      {/* E-commerce website name */}
      <h1 className="website-name">{websiteName}</h1>

      {/* Search bar and Sort dropdown container */}
      <div className="input-container">
        <div className="search-bar">
        {/* Search bar */}
        <input
          type="text"
          placeholder="What are you looking for?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border"
        />
        </div>

        {/* Sort dropdown */}
        <div className="sort-dropdown">
        <label htmlFor="sort" className="mr-2">Sort by: </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border"
        >
          <option value="">None</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
          <option value="rating">Popularity</option>
        </select>
        </div>
      </div>

      {/* Product grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

      {/* Thank You message */}
      <p className="thank-you-message">Thank you for visiting our website!🤗</p>
    </div>
  );
};

export default ProductCatalog;
