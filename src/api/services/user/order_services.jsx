// Importing the pre-configured API instance
import { apiInstance } from "../../config/api-config";

// Setting up the endpoint for the API to be the order endpoint in the environment variables
const order_endpoint = process.env.REACT_APP_ORDER_ENDPOINT;

/**
 * Fetches the orders of a specific user
 * @return {Object} The data of the orders of the user
 * @throws {Error} If there was a problem getting the orders for the specified user
 */
export const fetchUserOrders = async () => {
	try {
		// construct url with user Id
		const url = order_endpoint;
		// perform GET request to the constructed url
		const response = await apiInstance.get(url);

		// Return response data
		return response.data;
	} catch (error) {
		// Handle any error that occurred during fetching orders
		const msg =
			"There was a problem getting the orders for the specified user";
		console.error(msg, error);
		// throw new Error(msg);
	}
};

/**
 * Fetches the order products of a specific user
 * @param {id} The id of the order
 * @return {Object} The data of the order products of the user
 * @throws {Error} If there was a problem getting the order products for the specified user
 */
// export const fetchUserOrders = async (id) => {
// 	try {
// 		// construct url with user Id
// 		const url = order_endpoint + id;
// 		// perform GET request to the constructed url
// 		const response = await apiInstance.get(url);

// 		// Return response data
// 		return response.data;
// 	} catch (error) {
// 		// Handle any error that occurred during fetching order products
// 		const msg =
// 			"There was a problem getting the order products for the specified user";
// 		console.log(error);
// 		throw new Error(msg);
// 	}
// };

/**
 * Fetches the order products of a specific user
 * @param {id} The id of the order
 * @return {Object} The data of the order products of the user
 * @throws {Error} If there was a problem getting the order products for the specified user
 */
export const fetchUserOrder = async (id) => {
	try {
		// construct url with user Id
		const url = order_endpoint + id;
		// perform GET request to the constructed url
		const response = await apiInstance.get(url);

		// Return response data
		return response.data;
	} catch (error) {
		// Handle any error that occurred during fetching order products
		const msg =
			"There was a problem getting the order products for the specified user";
		console.error(msg, error);
		// throw new Error(msg);
	}
};

/**
 * add order for a specific user
 * @param {Object} orderData - The data of the order to be added
 * @return {Object} The data of the added order
 * @throws {Error} If there was a problem adding the order
 */
export const addOrder = async (orderData) => {
	try {
		// construct url
		const url = order_endpoint;
		console.log(order_endpoint);

		// perform POST request to the constructed url
		const response = await apiInstance.post(url, orderData);

		// Return response data
		return response.data;
	} catch (error) {
		// Handle any error that occurred during adding the order
		const msg =
			"There was a problem adding the order of the specified user";
		console.error(msg, error);
		// throw new Error(msg);
	}
};
