import * as React from "react";
import { useState } from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";

const Home = ({ products, handleAddItemToCart, handleRemoveItemToCart }) => {
  return (
    <div className="home">
      <Hero />
      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      />
    </div>
  );
};

export default Home;
