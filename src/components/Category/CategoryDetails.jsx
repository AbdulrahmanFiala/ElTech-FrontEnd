import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
	getProducts,
	getSingleCategory,
} from "../../api/services/user/product-services";

import {
	fetchUserCart,
	addCartProduct,
} from "../../api/services/user/cart-services";

import { cartCount } from "../../services/actions/cartSlice";

import { ProductsContext } from "../../layouts/Category/ShopLayout";

import { showToast } from "../../utils/toastUtil";

import ShopDetailsCategories from "../Category/ShopDetailsCategories";
import NormalProductCard from "../Shared/NormalProductCard/NormalProductCard";
import ShopPagination from "../Shop/ShopPagination/ShopPagination";

const CategoryDetails = ({ id, updateCategory }) => {
	const [currentPage, setCurrentPage] = useState(0);
	const [category, setCategory] = useState({});
	const [products, setProducts] = useState([]);
	const location = useLocation();
	const [activeItem, setActiveItem] = useState("ALL");
	const [activeFilter, setActiveFilter] = useState("default");
	const [refresh, setRefresh] = useState(false);
	const [cart, setCart] = useState([]);
	const [change, setChange] = useState(0);
	const dispatch = useDispatch();
	// dispatch(cartCount(cart.length));
	dispatch(cartCount(cart ? cart.length : 0));

	const toggleRefresh = () => {
		setRefresh(!refresh);
	};

	const handleAddProductToCart = async (productID, quantity) => {
		try {
			await addCartProduct(productID, quantity);
			showToast("product added to cart successfully", "success");
		} catch (error) {
			showToast(error.toString());
		}
		setChange(change + 1);
	};

	useEffect(() => {
		const fetchCategory = async () => {
			try {
				const data = await getSingleCategory(id);
				console.log(data);
				setCategory(data);
				setProducts(data.products);
			} catch (error) {
				console.error(error);
			}
		};

		fetchCategory();
	}, [id, refresh]);

	const handlePageClick = (data) => {
		let selected = data.selected;
		setCurrentPage(selected);
		fetchProducts({ page: selected + 1 });
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

		fetchProducts(filter);
	};

	const handleSelectChange = async (event) => {
		const selectedValue = event.target.value;
		handleFilterChange(activeItem, selectedValue);
	};

	const handleCategoryClick = (categoryId) => {
		handleFilterChange(categoryId, activeFilter);
		setActiveItem(categoryId);
		updateCategory(categoryId, () => setCurrentPage(0));
	};

	useEffect(() => {
		fetchUserCart()
			.then((data) => {
				setCart(data.products);
			})
			.catch((err) => console.log(err));
	}, [change]);

	const fetchProducts = async (filter = {}) => {
		const fetchedProducts = await getProducts(filter);
		setProducts(fetchedProducts);
	};

	// const handlePageClick = (data) => {
	// 	let selected = data.selected;
	// 	setCurrentPage(selected);
	// };

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
					<h1>
						Sorry, there are no products to show in this category!
					</h1>
				)}
				{products &&
					products.results &&
					products.results.map((product) => (
						<NormalProductCard
							key={product.id}
							product={product}
							handleAddProductToCart={handleAddProductToCart}
							toggleRefresh={toggleRefresh}
						/>
					))}
			</div>
			{products && products.results && products.results.length !== 0 && (
				<ShopPagination
					pageCount={Math.ceil(products.count / 12)}
					onPageChange={handlePageClick}
				/>
			)}
		</div>
	);
};

export default CategoryDetails;
