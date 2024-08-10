import React from 'react';
import './NavIcon.css';

const NavIcon = ({ isOpen }) => {
  return (
    <div id="nav-icon1" className={isOpen ? 'open' : ''}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default NavIcon;
