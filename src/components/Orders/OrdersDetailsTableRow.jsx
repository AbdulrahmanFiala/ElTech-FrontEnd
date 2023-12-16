import { Link } from "react-router-dom";
import productImg1 from "../../assets/images/cart/1.jpg";

function OrdersDetailsTableRow({ product, status }) {
    return (
        <tr className="cart-item">
            <td className="product-thumbnail-title">
            <Link to={'/product/'+ product.product.id}>
					<img src={product.product.thumbnail.image ? product.product.thumbnail.image : productImg1} alt="" />
				</Link>
				<Link className="product-name" to={'/product/'+ product.product.id}>
					{product.product.name}
				</Link>
            </td>
            <td className="product-unit-price">
                <div className="product-price clearfix">
                    <span className="price">
                        <span>
                            <span className="woocommerce-Price-currencySymbol">
                                $
                            </span>
                            {product.product.price}
                        </span>
                    </span>
                </div>
            </td>
            <td className="product-quantity clearfix">
                <div className="quantityd clearfix">
                    <input
                        name="qty"
                        value={product.quantity}
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
                            {product.total_price}
                        </span>
                    </span>
                </div>
            </td>
            <td className="product-total">
                {status}
            </td>
        </tr>
    )
}

export default OrdersDetailsTableRow
