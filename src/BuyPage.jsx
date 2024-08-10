// src/BuyPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './BuyPage.css'; // Import the CSS file

const BuyPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products'); // Adjust URL if needed
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="buy-page">
      <h1>Products for Sale</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
          <Link to={`/product/${product.id}`}>
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyPage;
