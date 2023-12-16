import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getUserData } from "../../../api/services/user/user-services";
import { addProductRating } from "../../../api/services/user/product-services";

import { showToast } from "../../../utils/toastUtil";

import Rating from "react-rating";

const ProductRatingReviews = ({
	reviewsCount,
	averageRating,
	ratings,
	productId,
	toggleRefresh,
}) => {
	const user = useSelector((state) => state.authSlice.user);
	const [userId, setUserId] = useState(null);

	const handleRatingChange = async (newRating) => {
		try {
			await addProductRating(productId, newRating);
			console.log("Rating submitted successfully");
			// showToast("Rating added successfully!", "success");
			// window.location.reload();
			showToast("Rating added successfully!", "success");
			toggleRefresh();
			// setTimeout(() => {
			// 	window.location.reload();
			// }, 1000);
		} catch (error) {
			console.error("Failed to submit rating", error);
			showToast("There was a problem adding the rating!", "error");
		}
	};

	useEffect(() => {
		const fetchUserData = async () => {
			const userData = await getUserData();
			setUserId(userData.id);
		};

		// const storedUserId = localStorage.getItem("userId");
		const token = localStorage.getItem("token");

		// if (storedUserId) {
		// 	setUserId(storedUserId);
		// } else if (token) {
		// 	fetchUserData();
		// }
		if (token) {
			fetchUserData();
		}
	}, []);

	const hasRated =
		ratings && ratings.some((rating) => rating.user === Number(userId));

	return (
		<div className="woocommerce-product-rating">
			<div className="star-rating">
				{/* <i className="twi-star"></i>
				<i className="twi-star"></i>
				<i className="twi-star"></i>
				<i className="twi-star"></i>
				<span>
					<i className="twi-star"></i>
				</span> */}
				<Rating
					fullSymbol="twi-star full-star"
					emptySymbol="twi-star empty-star"
					fractions={1}
					initialRating={averageRating}
					readonly={!userId || hasRated || user.is_superuser}
					className="woocommerce-product-rating"
					onChange={handleRatingChange}
				/>
			</div>

			{/* <Rating
				emptySymbol="fa fa-star-o fa-2x"
				fullSymbol="fa fa-star fa-2x"
				fractions={2}
				initialRating={averageRating}
				readonly={!user || hasRated}
			/> */}
			<a href="#" className="woocommerce-review-link">
				<span className="count">{reviewsCount}</span> customer reviews
			</a>
		</div>
	);
};

export default ProductRatingReviews;
