import { Link } from "react-router-dom";
import moment from "moment";

const NewsCard = ({ post }) => {
	const formattedDate = moment(post.created_at).fromNow();

	return (
		<div className="col-lg-4 col-md-6">
			<div className="single-news">
				<div className="news-thumb">
					<img src={post.image} alt="" style={{height:"300px"}}/>
				</div>
				<div className="news-details">
					<span className="post-meta">
						By<span> {post.user.email}</span>, {formattedDate}
					</span>
					<h4>
						<Link to={`/news/${post.id}`} state={{ post: post }}>
							{post.title}
						</Link>
					</h4>
					<Link
						className="read-more"
						to={`/news/${post.id}`}
						state={{ post: post }}
					>
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
