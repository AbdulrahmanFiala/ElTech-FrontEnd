import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import { fetchUserCart, fetchCartProduct, updateCartProduct } from "../api/services/user/cart-services";

import { cartCount } from "../services/actions/cartSlice"

import { showToast } from '../utils/toastUtil';

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
	const [change, setChange] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();
	dispatch(cartCount(cart.length));

	const handleQuantity = (flag) => {
		if (flag == true){
			if (quantity >= product.stock) {
				setQuantity( product.stock)
				showToast("There is no more products in stock !")
			}
			else {
			setQuantity(quantity + 1); 
			}
		}
		else {
			if ( quantity <= 1 ) {
				setQuantity(1)
			}
			else {
			setQuantity(quantity - 1);
			}
		}
	}

	const handleUpdateProductToCart = async (quantity) => {
		try {
			await updateCartProduct(id, quantity)
			showToast('product added to cart successfully', 'success');
		} catch (error) {
			showToast(error.toString())
		}
		setChange(change + 1);
	};

	useEffect(() => {
		fetchCartProduct(id).then((data) => {
			setQuantity(data.quantity);
		})
		.catch((err) => console.log(err));
		
		fetchUserCart()
			.then((data) => {
				setCart(data.products);
			})
			.catch((err) => console.log(err));

		const fetchProduct = async () => {
			try {
				const data = await getSingleProduct(id);
				console.log(data);
				setProduct(data);
				setCategory(data.category);
			} catch (error) {
				console.error(error);
			}
		};

		fetchProduct();
	}, [id, change]);

	return (
		<>
			<Header className="inner-header" />
			<PopUpSearch />
			{category && <PageBanner section="Shop" category={category} />}
			{product && <ProductSection
				product={product}
				handleUpdateProductToCart={handleUpdateProductToCart}
				handleQuantity = {handleQuantity}
				quantity = {quantity}
				/>}
			<Footer className="inner-footer" />
		</>
	);
}
