import * as React from "react";
import { useState } from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import SubNavbar from "../SubNavbar/SubNavbar";

import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";

const Home = ({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  handleGetTotalItems,
  handleGetQuantity,
  handleOnCheckoutFormChange,
}) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (filteredData) => {
    setFilteredProducts(filteredData);
  };

  return (
    <div className="home">
      <Hero />
      <SubNavbar
        products={products}
        handleSearch={handleSearch}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        handleGetTotalItems={handleGetTotalItems}
        handleGetQuantity={handleGetQuantity}
        handleOnCheckoutFormChange={handleOnCheckoutFormChange}
      />
    </div>
  );
};

export default Home;
