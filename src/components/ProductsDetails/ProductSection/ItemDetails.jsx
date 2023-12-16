import React from "react";
import singleProductImg from "../../../assets/images/shop/single-product.jpg";
import s1 from "../../../assets/images/shop/s1.png";
import ProductSizeOptions from "./SizeOptions";
import ProductCartQty from "./CartQty";
import ProductRatingReviews from "./Rating";
import ProductPrice from "./PriceComp";
import ProductSlider from "./ImageSlider";
import ProductColorOptions from "./ProductColor";

const ItemDetails = ({
	product,
	handleAddProductToCart,
	handleUpdateProductToCart,
	handleQuantity,
	inCart,
	quantity,
	toggleRefresh,
}) => {
	return (
		<div className="row">
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
						toggleRefresh={toggleRefresh}
					/>
					<ProductPrice product={product} />
					<div className="pro-excerp">
						<p>{product.description}</p>
					</div>
					{/* <ProductColorOptions /> */}
					{/* <ProductSizeOptions /> */}

					<ProductCartQty
						handleQuantity={handleQuantity}
						inCart={inCart}
						quantity={quantity}
						handleAddProductToCart={handleAddProductToCart}
						handleUpdateProductToCart={handleUpdateProductToCart}
						productId={product.id}
						stock={product.stock}
						usersToNotify={product.users_to_notify}
						toggleRefresh={toggleRefresh}
					/>
					{/* <div className="pro-socila">
						<a href="#">
							<i className="twi-facebook"></i>
						</a>
						<a href="#">
							<i className="twi-twitter-square"></i>
						</a>
						<a href="#">
							<i className="twi-pinterest-square"></i>
						</a>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default ItemDetails;
