import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const navigate = useNavigate();

  const toggleLoginVisibility = () => {
    setLoginVisible(!isLoginVisible);
  };

  // Navigate to login page when "Get Started" button is clicked
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="home-container" style={{ position: 'relative', paddingTop: '80px' }}>
      <div className="bb"></div>
      <div className="content">
        <div className="category-list">
          {/* Add category links or buttons here */}
        </div>
        <button
          className={`login-btn ${isLoginVisible ? 'visible' : 'hidden'}`}
          onClick={toggleLoginVisibility}
        >
          Login
        </button>
        {/* Use Link component to navigate to /login */}
        <Link to="/login" className="go-to-home1-btn" onClick={goToLogin}>Join With US</Link>
      </div>
    </div>
  );
};

export default HomePage;
