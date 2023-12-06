import { useState, useEffect } from "react";

import { createReview } from "../../../api/services/user/product-services";
import { getUserData } from "../../../api/services/user/user-services";

import c1 from "../../../assets/images/blog/c1.jpg";
import SingleComment from "./SingleComment";

const ReviewsSection = ({ product }) => {
	const isLoggedIn = !!localStorage.getItem("token");
	const [reviewContent, setReviewContent] = useState("");

	return (
		<div
			className="tab-pane fade"
			id="reviews"
			role="tabpanel"
			aria-labelledby="descriptions-tab"
		>
			<div className="comment-area">
				<h4 className="comment-title">
					{product.reviews && product.reviews.length} Review(s) to "
					{product.name}"
				</h4>

				<ol className="comment-list">
					{product.reviews &&
						product.reviews.map((review) => {
							const date = new Date(review.created_at);
							const formattedDate = date.toLocaleDateString(
								"en-US",
								{
									year: "numeric",
									month: "long",
									day: "numeric",
								}
							);

							return (
								<SingleComment
									key={review.id}
									imgSrc={review.user.profile_picture || c1}
									author={`${review.user.first_name} ${review.user.last_name}`}
									date={formattedDate}
									commentText={review.content}
								/>
							);
						})}
				</ol>
				{isLoggedIn && (
					<div className="comment-form-wrapper">
						<h5>Add Review</h5>
						<form
							action="#"
							method="post"
							className="row comment-form"
							onSubmit={async (e) => {
								e.preventDefault();
								await createReview(product.id, {
									content: reviewContent,
								});
								window.location.reload();
							}}
						>
							{/* <div className="col-lg-6 col-md-6">
								<input
									type="text"
									name="name"
									placeholder="Name"
								/>
							</div>
							<div className="col-lg-6 col-md-6">
								<input
									type="email"
									name="email"
									placeholder="Email"
								/>
							</div> */}
							<div className="col-lg-12 col-md-12">
								<textarea
									name="message"
									placeholder="Reviews"
									value={reviewContent}
									onChange={(e) =>
										setReviewContent(e.target.value)
									}
								/>
							</div>
							<div className="col-lg-12 col-md-12">
								<input
									type="submit"
									name="submit"
									value="Submit Review"
								/>
							</div>
						</form>
					</div>
				)}
			</div>
		</div>
	);
};

export default ReviewsSection;
