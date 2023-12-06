import React from "react";

const ProductPrice = ({ price }) => {
	return (
		<div className="product-price clearfix">
			<span className="price">
				<span>
					<span className="woocommerce-Price-currencySymbol">$</span>
					{Number(price).toFixed(2)}
				</span>
			</span>
		</div>
	);
};

export default ProductPrice;
