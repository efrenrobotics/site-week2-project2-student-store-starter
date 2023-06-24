import React from "react";
import "./SubmitInfo.css";

const SubmitInfo = ({ email, name }) => {
  return (
    <div className="purchase-thanks">
      <h2>Thanks for your purchase</h2>
      <p>email: {email}</p>
      <p>name: {name}</p>
    </div>
  );
};

export default SubmitInfo;
