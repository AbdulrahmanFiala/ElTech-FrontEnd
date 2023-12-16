import { useEffect, useState } from "react";

import { getFeaturedProducts } from "../../api/services/user/product-services";

import Scroll from "../../assets/images/home/scroll.png";
import Layer1 from "../../assets/images/home/layer1.jpg";
import ScrollButton from "../../components/Home/Slider/ScrollButton";
import ItemCounter from "../../components/Home/Slider/ItemCounter";
import SliderItem from "../../components/Home/Slider/SliderItem/SliderItem";

const Slider = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const data = await getFeaturedProducts();
			console.log(data);
			console.log(data.results);
			setProducts(data.results);
		};

		fetchProducts();
	}, []);

	useEffect(() => {
		if (products) {
			var revapi = window
				.jQuery("#rev_slider_1")
				.show()
				.revolution({
					delay: 7000,
					responsiveLevels: [1200, 1140, 778, 480],
					gridwidth: [1140, 920, 700, 380],
					sliderLayout: "fullscreen",
					navigation: {
						arrows: {
							enable: true,
							style: "uranus",
							hide_onmobile: false,
							hide_onleave: false,
							left: {
								h_align: "right",
								v_align: "bottom",
								h_offset: 208,
								v_offset: 100,
							},
							right: {
								h_align: "right",
								v_align: "bottom",
								h_offset: 130,
								v_offset: 100,
							},
						},
					},
				});
			revapi.one("revolution.slide.onloaded", function () {
				var currentSlide = parseInt(revapi.revcurrentslide(), 10) + 1;
				currentSlide =
					currentSlide < 10 ? "0" + currentSlide : currentSlide;
				var totalSlides = revapi.revmaxslide();
				totalSlides =
					totalSlides < 10 ? "0" + totalSlides : totalSlides;
				window.$(".slider-counter .total-item").html(totalSlides);
				window.$(".slider-counter .current-item").html(currentSlide);
			});
			revapi.on("revolution.slide.onafterswap", function (event, data) {
				var currentSlide = revapi.revcurrentslide();
				currentSlide =
					currentSlide < 10 ? "0" + currentSlide : currentSlide;
				window.$(".slider-counter .current-item").html(currentSlide);
			});
		}
	}, [products]);

	if (!products || products.length === 0) {
		return (
			<section className="slider-01 d-flex align-items-center justify-content-center">
				<ScrollButton
					ScrollImage={Scroll}
					content={"scroll to explore"}
					to={"#coupone"}
				/>
				<h1 className="text-center">
					Sorry, there are no featured products to show!
				</h1>
			</section>
		);
	}

	return (
		<section className="slider-01">
			<ScrollButton
				ScrollImage={Scroll}
				content={"scroll to explore"}
				to={"#coupone"}
			/>
			<ItemCounter />
			<div className="rev_slider_wrapper">
				<div
					id="rev_slider_1"
					className="rev_slider fullwidthabanner"
					style={{ display: "none" }}
					data-version="5.4.1"
				>
					<ul>
						{products &&
							products.map((product) => {
								return (
									<SliderItem
										key={product.id}
										itemImage={product.thumbnail.image}
										itemTitle={product.name}
										itemDescription={product.description}
										itemId={product.id}
									/>
								);
							})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Slider;
