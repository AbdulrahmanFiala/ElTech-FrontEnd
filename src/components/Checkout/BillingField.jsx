import React from "react";

const BillingField = ({
  fieldLabel,
  fieldPlaceholder,
  fieldName,
  fieldType,
  noOfCol,
  fieldValue,
  fieldOnChange,
}) => {
  return (
    <p className={noOfCol}>
      <label>{fieldLabel}</label>
      <input
        placeholder={fieldPlaceholder}
        name={fieldName}
        type={fieldType}
        value={fieldValue}
        onChange={fieldOnChange}
        required
      />
    </p>
  );
};

export default BillingField;
