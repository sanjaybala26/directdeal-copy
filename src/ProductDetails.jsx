// src/ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css'; // Import CSS for styling

const ProductDetails = () => {
  const { id } = useParams(); // Retrieve the product id from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/products/${id}`);
      console.log('Product data:', response.data); // Log the data
      setProduct(response.data);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error('Error fetching product:', error);
      setError('Failed to load product details');
      setLoading(false); // Set loading to false when an error occurs
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-details">
    <h1>{product.name}</h1>
    <img src={product.imageUrl} alt={product.name} className="product-image" />
    <p>Price: ₹{product.price}</p>
      <p>Location: {product.location}</p>
      <p>Category: {product.category}</p>
      <p>Condition: {product.productCondition}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
