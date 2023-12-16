import React, { useState } from "react";
import { getUserData } from "../../api/services/user/user-services"; // Import your authentication context
import { addComment ,getCommentsForPost} from "../../api/services/user/post-services";



const CommentForm = ({ post_id, parentCommentId, onCommentSubmit,clickHandler ,setComments,setCommentsCount}) => {
	const userData = getUserData();
	const userEmail = userData.email; 
	const [message, setMessage] = useState("");
  
	const handleSubmit = async (e) => {
	  e.preventDefault();
	  try {
		if (!message) {
		  console.error("Message is required");
		  return;
		}
		addComment(post_id, userEmail, message, parentCommentId);

		const updatedComments = await getCommentsForPost(post_id);
		setComments(updatedComments);
		setCommentsCount(updatedComments.length);
  
		setMessage("");
		onCommentSubmit();
		clickHandler();
	  } catch (error) {
		console.error("Error adding comment:", error.message);
	  }
	};

	return (
		<div className="comment-form-wrapper">
			<h5>LEAVE A COMMENT</h5>
			<form onSubmit={handleSubmit} className="row comment-form">
				<div className="col-lg-12 col-md-12">
				<textarea
					name="message"
					placeholder="Your reply"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
				</div>
				<div className="col-lg-12 col-md-12">
				<input type="submit" name="submit" value="Reply" />
				</div>
			</form>
		</div>
	);
};

export default CommentForm;
