import React from "react";
import CountryDropDownMenu from "./CountryDropDownMenu";
import BillingField from "./BillingField";

const Billing = () => {
  return (
    <div className="woocommerce-billing-fields">
      <h3>Billing Info</h3>
      <div className="row">
        <div className="col-lg-12">
          <div className="billing-countries">
            <label>Country</label>
            <CountryDropDownMenu />
          </div>
        </div>
        <BillingField
          noOfCol="col-lg-6"
          fieldLabel="First Name"
          fieldPlaceholder=""
          fieldName="first_name"
          fieldType="text"
        />
        <BillingField
          noOfCol="col-lg-6"
          fieldLabel="Last Name"
          fieldPlaceholder=""
          fieldName="last_name"
          fieldType="text"
        />
        <BillingField
          noOfCol="col-lg-6"
          fieldLabel="Company Name"
          fieldPlaceholder=""
          fieldName="company"
          fieldType="text"
        />
        <BillingField
          noOfCol="col-lg-6"
          fieldLabel="Address"
          fieldPlaceholder=""
          fieldName="address_1"
          fieldType="text"
        />

        <div className="col-lg-12">
          <div className="billing-citys">
            <label>City / Town</label>
            <CountryDropDownMenu />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="billing-countries">
            <label>Country / States</label>
            <CountryDropDownMenu />
          </div>
        </div>
        <BillingField
          noOfCol="col-lg-6"
          fieldLabel="Postcode / Zip"
          fieldPlaceholder=""
          fieldName="postcode"
          fieldType="text"
        />
        <BillingField
          noOfCol="col-lg-6"
          fieldLabel="Email"
          fieldPlaceholder=""
          fieldName="billing_email"
          fieldType="email"
        />
        <BillingField
          noOfCol="col-lg-6"
          fieldLabel="Phone Number"
          fieldPlaceholder=""
          fieldName="phone"
          fieldType="tel"
        />
        <p className="col-lg-12 account">
          <input name="account" value="1" type="checkbox" id="cac" />
          <label for="cac">Create an account?</label>
        </p>
        <BillingField
          noOfCol="col-lg-12"
          fieldLabel="Account Password"
          fieldPlaceholder=""
          fieldName="password"
          fieldType="password"
        />
        <p className="col-lg-12">
          <label>Order Note</label>
          <textarea name="order" placeholder=""></textarea>
        </p>
        <p className="col-lg-12 account">
          <input name="ship-address" value="2" type="checkbox" id="ship_add" />
          <label for="ship_add">Ship to another address</label>
        </p>
      </div>
    </div>
  );
};

export default Billing;
