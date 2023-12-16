import React from "react";

const ProductPrice = ({ product }) => {
	return (
		<div className="product-price clearfix">
			<span className="price">
				{/* <del className={product.is_on_sale ? "" : "d-none"}>
					<span>
						<span
							className="woocommerce-Price-currencySymbol"
							style={{ textDecoration: "line-through" }}
						>
							${product.price}
						</span>
					</span>
				</del> */}
				{product.is_on_sale && (
					<span
						className="woocommerce-Price-currencySymbol"
						style={{
							textDecoration: "line-through",
							marginRight: "5px",
						}}
					>
						${product.price}
					</span>
				)}

				<span className="woocommerce-Price-currencySymbol">
					$
					{/* {product.is_on_sale
						? (
								product.price *
								((100 - product.sale_amount) / 100)
						  ).toFixed(2)
						: product.price} */}
					{product.is_on_sale
						? product.discount_price
						: product.price}
				</span>
				{/* <ins>
					<span>
						<span className="woocommerce-Price-currencySymbol">
							$
							{product.is_on_sale
								? (
										product.price *
										((100 - product.sale_amount) / 100)
								  ).toFixed(2)
								: product.price}
						</span>
					</span>
				</ins> */}
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
