import React from "react";
import { useSelector } from 'react-redux';

import FooterLink from "./FooterLink";

const Account = () => {
  const user = useSelector((state) => state.authSlice.user);

  return (
    <div className="col-lg-2 col-md-4 col-custome-2">
      <aside className="widget">
        <h3 className="widget-title">Account</h3>
        <ul>
          {user && (
            <>
            <FooterLink href="/profile" linkTitle="My Account" />
            <FooterLink href="/orders" linkTitle="Purchases" />
            </>
          )}
          {!user && (
            <>
              <FooterLink href="/login" linkTitle="Log in" />
              <FooterLink href="/register" linkTitle="Sign Up" />
            </>
          )}


          <FooterLink href="#" linkTitle="Shipping Address" />
        </ul>
      </aside>
    </div>
  );
};

export default Account;
