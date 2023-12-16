import Rating from "react-rating";

const ProductRatingReviews = ({ reviewsCount, averageRating }) => {
	return (
		<div className="woocommerce-product-rating">
			<div className="star-rating">
				<Rating
					fullSymbol="twi-star full-star"
					emptySymbol="twi-star empty-star"
					fractions={2}
					initialRating={averageRating}
					readonly="true"
					className="woocommerce-product-rating"
				/>
			</div>
			<a href="#" className="woocommerce-review-link">
				<span className="count">{reviewsCount}</span> customer reviews
			</a>
		</div>
	);
};

export default ProductRatingReviews;
