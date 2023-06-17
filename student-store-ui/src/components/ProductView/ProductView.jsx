import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductView.css";

const ProductView = ({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) => {
  return (
    <div className="product-view">
      <h1 className="product-id">Product #{product.id}</h1>
      <div className="card">
        <ProductCard
          product={product}
          productId={productId}
          quantity={quantity}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
          showDescription={true}
        />
      </div>
    </div>
  );
};

export default ProductView;
