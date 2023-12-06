import React from "react";
import products from "../../../utils/demoProducts";
import NormalProductCard from "../../Shared/NormalProductCard/NormalProductCard";

const RelatedProducts = () => {
	return (
		<div className="row">
			<div className="col-lg-12">
				<div className="related-product-area">
					<h3>Related Products</h3>
					<div className="related-slider owl-carousel">
						{/* {products.map((product, index) => (
							<NormalProductCard
								key={index}
								product={product}
								isPopularOrRelated={true}
							/>
						))} */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RelatedProducts;
