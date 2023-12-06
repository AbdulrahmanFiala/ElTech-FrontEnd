import React from "react";

const ProductPrice = ({ product }) => {
	return (
		<div className="product-price clearfix">
			<span className="price">
				<del className={product.is_on_sale ? "" : "d-none"}>
					<span>
						<span className="woocommerce-Price-currencySymbol">
							$
						</span>
						{product.price}
					</span>
				</del>
				<ins>
					<span>
						<span className="woocommerce-Price-currencySymbol">
							$
						</span>
						{product.is_on_sale
							? (
									product.price *
									((100 - product.sale_amount) / 100)
							  ).toFixed(2)
							: product.price}
					</span>
				</ins>
			</span>
		</div>
		// <div className="product-price clearfix">
		// 	<span className="price">
		// 		<del className={productPriceAfter == null ? "d-none" : ""}>
		// 			<span>
		// 				<span className="woocommerce-Price-currencySymbol">
		// 					$
		// 				</span>
		// 				{productPriceBefore}
		// 			</span>
		// 		</del>
		// 		<ins>
		// 			<span>
		// 				<span className="woocommerce-Price-currencySymbol">
		// 					$
		// 				</span>
		// 				{productPriceAfter ?? productPriceBefore}
		// 			</span>
		// 		</ins>
		// 	</span>
		// </div>
	);
};

export default ProductPrice;
