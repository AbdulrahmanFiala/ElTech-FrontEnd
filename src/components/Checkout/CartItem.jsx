import React from "react";

const CartItem = ({ product }) => {
  return (
    <tr className="cart-item">
      <td className="product-name">{product.product.name}</td>
      <td className="product-total">
        <div className="product-price clearfix">
          <span className="price">
            <span>
              <span className="woocommerce-Price-currencySymbol">$</span>
              {product.total_price}
            </span>
          </span>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
