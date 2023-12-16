import OrdersDetailsTableRow from "./OrdersDetailsTableRow"

function OrdersDetailsTable({ order }) {
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
                    <th className="product-total">
                        Total
                    </th>
                    <th className="product-remove">
                        Status
                    </th>
                </tr>
            </thead>
            <tbody>
                {order.products.map((product) => {
                    return (
                        <OrdersDetailsTableRow
                            product={product}
                            status={order.status}
                        />
                    );
                })}
            </tbody>
        </table>
    )
}

export default OrdersDetailsTable
