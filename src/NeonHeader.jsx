import React from 'react';
import './NeonHeader.css';

const NeonHeader = () => {
  return (
    <div id="neon-header">
      <a href="https://en.wikipedia.org/wiki/Red" className="neon-text" style={{ animation: 'neon1 1.5s ease-in-out infinite alternate' }}> </a>
    </div>
  );
};

export default NeonHeader;
