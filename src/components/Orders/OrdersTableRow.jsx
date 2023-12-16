import { Link } from "react-router-dom";

function OrdersTableRow({ order }) {
    console.log(order);
    const parsedDate = new Date(order.created_at);
    const formattedDate = `${parsedDate.getFullYear()}-${(parsedDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${parsedDate.getDate().toString().padStart(2, "0")}`;

    return (
        <tr className="cart-item">
            <td className="product-thumbnail-title">
                <Link to={'/orders/' + order.id}>
                    {formattedDate}
                </Link>
            </td>
            <td className="product-quantity clearfix">
                <Link to={'/orders/' + order.id}>
                    <div className="quantityd clearfix">
                        <input
                            name="qty"
                            value={order.products.length}
                            title="Qty"
                            className="input-text qty text carqty"
                            type="text"
                        />
                    </div>
                </Link>
            </td>
            <td className="product-total">
                <Link to={'/orders/' + order.id}>
                    <div className="product-price clearfix">
                        <span className="price">
                            <span>
                                <span className="woocommerce-Price-currencySymbol">
                                    $
                                </span>
                                {order.total_price}
                            </span>
                        </span>
                    </div>
                </Link>
            </td>
            <td className="product-total">
                <Link to={'/orders/' + order.id}>
                    {order.status}
                </Link>
            </td>
        </tr>
    )
}

export default OrdersTableRow
