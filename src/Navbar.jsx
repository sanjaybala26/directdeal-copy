// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import Navbar styles
import NeonHeader from './NeonHeader';

const Navbar = () => {
  return (
    <div className="header">
    <NeonHeader/>
    <nav className="navbar">
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/buy-sell">Buy & Sell</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/category/1">Category</Link>
        </div>
        <div className="auth-links">
          <Link to="/login" className="nav-button">Login</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
