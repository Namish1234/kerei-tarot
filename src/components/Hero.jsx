import React from 'react';
import './Hero.css';

const Hero = ({ className }) => {
  return (
    // Add the incoming className to the main container
    <div className={`hero-container ${className || ''}`}>
      <h1 className="hero-title">Pick One Card...</h1>
      <p className="hero-subtitle">To Predict A Future</p>
    </div>
  );
};

export default Hero;