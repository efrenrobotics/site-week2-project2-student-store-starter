import React, { useState, useEffect } from "react";
import "./SubNavbar.css";
import SearchButtons from "../SearchButtons/SearchButtons";
import ProductCard from "../ProductCard/ProductCard";

const SubNavbar = ({ products, setProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(products);

  const handleSearchQuery = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredData(filteredProducts);
  };

  const handleClick = (event) => {
    setFilteredData(
      products.filter((product) =>
        product.category
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm, products]);

  return (
    <div>
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchQuery}
        />
      </form>

      <button>Toggle</button>
      <SearchButtons handleClick={handleClick} />

      {filteredData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SubNavbar;
