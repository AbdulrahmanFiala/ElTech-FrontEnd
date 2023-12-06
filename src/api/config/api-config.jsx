// Importing axios for HTTP requests
import axios from "axios";

// Load API base url
const API_BASE_URL = process.env.REACT_APP_BASE_URL;

// Load API used endpoints
export const PRODUCT_ENDPOINT = process.env.REACT_APP_PRODUCT_ENDPOINT;
export const ACCOUNTS_ENDPOINT = process.env.REACT_APP_ACCOUNTS_ENDPOINT;
export const NEWS_ENDPOINT = process.env.REACT_APP_NEWS_ENDPOINT;
export const FAVORITE_ENDPOINT = process.env.REACT_APP_FAVORITE_ENDPOINT;

// Creating a basic axios instance for API calls
export const apiInstance = axios.create({
	baseURL: API_BASE_URL,
	timeout: 10000,
});

apiInstance.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');
	config.headers.Authorization = token ? `Token ${token}` : '';
	return config;
});

// Adding a request interceptor to apiInstance to handle JSON response
apiInstance.interceptors.request.use(
	(config) => {
		config.headers.accept = "application/json";

		const token = localStorage.getItem('token');
		config.headers.Authorization = token?`Token ${token}` : "";

		return config;
	},
	// Returning the promise rejection to let following catch blocks handle it
	(error) => Promise.reject(error)
);

// Adding a response interceptor to apiInstance
apiInstance.interceptors.response.use(
	// Resolver function handles success
	(response) => response,
	// Rejecting the promise in cases of HTTP error codes
	(error) => Promise.reject(error)
);


/**
 * Makes a GET request to the specified URL and returns the received data or message in function of the status.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise} - A promise that resolves to the received data or message.
 */
export async function fetchData(url) {
	try {
		// Making a GET request
		const response = await apiInstance.get(url);

		// Returning the received data if the status is truthy, otherwise returning the received message
		return response.data.status
			? response.data.data
			: response.data.message;
	} catch (error) {
		console.error("An error occurred:", error);
		// Throwing the error so it can be handled by the calling function
		throw error;
	}
}

/**
 * Makes a POST request to the specified URL with the specified data and returns the received data or message in function of the status.
 *
 * @param {string} url - The URL to send data to.
 * @param {object} data - The data to send.
 * @returns {Promise} - A promise that resolves to the received data or message.
 */
export async function createData(url, data) {
	try {
		// Making a POST request with the specified data
		const response = await apiInstance.post(url, data);

		// Returning the received data if the status is truthy, otherwise returning the received message
		return response.data.status
			? response.data.data
			: response.data.message;
	} catch (error) {
		console.error("An error occurred:", error);
		// Throwing the error so it can be handled by the calling function
		throw error;
	}
}

/**
 * Makes a PATCH request to the specified URL with the specified data and returns the received data or message in function of the status.
 *
 * @param {string} url - The URL to send data to.
 * @param {object} data - The data to send.
 * @returns {Promise} - A promise that resolves to the received data or message.
 */
export async function updateData(url, data) {
	try {
		// Making a PATCH request with the specified data
		const response = await apiInstance.patch(url, data);

		// Returning the received data if the status is truthy, otherwise returning the received message
		return response.data.status
			? response.data.data
			: response.data.message;
	} catch (error) {
		console.error("An error occurred:", error);
		// Throwing the error so it can be handled by the calling function
		throw error;
	}
}

/**
 * Makes a DELETE request to the specified URL and returns the received data or message in function of the status.
 *
 * @param {string} url - The URL to delete data from.
 * @returns {Promise} - A promise that resolves to the received data or message.
 */
export async function deleteData(url) {
	try {
		// Making a DELETE request
		const response = await apiInstance.delete(url);

		// Returning the received data if the status is truthy, otherwise returning the received message
		return response.data.status
			? response.data.data
			: response.data.message;
	} catch (error) {
		console.error("An error occurred:", error);
		// Throwing the error so it can be handled by the calling function
		throw error;
	}
}


{
	/* TODO Check if this is needed */
}
// async function handleApiResponse(url) {
// 	try {
// 		const response = await fetch(url);
// 		const data = await response.json();

// 		// Check if the API call was successful
// 		if (data.status) {
// 			// If the API call was successful, return the data
// 			return data.data;
// 		} else {
// 			// If the API call was not successful, throw an error with the message from the API
// 			throw new Error(data.message);
// 		}
// 	} catch (error) {
// 		console.error("An error occurred:", error);
// 		// You can also handle the error here, for example by showing a notification to the user
// 		throw error;
// 	}
// }
