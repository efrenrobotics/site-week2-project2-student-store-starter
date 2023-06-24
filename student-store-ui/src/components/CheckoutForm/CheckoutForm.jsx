import React from "react";
import { useState } from "react";
import SubmitInfo from "../SubmitInfo/SubmitInfo";

const CheckoutForm = ({
  // handleOnCheckoutFormChange,
  shoppingCart,
  setShoppingCart,
}) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnCheckoutFormChange = () => {
    setShoppingCart([]);
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <SubmitInfo email={email} name={userName} />
      ) : (
        <div className="checkout-form">
          <h3 className="">
            Payment Info{" "}
            <span className="button">
              <i className="material-icons md-48">monetization_on</i>
            </span>
          </h3>
          <div className="input-field">
            <label className="label">Name</label>
            <div className="control ">
              <input
                name="name"
                className="checkout-form-input"
                type="text"
                placeholder="Student Name"
                value={userName}
                onChange={handleName}
              />
            </div>
          </div>
          <div className="input-field">
            <label className="label">Email</label>
            <div className="control">
              <input
                name="email"
                className="checkout-form-input"
                type="email"
                placeholder="student@codepath.org"
                value={email}
                onChange={handleEmail}
              />
            </div>
          </div>
          <div className="field">
            {/* <div class="control"><label class="checkbox"><input name="termsAndConditions" type="checkbox"><span class="label">I agree to the <a href="#terms-and-conditions"/>terms and conditions</a></span></label></div> */}
          </div>
          <p className="is-danger"></p>
          <div className="field">
            <div className="control">
              <button
                className="button checkout-button"
                onClick={() => handleOnCheckoutFormChange()}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
