import React from "react";
import "./SearchButtons.css";

const SearchButtons = ({ handleClick }) => {
  return (
    <div className="btn-container">
      <button className="button" value={null} onClick={handleClick}>
        All Categories
      </button>
      <button className="button" value="clothing" onClick={handleClick}>
        Clothing
      </button>
      <button className="button" value="food" onClick={handleClick}>
        Food
      </button>
      <button className="button" value="accessories" onClick={handleClick}>
        Accessories
      </button>
      <button className="button" value="tech" onClick={handleClick}>
        Tech
      </button>
    </div>
  );
};

export default SearchButtons;
