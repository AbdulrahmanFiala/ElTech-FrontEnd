import React from "react";

const ProductPrice = ({ product }) => {
	return (
		<div className="product-price clearfix">
			{product._is_on_sale && (
				<span className="price">
					<span
						className="woocommerce-Price-currencySymbol"
						style={{
							textDecoration: "line-through",
							marginRight: "5px",
						}}
					>
						${product.price}
					</span>
				</span>
			)}

			<span className="price">
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
			</span>

			{/* <span className="price">
				<span>
					<span className="woocommerce-Price-currencySymbol">$</span>
					{Number(product.price).toFixed(2)}
				</span>
			</span> */}
		</div>
	);
};

export default ProductPrice;
