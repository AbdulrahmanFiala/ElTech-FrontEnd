import PostForm from "./PostForm";
import PostsTable from "./PostsTable";
import React, { useState } from "react";

const PostsDashboard = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [shouldRefreshPosts, setShouldRefreshPosts] = useState(false); // State to trigger refresh
  const handleCreateClick = () => {
    setShowCreateForm(!showCreateForm);
  };

  const handlePostCreated = () => {
    // Set the state to trigger a refresh of the PostsTable
    setShouldRefreshPosts(!shouldRefreshPosts);
    setShowCreateForm(false); // Hide the form after creating a post
  };

  return (
    <div>
      <h1>Posts</h1>
      {showCreateForm ? (
        <>
          <div className="reply-form-wrapper">
            <PostForm clickHandler={handleCreateClick} onPostCreated={handlePostCreated}/>
          </div>
        </>
      ) : (
        <>
          {/* <button className="guru-btn" id="create-btn" onClick={handleCreateClick} style={{marginBottom:"30px"}}>
            Add Post
          </button> */}
          <PostsTable handleCreateClick={handleCreateClick} shouldRefreshPosts={shouldRefreshPosts}/>
        </>
      )}
    </div>
  );
};

export default PostsDashboard;
