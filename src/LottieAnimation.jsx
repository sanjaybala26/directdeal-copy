// src/LottieAnimation.js
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from './sellAnimation.json'; // Adjust the path to your animation JSON file

const LottieAnimation = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData: animationData,
      renderer: 'svg', // 'svg', 'canvas', 'html' to set the renderer
      loop: true, // Set loop true/false
      autoplay: true, // Set autoplay true/false
    });

    // Optionally return a cleanup function to stop the animation and unload resources
    return () => {
      lottie.destroy();
    };
  }, []);

  return <div ref={container} style={{ width: '150%', height: '90%' }}></div>;
};

export default LottieAnimation;
