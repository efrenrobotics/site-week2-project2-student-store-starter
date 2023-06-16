import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          className="product-card"
          key={product.id}
          product={product}
          showDescription={false}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
