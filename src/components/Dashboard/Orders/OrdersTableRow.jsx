import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

function OrdersTableRow({ order, handleDetailsTable, handleEditClick }) {
    const parsedDate = new Date(order.created_at);
    const formattedDate = `${parsedDate.getFullYear()} - ${(parsedDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")} - ${parsedDate.getDate().toString().padStart(2, "0")}`;

    return (
        <tr className="cart-item">
            <td
                onClick={() => handleDetailsTable(order)}
                className="product-thumbnail-title"
            >
                {order.id}
            </td>
            <td
                onClick={() => handleDetailsTable(order)}
                className="product-thumbnail-title"
            >
                {order.user.email}
            </td>
            <td
                onClick={() => handleDetailsTable(order)}
                className="product-thumbnail-title"
            >
                {formattedDate}
            </td>
            <td
                onClick={() => handleDetailsTable(order)}
                className="product-quantity clearfix"
            >
                <div className="quantityd clearfix">
                    <input
                        name="qty"
                        value={order.products.length}
                        title="Qty"
                        className="input-text qty text carqty"
                        type="text"
                    />
                </div>
            </td>
            <td
                onClick={() => handleDetailsTable(order)}
                className="product-total"
            >
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
            </td>
            <td
                onClick={() => handleDetailsTable(order)}
                className="product-total"
            >
                {order.status}
            </td>
            <td className="product-total">
                <IconButton
                    onClick={() => handleEditClick(order)}
                    color="primary"
                >
                    <EditIcon fontSize='large'/>
                </IconButton>
            </td>
        </tr>
    )
}

export default OrdersTableRow
