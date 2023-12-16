import React, { useEffect, useState } from 'react';
import { fetchAllOrders } from "../../../api/services/admin/admin-services";
import OrdersTableRow from './OrdersTableRow';

const OrdersTable = ({ handleDetailsTable, handleEditClick }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const ordersData = await fetchAllOrders(); // Add 1 to pageNumber for API's page numbering
                setOrders(ordersData);
            } catch (error) {
                console.error("Error fetching all orders:", error.message);
            }
        };

        fetchOrders();
    });


    return (
        <table className="cart-table">
            <thead>
                <tr>
                    <th className="product-total">
                        ID
                    </th>
                    <th className="product-total">
                        User
                    </th>
                    <th className="product-total">
                        Date
                    </th>
                    <th className="product-quantity">
                        Products
                    </th>
                    <th className="product-total">
                        Total
                    </th>
                    <th className="product-total">
                        Status
                    </th><th className="product-total">
                        Edit
                    </th>
                </tr>
            </thead>
            {orders.map((order) => {
                return (
                    <tbody>
                        <OrdersTableRow
                            handleDetailsTable={handleDetailsTable}
                            handleEditClick={handleEditClick}
                            order={order}
                        />
                    </tbody>
                );
            })}
        </table>
    );
};


export default OrdersTable;