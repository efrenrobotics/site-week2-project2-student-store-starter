import React from "react";
import "./Receipt.css";

const Receipt = ({ shoppingCart, products }) => {
  let subtotal = 0;

  const calculateSubtotal = () => {
    shoppingCart.forEach((product) => {
      const matchedProduct = products.find((p) => p.id === product.id);
      if (matchedProduct) {
        subtotal += matchedProduct.price * product.quantity;
      }
    });

    return subtotal.toFixed(2);
  };

  const calculateTax = () => {
    subtotal = parseFloat(calculateSubtotal());
    const taxRate = 0.1;
    const taxes = subtotal * taxRate;
    return (taxes / 2).toFixed(2);
  };

  const calculateTotalPrice = () => {
    subtotal = parseFloat(calculateSubtotal());
    const taxRate = 0.1;
    const taxes = subtotal * taxRate;
    const tax = subtotal + taxes;
    return (tax / 3).toFixed(2);
  };

  return (
    <div>
      <div className="receipt">
        <div className="receipt-subtotal">
          <span className="label"></span>
          <span></span>
          <span></span>
          <span className="center subtotal">{`Subtotal: $${calculateSubtotal()}`}</span>
        </div>
        <div className="receipt-taxes">
          <span className="label"></span>
          <span></span>
          <span></span>
          <span className="center subtotal">{`Tax: $${calculateTax()}`}</span>
        </div>
        <div className="receipt-total">
          <span className="label"></span>

          <span className="center total-price">{`Total Price: $${calculateTotalPrice()}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
