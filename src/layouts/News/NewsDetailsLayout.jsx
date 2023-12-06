import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import PostMeta from "../../components/News/PostMeta";
import SocialShare from "../../components/News/SocialShare";
import PostContent from "../../components/News/PostContent";
import CommentArea from "../../components/News/CommentArea";
import { getSinglePost } from "../../api/services/user/post-services";


const NewsDetailsLayout = () => {
	const location = useLocation();
	const postId = location.state.post.id; // Assuming your post object has an 'id' property
	const [post, setPost] = useState(null);

	useEffect(() => {
		// Fetch the single post details when the component mounts
		const fetchSinglePost = async () => {
		try {
			const singlePost = await getSinglePost(postId);
			setPost(singlePost);
		} catch (error) {
			console.error("Error fetching single post:", error.message);
		}
		};

		fetchSinglePost();
	}, [postId]);

  return (
    <section className="blog-details-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="single-blog">
              {post && (
                <>
                  <PostMeta post={post} />
                  <div className="row">
                    <SocialShare />
                    <div className="col-lg-9 col-md-9">
                      <PostContent post={post} category={post.category} />
                      <CommentArea postId={postId} />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetailsLayout;
