import React, { useState } from 'react';
import Signup from './Components/Signup';
import Login from './Login';
import './styles.css';

const SlideNavbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" checked={isChecked} onChange={handleCheckboxChange} />
      <Signup handleCheckboxChange={handleCheckboxChange} />
      <Login handleCheckboxChange={handleCheckboxChange} />
    </div>
  );
};

export default SlideNavbar;
