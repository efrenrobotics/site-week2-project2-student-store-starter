import * as React from "react";
import { useState } from "react";
import "./Sidebar.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

/* 
  isOpen - open/close state of sidebar
  shoppingCart - active shopping cart array of JSON product = {itemId, quantity}
  products - array of available products fetched from API
  checkoutForm - form state of CheckoutForm component
  handleOnCheckoutFormChange - passed down from App.jsx, updates the checkoutForm object
  handleOnSubmitCheckoutForm - passed down from App.jsx, submit user's order to API
  handleOnToggle - passed down from App.jsx, toggle sidebar open state
*/

const SideBar = ({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
}) => {
  let navclassName = !isOpen ? "sidebar" : "sidebar-open";
  return (
    <div className={navclassName}>
      <ShoppingCart />
      <CheckoutForm />
      <p>Sidebar</p>
      <p>Open State: {navclassName}</p>
      <button className="toggle-button" onClick={handleOnToggle}>
        toggle sidebar
      </button>
    </div>
  );
};

export default SideBar;
