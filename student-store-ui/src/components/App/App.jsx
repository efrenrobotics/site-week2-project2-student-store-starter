import * as React from "react";
import { useState, useEffect } from "react";
import "./App.css";
/* Router Imports */
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
/* Component Imports */
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import ProductDetail from "../ProductDetail/ProductDetail";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import NotFound from "../NotFound/NotFound";
import CartTable from "../CartTable/CartTable";
/* Axios Imports */
import axios from "axios";
import SubmitInfo from "../SubmitInfo/SubmitInfo";

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
    |   └── SubNavBar
    │       └── ProductGrid
    │           ├── ProductCard
    │           ├── ProductCard
    │           ├── ... as many as needed
    │           ├── ProductCard
    │           └── ProductCard
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
  const url = `http://localhost:3001/store`;

  /* State Variables and Setter Functions */
  const [products, setProducts] = useState([]);

  const [isFetching, setIsFetching] = useState(true);

  const [error, setError] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const [priceOfCart, setPriceOfCart] = useState(0);

  const [checkoutForm, setCheckoutForm] = useState(null);

  const [inputSearch, setInputSearch] = useState("");

  /* ShoppingCart{
    id : Quantity
  }*/
  const [shoppingCart, setShoppingCart] = useState([]);

  const [activeCategory, setActiveCategory] = useState("All Categories");

  /* Event Handlers */
  const handleAddItemToCart = (item) => {
    setShoppingCart((cart) => {
      const updatedCart = [...cart];
      const existingItemIndex = updatedCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex].quantity += 0.5;
      } else {
        updatedCart.push({ id: item.id, quantity: 1 });
      }

      return updatedCart;
    });
    console.log({ shoppingCart });
  };

  const handleRemoveItemFromCart = (item) => {
    setShoppingCart((cart) => {
      const updatedCart = [...cart];
      const existingItemIndex = updatedCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex].quantity -= 0.5;

        if (updatedCart[existingItemIndex].quantity <= 0) {
          updatedCart.splice(existingItemIndex, 1);
        }
      }
      return updatedCart;
    });
  };

  const handleGetTotalItems = () => {
    let totalItems = 0;
    shoppingCart.map((item) => {
      totalItems += item.quantity;
    });
    return totalItems;
  };

  const handleGetQuantity = (item) => {
    const existingItemIndex = shoppingCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex === 0) {
      return 0;
    } else {
      return shoppingCart.find(existingItemIndex).quantity;
    }
  };

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOnCheckoutFormChange = () => {
    console.log(`log`);
    setShoppingCart([]);
    <SubmitInfo email="efren@gmail.com" name="efren" />;
  };
  const handleOnSubmitCheckoutForm = () => {};

  /* Initial Fetching Data - grabs */
  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (e) {
        setError(error);
        console.error(e);
      } finally {
        setIsFetching(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        {/* ALWAYS RENDER NAVBAR & SIDEBAR */}
        <main>
          <Navbar />
          <div className="container">
            <Sidebar
              handleOnToggle={handleOnToggle}
              isOpen={isOpen}
              products={products}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              // handleOnCheckoutFormChange={handleOnCheckoutFormChange}
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
                      handleGetTotalItems={handleGetTotalItems}
                      handleGetQuantity={handleGetQuantity}
                      handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                    />
                  }
                />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route
                  path="/products/:productId"
                  element={
                    <ProductDetail
                      handleAddItemToCart={handleAddItemToCart}
                      handleRemoveItemToCart={handleRemoveItemFromCart}
                      handleGetTotalItems={handleGetTotalItems}
                      handleGetQuantity={handleGetQuantity}
                    />
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>

          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}
