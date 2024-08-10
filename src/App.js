import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import HomePage from './HomePage';
import Home1 from './Home1';
import './App.css'; // Import your main styles here
import SellProduct from './SellProduct';
import BuyPage from './BuyPage';
import ProductDetails from './ProductDetails';
import ProductDetail from './ProductDetail';
import MyProducts from './MyProducts';
import EditProduct from './EditProduct';
import ChatPage from './ChatPage'; 



const App = () => {
  
  return (
    <div className="main">
    <Router>

        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Home1 />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/sell" element={<SellProduct/>} />
          <Route path="/buy" element={<BuyPage/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/prod/:id" element={<ProductDetail />} />
        <Route path="/edit/:productId" element={<EditProduct />} />
        <Route path="/chat" element={<ChatPage />} /> {/* Add ChatPage route */}





        </Routes>
        </Router>
        </div>
  );
};

export default App;
