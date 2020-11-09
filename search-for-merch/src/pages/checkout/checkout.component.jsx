import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div classname="header-block">
        <span>Product</span>
      </div>
      <div classname="header-block">
        <span>Description</span>
      </div>
      <div classname="header-block">
        <span>Quantity</span>
      </div>

      <div classname="header-block">
        <span>Price</span>
      </div>
      <div classname="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => cartItem.name)}
    <div className="total">
      <span>TOTAL:${total}</span>
    </div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
