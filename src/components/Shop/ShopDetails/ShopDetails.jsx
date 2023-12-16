import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../../api/services/user/product-services";
import {
	fetchUserCart,
	addCartProduct,
} from "../../../api/services/user/cart-services";

import { cartCount } from "../../../services/actions/cartSlice";

import { showToast } from "../../../utils/toastUtil";
import ShopDetailsCategories from "./ShopDetailsCategories";
import shopImageHolder370x460 from "../../../assets/images/shop/holder370x460.jpg";
import NormalProductCard from "../../Shared/NormalProductCard/NormalProductCard";
import ShopPagination from "../ShopPagination/ShopPagination";

const ShopDetails = () => {
	const [products, setProducts] = useState([]);
	const location = useLocation();
	const [currentPage, setCurrentPage] = useState(0);
	const [activeItem, setActiveItem] = useState("ALL");
	const [activeFilter, setActiveFilter] = useState("default");
	const [refresh, setRefresh] = useState(false);

	const [cart, setCart] = useState([]);
	const [change, setChange] = useState(0);
	const dispatch = useDispatch();
	dispatch(cartCount(cart.length));
	const user = useSelector((state) => state.authSlice.user);

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

	// const handlePageClick = (data) => {
	// 	let selected = data.selected;
	// 	setCurrentPage(selected);
	// 	fetchProducts({ page: selected + 1 });
	// };

	const handlePageClick = (data) => {
		let selected = data.selected;
		setCurrentPage(selected);

		let filter = { page: selected + 1 };

		if (location.state?.searchTerm) {
			filter.q = location.state.searchTerm;
		}
		fetchProducts(filter);
	};

	const handleFilterChange = async (categoryId, orderFilter) => {
		let filter = {};

		if (categoryId !== "ALL") {
			filter.category = categoryId;
		}

		if (orderFilter === "price" || orderFilter === "-price") {
			filter.ordering = orderFilter;
		} else if (orderFilter === "popular") {
			filter.is_popular = "1";
		}

		if (location.state?.searchTerm) {
			filter.q = location.state.searchTerm;
		}

		setCurrentPage(0);
		fetchProducts(filter);
	};

	const handleSelectChange = async (event) => {
		const selectedValue = event.target.value;
		handleFilterChange(activeItem, selectedValue);
	};

	// const handleCategoryClick = (categoryId) => {
	// 	handleFilterChange(categoryId, activeFilter);
	// 	setActiveItem(categoryId);
	// };

	// const handleCategoryClick = (categoryId) => {
	// 	console.log("Here!");
	// 	setCurrentPage(0);
	// 	handleFilterChange(categoryId, activeFilter);
	// 	setActiveItem(categoryId);
	// 	if (location.state?.searchTerm) {
	// 		let filter = { q: location.state.searchTerm };
	// 		if (categoryId !== "ALL") {
	// 			filter.category = categoryId;
	// 		}
	// 		fetchProducts(filter);
	// 	}
	// };

	const handleCategoryClick = (categoryId) => {
		setCurrentPage(0);
		if (location.state?.searchTerm) {
			let filter = { q: location.state.searchTerm };
			if (categoryId !== "ALL") {
				filter.category = categoryId;
			}
			fetchProducts(filter);
		} else {
			handleFilterChange(categoryId, activeFilter);
		}
		setActiveItem(categoryId);
	};

	// const handleCategoryClick = (categoryId) => {
	// 	setCurrentPage(0);
	// 	let filter = {};
	// 	if (location.state?.searchTerm) {
	// 		filter.q = location.state.searchTerm;
	// 	}
	// 	if (categoryId !== "ALL") {
	// 		filter.category = categoryId;
	// 	}
	// 	fetchProducts(filter);
	// 	setActiveItem(categoryId);
	// };

	// useEffect(() => {
	// 	if (user) {
	// 		fetchUserCart()
	// 			.then((data) => {
	// 				setCart(data.products);
	// 			})
	// 			.catch((err) => console.log(err));
	// 	}

	// 	if (
	// 		location.pathname.includes("/search") &&
	// 		location.state?.searchTerm
	// 	) {
	// 		setCurrentPage(0);
	// 		fetchProducts({ q: location.state.searchTerm });
	// 	} else {
	// 		fetchProducts();
	// 	}
	// }, [location, change, refresh]);

	useEffect(() => {
		if (user) {
			fetchUserCart()
				.then((data) => {
					setCart(data.products);
				})
				.catch((err) => console.log(err));
		}

		if (
			location.pathname.includes("/search") &&
			location.state?.searchTerm &&
			activeItem === "ALL"
		) {
			setCurrentPage(0);
			fetchProducts({ q: location.state.searchTerm });
		} else if (activeItem === "ALL") {
			fetchProducts();
		}
	}, [location, change, refresh, activeItem]);

	const fetchProducts = async (filter = {}) => {
		const fetchedProducts = await getProducts(filter);
		setProducts(fetchedProducts);
	};

	return (
		<div className="container-fluid">
			<ShopDetailsCategories
				onSortChange={handleSelectChange}
				onCategoryChange={handleCategoryClick}
				activeItem={activeItem}
				setActiveItem={setActiveItem}
			/>

			<div className="row">
				{(!products.results || !products.results.length) && (
					<h1>Sorry, there are no products to show!</h1>
				)}
				{products.results &&
					products.results.map((product) => (
						<NormalProductCard
							key={product.id}
							product={product}
							handleAddProductToCart={handleAddProductToCart}
							toggleRefresh={toggleRefresh}
						/>
					))}

				{/* {!products && <h1>No Products matched your search term.</h1>} */}
			</div>
			{products.results && products.results.length !== 0 && (
				<ShopPagination
					pageCount={Math.ceil(products.count / 12)}
					onPageChange={handlePageClick}
					currentPage={currentPage}
				/>
			)}
		</div>
	);
};

export default ShopDetails;
