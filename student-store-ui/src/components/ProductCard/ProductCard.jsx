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
      <h3 className="product-name">{product.name}</h3>
      <h4 className="proudct-price">${parseFloat(product.price).toFixed(2)}</h4>
      {showDescription ? (
        <p className="product-description">{product.description}</p>
      ) : null}
      <div className="media">
        <Link to={`/products/${productId}`}>
          {console.log("THIS IS THE PRODUCTID, ", productId)}
          <img src={product.image} alt={product.description} />
        </Link>
      </div>

      <button className="add" onClick={() => handleAddItemToCart(product.id)}>
        Add Item
      </button>

      <button
        className="remove"
        onClick={() => handleRemoveItemToCart(product.id)}
      >
        Remove Item
      </button>

      <p>quantity: ${quantity}</p>

      {quantity === 0 ? (
        <p className="product-quantity">Quantity: ${quantity}</p>
      ) : null}
    </div>
  );
};

export default ProductCard;
