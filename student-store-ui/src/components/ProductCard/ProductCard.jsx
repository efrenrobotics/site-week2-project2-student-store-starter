import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

// import handleAddItemToCart from "../handleAddItemToCart";

const ProductCard = ({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  handleGetTotalItems,
  showDescription,
}) => {
  const [quantities, setQuantities] = useState(0);

  return (
    <div className="product-card">
      <div className="media">
        <Link to={`/store/${product.id}`}>
          <img src={product.image} alt={product.description} />
        </Link>
      </div>

      <h3 className="product-name">{product.name}</h3>
      <h4 className="proudct-price">${parseFloat(product.price).toFixed(2)}</h4>
      {showDescription ? (
        <p className="product-description">{product.description}</p>
      ) : null}

      <button className="add" onClick={() => handleAddItemToCart(product)}>
        Add Item
      </button>

      <button
        className="remove"
        onClick={() => handleRemoveItemToCart(product)}
      >
        Remove Item
      </button>

      {quantities > 0 && (
        <p className="product-quantity">Quantity: ${quantity}</p>
      )}
    </div>
  );
};

export default ProductCard;
