import React from "react";
import CountryDropDownMenu from "./CountryDropDownMenu";
import BillingField from "./BillingField";

const Billing = ({ billingInfo, handleBillingInfoChange }) => {
  return (
    <div className="woocommerce-billing-fields">
      <h3>Billing Info</h3>
      <div className="row">
        <div className="col-lg-12">
          <div className="billing-countries">
            <label>Country</label>
            <CountryDropDownMenu
              fieldValue={billingInfo.country}
              fieldOnChange={(e) =>
                handleBillingInfoChange("country", e.target.value)
              }
            />
          </div>
        </div>
        <BillingField
          noOfCol="col-lg-6"
          fieldLabel="First Name"
          fieldPlaceholder=""
          fieldName="first_name"
          fieldType="text"
          fieldValue={billingInfo.first_name}
          fieldOnChange={(e) =>
            handleBillingInfoChange("first_name", e.target.value)
          }
        />

        <BillingField
          noOfCol="col-lg-6"
          fieldLabel="Last Name"
          fieldPlaceholder=""
          fieldName="last_name"
          fieldType="text"
          fieldValue={billingInfo.last_name}
          fieldOnChange={(e) =>
            handleBillingInfoChange("last_name", e.target.value)
          }
        />
        <BillingField
          noOfCol="col-lg-6"
          fieldLabel="Address"
          fieldPlaceholder=""
          fieldName="address"
          fieldType="text"
          fieldValue={billingInfo.address}
          fieldOnChange={(e) =>
            handleBillingInfoChange("address", e.target.value)
          }
        />
        <BillingField
          noOfCol="col-lg-6"
          fieldLabel="Postcode / Zip"
          fieldPlaceholder=""
          fieldName="zip"
          fieldType="number"
          fieldValue={billingInfo.zip}
          fieldOnChange={(e) =>
            handleBillingInfoChange("zip", e.target.value * 1)
          }
        />

        <p className="col-lg-12">
          <label>Order Note</label>
          <textarea
            name="order_note"
            placeholder=""
            value={billingInfo.order_note}
            onChange={(e) =>
              handleBillingInfoChange("order_note", e.target.value)
            }
          ></textarea>
        </p>
      </div>
    </div>
  );
};

export default Billing;
