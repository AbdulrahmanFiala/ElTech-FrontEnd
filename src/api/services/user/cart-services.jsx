// Importing the pre-configured API instance
import { apiInstance } from "../../config/api-config";

// Setting up the endpoint for the API to be the cart endpoint in the environment variables
const cart_endpoint = process.env.REACT_APP_CART_ENDPOINT;

/**
 * Fetches the cart products of a specific user
 * @return {Object} The data of the cart products of the user
 * @throws {Error} If there was a problem getting the cart products for the specified user
 */
export const fetchUserCart = async () => {
	try {
		// construct url with user Id
		const url = cart_endpoint + "/get_cart/";
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
 * Fetches a product from the cart of a specific user
 * @param {number} productID The ID of the Cart product
 * @return {Object} The data of the cart products of the user
 * @throws {Error} If there was a problem getting the cart products for the specified user
 */
export const fetchCartProduct = async (productID) => {
	try {
		// construct url with user Id
		const url = cart_endpoint + `/product/${productID}`;
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
 * add cart product for a specific user
 * @param {number} productID The ID of the product
 * @param {number} quantity The quantity of the product
 * @return {Object} The data of the added product in the user cart
 * @throws {Error} If there was a problem adding the product
 */
export const addCartProduct = async (productID, quantity = 1) => {
	try {
		// construct url
		const url = cart_endpoint + "/add_product/";
		// perform POST request to the constructed url
		const response = await apiInstance.post(url, {
			quantity: quantity,
			product: productID,
		});

		// Return response data
		return response.data;
	} catch (error) {
		// Handle any error that occurred during adding the product
		const msg =
			"There was a problem adding the product to the cart of the specified user";
		console.error(msg, error);
		// throw new Error(msg);
	}
};

/**
 * update cart product for a specific user
 * @param {number} productID The ID of the product
 * @param {number} quantity The quantity of the product
 * @return {Object} The data of the updated product in the user cart
 * @throws {Error} If there was a problem updating the product
 */
export const updateCartProduct = async (productID, quantity) => {
	try {
		// construct url
		const url = cart_endpoint + "/update_product/";
		// perform PATCH request to the constructed url
		const response = await apiInstance.patch(url, {
			quantity: quantity,
			product: productID,
		});

		// Return response data
		return response.data;
	} catch (error) {
		// Handle any error that occurred during updating the product
		const msg =
			"There was a problem updating the product to the cart of the specified user";
		console.error(msg, error);
		// throw new Error(msg);
	}
};

/**
 * delete product from the cart of a specific user
 * @param {number} productID The ID of the product
 * @return status code 204
 * @throws {Error} If there was a problem deleting the product to the cart of the specified user
 */
export const deleteCartProduct = async (productID) => {
	try {
		// construct url with product Id
		const url = cart_endpoint + `/products/${productID}`;
		// perform 	DELETE request to the constructed url
		const response = await apiInstance.delete(url);

		// Return response data
		return response.data;
	} catch (error) {
		// Handle any error that occurred during deleting product to cart
		const msg =
			"There was a problem deleting the product to the cart of the specified user";
		console.error(msg, error);
		// throw new Error(msg);
	}
};

/**
 * add coupon to the cart of a specific user
 * @param {number} code The code of the coupon
 * @return {Object} The data of the cart
 * @throws {Error} If there was a problem updating the product to the cart of the specified user
 */
export const addCoupon = async (code) => {
	try {
		// construct url
		const url = cart_endpoint + "/apply-coupon/";
		// perform 	POST request to the constructed url
		const response = await apiInstance.post(url, code);

		// Return response data
		return response.data;
	} catch (error) {
		// Handle any error that occurred during adding the coupon to cart
		const msg =
			"There was a problem adding the coupon to the cart of the specified user";
		console.error(msg, error);
		throw new Error(msg);
	}
};
