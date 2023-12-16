import CateTable from "./CateTable";
import CategoryForm from "./CategoryForm";
import React, { useState } from "react";

const CategoriesDashboard = () => {
  const [showCreateForm, setShowReplyForm] = useState(false);
  const [shouldRefreshCategories, setShouldRefreshCategories] = useState(false); // State to trigger refresh
  const handleCreateClick = () => {
    setShowReplyForm(!showCreateForm);
  };

  const handleCategoryCreated = () => {
    // Set the state to trigger a refresh of the PostsTable
    setShouldRefreshCategories(!shouldRefreshCategories);
    setShowReplyForm(false); // Hide the form after creating a post
  };

  return (
    <div>
      <h1>Categories</h1>
      <button className="guru-btn" id="create-btn" onClick={handleCreateClick} style={{marginBottom:"30px"}}>
        Add Category
      </button>
      {showCreateForm ? (
        <div className="reply-form-wrapper">
          <CategoryForm clickHandler={handleCreateClick} onCategoryCreated={handleCategoryCreated}/>
        </div>
      ):(
        <CateTable shouldRefreshCategories={shouldRefreshCategories}/>
      )}
    </div>
  );
};

export default CategoriesDashboard;
