import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  handleGetTotalItems,
  handleGetQuantity,
}) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          className="product-card"
          key={product.id}
          product={product}
          showDescription={false}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
          handleGetTotalItems={handleGetTotalItems}
          handleGetQuantity={handleGetQuantity}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
