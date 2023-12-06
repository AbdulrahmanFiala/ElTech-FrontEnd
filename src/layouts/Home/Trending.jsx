import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import {fetchUserCart, addCartProduct } from "../../api/services/user/cart-services";

import { cartCount } from "../../services/actions/cartSlice"

import { showToast } from '../../utils/toastUtil';
import { getProducts } from "../../api/services/user/product-services";
// import { getTrendingProducts } from "../../api/services/user/product-services";

// Importing ProductsRow component from Trending subdirectory in components folder
import ProductsRow from "../../components/Home/Trending/ProductsRow";

// Importing an image asset (shape2) from assets stored in project directory
import shape2 from "../../assets/images/home/shape2.png";

const Trending = () => {
	const [products, setProducts] = useState();

	const [cart, setCart] = useState([]);
	const [change, setChange] = useState(0);
	const dispatch = useDispatch();
	dispatch(cartCount(cart.length));

	const handleAddProductToCart = async (productID, quantity) => {
		try {
			await addCartProduct(productID, quantity)
			showToast('product added to cart successfully', 'success');
		} catch (error) {
			showToast(error.toString())
		}
		setChange(change + 1);
	};

	// useEffect(() => {
	// 	const fetchProducts = async () => {
	// 		const data = await getProducts({ is_trending: 1 });
	// 		console.log("Trending Products", data);
	// 		setProducts(
	// 			data.results.reduce((result, value, index, array) => {
	// 				if (index % 2 === 0)
	// 					result.push(array.slice(index, index + 2));
	// 				return result;
	// 			}, [])
	// 		);
	// 	};

	// 	fetchProducts();
	// });

	useEffect(() => {
		fetchUserCart()
			.then((data) => {
				setCart(data.products);
			})
			.catch((err) => console.log(err));

		const fetchProducts = async () => {
			const data = await getProducts({ is_trending: 1 });
			console.log("Trending Products", data);
			if (
				data &&
				data.results &&
				JSON.stringify(data) !== JSON.stringify(products)
			) {
				setProducts(
					data.results.reduce((result, value, index, array) => {
						if (index % 2 === 0)
							result.push(array.slice(index, index + 2));
						return result;
					}, [])
				);
			}
		};

		fetchProducts();
	}, [change]);

	useEffect(() => {
		var trending_slider = window.$(".trending-slider");

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
	}, [products]);

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
							Sed ut perspiciatis unde omnis iste natus er
							<br /> sit voluptatem accusantium dolore.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="trending-slider owl-carousel">
							{products &&
								products.map((productPair, index) => (
									<ProductsRow
										key={index}
										products={productPair}
										handleAddProductToCart={handleAddProductToCart}
									/>
								))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Trending;
