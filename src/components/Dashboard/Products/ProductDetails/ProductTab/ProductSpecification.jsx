import React from "react";

const ProductSpecifications = ({ features }) => {
	return (
		<div className="product-speciality">
			<h5>Specifications</h5>
			<ul>
				{features &&
					features.map((feature) => {
						return <li key={feature.id}>{feature.feature}</li>;
					})}
			</ul>
		</div>
	);
};

export default ProductSpecifications;
