// Importing the pre-configured API instance
import { apiInstance } from "../../config/api-config";

// Setting up the endpoint for the API to be the product endpoint in the environment variables
const endpoint = process.env.REACT_APP_NEWS_ENDPOINT;

/**
 * Fetch all posts from the API
 *
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem retrieving the posts
 */
export const getAllPosts = async () => {
	try {
	  const response = await apiInstance.get(endpoint + 'posts/');
	  return response.data;
	} catch (error) {
	  const msg = "There was a problem getting all posts";
	  console.error(msg, error);
	  throw new Error(msg);
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
		const url = endpoint + 'posts/' + postId;
		const response = await apiInstance.get(url);
		return response.data;
	} catch (error) {
		const msg = "There was a problem getting the specified post";
		console.log(error);
		throw new Error(msg);
	}
};

/**
 * Search for posts from the API using a search term
 *
 * @param {String} searchTerm The term to use in searching for posts
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem searching for the posts
 */
export const getPostsBySearch = async (searchTerm) => {
	try {
		const url = endpoint + `search?q=${searchTerm}`;
		const response = await apiInstance.get(url);
		return response.data;
	} catch (error) {
		const msg = "There was a problem searching for " + searchTerm;
		console.log(error);
		throw new Error(msg);
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
	  const msg = "There was a problem getting comments for the specified post";
	  console.error(error);
	  throw new Error(msg);
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
export const addComment = async (postId, userEmail, content, parentCommentId = null) => {
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
	  throw new Error(msg);
	}
  };