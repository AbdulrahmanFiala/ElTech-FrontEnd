// Importing the pre-configured API instance
import { apiInstance } from "../../config/api-config";

// Setting up the endpoint for the API to be the product endpoint in the environment variables
const endpoint = process.env.REACT_APP_NEWS_ENDPOINT;

/**
 * Fetch all posts from the API with pagination
 *
 * @param {number} pageNumber The page number to fetch
 * @param {number} pageSize The number of posts per page
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem retrieving the posts
 */
export const getAllPosts = async (pageNumber, pageSize, order = "-created_at") => {
	try {
		const response = await apiInstance.get(endpoint + "posts/", {
			params: {
				page: pageNumber,
				page_size: pageSize,
				order_by: order,
			},
		});
		return response.data;
	} catch (error) {
		const msg = "There was a problem getting all posts";
		console.error(msg, error);
		//   throw new Error(msg);
	}
};

/**
 * Post newPost to the API
 *
 * @param {string} title of the post
 * @param {string} content of the post
 * @param {string} image of the post
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem retrieving the posts
 */
export const addPost = async (title, content, image, category) => {
	try {
		let formData = new FormData();
		formData.append("title", title);
		formData.append("content", content);
		formData.append("image", image);
		formData.append("category", category);

		const response = await apiInstance.post(endpoint + "posts/", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response.data;
	} catch (error) {
		const msg = "There was a problem adding a new post";
		console.error(msg, error);
		//   throw new Error(msg);
	}
};

/**
 * Fetch a single post from the API
 *
 * @param {String} postId The ID of the post to retrieve
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem retrieving the post
 */
export const getSinglePost = async (postId) => {
	try {
		const url = endpoint + "posts/" + postId;
		const response = await apiInstance.get(url);
		return response.data;
	} catch (error) {
		const msg = "There was a problem getting the specified post";
		console.log(msg, error);
		// throw new Error(msg);
	}
};

/**
 * Search for posts from the API using a category ID
 *
 * @param {number} pageNumber The page number to fetch
 * @param {number} pageSize The number of posts per page
 * @param {String} searchTerm The term to use in searching for posts
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem searching for the posts
 */
export const getPostsBySearch = async (pageNumber, pageSize, searchTerm) => {
	try {
		const response = await apiInstance.get(endpoint + "posts/", {
			params: {
				page: pageNumber,
				page_size: pageSize,
				search: searchTerm,
			},
		});
		return response.data;
	} catch (error) {
		const msg = "There was a problem searching for " + searchTerm;
		console.log(msg, error);
		// throw new Error(msg);
	}
};

/**
 * Search for posts from the API using a category ID
 *
 * @param {number} pageNumber The page number to fetch
 * @param {number} pageSize The number of posts per page
 * @param {number} categoryId The category ID to use in searching for posts
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem searching for the posts
 */
export const getPostsByCategory = async (pageNumber, pageSize, categoryId) => {
	try {
		const response = await apiInstance.get(endpoint + "posts/", {
			params: {
				page: pageNumber,
				page_size: pageSize,
				category_id: categoryId,
			},
		});
		return response.data;
	} catch (error) {
		const msg = `There was a problem searching for posts in category ${categoryId}`;
		console.error(msg, error);
		//   throw new Error(msg);
	}
};

/**
 * Fetch comments for a specific post from the API
 *
 * @param {String} postId The ID of the post for which to retrieve comments
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem retrieving the comments
 */
export const getCommentsForPost = async (postId) => {
	try {
		const url = endpoint + `posts/${postId}/comments/`;
		const response = await apiInstance.get(url);
		return response.data;
	} catch (error) {
		const msg =
			"There was a problem getting comments for the specified post";
		console.error(msg, error);
		//   throw new Error(msg);
	}
};

/**
 * Add a new comment to a post or as a reply to another comment
 *
 * @param {number} postId - The ID of the post to which the comment belongs
 * @param {string} userEmail - The email of the user posting the comment
 * @param {string} content - The content of the comment
 * @param {number|null} parentCommentId - The ID of the parent comment if it's a reply
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem adding the comment
 */
export const addComment = async (
	postId,
	userEmail,
	content,
	parentCommentId = null
) => {
	try {
		const url = endpoint + `posts/${postId}/comments/`;
		const response = await apiInstance.post(url, {
			post: postId,
			user_email: userEmail, // Change to the appropriate field in your API
			parent: parentCommentId,
			content,
		});

		return response.data;
	} catch (error) {
		const msg = "There was a problem adding the comment";
		console.error(msg, error);
		//   throw new Error(msg);
	}
};

/**
 * Add a new comment to a post or as a reply to another comment
 *
 * @param {number} postId - The ID of the post to which the comment belongs
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem adding the comment
 */
export const deletePost = async (postId) => {
	try {
		const url = endpoint + `posts/${postId}`;
		const response = await apiInstance.delete(url);
		return response.data; // Optionally handle the response data if needed
	} catch (error) {
		console.error("Error deleting post:", error.message);
		//   throw new Error('Unable to delete post.');
	}
};

/**
 * Update an existing post using its ID
 *
 * @param {number} postId - The ID of the post to update
 * @param {object} updatedPostData - The updated data for the post
 * @param {string} title - The email of the user posting the comment
 * @param {string} content - The content of the comment
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem updating the post
 */
export const updatePost = async (
	postId,
	title,
	content,
	image,
	selectedCategory
) => {
	try {
		const formData = new FormData();
		if (title) {
			formData.append("title", title);
		}
		if (content) {
			formData.append("content", content);
		}
		if (selectedCategory) {
			formData.append("category", selectedCategory);
		}
		if (image) {
			formData.append("image", image);
		}

		const url = endpoint + `posts/${postId}/`;
		const response = await apiInstance.patch(url, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error updating post:", error.message);
		//   throw new Error('Unable to update post.');
	}
};
