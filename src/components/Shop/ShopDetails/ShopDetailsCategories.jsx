import { useState, useEffect } from "react";

import { getAllCategories } from "../../../api/services/user/product-services";

const ShopDetailsCategories = ({
	onSortChange,
	activeItem,
	setActiveItem,
	onCategoryChange,
}) => {
	const [categories, setCategories] = useState([]);
	// const [activeItem, setActiveItem] = useState("ALL");

	useEffect(() => {
		const fetchCategories = async () => {
			const data = await getAllCategories();
			setCategories(data);
		};

		fetchCategories();
	}, []);

	// const handleCategoryClick = (categoryId) => {
	// 	setActiveItem(categoryId);
	// };

	return (
		<div className="row">
			<div className="col-md-7">
				<div className="product-cate">
					<h5>Categories</h5>
					{/* <ul>
						<li>
							<a className="active" href="#">
								All
							</a>
						</li>
						<li>
							<a href="#">Smartphones</a>
						</li>
						<li>
							<a href="#">Computers</a>
						</li>
						<li>
							<a href="#">Cameras</a>
						</li>
						<li>
							<a href="#">On Sale</a>
						</li>
						<li>
							<a href="#">Others</a>
						</li>
					</ul> */}
					<ul>
						<li>
							<a
								className={activeItem === "ALL" ? "active" : ""}
								onClick={() => onCategoryChange("ALL")}
								href="#"
							>
								All
							</a>
						</li>
						{categories &&
							categories.map((category) => (
								<li key={category.id}>
									<a
										className={
											activeItem === category.id
												? "active"
												: ""
										}
										onClick={() =>
											onCategoryChange(category.id)
										}
										href="#"
									>
										{category.name}
									</a>
								</li>
							))}
					</ul>
				</div>
			</div>

			<div className="col-md-5">
				<div className="sort-view">
					{/* <a className="view-mode active" href="#">
						<i className="twi-th"></i>
					</a>
					<a className="view-mode" href="#">
						<i className="twi-bars"></i>
					</a> */}
					<div className="sorts">
						<select name="sort" onChange={onSortChange}>
							<option selected="selected" value="default">
								Default Sorting
							</option>
							<option value="price">low to high</option>
							<option value="-price">high to low</option>
							<option value="popular">Popular Products</option>
						</select>
						<i className="twi-angle-down1"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopDetailsCategories;
