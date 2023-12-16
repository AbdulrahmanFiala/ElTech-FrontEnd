import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { cartCount } from "../../services/actions/cartSlice"
import { fetchUserCart } from "../../api/services/user/cart-services";
import { fetchUserOrder } from "../../api/services/user/order_services";

import OrdersDetailsTable from "../../components/Orders/OrdersDetailsTable"

function MyOrdersDetails() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [cart, setCart] = useState([]);
	const [order, setOrder] = useState([]);
	dispatch(cartCount(cart.length));
	const user = useSelector((state) => state.authSlice.user);

	useEffect(() => {
		if (user) {
			fetchUserCart()
				.then((data) => {
					setCart(data.products);
				})
				.catch((err) => console.log(err));

			fetchUserOrder(id)
				.then((data) => {
					setOrder(data);
				})
				.catch((err) => console.log(err));
		}
	}, [id]);

	return (
		<section className="cart-section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						{order != 0 &&
							<OrdersDetailsTable order={order} />
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default MyOrdersDetails
