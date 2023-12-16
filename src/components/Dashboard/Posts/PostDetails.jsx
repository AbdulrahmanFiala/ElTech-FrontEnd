import React ,{useEffect,useState}from 'react'
import PostMeta from './PostDetails/PostMeta'
import SocialShare from './PostDetails/SocialShare'
import PostContent from './PostDetails/PostContent'
import { getSinglePost } from "../../../api/services/user/post-services";


export default function PostDetails({ selectedPost ,onCancel,handleEditPost}) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (selectedPost && selectedPost.id) {
      const fetchSinglePost = async () => {
        try {
          const singlePost = await getSinglePost(selectedPost.id);
          setPost(singlePost);
        } catch (error) {
          console.error('Error fetching single post:', error.message);
        }
      };

      fetchSinglePost();
    }
  }, [selectedPost]);

  return (
    <>
    <button className="guru-btn" id="create-btn" onClick={onCancel} style={{marginRight:"10px"}}>All Posts</button>
    <button className="guru-btn" id="create-btn" onClick={()=> handleEditPost(selectedPost)}>update post</button>
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
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}
