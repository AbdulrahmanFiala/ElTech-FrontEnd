import React from "react";

const BillingField = ({
  fieldLabel,
  fieldPlaceholder,
  fieldName,
  fieldType,
  noOfCol,
}) => {
  return (
    <p className={noOfCol}>
      <label>{fieldLabel}</label>
      <input placeholder={fieldPlaceholder} name={fieldName} type={fieldType} />
    </p>
  );
};

export default BillingField;
