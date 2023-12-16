import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
	fetchUserCart,
	addCartProduct,
} from "../../api/services/user/cart-services";

import { cartCount } from "../../services/actions/cartSlice";

import { showToast } from "../../utils/toastUtil";
import { getProducts } from "../../api/services/user/product-services";
// import { getTrendingProducts } from "../../api/services/user/product-services";

// Importing ProductsRow component from Trending subdirectory in components folder
import ProductsRow from "../../components/Home/Trending/ProductsRow";
import ProductCard from "../../components/Home/Trending/ProductCard";

// Importing an image asset (shape2) from assets stored in project directory
import shape2 from "../../assets/images/home/shape2.png";

const Trending = () => {
	const [products, setProducts] = useState([]);

	const [cart, setCart] = useState([]);
	const [change, setChange] = useState(0);
	const dispatch = useDispatch();
	dispatch(cartCount(cart.length));
	const user = useSelector((state) => state.authSlice.user);
	const [refresh, setRefresh] = useState(false);

	const toggleRefresh = () => {
		setRefresh(!refresh);
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

	const fetchProducts = async () => {
		const data = await getProducts({ is_trending: 1 });
		console.log(data);

		if (
			data &&
			data.results &&
			JSON.stringify(data) !== JSON.stringify(products)
		) {
			setProducts(data.results);
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

		fetchProducts();
	}, [change]);

	useEffect(() => {
		var trending_slider = window.$(".trending-slider");

		if (trending_slider.length > 0) {
			trending_slider.owlCarousel({
				loop: false,
				margin: 0,
				responsiveClass: true,
				dots: false,
				smartSpeed: 700,
				animateIn: "slideInRight",
				animateOut: "slideOutRight",
				nav: true,
				navText: [
					'<i class="twi-long-arrow-alt-left1"></i>',
					'<i class="twi-long-arrow-alt-right1"></i>',
				],
				items: 1,
			});
		}
	}, [products]);

	useEffect(() => {
		fetchProducts();
	}, [refresh]);

	return (
		<section
			className="trending-section"
			style={{
				backgroundImage: `url(${shape2})`,
			}}
		>
			<div className="sec-heading rotate-tb">
				Trending <span> Products</span>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h2 className="sec-title">Trending Products</h2>
						<p className="sec-desc">
							Discover the products that are trending right now.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						{!products.length ? (
							<h1>
								Sorry, there are no trending products to show!
							</h1>
						) : (
							<div className="trending-slider owl-carousel">
								{Array.from(
									{ length: Math.ceil(products.length / 2) },
									(_, index) => (
										<div className="row" key={index}>
											{products
												.slice(index * 2, index * 2 + 2)
												.map((product) => (
													<div
														key={product.id}
														className="col-lg-6 col-md-6"
													>
														<ProductCard
															product={product}
															handleAddProductToCart={
																handleAddProductToCart
															}
															toggleRefresh={
																toggleRefresh
															}
														/>
													</div>
												))}
										</div>
									)
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Trending;
