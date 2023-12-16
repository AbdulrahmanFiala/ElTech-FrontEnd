import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cartCount } from "../../services/actions/cartSlice"
import { fetchUserCart, updateCartProduct, deleteCartProduct, addCoupon } from "../../api/services/user/cart-services";

import { showToast } from '../../utils/toastUtil';

import CartTable from "../../components/Cart/CartTable";
import CartTotal from "../../components/Cart/CartTotal";
import DiscountCoupon from "../../components/Cart/DiscountCoupon";

const CartLayout = () => {
	const dispatch = useDispatch();
	const [change, setChange] = useState(0);
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState([]);
	const [subtotal, setSubtotal] = useState([]);
	dispatch(cartCount(cart.length));
	const user = useSelector((state) => state.authSlice.user);

	const handleUpdateProduct = async (productID, quantity) => {
		if (user) {
			try {
				await updateCartProduct(productID, quantity)
			} catch (error) {
				showToast(error.toString())
			}
			setChange(change + 1);
		}
		else {
			showToast('You need Login to add product to cart !');
		}
	};

	const handleDeleteProduct = async (productID) => {
		await deleteCartProduct(productID)
		setChange(change + 1);
	};

	const handleCoupon = async (code) => {
		try {
			await addCoupon(code)
			setChange(change + 1);
			showToast('Coupon added successfully!', 'success');
		} catch (error) {
			showToast(error.toString(), 'error');
		}
		
	};

	useEffect(() => {
		if (user) {
			fetchUserCart()
				.then((data) => {
					setCart(data.products.sort((a, b) => a.id - b.id));
					setTotal(data.total_price);
					setSubtotal(data.default_total_price);
				})
				.catch((err) => console.log(err));
		}
	}, [change]);

	return (
		<section className="cart-section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<form className="woocommerce-cart-form" action="#">
							<CartTable
								products={cart}
								handleDeleteProduct={handleDeleteProduct}
								handleUpdateProduct={handleUpdateProduct}
							/>
							<div className="row">
								<DiscountCoupon handleCoupon={handleCoupon} />
								<CartTotal
									total={total}
									subtotal={subtotal}
									products={cart}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CartLayout;
