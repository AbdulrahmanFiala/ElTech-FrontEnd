import React from "react";

import ProductSizeOptions from "./ItemDetails/SizeOptions";
// import ProductCartQty from "./ItemDetails/CartQty";
import ProductRatingReviews from "./ItemDetails/Rating";
import ProductPrice from "./ItemDetails/PriceComp";
import ProductSlider from "./ItemDetails/ImageSlider";
import ProductColorOptions from "./ItemDetails/ProductColor";

import singleProductImg from "../../../../assets/images/shop/single-product.jpg";
import s1 from "../../../../assets/images/shop/s1.png";

const ItemDetails = ({
	product,
	handleUpdateProductToCart,
	handleQuantity,
	quantity,
}) => {
	return (
		<div className="row" style={{ marginBottom: "200px" }}>
			<div className="col-lg-7 col-md-12">
				<ProductSlider product={product} />
			</div>
			<div className="col-lg-5 col-md-12">
				<div className="sin-product-details">
					<h3>{product.name}</h3>
					<ProductRatingReviews
						reviewsCount={product.reviews_count}
						averageRating={product.average_rating}
						ratings={product.ratings}
						productId={product.id}
					/>
					<ProductPrice product={product} />
					<div className="pro-excerp">
						<p>{product.description}</p>
					</div>
					{/* <ProductColorOptions /> */}
					{/* <ProductSizeOptions /> */}

					{/* <ProductCartQty
						handleQuantity={handleQuantity}
						quantity={quantity}
						handleUpdateProductToCart={handleUpdateProductToCart}
						productId={product.id}
						stock={product.stock}
					/> */}
				</div>
			</div>
		</div>
	);
};

export default ItemDetails;
