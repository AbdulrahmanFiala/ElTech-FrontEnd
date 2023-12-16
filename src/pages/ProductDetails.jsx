import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {
	fetchUserCart,
	fetchCartProduct,
	addCartProduct,
	updateCartProduct,
} from "../api/services/user/cart-services";

import { cartCount } from "../services/actions/cartSlice";

import { showToast } from "../utils/toastUtil";

import { getSingleProduct } from "../api/services/user/product-services";

import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import PageBanner from "../components/Shared/PageBanner/PageBanner";
import Footer from "../layouts/Home/Footer";
import ProductSection from "../layouts/ProductsDetails/ProductSection";

export default function ProductDetails() {
	const [product, setProduct] = useState({});
	const [category, setCategory] = useState({});
	const { id } = useParams();

	const [cart, setCart] = useState([]);
	const [inCart, setInCart] = useState(false);
	const [change, setChange] = useState(0);
	const [refresh, setRefresh] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();
	dispatch(cartCount(cart.length));
	const user = useSelector((state) => state.authSlice.user);

	const toggleRefresh = () => {
		setRefresh(!refresh);
	};

	const handleQuantity = (flag) => {
		if (flag == true) {
			if (quantity >= product.stock) {
				setQuantity(product.stock);
				showToast("There is no more products in stock !", "error");
			} else {
				setQuantity(quantity + 1);
			}
		} else {
			if (quantity <= 1) {
				setQuantity(1);
			} else {
				setQuantity(quantity - 1);
			}
		}
	};

	const isInCart = (id) => {
		if (cart.find((product) => product.id === id)) {
			return true;
		}
	};

	const handleAddProductToCart = async (productID, quantity) => {
		if (user) {
			try {
				await addCartProduct(productID, quantity);
				showToast("product added to cart successfully", "success");
			} catch (error) {
				showToast(error.toString());
			}
			setChange(change + 1);
		} else {
			showToast("You need Login to add product to cart !");
		}
	};

	const handleUpdateProductToCart = async (quantity) => {
		if (user) {
			try {
				await updateCartProduct(id, quantity);
				showToast("product added to cart successfully", "success");
			} catch (error) {
				showToast(error.toString());
			}
			setChange(change + 1);
		} else {
			showToast("You need Login to add product to cart !");
		}
	};

	const fetchProduct = async () => {
		try {
			const data = await getSingleProduct(id);
			setProduct(data);
			setCategory(data.category);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (user) {
			fetchUserCart()
				.then((data) => {
					setCart(data.products);
				})
				.catch((err) => console.log(err));
		}

		const inCart = isInCart(id);
		if (inCart) {
			fetchCartProduct(id)
				.then((data) => {
					setQuantity(data.quantity);
				})
				.catch((err) => console.log(err));
			setInCart(true);
		}

		fetchProduct();
	}, [id, change]);

	useEffect(() => {
		fetchProduct();
	}, [refresh]);

	return (
		<>
			<Header className="inner-header" />
			<PopUpSearch />
			{category && <PageBanner section="Shop" category={category} />}
			{product && (
				<ProductSection
					product={product}
					handleAddProductToCart={handleAddProductToCart}
					handleUpdateProductToCart={handleUpdateProductToCart}
					handleQuantity={handleQuantity}
					inCart={inCart}
					quantity={quantity}
					toggleRefresh={toggleRefresh}
				/>
			)}
			<Footer className="inner-footer" />
		</>
	);
}
