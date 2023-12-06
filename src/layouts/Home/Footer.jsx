import React from "react";
import SocialSection from "../../components/Home/Footer/SocialSection";
import UsefulLinks from "../../components/Home/Footer/UsefulLinks";
import Account from "../../components/Home/Footer/Account";
import Contact from "../../components/Home/Footer/Contact";
import Copyright from "../../components/Home/Footer/Copyright";
import BackToTopButton from "../../components/Home/Footer/BackToTopButton";
import Subscribe from "../../components/Home/Footer/Subscribe";

const Footer = ({ className }) => {
  return (
    <>
      <footer className={`footer-01 ${className}`}>
        <div className="container-fluid">
          <div className="row">
            <SocialSection />
            <UsefulLinks />
            <Account />
            <Contact />
            <Subscribe />
          </div>
        </div>
      </footer>
      <Copyright />
      <BackToTopButton />
    </>
  );
};

export default Footer;
