import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getSingleCategory } from "../../api/services/user/product-services";

import CategoryBanner from "../../components/Category/CategoryBanner";
import ShopPagination from "../../components/Shop/ShopPagination/ShopPagination";
import CategoryDetails from "../../components/Category/CategoryDetails";

const ShopLayout = () => {
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState({});
	const { id } = useParams();

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
	}, [id]);
	return (
		<>
			{category && <CategoryBanner category={category} />}
			<section className="shop-fullwidth">
				<CategoryDetails products={products} />
				{/* <ShopPagination /> */}
			</section>
		</>
	);
};

export default ShopLayout;
