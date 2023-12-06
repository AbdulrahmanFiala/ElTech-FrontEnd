import OrdersTableRow from "./OrdersTableRow"

function OrdersTable() {
    return (
        <table className="cart-table">
            <thead>
                <tr>
                    <th className="product-name-thumbnail">
                        Product Name
                    </th>
                    <th className="product-price">
                        Unit Price
                    </th>
                    <th className="product-quantity">
                        Quantity
                    </th>
                    <th className="product-total">Total</th>
                    <th className="product-remove">
                        Status
                    </th>
                </tr>
            </thead>
            <tbody>
                <OrdersTableRow />
                <OrdersTableRow />
            </tbody>
        </table>
    )
}

export default OrdersTable
