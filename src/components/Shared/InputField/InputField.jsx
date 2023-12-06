import React from "react";

const InputField = ({
  fieldLabel,
  fieldPlaceholder,
  fieldName,
  fieldType,
  noOfCol,
  onChange,
  value
}) => {
  return (
    <p className={noOfCol}>
      <label>{fieldLabel}</label>
      <input placeholder={fieldPlaceholder}
      name={fieldName}
      type={fieldType}
      value={value}
      onChange={onChange}
      />
    </p>
  );
};

export default InputField;
