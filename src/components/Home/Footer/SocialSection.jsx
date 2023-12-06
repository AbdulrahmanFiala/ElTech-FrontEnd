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
          Sed ut perspiciatis unde omnis iste natus er sit voluptatem
          accusantium dolore.ea commo do consequat. Duis aute irure dolor in re
          prehenderit in.
        </p>
        <div className="ab-social">
          <SoicalSectionItem soicalHref="#" soicalIcon="twi-facebook" />
          <SoicalSectionItem soicalHref="#" soicalIcon="twi-twitter" />
          <SoicalSectionItem soicalHref="#" soicalIcon="twi-instagram" />
          <SoicalSectionItem soicalHref="#" soicalIcon="twi-linkedin" />
        </div>
      </aside>
    </div>
  );
};

export default SoicalSection;
