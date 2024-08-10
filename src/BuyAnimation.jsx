// src/BuyAnimation.js
import React from 'react';
import * as animationData from './lottie-animation.json'; // Adjust the path if necessary

const BuyAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="lottie-container">
      <lottie options={defaultOptions} />
    </div>
  );
};

export default BuyAnimation;
