import "./Navbar.css";
import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Navbar = ({ products, setProducts }) => {
  return (
    <div className="navbar">
      <Logo />
      <ul className="navbar-routes">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/">Buy Now</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
