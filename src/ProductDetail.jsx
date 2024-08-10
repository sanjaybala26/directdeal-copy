import React from 'react';

const ProductDetails = ({ product }) => {
  // Check if product is null or undefined before accessing its properties
  if (!product) {
    return <div>Loading...</div>; // or handle the loading state appropriately
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>Description: {product.description}</p>
      {/* Render other details */}
    </div>
  );
};

export default ProductDetails;
