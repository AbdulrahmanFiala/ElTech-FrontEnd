// Importing the pre-configured API instance
// import GlobalToast from "../../../utils/globalToast";
import { ACCOUNTS_ENDPOINT, apiInstance } from "../../config/api-config";

const endpoint = ACCOUNTS_ENDPOINT;

/**
 * Registers a new user
 * @param {Object} userData An object containing username and password of the user to be registered
 * @return {Object} The response data
 * @throws {Error} If there was a problem during registration
 */
export const register = async (userData) => {
	try {
		console.log(userData);
		// construct url for registeration
		const url = endpoint + "create/";
		// perform POST request to the constructed url
		const response = await apiInstance.post(url, userData, {
			headers: { "Content-Type": "application/json" },
		});
		// Return response data
		return response.data;
	} catch (error) {
		// Handle any error that occurred during registeration
		let msg = error;
		if (error.response && error.response.data) {
			const errors = error.response.data;
			// Join all error messages into a single string
			msg = Object.values(errors).flat().join(" ");
		} else {
			// Fallback error message
			msg = "An error occurred during registration";
		}
		console.error(msg, error);
		// throw new Error(msg);
	}
};

/**
 * Logs in a user
 * @param {Object} userData An object containing username and password of the user to be logged in
 * @return {Object} The response data
 * @throws {Error} If there was a problem during login
 */
export const login = async (userData) => {
	localStorage.setItem("token", "");
	try {
		// construct url for login
		const url = endpoint + "token/";

		// perform POST request to the constructed url
		console.log(userData);
		const response = await apiInstance.post(url, userData);

		localStorage.setItem("token", response.data.token);

		// Return response data
		return response.data.token;
	} catch (error) {
		// Handle any error that occurred during registeration
		let msg = error;
		if (error.response && error.response.data) {
			const errors = error.response.data;
			// Join all error messages into a single string
			msg = Object.values(errors).flat().join(" ");
		} else {
			// Fallback error message
			msg = "Invalid credentials or server error";
		}
		console.error(msg, error);
		throw new Error(msg);
	}
};

/**
 * Fetches a specific user by their ID
 * @param {number} userId The ID of the user
 * @return {Object} The data of the user
 * @throws {Error} If there was a problem getting the specified user
 */
export const getUserData = async () => {
	try {
		const url = endpoint + "me/";
		const response = await apiInstance.get(url);
		console.log("From api", response.data);
		localStorage.setItem("user", JSON.stringify(response.data));
		return response.data;
	} catch (error) {
		let msg = error;
		if (error.response && error.response.data) {
			const errors = error.response.data;
			// Join all error messages into a single string
			msg = Object.values(errors).flat().join(" ");
		} else {
			// Fallback error message
			msg = "There was a problem getting the specified user";
		}
		console.error(msg, error);
		// throw new Error(msg);
	}
};

/**
 * Fetches users according to given term
 * @param {string} searchTerm The term which is used for search in users
 * @return {Object} The data of all users that matches the searchTerm
 * @throws {Error} If there was a problem searching for searchTerm
 */
export const getUsersBySearch = async (searchTerm) => {
	try {
		// construct url with search parameter
		const url = endpoint + `search?q=${searchTerm}`;
		// perform GET request to the constructed url
		const response = await apiInstance.get(url);

		// Return response data
		return response.data;
	} catch (error) {
		// Handle any error that occurred during search
		const msg = "There was a problem searching for " + searchTerm;
		console.error(msg, error);
		// throw new Error(msg);
	}
};

/**
 * Fetches the cart products of a specific user
 * @param {number} userId The ID of the user
 * @return {Object} The data of the cart products of the user
 * @throws {Error} If there was a problem getting the cart products for the specified user
 */
export const getUserCartProducts = async (userId) => {
	try {
		// construct url with user Id
		const url = endpoint + `${userId}/carts`;
		// perform GET request to the constructed url
		const response = await apiInstance.get(url);

		// Return response data
		return response.data;
	} catch (error) {
		// Handle any error that occurred during fetching user cart products
		const msg =
			"There was a problem getting the cart products for the specified user";
		console.error(msg, error);
		// throw new Error(msg);
	}
};

/**
 * Fetches the posts of a specific user
 * @param {number} userId The ID of the user
 * @return {Object} The data of the posts of the user
 * @throws {Error} If there was a problem getting the posts for the specified user
 */
export const getUserPosts = async (userId) => {
	try {
		// construct url with user Id
		const url = endpoint + `${userId}/posts`;
		// perform GET request to the constructed url
		const response = await apiInstance.get(url);

		// Return response data
		return response.data;
	} catch (error) {
		// Handle any error that occurred during fetching user posts
		const msg =
			"There was a problem getting the posts for the specified user";
		console.error(msg, error);
		// throw new Error(msg);
	}
};

// export const updateUserInfo = async (userData) => {
// 	try {
// 		// construct url with user Id
// 		const url = endpoint + "me/";
// 		// perform GET request to the constructed url
// 		const response = await apiInstance.patch(url, userData);

// 		// Return response data
// 		return response.data;
// 	} catch (error) {
// 		// Handle any error that occurred during fetching user posts
// 		// const msg =
// 		// 	"There was a problem getting the posts for the specified user";
// 		// console.log(error);
// 		// throw new Error(msg);
// 		let msg = error;
// 		if (error.response && error.response.data) {
// 			const errors = error.response.data;
// 			msg = Object.values(errors).flat().join(" ");
// 		} else {
// 			msg = "There was a problem updating the user information";
// 		}

// 		throw new Error(msg);
// 	}
// };

export const resetPasswordRequest = async (email) => {
	try {
		const url = endpoint + "password-reset/";
		const response = await apiInstance.post(url, { email });
		console.log("Response", response);
		// Return response data
		return response.data;
	} catch (error) {
		let msg = error;
		if (error.response && error.response.data) {
			const errors = error.response.data;
			msg = Object.values(errors).flat().join(" ");
		} else {
			msg = "There was a problem sending the password reset email";
		}
		console.error(msg, error);
		throw new Error(msg);
	}
};

export const resetPassword = async (
	uid,
	token,
	newPassword,
	confirmPassword
) => {
	try {
		const url = `${endpoint}password-reset-confirm/${uid}/${token}/`;
		const response = await apiInstance.post(url, {
			new_password: newPassword,
			confirm_password: confirmPassword,
		});

		// Return response data
		return response.data;
	} catch (error) {
		let msg = error;
		if (error.response && error.response.data) {
			const errors = error.response.data;
			msg = Object.values(errors).flat().join(" ");
		} else {
			msg = "There was a problem resetting the password";
		}
		console.error(msg, error);
		// throw new Error(msg);
	}
};

export const verifyEmailRequest = async (email) => {
	try {
		const url = endpoint + "verify-email/";
		const response = await apiInstance.post(url, { email });

		// Return response data
		return response.data;
	} catch (error) {
		let msg = error;
		if (error.response && error.response.data) {
			const errors = error.response.data;
			msg = Object.values(errors).flat().join(" ");
		} else {
			msg = "There was a problem sending the email verification email";
		}
		console.error(msg, error);
		// throw new Error(msg);
	}
};

export const verifyEmail = async (uidb64, token, email) => {
	try {
		const url = `${endpoint}verify-email/${uidb64}/${token}/`;
		console.log("URL", url);
		const response = await apiInstance.post(url, { email });
		console.log("Response", response);

		// Return response data
		return response.data;
	} catch (error) {
		let msg = error;
		if (error.response && error.response.data) {
			const errors = error.response.data;
			msg = Object.values(errors).flat().join(" ");
		} else {
			msg = "There was a problem verifying the email";
		}
		console.error(msg, error);
		// throw new Error(msg);
	}
};

export const subscribe = async (email) => {
	try {
		const url = `${endpoint}subscribe/`;
		const response = await apiInstance.post(url, { email });
		return response.data;
	} catch (error) {
		let msg = error;
		if (error.response && error.response.data) {
			const errors = error.response.data;
			msg = Object.values(errors).flat().join(" ");
		} else {
			msg = "There was a problem subscribing the email";
		}
		console.error(msg, error);
		// throw new Error(msg);
	}
};

export const unsubscribe = async (email) => {
	try {
		const url = `${endpoint}unsubscribe/`;
		const response = await apiInstance.post(url, { email });
		return response.data;
	} catch (error) {
		let msg = error;
		if (error.response && error.response.data) {
			const errors = error.response.data;
			msg = Object.values(errors).flat().join(" ");
		} else {
			msg = "There was a problem unsubscribing the email";
		}
		console.error(msg, error);
		// throw new Error(msg);
	}
};

export const updateUserInfo = async (userData) => {
	try {
		const url = endpoint + "me/";
		const response = await apiInstance.patch(url, userData);
		return response.data;
	} catch (error) {
		let msg = error;
		if (error.response && error.response.data) {
			const errors = error.response.data;
			msg = Object.values(errors).flat().join(" ");
		} else {
			msg = "There was a problem updating the user information";
		}
		console.error(msg, error);
		// throw new Error(msg);
	}
};

export const getAllUsers = async (page) => {
	try {
		const response = await apiInstance.get(endpoint + "users/", { page });
		return response.data;
	} catch (error) {
		const msg = "There was a problem getting all users";
		console.error(msg, error);
		return error;
	}
};

/**
 * delete a specific user
 *
 * @param {number} userId - The ID of the user
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem
 */
export const deleteUser = async (userId) => {
	try {
		const url = endpoint + `users/${userId}`;
		const response = await apiInstance.delete(url);
		return response.data;
	} catch (error) {
		console.error("Error deleting user:", error.message);
		return error;
	}
};

export const getSingleUser = async (userId) => {
	try {
		const url = `${endpoint}users/${userId}/`;
		const response = await apiInstance.get(url);
		return response.data;
	} catch (error) {
		console.error("Error getting user:", error.message);
		return error;
	}
};

/**
 * Updates a specific user's info by their ID
 * @param {number} userId The ID of the user
 * @param {Object} userData The new data for the user
 * @return {Object} The updated data of the user
 * @throws {Error} If there was a problem updating the user's info
 */
export const updateUserByAdmin = async (userId, userData) => {
	try {
		const url = endpoint + `users/${userId}/`;
		console.log("URL", url);
		console.log("Data", userData);
		const response = await apiInstance.patch(url, userData);
		return response.data;
	} catch (error) {
		let msg = error;
		if (error.response && error.response.data) {
			const errors = error.response.data;
			msg = Object.values(errors).flat().join(" ");
		} else {
			msg = "There was a problem updating the user's info";
		}
		console.error(msg, error);
		// throw new Error(msg);
	}
};
