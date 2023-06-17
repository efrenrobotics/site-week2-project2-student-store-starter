import React from "react";

const SearchButtons = ({ handleClick }) => {
  return (
    <div>
      <button value="all-categories" onClick={handleClick}>
        All Categories
      </button>
      <button value="clothing" onClick={handleClick}>
        Clothing
      </button>
      <button value="food" onClick={handleClick}>
        Food
      </button>
      <button value="accessories" onClick={handleClick}>
        Accessories
      </button>
      <button value="tech" onClick={handleClick}>
        Tech
      </button>
    </div>
  );
};

export default SearchButtons;
