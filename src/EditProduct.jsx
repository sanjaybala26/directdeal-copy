import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState({
    name: '',
    price: '',
    location: '',
    category: '',
    productCondition: '',
    description: '',
    imageUrl: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products/${productId}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching product.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/api/products/${productId}`, product, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Product updated successfully!');
      navigate('/myproducts'); // Navigate back to MyProducts page after successful update
    } catch (error) {
      console.error('There was an error updating the product!', error.response ? error.response.data : error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-form-container">
      <form className="product-form" onSubmit={handleSubmit}>
        <h2>Edit Your Product</h2>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={product.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="productCondition"
          placeholder="Condition"
          value={product.productCondition}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={product.imageUrl}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
