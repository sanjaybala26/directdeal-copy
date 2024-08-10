import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use navigate for routing
import './MyProducts.css';

const MyProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchProducts = async () => {
      const username = localStorage.getItem('username');

      if (!username) {
        setError('User is not logged in.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8080/api/products/username/${username}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching products.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${productId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
      setError('Error deleting product.');
    }
  };

  const handleEdit = (productId) => {
    navigate(`/edit/${productId}`); // Navigate to the Edit page with the product ID
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='my'>
      <h2>Ｍｙ Ｓｏｌｄ Ｐｒｏｄｕｃｔｓ</h2>
      {products.length === 0 ? (
        <p>You have not sold any products.</p>
      ) : (
        <div>
          {products.map(product => (
            <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <p>Location: {product.location}</p>
            <p>Category: {product.category}</p>
            <p>Condition: {product.productCondition}</p>
            <p>Description: {product.description}</p>
            <button onClick={() => handleEdit(product.id)} className="edit-button">Edit</button>
            <button onClick={() => handleDelete(product.id)} className="delete-button">Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProduct;
