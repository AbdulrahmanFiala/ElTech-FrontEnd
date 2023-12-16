import React from "react";
import FooterLink from "./FooterLink";

const Copyright = () => {
  return (
    <section className="copyright-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-5">
            <ul className="menu-link">
              <FooterLink href="/privacy" linkTitle="Privacy Policy" />
              <span> | </span>
              <FooterLink href="/terms" linkTitle="Terms of Service" />
            </ul>
          </div>
          <div className="col-lg-6 col-md-7">
            <div className="copys-text">
              <i className="twi-copyright"></i>Copyright ElTech 2023 | All
              Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
