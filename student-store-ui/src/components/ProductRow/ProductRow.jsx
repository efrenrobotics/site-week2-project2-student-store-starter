import React from "react";
import { useState } from "react";
import "./ProductRow.css";

const ProductRow = ({ prodId, quantity, products }) => {
  // Find the product by ID
  const product = products
    ? products.find((product) => product.id === prodId)
    : null;

  // Calculate the subtotal for the product
  const prodSubtotal = product ? product.price * quantity : 0;

  return (
    <div>
      <div className="product-row">
        <span className="flex-2 cart-product-name">
          {product ? product.name : "Product Name"}
        </span>
        <span className="center cart-product-quantity">{quantity}</span>
        <span className="center cart-product-price">
          {product ? `$${product.price}` : "$0.00"}
        </span>
        <span className="center cart-product-subtotal">
          ${prodSubtotal.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ProductRow;
