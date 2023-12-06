import React from "react";
import Footer from "../layouts/Home/Footer";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import CheckoutSection from "../layouts/Checkout/CheckoutSection";
import PageBanner from "../components/Shared/PageBanner/PageBanner";

const Checkout = () => {
  return (
    <>
      <Header className="inner-header" />
      <PopUpSearch />
      <PageBanner section="Checkout" />
      <CheckoutSection />
      <Footer className="inner-footer"/>
    </>
  );
};

export default Checkout;
