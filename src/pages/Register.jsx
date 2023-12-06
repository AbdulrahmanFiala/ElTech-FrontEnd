import React from "react";
import Footer from "../layouts/Home/Footer";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import PageBanner from "../components/Shared/PageBanner/PageBanner";
import RegisterSection from "../layouts/Register/RegisterSection";

const Register = () => {
  return (
    <>
      <Header className="inner-header" />
      <PopUpSearch />
      <PageBanner section="Register" />
      <RegisterSection />
      <Footer className="inner-footer" />
    </>
  );
};

export default Register;
