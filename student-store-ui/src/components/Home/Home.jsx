import * as React from "react";
import { useState } from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductsGrid from "../ProductsGrid/ProductsGrid";

export default function Home() {
  const [products, setProducts] = useState([]);
  return (
    <div className="home">
      <Hero />
      <ProductsGrid products={products} />
    </div>
  );
}
