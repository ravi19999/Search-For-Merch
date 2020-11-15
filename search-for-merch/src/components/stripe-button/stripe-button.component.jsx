import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HQwJDE9dKyATRmBYJ8cUGFJpGeL7pOdz17Pla6gVZEXRLVmjQCTaBSIuL8j96Qv8SYPwVNbuPpSPR9paqcqiUbt00LdZ9DqcB";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay-Now"
      name="Search For Merch"
      billingAddress
      shippingAddress
      currency="USD"
      image="https://svgshare.com/i/CUz.svz"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
