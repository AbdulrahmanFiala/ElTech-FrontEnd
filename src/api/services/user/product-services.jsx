// Importing the pre-configured API instance
import { apiInstance } from "../../config/api-config";

// Setting up the endpoint for the API to be the product endpoint in the environment variables
const endpoint = process.env.REACT_APP_PRODUCT_ENDPOINT;
const productEndpoint = endpoint + "products/";
const categoryEndpoint = endpoint + "categories/";

export const getFeaturedProducts = async () => {
  try {
    const response = await apiInstance.get(productEndpoint, {
      params: {
        is_featured: "1",
      },
    });
    return response.data;
  } catch (error) {
    const msg = "There was a problem getting featured products.";
    console.log(error);
    return error;
    throw new Error(msg);
  }
};

export const getTrendingProducts = async () => {
  try {
    const response = await apiInstance.get(productEndpoint, {
      params: {
        is_trending: "1",
      },
    });
    return response.data;
  } catch (error) {
    const msg = "There was a problem getting trending products.";
    console.log(error);
    return error;
    throw new Error(msg);
  }
};

export const getPopularProducts = async () => {
  try {
    const response = await apiInstance.get(productEndpoint, {
      params: {
        is_popular: "1",
      },
    });
    return response.data;
  } catch (error) {
    const msg = "There was a problem getting popular products.";
    console.log(error);
    return error;
    throw new Error(msg);
  }
};

export const getWeeklyDeal = async () => {
  try {
    const url = endpoint + "weekly-deal/latest/";
    const response = await apiInstance.get(url);
    return response.data;
  } catch (error) {
    const msg = "There was a problem getting the weekly deal.";
    console.log(error);
    return error;
    throw new Error(msg);
  }
};

/**
 * Function to get all products from the API.
 * It uses predefined api instance and endpoint.
 *
 * @async
 * @function
 * @return {Promise<object>} Promise object represents the products data.
 * @throws Will throw an error if there is a problem completing the request.
 */
export const getAllProducts = async () => {
  try {
    const response = await apiInstance.get(productEndpoint);
    return response.data;
  } catch (error) {
    const msg = "There was a problem getting all products.";
    console.log(error);
    throw new Error(msg);
  }
};

/**
 * Function to get a single product from the API using its id.
 * It uses predefined api instance and specific product endpoint.
 *
 * @async
 * @function
 * @param {string} productId - The id of the product.
 * @return {Promise<object>} Promise object represents the product data.
 * @throws Will throw an error if there is a problem completing the request.
 */
export const getSingleProduct = async (productId) => {
  try {
    const url = productEndpoint + productId;
    const response = await apiInstance.get(url);

    return response.data;
  } catch (error) {
    const msg = "There was a problem getting the specified product";
    console.log(error);
    throw new Error(msg);
  }
};

/**
 * Function to get all products by a search term from the API.
 * It uses predefined api instance and specific product search endpoint.
 *
 * @async
 * @function
 * @param {string} searchTerm - The search term used to filter products.
 * @return {Promise<object>} Promise object represents the product data based on search term.
 * @throws Will throw an error if there is a problem completing the request.
 */
export const getProductsBySearch = async (searchTerm) => {
  try {
    const response = await apiInstance.get(productEndpoint, {
      params: {
        q: searchTerm,
      },
    });

    return response.data;
  } catch (error) {
    const msg = "There was a problem searching for " + searchTerm;
    console.log(error);
    throw new Error(msg);
  }
};

/**
 * Function to get all categories from the API.
 * It uses predefined api instance and specific category endpoint.
 *
 * @async
 * @function
 * @return {Promise<object>} Promise object represents the categories data.
 * @throws Will throw an error if there is a problem completing the request.
 */
export const getAllCategories = async () => {
  try {
    const url = categoryEndpoint;
    const response = await apiInstance.get(url);
    return response.data;
  } catch (error) {
    const msg = "There was a problem getting all categories";
    console.log(error);
    throw new Error(msg);
  }
};

/**
 * Function to get all products of a particular category from the API.
 * It uses predefined api instance and specific category product endpoint.
 *
 * @async
 * @function
 * @param {string} categoryName - The name of the category.
 * @return {Promise<object>} Promise object represents the product data of the specified category.
 * @throws Will throw an error if there is a problem completing the request.
 */
export const getSingleCategory = async (categoryId) => {
  try {
    const url = categoryEndpoint + categoryId;
    const response = await apiInstance.get(url);

    return response.data;
  } catch (error) {
    const msg =
      "There was a problem getting the products of the specified category";
    console.log(error);
    throw new Error(msg);
  }
};

export const createReview = async (productId, reviewContent) => {
  try {
    const url = productEndpoint + `${productId}/reviews/`;
    const response = await apiInstance.post(url, reviewContent);

    return response.data;
  } catch (error) {
    const msg = "There was a problem creating your review!";
    console.log(error);
    throw new Error(msg);
  }
};

export const getOrderedProducts = async (ordering) => {
  try {
    const response = await apiInstance.get(productEndpoint, {
      params: {
        ordering,
      },
    });

    return response.data;
  } catch (error) {
    const msg = "There was a problem getting ordered products.";
    console.log(error);
    throw new Error(msg);
  }
};

export const getProducts = async (options = {}) => {
  try {
    console.log("Options:", options);
    const response = await apiInstance.get(productEndpoint, {
      params: options,
    });
    return response.data;
  } catch (error) {
    const msg = "There was a problem getting products.";
    console.log(error);
    throw new Error(msg);
  }
};

export const addProductRating = async (productId, rating) => {
	try {
		const url = productEndpoint + `${productId}/ratings/`;
		const response = await apiInstance.post(url, rating);

		return response.data;
	} catch (error) {
		const msg = "There was a problem adding your rating!";
		console.log(error);
		throw new Error(msg);
	}
};
