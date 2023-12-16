import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cartCount } from "../../services/actions/cartSlice";
import { fetchUserCart } from "../../api/services/user/cart-services";
import { fetchUserOrders } from "../../api/services/user/order_services";

import OrdersTable from "../../components/Orders/OrdersTable";

function MyOrders() {
	const dispatch = useDispatch();
	const [cart, setCart] = useState([]);
	const [orders, setOrders] = useState([]);
	dispatch(cartCount(cart.length));
	const user = useSelector((state) => state.authSlice.user);

	useEffect(() => {
		if (user) {
			fetchUserCart()
				.then((data) => {
					setCart(data.products);
				})
				.catch((err) => console.log(err));

			fetchUserOrders()
				.then((data) => {
					setOrders(data);
				})
				.catch((err) => console.log(err));
		}
	}, []);

	return (
		<section className="cart-section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<form className="woocommerce-cart-form" action="#">
							<OrdersTable orders={orders} />
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MyOrders;
