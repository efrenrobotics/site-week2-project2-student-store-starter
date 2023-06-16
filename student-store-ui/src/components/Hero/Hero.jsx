import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <p>
        Welcome! This is Efren's e-commerce site where you will find everything
        you are looking for!!
      </p>
      <img className="hero-img" src="../img/hero.png" alt="hero banner" />
    </div>
  );
};

export default Hero;
