// import authorImage from "../../assets/images/blog/c1.jpg";
import CommentForm from "./CommentForm"; // Import your CommentForm component
import React, { useState } from "react";

import profilePic from '../../assets/images/user/profile_pic_placeholder.png';


const Comment = ({ commentDate,author,content,parent, post_id ,onCommentSubmit,setComments,setCommentsCount}) => {

	const parsedDate = new Date(commentDate);
	const formattedDate = `${parsedDate.getFullYear()}-${(parsedDate.getMonth() + 1)
	  .toString()
	  .padStart(2, "0")}-${parsedDate.getDate().toString().padStart(2, "0")}`;

	const [showReplyForm, setShowReplyForm] = useState(false)
	const handleReplyClick = () => {
	setShowReplyForm(!showReplyForm);
	};

	return (
		<div className="single-comment">
			<img src={author && author.profile_picture ? `http://localhost:8000${author.profile_picture}` : profilePic} alt="admin" />
			<h5>
				<a style={{cursor:"pointer"}}>{author.email}</a>
				<span>{formattedDate}</span>
			</h5>
			<div className="comment">
				<p>{content}</p>
			</div>
			<a className="comment-reply-link" onClick={handleReplyClick} style={{cursor:"pointer"}}>
				Reply
			</a>

			{showReplyForm && (
				<div className="reply-form-wrapper">
				<CommentForm parentCommentId={parent} post_id={post_id} onCommentSubmit={onCommentSubmit} clickHandler={handleReplyClick} setComments={setComments} setCommentsCount={setCommentsCount}/>
				</div>
			)}
		</div>
	);
};

export default Comment;
