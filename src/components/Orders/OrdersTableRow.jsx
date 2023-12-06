import { Link } from "react-router-dom";
import productImg1 from "../../assets/images/cart/1.jpg";

function OrdersTableRow() {
    return (
        <tr className="cart-item">
            <td className="product-thumbnail-title">
                <Link to="#">
                    <img src={productImg1} alt="" />
                </Link>
                <Link className="product-name" to="#">
                    Wireless Headset
                </Link>
            </td>
            <td className="product-unit-price">
                <div className="product-price clearfix">
                    <span className="price">
                        <span>
                            <span className="woocommerce-Price-currencySymbol">
                                $
                            </span>
                            79.00
                        </span>
                    </span>
                </div>
            </td>
            <td className="product-quantity clearfix">
                <div className="quantityd clearfix">
                    <input
                        name="qty"
                        value="1"
                        title="Qty"
                        className="input-text qty text carqty"
                        type="text"
                    />
                </div>
            </td>
            <td className="product-total">
                <div className="product-price clearfix">
                    <span className="price">
                        <span>
                            <span className="woocommerce-Price-currencySymbol">
                                $
                            </span>
                            42.00
                        </span>
                    </span>
                </div>
            </td>
            <td className="product-total">
                Delivered
            </td>
        </tr>
    )
}

export default OrdersTableRow
