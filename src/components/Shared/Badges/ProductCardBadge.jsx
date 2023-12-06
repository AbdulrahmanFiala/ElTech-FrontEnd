const ProductCardBadge = ({ product }) => {
	let badgeTitle, badgeClass;
	if (product && product.is_on_sale) {
		badgeTitle = "Sale";
		badgeClass = "sale";
	}
	if (product && product.is_hot) {
		badgeTitle = "Hot";
		badgeClass = "hot";
	}
	if (product && product.stock === 0) {
		badgeTitle = "Out of Stock";
		badgeClass = "out-of-stock";
	}
	// const badgeTitle =
	// 	product.is_on_sale === "sale"
	// 		? "Sale"
	// 		: badgeClass === "hot"
	// 		? "Hot"
	// 		: "Out of Stock";
	return (
		<>
			{product && (
				<div className="pro-badge">
					<p className={badgeClass}>{badgeTitle}</p>
				</div>
			)}
		</>
	);
};

export default ProductCardBadge;
