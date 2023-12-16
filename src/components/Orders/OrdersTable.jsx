import OrdersTableRow from "./OrdersTableRow"

function OrdersTable({ orders }) {
    return (
        <table className="cart-table">
            <thead>
                <tr>
                    <th className="product-name-thumbnail">
                        Date
                    </th>
                    <th className="product-quantity">
                        Products
                    </th>
                    <th className="product-total">
                        Total
                    </th>
                    <th className="product-remove">
                        Status
                    </th>
                </tr>
            </thead>
            {orders.map((order) => {
                return (
                    <tbody>
                        <OrdersTableRow
                            order={order}
                        />
                    </tbody>
                );
            })}
        </table>
    )
}

export default OrdersTable
