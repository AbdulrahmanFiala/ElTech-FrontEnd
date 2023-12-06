import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { getProducts } from "../../api/services/user/product-services";
import {fetchUserCart, addCartProduct } from "../../api/services/user/cart-services";

import { cartCount } from "../../services/actions/cartSlice"

import { showToast } from '../../utils/toastUtil';
import NavBar from "../../components/Home/Popular/NavBar";
import { popularProducts } from "../../utils/demoProducts";
import NormalProductCard from "../../components/Shared/NormalProductCard/NormalProductCard";

const Popular = () => {
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


	const fetchProducts = async (categoryId) => {
		let data = [];
		if (Number.isInteger(categoryId)) {
			data = await getProducts({
				is_popular: "1",
				category: categoryId,
			});
		} else {
			data = await getProducts({
				is_popular: "1",
			});
		}

		console.log(data);
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

	const handleClick = (categoryId) => {
		console.log("Fetching products for category" + categoryId);
		if (categoryId) {
			fetchProducts(categoryId);
		} else {
			fetchProducts();
		}
	};

	useEffect(() => {		
		fetchUserCart()
			.then((data) => {
				setCart(data.products);
			})
	}, [change]);


	useEffect(() => {
		fetchProducts();
	}, []);

	useEffect(() => {
		const popular_tab_slider = window.$(".popular-tab-slider");
		const popular_tab_slider_two = window.$(".popular-tab-slider-two");

		popular_tab_slider.owlCarousel({
			loop: false,
			margin: 30,
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
			items: 3,
			responsive: {
				0: {
					items: 1,
				},
				700: {
					items: 2,
				},
				992: {
					items: 3,
				},
			},
		});

		popular_tab_slider_two.owlCarousel({
			loop: false,
			margin: 40,
			responsiveClass: true,
			dots: false,
			smartSpeed: 700,
			animateIn: "slideInLeft",
			animateOut: "slideOutRight",
			nav: true,
			navText: [
				'<i class="twi-long-arrow-alt-left1"></i>',
				'<i class="twi-long-arrow-alt-right1"></i>',
			],
			items: 4,
			responsive: {
				0: {
					items: 1,
				},
				700: {
					items: 2,
					margin: 30,
				},
				992: {
					items: 3,
					margin: 30,
				},
				1200: {
					items: 4,
				},
			},
		});
	}, [products]);

	return (
		<section className="popular-section">
			{/*Shape Round*/}
			<div className="shape-round">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			{/* Shape Round */}
			{/* Section Heading */}
			<div className="sec-heading rotate-rl">
				Most <span>Popular</span>
			</div>
			{/* Section Heading */}
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h2 className="sec-title">Most Popular</h2>
						<NavBar handleClick={handleClick} />
						{/* <div className="tab-content">
              FIXME: Useless code built supposedly for responsiveness
              <div
                className="tab-pane fade show in active"
                id="all"
                role="tabpanel"
              >
              */}

						<div className="popular-tab-slider owl-carousel">
							{/* {popularProducts.map((productGroup, index) => (
								<div key={index} className="pp-single-slider">
									{productGroup.map((product, idx) => (
										<NormalProductCard
											key={idx}
											product={product}
											isPopularOrRelated={true}
										/>
									))}
								</div>
							))} */}
							{products &&
								products.map((productPair, index) => (
									<div
										key={index}
										className="pp-single-slider"
									>
										{productPair.map((product) => (
											<NormalProductCard
												key={product.id}
												product={product}
												isPopularOrRelated={true}
												handleAddProductToCart={handleAddProductToCart}
											/>
										))}
									</div>
								))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Popular;
