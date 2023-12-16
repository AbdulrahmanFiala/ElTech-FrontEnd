import React, {useEffect,useState} from 'react';
import { getAllPosts,deletePost,getSinglePost } from "../../../api/services/user/post-services";
import PostEditForm from "./PostEditForm";
import PostsTableRow from './PostsTableRow';
import PostDetails from './PostDetails'
import { showToast } from "../../../utils/toastUtil";

const PostsTable = ({shouldRefreshPosts,handleCreateClick}) => {
    const [posts, setPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const [showEditForm, setShowEditForm] = useState(false)
    const [selectedPost, setSelectedPost] = useState(null);
    const [showPostDetails, setShowPostDetails] = useState(false);



    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const postsData = await getAllPosts(pageNumber, pageSize); // Add 1 to pageNumber for API's page numbering
          setPosts(postsData.results);

        } catch (error) {
          console.error("Error fetching posts:", error.message);
        }
      };

      fetchPosts();
    }, [pageNumber, pageSize,shouldRefreshPosts]);

    const handleDeletePost = async (postId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this category?');
    if (shouldDelete) {
      try {
        await deletePost(postId);
        showToast("post has been deleted successfully", "success");
        // Refresh posts after successful deletion
        const updatedPostsData = await getAllPosts(pageNumber, pageSize);
        setPosts(updatedPostsData.results);
        setShowEditForm(!showEditForm);
      } catch (error) {
        console.error('Error deleting post:', error.message);
      }
    } else {
      showToast("Deletion canceled", "error");
    }
    };

      useEffect(() => {
      if (showEditForm && selectedPost) {
        // Fetch the single post data for editing
        const fetchSinglePost = async () => {
          try {
            const singlePost = await getSinglePost(selectedPost.id); // Replace with your API call to fetch a single post
            setSelectedPost(singlePost);
          } catch (error) {
            console.error("Error fetching single post:", error.message);
          }
        };

        fetchSinglePost();
      }
    }, [showEditForm, selectedPost]);

    const handleCancelEdit = () => {
      // Clear the selected post and hide the form
      setSelectedPost(null);
      setShowEditForm(false);
      setShowPostDetails(false)
    };

    const handleEditPost = (post) => {
        setSelectedPost(post);
        setShowEditForm(true);
        setShowPostDetails(false)
    };

    const handlePostDetails = (post) => {
      setSelectedPost(post)
      setShowPostDetails(true)
      setShowEditForm(false);
    }

    return (
      <div>
      {showEditForm && selectedPost ? (
        <div className="reply-form-wrapper">
          <PostEditForm post={selectedPost} onCancel={handleCancelEdit} setPosts={setPosts} handlePostDetails={handlePostDetails} />
        </div>
          ) : showPostDetails ? (
            <>
              <PostDetails selectedPost={selectedPost} postId={selectedPost.id} onCancel={handleCancelEdit}  handleEditPost={handleEditPost} />
            </>
            ) : (
            <>
          <button className="guru-btn" id="create-btn" onClick={handleCreateClick} style={{marginBottom:"30px"}}>
            Add Post
          </button>
          <table className="cart-table">
            <thead>
                <tr>
                    <th className="product-total" style={{width:"100px"}}>
                        ID
                    </th>
                    <th className="product-total" >
                        Title
                    </th>
                    <th className="product-quantity">
                        Created At
                    </th>
                    <th className="product-total">
                        Author
                    </th>
                    <th className="product-total">
                        Category
                    </th><th className="product-total">
                        Actions
                    </th>
                </tr>
            </thead>
            {posts.map((post) => {
                return (
                    <tbody>
                        <PostsTableRow
                            post={post}
                            handleEditPost={handleEditPost}
                            handleDeletePost={handleDeletePost}
                            handlePostDetails={handlePostDetails}

                        />
                    </tbody>
                );
            })}
        </table>
        </>
      )}
      </div>
    );
  };

export default PostsTable;
