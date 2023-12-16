import { useState, useEffect } from "react";

import {
	updateLatestWeekly,
	getProducts,
} from "../../../api/services/user/product-services";
import { showToast } from "../../../utils/toastUtil";

const WeeklyEditForm = ({
	weeklyDeal,
	handleShowOrders,
	handleDetailsTable,
}) => {
	const [dealTime, setDealTime] = useState("");
	const [productId, setProductId] = useState("");
	const [isFormValid, setIsFormValid] = useState(false);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setIsFormValid(dealTime && productId);
	}, [dealTime, productId]);

	const handleUpdate = async (id) => {
		await updateLatestWeekly(id, dealTime, productId);
		showToast("Order updated successfuly", "success");
		handleShowOrders();
	};

	const fetchProducts = async (page = 1) => {
		const response = await getProducts({ page });
		setProducts((prevProducts) => [...prevProducts, ...response.results]);

		if (response.next) {
			fetchProducts(page + 1);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<>
			<button
				className="guru-btn mb-5"
				id="create-btn"
				onClick={handleShowOrders}
				style={{ marginRight: "10px" }}
			>
				Back
			</button>
			{/* <button
		className="guru-btn mb-5"
		id="create-btn"
		onClick={()=>handleDetailsTable(weeklyDeal)}
		>
		Product Details
		</button> */}
			<div
				className="woocommerce-billing-fields"
				id="dashboard-form-wrapper"
			>
				<h3 className="text-center">UPDATE WEEKLY DEAL</h3>

				<form className="d-flex justify-content-center">
					<div className="row m-3 w-50 ">
						<div className="col-lg-12 col-md-12 billing-countries">
							<label>Deal Time</label>
							<input
								type="date"
								id="dealTime"
								name="dealTime"
								placeholder={weeklyDeal.deal_time}
								onChange={(e) => setDealTime(e.target.value)}
								required="true"
							/>
						</div>

						<div className="col-lg-12 col-md-12 billing-countries">
							{/* <label>Product ID</label>
				<input
						type="number"
						id="productId"
						name="productId"
						placeholder={weeklyDeal.product.id}
						value={productId}
						onChange={(e) => setProductId(e.target.value)}
						required="true"
					  /> */}
							<label>Product</label>
							<select
								className="country_to_state country_select"
								id="billing_country"
								name="category"
								onChange={(e) => setProductId(e.target.value)}
								value={productId}
							>
								<option value="0">---</option>
								{products.map((product) => (
									<option key={product.id} value={product.id}>
										{product.name}
									</option>
								))}
							</select>
						</div>
						<div className="col-lg-12 col-md-12">
							<button
								type="button"
								className="goru-btn auth-button d-block mx-auto"
								onClick={() => handleUpdate(weeklyDeal.id)}
								disabled={!isFormValid}
							>
								Update
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default WeeklyEditForm;
