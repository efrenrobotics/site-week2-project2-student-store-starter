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
    <div className="subbar">
      <div className="search-and-buttons">
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchQuery}
          />
        </form>
        <div className="cont">
          <button className="button">Toggle</button>
          <SearchButtons handleClick={handleClick} />
        </div>
      </div>
      <div className="prod-grid">
        {filteredData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SubNavbar;
