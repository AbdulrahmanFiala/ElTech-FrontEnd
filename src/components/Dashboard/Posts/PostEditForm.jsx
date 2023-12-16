import React, { useState, useEffect } from "react";
import {
  updatePost,
  getAllPosts,
} from "../../../api/services/user/post-services"; // Import your authentication context
import { getAllCategories } from "../../../api/services/user/product-services";
import { showToast } from "../../../utils/toastUtil";
import InputField from "../../Shared/InputField/InputField";

const PostEditForm = ({ post, onCancel, setPosts, handlePostDetails }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const updatedData = {
      // 	title: title,
      // 	content: content,
      // 	image: image,
      // 	category_id: selectedCategory,
      //   };

      const response = await updatePost(
        post.id,
        title,
        content,
        image,
        selectedCategory
      ); // Assuming post.id exists
      console.log("Post updated successfully:", response);
      showToast("updated post successfully", "success");

      const updatedPosts = await getAllPosts(1, 50);
      setPosts(updatedPosts.results);

      // Clear form fields after successful update
      setTitle("");
      setContent("");
      setImage("");
      setSelectedCategory("");

      // Hide the form after successful update
      onCancel();
    } catch (error) {
      console.error("Error updating post:", error.message);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <>
      <button
        className="guru-btn"
        id="create-btn"
        onClick={onCancel}
        style={{ marginRight: "10px" }}
      >
        All Posts
      </button>
      <button
        className="guru-btn"
        id="create-btn"
        onClick={handlePostDetails}
        style={{ marginRight: "10px" }}
      >
        Post Details
      </button>
      <div className="dashboard-form-wrapper" id="dashboard-form-wrapper">
        <div className="woocommerce-billing-fields">
          <h3 className="text-center">
            EDIT POST WITH TITLE :{" "} <span style={{ color: "red" }}>{post.title}</span>{" "}
          </h3>
          <form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center "
          >
            <div className="row m-3 w-50 ">
              <InputField
                noOfCol="col-lg-12"
                fieldLabel="Title"
                fieldPlaceholder={post.title}
                fieldName="name"
                fieldType="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <p className="col-lg-12">
                <label>Description</label>
                <textarea
                  name="content"
                  placeholder={post.content}
                  rows="4"
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                ></textarea>
              </p>

              <p className="col-lg-12">
                <label
                  for="fileUpload"
                  className="goru-btn w-50 text-center mx-auto"
                >
                  Upload Images
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  name="images"
                  className="d-none"
                  multiple
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </p>
              <p className="billing-countries col-lg-12">
                <label>Category</label>
                <select
                  className="country_to_state country_select"
                  id="billing_country"
                  name="category"
                  onChange={handleCategoryChange}
                  value={selectedCategory}
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </p>
              <div className="col-lg-12" style={{ display: "flex" }}>
                <div className="col-lg-12 col-md-12">
                  <button
                    type="submit"
                    name="submit"
                    value="Submit"
                    className="goru-btn auth-button d-block mx-auto"
                  >
                    Update
                  </button>
                </div>
                {/* <div className="col-lg-12">
                  <button
                    className="goru-btn auth-button mx-auto"
                    type="button"
                    onClick={onCancel}
                  >
                    Cancel
                  </button>
                </div> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostEditForm;
