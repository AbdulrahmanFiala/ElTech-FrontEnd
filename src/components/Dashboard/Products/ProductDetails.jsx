import ItemDetails from "./ProductDetails/ItemDetails";
import ProductTab from "./ProductDetails/ProductTab";

const ProductDetails = ({ product }) => {

	return (
		<>
			{/* <SideNav  /> */}
			<section className="single-product-section">
				<div className="container">
					{product && (
						<>
							<ItemDetails product={product} />
							<ProductTab product={product} />
						</>
					)}

				</div>
			</section>

		</>
	);
};

export default ProductDetails;
