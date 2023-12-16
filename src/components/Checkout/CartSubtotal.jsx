import React from "react";

const CartSubtotal = ({ subtotalClass, subtotalName, subtotalPrice }) => {
  return (
    <tr className={subtotalClass}>
      <th>{subtotalName}</th>
      <td>
        <div className="product-price clearfix">
          <span className="price">
            <span>
              <span className="woocommerce-Price-currencySymbol">$</span>
              {subtotalPrice && subtotalPrice.toFixed(2)}
            </span>
          </span>
        </div>
      </td>
    </tr>
  );
};

export default CartSubtotal;
