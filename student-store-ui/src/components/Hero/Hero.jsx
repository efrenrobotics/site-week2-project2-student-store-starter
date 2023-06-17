import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div>
          <h1>Welcome!</h1>
          <h2>EFREN's SHOP has everything you're looking for</h2>
        </div>
        <div className="hero-info">
          <img
            className="hero-img"
            src="../img/efren-logo.png"
            alt="hero banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
