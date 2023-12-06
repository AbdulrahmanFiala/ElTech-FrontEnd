import React from "react";

const PaymentMethod = ({
  paymentMethodClass,
  paymentMethodChecked,
  paymentMethodValue,
  paymentMethodId,
  paymentMethodLabel,
  paymentMethodDescription,
}) => {
  return (
    <li className={`wc_payment_method ${paymentMethodClass}`}>
      <input
        value={paymentMethodValue}
        name="payment_method"
        className="input-radio"
        id={paymentMethodId}
        type="radio"
      />
      <label for={paymentMethodId}>{paymentMethodLabel}</label>
      <div className={`payment_box ${paymentMethodClass}`}>
        <p>{paymentMethodDescription}</p>
      </div>
    </li>
  );
};

export default PaymentMethod;
