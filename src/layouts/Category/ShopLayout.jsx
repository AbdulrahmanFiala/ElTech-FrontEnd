import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getSingleCategory } from "../../api/services/user/product-services";

import CategoryBanner from "../../components/Category/CategoryBanner";
import ShopPagination from "../../components/Shop/ShopPagination/ShopPagination";
import CategoryDetails from "../../components/Category/CategoryDetails";

export const ProductsContext = React.createContext();

const ShopLayout = () => {
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState({});
	const { id } = useParams();

	const updateCategory = async (categoryId, resetPagination) => {
		resetPagination();
		try {
			const data = await getSingleCategory(categoryId);
			setCategory(data);
		} catch (error) {
			console.error(error);
		}
	};

	// useEffect(() => {
	// 	const fetchCategory = async () => {
	// 		try {
	// 			const data = await getSingleCategory(id);
	// 			console.log(data);
	// 			setCategory(data);
	// 			setProducts(data.products);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};

	// 	fetchCategory();
	// }, [id]);

	useEffect(() => {
		const fetchCategory = async () => {
			console.log(id);
			if (id === "ALL") {
				setCategory({ name: "ALL" });
				// setProducts to all products or an empty array depending on your requirement
			} else {
				try {
					const data = await getSingleCategory(id);
					console.log(data);
					setCategory(data);
					setProducts(data.products);
				} catch (error) {
					console.error(error);
				}
			}
		};

		fetchCategory();
	}, [id]);

	return (
		<>
			{category && category.name && (
				<CategoryBanner category={category} />
			)}
			<section className="shop-fullwidth">
				{/* <ProductsContext.Provider value={products}> */}
				<CategoryDetails
					products={products}
					id={id}
					updateCategory={updateCategory}
				/>
				{/* <ShopPagination /> */}
				{/* </ProductsContext.Provider> */}
			</section>
		</>
	);
};

export default ShopLayout;
