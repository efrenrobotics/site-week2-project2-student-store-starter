import React from "react";
import "./Receipt.css";

const Receipt = () => {
  return (
    <div>
      <div className="receipt">
        <div className="receipt-subtotal">
          <span className="label">Subtotal</span>
          <span></span>
          <span></span>
          <span className="center subtotal">$5.99</span>
        </div>
        <div className="receipt-taxes">
          <span className="label">Taxes and Fees</span>
          <span></span>
          <span></span>
          <span className="center">$0.52</span>
        </div>
        <div className="receipt-total">
          <span className="label">Total</span>
          <span></span>
          <span></span>
          <span className="center total-price">$6.51</span>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
