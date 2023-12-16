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

	if (!categories || categories.length === 0) {
		return (
			<div className="col-lg-12">
				<h2 className="text-center">
					Sorry, there are no categories to show!
				</h2>
			</div>
		);
	}

	return (
		<>
			{categories &&
				categories.map((category) => (
					<div key={category.id} className="col-lg-2 col-md-4">
						<Link
							to={`/category/${category.id}`}
							className="single-cate"
						>
							{/* <p>{category.name}</p> */}
							<p>
								{category.name.length > 12
									? category.name.substring(0, 12) + "..."
									: category.name}
							</p>
							<img src={category.image} alt="" />
						</Link>
					</div>
				))}
		</>
	);
};

export default CategoryIcons;
