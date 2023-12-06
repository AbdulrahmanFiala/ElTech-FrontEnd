const PostContent = ({ post,category }) => {
	return (
		<div className="blog-content">
			<h3 className="blog-title">{post.title}</h3>
			<p>{post.content}</p>
			{/* <h4>Features:</h4>
			<ul>
				{post.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</ul> */}
			<div className="post-tag">
				<h5>
					Category: <a> {category.name}</a>
				</h5>
			</div>
		</div>
	);
};

export default PostContent;
