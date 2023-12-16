import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { fetchUserOrder } from "../../../api/services/admin/admin-services";

import OrdersDetailsTable from "../../Orders/OrdersDetailsTable"

function OrderDetails({  selectedOrder,orderID, handleShowOrders,handleEditClick }) {
	const [order, setOrder] = useState([]);
	const user = useSelector((state) => state.authSlice.user);

	useEffect(() => {
		if (user) {
			fetchUserOrder(orderID)
				.then((data) => {
					setOrder(data);
				})
				.catch((err) => console.log(err));
		}
	}, [orderID,user]);

	return (
		<>	
			<button
				className="guru-btn mb-5"
				id="create-btn"
				onClick={handleShowOrders}
				style={{marginRight:"10px"}}
			>
				All Orders
			</button>
			<button
				className="guru-btn mb-5"
				id="create-btn"
				onClick={() => handleEditClick(selectedOrder)}
				>
				Update Order
			</button>
			{order != 0 &&
				<OrdersDetailsTable order={order} />
			}
		</>
	)
}

export default OrderDetails
