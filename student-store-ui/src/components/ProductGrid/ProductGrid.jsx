import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  handleGetTotalItems,
}) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          className="product-card"
          key={product.id}
          product={product}
          showDescription={false}
          handleAddItemToCart={() => handleAddItemToCart(product)}
          handleRemoveItemToCart={() => handleRemoveItemToCart(product)}
          handleGetTotalItems={() => handleGetTotalItems()}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
