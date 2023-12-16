import React from "react";
import SoicalSectionItem from "./SoicalSectionItem";
import logo from "../../../assets/images/logo.png";

const SoicalSection = () => {
  return (
    <div className="col-lg-3 col-md-4">
      <aside className="widget about-widget">
        <div className="foo-logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <p>
          Dive into a tech lover's dream with our e-commerce hub. Explore a
          curated range of the latest gadgets and gear, seamlessly enhancing
          your digital experience. Elevate your tech game effortlessly.
        </p>
        <div className="ab-social">
          <SoicalSectionItem soicalIcon="twi-facebook" />
          <SoicalSectionItem soicalIcon="twi-twitter" />
          <SoicalSectionItem soicalIcon="twi-instagram" />
          <SoicalSectionItem soicalIcon="twi-linkedin" />
        </div>
      </aside>
    </div>
  );
};

export default SoicalSection;
