import React from "react";
import Billing from "../../components/Checkout/Billing";
import OrderOverview from "../../components/Checkout/OrderOverview";

const CheckoutSection = () => {
  return (
    <section className="checkout-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="customer-login">
              Returning customer ? <a href="#">Click here to login</a>
            </div>
            <div className="customer-coupon">
              Have a Coupon ? <a href="#">Click here to enter your code</a>
            </div>
            <Billing />
          </div>
          <OrderOverview />
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
