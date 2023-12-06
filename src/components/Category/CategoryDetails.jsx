import { useState } from "react";

import ShopDetailsCategories from "../Shop/ShopDetails/ShopDetailsCategories";
import NormalProductCard from "../Shared/NormalProductCard/NormalProductCard";
import ShopPagination from "../Shop/ShopPagination/ShopPagination";

const CategoryDetails = ({ products }) => {
	const [currentPage, setCurrentPage] = useState(0);

	const handlePageClick = (data) => {
		let selected = data.selected;
		setCurrentPage(selected);
	};

	return (
		<div className="container-fluid">
			<ShopDetailsCategories />

			<div className="row">
				{products.results &&
					products.results.map((product) => (
						<NormalProductCard key={product.id} product={product} />
					))}

				{!products && <h1>No Products in this category.</h1>}
			</div>
			<ShopPagination
				pageCount={Math.ceil(products.count / 12)}
				onPageChange={handlePageClick}
			/>
		</div>
	);
};

export default CategoryDetails;
