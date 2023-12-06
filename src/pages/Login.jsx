import React from "react";
import Footer from "../layouts/Home/Footer";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import PageBanner from "../components/Shared/PageBanner/PageBanner";
import LoginSection from "../layouts/Login/LoginSection";

const Login = () => {
  return (
    <>
      <Header className="inner-header" />
      <PopUpSearch />
      <PageBanner section="Login" />
      <LoginSection />
      <Footer className="inner-footer" />
    </>
  );
};

export default Login;
