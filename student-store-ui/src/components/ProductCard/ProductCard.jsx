import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) => {
  return (
    <div className="product-card">
      <div className="media">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.description} />
        </Link>
      </div>

      <h3 className="product-name">{product.name}</h3>
      <h4 className="proudct-price">${parseFloat(product.price).toFixed(2)}</h4>
      {showDescription ? (
        <p className="product-description">{product.description}</p>
      ) : null}

      <button className="add" onClick={() => handleAddItemToCart(product.id)}>
        Add Item
      </button>

      <button
        className="remove"
        onClick={() => handleRemoveItemToCart(product.id)}
      >
        Remove Item
      </button>

      {quantity === 0 ? (
        <p className="product-quantity">Quantity: ${quantity}</p>
      ) : null}
    </div>
  );
};

export default ProductCard;
