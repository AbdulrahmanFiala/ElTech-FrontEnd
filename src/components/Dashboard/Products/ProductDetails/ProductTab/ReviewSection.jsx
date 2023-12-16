import profilePic from "../../../../../assets/images/user/profile_pic_placeholder.png";
import SingleComment from "./SingleComment";

const ReviewsSection = ({ product }) => {
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
					{product && product.name && product.name.length > 35
						? product.name.substring(0, 35) + "..."
						: product.name}
					"
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
									imgSrc={
										review.user.profile_picture ||
										profilePic
									}
									author={`${review.user.first_name} ${review.user.last_name}`}
									date={formattedDate}
									commentText={review.content}
								/>
							);
						})}
				</ol>
			</div>
		</div>
	);
};

export default ReviewsSection;
