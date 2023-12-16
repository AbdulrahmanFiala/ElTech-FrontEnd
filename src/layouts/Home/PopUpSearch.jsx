import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PopUpSearch = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			// const products = await getProductsBySearch(searchTerm);

			// Pass the products to the shop page.
			// navigate("/shop", { state: { products } });
			navigate("/search", { state: { searchTerm } });
			window.$(".popup-search-sec").removeClass("active");
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		// window.$(".search-toggles").on("click", function (e) {
		// 	e.preventDefault();
		// 	window.$(".popup-search-sec").toggleClass("active");
		// });
		window.$(".search-closer").on("click", function () {
			window.$(".popup-search-sec").removeClass("active");
		});

		window.$(".scroll-down a").on("click", function () {
			window
				.$("html, body")
				.animate(
					{ scrollTop: window.$(this.hash).offset().top - 68 },
					1000
				);
			return false;
		});
		window.$(".colse-popup").on("click", function (e) {
			e.preventDefault();
			window.$(".newsletter-popup").fadeOut("medium");
		});
	});

	return (
		<section className="popup-search-sec">
			<div className="popup-search-overlay"></div>
			<div className="overlay-popup">
				<a href="javascript:void(0);" className="search-closer">
					x
				</a>
				<div className="middle-search">
					<div className="popup-search-form">
						<form onSubmit={handleSubmit}>
							<input
								type="search"
								value={searchTerm}
								onChange={(event) =>
									setSearchTerm(event.target.value)
								}
								placeholder="Search..."
							/>
							<button type="submit">
								<i className="twi-search"></i>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PopUpSearch;
