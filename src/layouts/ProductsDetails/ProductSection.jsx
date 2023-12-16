import React from "react";
import ItemDetails from "../../components/ProductsDetails/ProductSection/ItemDetails";
import ProductTab from "../../components/ProductsDetails/ProductsTab/ProductTab";
import RelatedProducts from "../../components/ProductsDetails/RelatedProducts/RelatedProducts";

const ProductSection = ({
	product,
	handleAddProductToCart,
	handleUpdateProductToCart,
	handleQuantity,
	inCart,
	quantity,
	toggleRefresh,
}) => {
	return (
		<section className="single-product-section">
			<div className="container">
				<ItemDetails
					product={product}
					handleAddProductToCart={handleAddProductToCart}
					handleUpdateProductToCart={handleUpdateProductToCart}
					handleQuantity={handleQuantity}
					inCart={inCart}
					quantity={quantity}
					toggleRefresh={toggleRefresh}
				/>
				<ProductTab product={product} toggleRefresh={toggleRefresh} />
				{/* <RelatedProducts /> */}
			</div>
		</section>
	);
};

export default ProductSection;
