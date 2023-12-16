import { useState } from "react";
import { updateOrderStatus } from "../../../api/services/admin/admin-services";
import { showToast } from "../../../utils/toastUtil";

const OrderEditForm = ({ order, handleShowOrders,handleDetailsTable }) => {
	const [status, setStatus] = useState(order.status);

	const handleUpdate = async (id) => {
		await updateOrderStatus(id, status);
		showToast("Order updated successfuly", "success");
		handleShowOrders()
	}

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
		onClick={()=>handleDetailsTable(order)}
		>
		Order Details
		</button>
		<div className="woocommerce-billing-fields" id="dashboard-form-wrapper">
			<h3 className="text-center">UPDATE ORDER STATUS</h3>

			<form className="dashboard-form mt-4">
				<div className="col-lg-12 col-md-12 billing-countries">
					<label>Status</label>
					<select
						className="country_to_state country_select"
						id="status"
						name="status"
						onChange={(e) => setStatus(e.target.value)}
						value={status}
					>
						<option value="pending">pending</option>
						<option value="shipped">shipped</option>
						<option value="delivered">delivered</option>
					</select>
				</div>
				<div className="col-lg-12 col-md-12">
					<button
						type="button"
						className="goru-btn auth-button d-block mx-auto"
						onClick={() => handleUpdate(order.id)}
					>
						Update
					</button>
				</div>
			</form>
		</div>
		</>
	);
};

export default OrderEditForm;
