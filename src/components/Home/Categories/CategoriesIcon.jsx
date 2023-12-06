import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllCategories } from "../../../api/services/user/product-services";

const CategoryIcons = () => {
	const [categories, setCategories] = useState();

	useEffect(() => {
		const fetchCategories = async () => {
			const data = await getAllCategories();
			console.log(data);
			setCategories(data);
		};

		fetchCategories();
	}, []);

	// const categories = [
	// 	"flaticon-smart-watch",
	// 	"flaticon-drone",
	// 	"flaticon-console",
	// 	"flaticon-smartphone",
	// 	"flaticon-television",
	// 	"flaticon-headphones",
	// 	"flaticon-photo-camera",
	// 	"flaticon-wifi-router",
	// 	"flaticon-pc",
	// ];

	// return categories.map((category, index) => (
	// 	<div key={category} className="col-lg-2 col-md-4">
	// 		<Link to="#" className="single-cate">
	// 			<i className={category}></i>
	// 		</Link>
	// 	</div>
	// ));
	return (
		<>
			{categories &&
				categories.map((category) => (
					<div key={category.id} className="col-lg-2 col-md-4">
						<Link
							to={`/category/${category.id}`}
							className="single-cate"
						>
							<img src={category.image} alt="" />
						</Link>
					</div>
				))}
		</>
	);
};

export default CategoryIcons;
