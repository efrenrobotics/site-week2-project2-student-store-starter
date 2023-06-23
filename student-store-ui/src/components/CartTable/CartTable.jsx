import React from "react";
import ProductRow from "../ProductRow/ProductRow";
import Receipt from "../Receipt/Receipt";
import "./CartTable.css";

const CartTable = () => {
  return (
    <div>
      <div className="CartTable">
        <div className="header">
          <div className="header-row">
            <span className="flex-2">Name</span>
            <span className="center">Quantity</span>
            <span className="center">Unit Price</span>
            <span className="center">Cost</span>
          </div>

          <ProductRow />
          <Receipt />
        </div>
      </div>
    </div>
  );
};

export default CartTable;
