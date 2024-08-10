import React, { useState } from 'react';
import axios from 'axios';
import './SellProduct.css'; // Import your CSS file for styling

const SellProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    location: '',
    category: '',
    productCondition: '', // Renamed to match backend
    description: '',
    imageUrl: '', // Renamed to match backend
  });

  const username = localStorage.getItem('username'); // Get username from local storage

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/sell', product, {
        headers: {
          'Content-Type': 'application/json',
          'username': username // Include username in headers
        },
      });
      alert('Product listed successfully!');
    } catch (error) {
      console.error('There was an error listing the product!', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="product-form-container">
      <form className="product-form" onSubmit={handleSubmit}>
        <h2>Ｓｅｌｌ Ｙｏｕｒ Ｐｒｏｄｕｃｔ</h2>
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
          name="productCondition" // Updated field name
          placeholder="Condition"
          value={product.productCondition} // Updated field name
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
          name="imageUrl" // Updated field name
          placeholder="Image URL"
          value={product.imageUrl} // Updated field name
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SellProduct;
