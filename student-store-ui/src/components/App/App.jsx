import * as React from "react";
import { useState, useEffect } from "react";
import "./App.css";
/* Router Imports */
import { BrowserRouter } from "react-router-dom";
import { Router, Route, Routes, Link } from "react-router-dom";
/* Component Imports */
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import ProductDetail from "../ProductDetail/ProductDetail";
/* Axios Imports */
import axios from "axios";

/* 
│
└── App
    │
    ├── Navbar (all routes)
    │   └── Logo
    │
    ├── Sidebar (all routes)
    │   └── ShoppingCart
    │   └── CheckoutForm
    │
    ├── Home (the `/` route)
    │   └── Hero
    │   └── ProductGrid
    │       ├── ProductCard
    │       ├── ProductCard
    │       ├── ... as many as needed
    │       ├── ProductCard
    │       └── ProductCard
    │
    ├── ProductDetail (the `/products/:productId` route)
    │   ├── ProductView
    │   │   └── ProductCard
    │   │
    │   └── NotFound (only if no product with that `productId` exists)
    │
    ├── NotFound (all other routes that don't match)
    │
    └── Footer (all routes)
*/

export default function App() {
  /* Products JSON from codepath store API */
  const url = `https://codepath-store-api.herokuapp.com/store`;

  /* State Variables and Setter Functions */
  const [products, setProducts] = useState([]);

  const [isFetching, setIsFetching] = useState(true);

  const [error, setError] = useState("");

  let [isOpen, setIsOpen] = useState(true);

  const [shoppingCart, setShoppingCart] = useState({
    order: [
      {
        itemId: null,
        quantity: 0,
      },
    ],
  });

  const [checkoutForm, setCheckoutForm] = useState(null);

  /* Fetching Data */
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error(`error: ${error}`);
        setError(error);
      });
  }, []);

  /* Event Handlers */
  const handleOnToggle = () => {
    console.log("IsOpen: " + open.value);
    setIsOpen(!open);
  };
  const handleAddItemToCart = () => {};
  const handleRemoveItemFromCart = () => {};
  const handleOnCheckoutFormChange = () => {};
  const handleOnSubmitCheckoutForm = () => {};

  return (
    <div className="app">
      <BrowserRouter>
        {/* ALWAYS RENDER NAVBAR & SIDEBAR */}
        <Navbar />

        {/* Hero */}
        {/* Sub Nav Bar - Categories*/}
        {/* Home - Product Grid */}
        <div className="container">
          <Sidebar
            handleOnToggle={handleOnToggle}
            isOpen={isOpen}
            products={products}
          />
          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    products={products}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemToCart={handleRemoveItemFromCart}
                  />
                }
              />
              <Route path="/about-us" />
              <Route path="/contact-us" />
              <Route path="/buy-now" />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="*" />
            </Routes>
          </div>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
