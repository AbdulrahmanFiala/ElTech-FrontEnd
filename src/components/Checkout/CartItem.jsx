import React from "react";

const CartItem = ({ productName, productPrice }) => {
  return (
    <tr className="cart-item">
      <td className="product-name">{productName}</td>
      <td className="product-total">
        <div className="product-price clearfix">
          <span className="price">
            <span>
              <span className="woocommerce-Price-currencySymbol">$</span>
              {productPrice}
            </span>
          </span>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
