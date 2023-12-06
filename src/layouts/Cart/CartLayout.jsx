import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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
	dispatch(cartCount(cart.length));

	const handleUpdateProduct = async (productID, quantity) => {
		try {
			await updateCartProduct(productID, quantity)
		} catch (error) {
			showToast("There is no more products in stock !")
		}
		setChange(change + 1);
	};
	
	const handleDeleteProduct = async (productID) => {
		await deleteCartProduct(productID)
		setChange(change + 1);
	};

	const handleCoupon = async (code) => {
		await addCoupon(code)
		setChange(change + 1);
	};

	useEffect(() => {
		fetchUserCart()
			.then((data) => {
				setCart(data.products);
				setTotal(data.total_price);
			})
			.catch((err) => console.log(err));

	}, [change]);

	return (
		<section className="cart-section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<form className="woocommerce-cart-form" action="#">
							<CartTable
								products = {cart}
								handleDeleteProduct = {handleDeleteProduct}
								handleUpdateProduct = {handleUpdateProduct} 
							/>
							<div className="row">
								<DiscountCoupon handleCoupon = {handleCoupon} />
								<CartTotal total={total} />
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CartLayout;
