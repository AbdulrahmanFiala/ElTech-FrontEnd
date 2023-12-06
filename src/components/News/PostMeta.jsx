import authorImage from "../../assets/images/blog/author.jpg";
import moment from "moment";

const PostMeta = ({ post }) => {
	const formattedDate = moment(post.created_at).fromNow();

	return (
		<>
			<div className="blog-thumb">
				<img src={post.image} alt="" />
			</div>
			<div className="blog-post-meta">
				<span>
					<img src={post.user.image} alt="" />
					By <a>{post.user.email}</a>, {formattedDate}
				</span>
				<span className="cate">
					<a>{post.category.name}</a>
				</span>
			</div>
		</>
	);
};

export default PostMeta;
