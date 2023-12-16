const SingleComment = ({ imgSrc, author, date, commentText }) => {
	return (
		<li>
			<div className="single-comment">
				<img src={imgSrc} alt="" />
				<h5>
					<a href="#">{author}</a>
					<span>{date}</span>
				</h5>
				<div className="comment">
					<p>{commentText}</p>
				</div>
			</div>
		</li>
	);
};

export default SingleComment;
