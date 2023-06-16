import "./Logo.css";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img
          className="logo-img"
          src="../img/efren-logo.png"
          alt="efren store logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
