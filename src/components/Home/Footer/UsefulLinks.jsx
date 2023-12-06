import React from "react";
import FooterLink from "./FooterLink";

const UsefulLinks = () => {
  return (
    <div className="col-lg-2 col-md-4 col-custome-1">
      <aside className="widget">
        <h3 className="widget-title">Useful Links</h3>
        <ul>
          <FooterLink href="/privacy" linkTitle="Privacy Policy" />
          <FooterLink href="/return" linkTitle="Return Policy" />
          <FooterLink href="/news" linkTitle="Blog" />
          <FooterLink href="/contact" linkTitle="Contact" />
          <FooterLink href="/terms" linkTitle="Terms & Conditions" />
        </ul>
      </aside>
    </div>
  );
};

export default UsefulLinks;
