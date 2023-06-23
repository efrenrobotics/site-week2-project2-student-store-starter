import React from "react";
import "./ProductRow.css";

const ProductRow = ({ name, quantity, unitPrice }) => {
  return (
    <div>
      <div className="product-row">
        <span className="flex-2 cart-product-name">prod name</span>
        <span className="center cart-product-quantity">prod quant</span>
        <span className="center cart-product-price">prod price</span>
        <span className="center cart-product-subtotal">prod subtotal</span>
      </div>
    </div>
  );
};

export default ProductRow;
