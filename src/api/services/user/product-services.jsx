// Importing the pre-configured API instance
import { apiInstance } from "../../config/api-config";

// Setting up the endpoint for the API to be the product endpoint in the environment variables
const endpoint = process.env.REACT_APP_PRODUCT_ENDPOINT;
const productEndpoint = endpoint + "products/";
const categoryEndpoint = endpoint + "categories/";
const weeklyEndpoint = endpoint + "weekly-deal/";

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
		console.error(error, msg);
		return error;
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
		console.error(error, msg);
		return error;
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
		console.error(error, msg);
		return error;
	}
};

export const getWeeklyDeal = async () => {
	try {
		const url = endpoint + "weekly-deal/latest/";
		const response = await apiInstance.get(url);
		return response.data;
	} catch (error) {
		const msg = "There was a problem getting the weekly deal.";
		console.error(error, msg);
		return error;
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
		console.error(error, msg);
		return error;
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
		console.error(error, msg);
		return error;
	}
};

export const getSingleProductCategory = async (productId) => {
	try {
		const url = productEndpoint + productId;
		const response = await apiInstance.get(url);

		// Assuming the API response contains the category ID in the 'categoryId' field
		const { data } = response;
		const productCategory = data.category; // Replace 'categoryId' with the actual field name

		return {
			productCategory,
		};
	} catch (error) {
		const msg = "There was a problem getting the specified product";
		console.error(error, msg);
		return error;
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
		console.error(error, msg);
		return error;
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
		console.error(error, msg);
		// return error;
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
		console.log("category id", categoryId);
		const url = categoryEndpoint + categoryId;
		const response = await apiInstance.get(url);

		return response.data;
	} catch (error) {
		const msg =
			"There was a problem getting the products of the specified category";
		console.error(error, msg);
		return error;
	}
};

export const createReview = async (productId, reviewContent) => {
	try {
		const url = productEndpoint + `${productId}/reviews/`;
		const response = await apiInstance.post(url, reviewContent);

		return response.data;
	} catch (error) {
		const msg = "There was a problem creating your review!";
		console.error(error, msg);
		return error;
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
		console.error(error, msg);
		return error;
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
		console.error(error, msg);
		return error;
	}
};

export const addProductRating = async (productId, rating) => {
	try {
		console.log(productId, rating);
		const url = productEndpoint + `${productId}/ratings/`;
		console.log(url);
		const response = await apiInstance.post(url, { rating: rating });

		return response.data;
	} catch (error) {
		const msg = "There was a problem adding your rating!";
		console.error(error, msg);
		return error;
	}
};

/**
 * delete a product by product id
 *
 * @param {number} product ID
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem adding the comment
 */
export const deleteOrRestoreProduct = async (productId, is_deleted) => {
	try {
		const url = productEndpoint + `${productId}/`;
		const response = await apiInstance.patch(url, { is_deleted });
		return response.data;
	} catch (error) {
		console.error("Error deleting product:", error.message);
		return error;
	}
};

/**
 * delete a category by category id
 *
 * @param {number} category ID
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem adding the comment
 */
export const deleteCategory = async (categoryId) => {
	try {
		const url = endpoint + `categories/${categoryId}`;
		const response = await apiInstance.delete(url);
		return response.data; // Optionally handle the response data if needed
	} catch (error) {
		console.error("Error deleting product:", error.message);
		return error;
	}
};

/**
 * Post Category to the API
 *
 * @param {string} title of the Category
 * @param {string} image of the Category
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem retrieving the posts
 */
export const addCategory = async (name, image) => {
	try {
		let formData = new FormData();
		formData.append("name", name);
		formData.append("image", image);
		console.log(formData);
		const response = await apiInstance.post(categoryEndpoint, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response.data;
	} catch (error) {
		const msg = "There was a problem adding a new Category";
		console.error(msg, error);
		// throw new Error(msg);
	}
};

/**
 * patching Category to the API
 *
 * @param {string} name of the Category
 * @param {string} image of the Category
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem retrieving the posts
 */
export const updateCategory = async (categoryId, catName, image) => {
	try {
		let formData = new FormData();
		formData.append("name", catName);
		if (image) {
			formData.append("image", image);
		}
		console.log(formData);
		console.log(catName, image);
		const url = categoryEndpoint + `${categoryId}/`;
		console.log(url);
		const response = await apiInstance.patch(url, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response.data;
	} catch (error) {
		const msg = "There was a problem updating Category";
		console.error(msg, error);
		// throw new Error(msg);
	}
};

/**
 * Post new Product to the API
 *
 * @param {string} title of the post
 * @param {string} content of the post
 * @param {string} image of the post
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem retrieving the posts
 */
// export const addProduct = async (
// 	name,
// 	price,
// 	isHOT,
// 	isOnSale,
// 	sale_amount,
// 	description,
// 	stock,
// 	isFeatured,
// 	isTrending,
// 	category
// ) => {
// 	try {
// 		let formData = new FormData();
// 		formData.append("name", name);
// 		formData.append("price", price);
// 		formData.append("is_hot", isHOT);
// 		formData.append("is_on_sale", isOnSale);
// 		formData.append("sale_amount", sale_amount);
// 		formData.append("description", description);
// 		formData.append("stock", stock);
// 		formData.append("is_featured", isFeatured);
// 		formData.append("is_trending", isTrending);
// 		formData.append("category", category);

// 		const response = await apiInstance.post(productEndpoint, formData, {
// 			headers: {
// 				"Content-Type": "multipart/form-data",
// 			},
// 		});
// 		return response.data;
// 	} catch (error) {
// 		const msg = "There was a problem adding a new product";
// 		console.error(msg, error);
// 		return error;
// 	}
// };

/**
 * Post new Product to the API
 *
 * @param {string} title of the post
 * @param {string} content of the post
 * @param {string} image of the post
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem retrieving the posts
 */
export const addProduct = async (productData) => {
	try {
		const response = await apiInstance.post(productEndpoint, productData);
		return response.data;
	} catch (error) {
		const msg = "There was a problem adding a new product";
		console.error(msg, error);
		return error;
	}
};

// export const addProductImages = async (productId, images) => {
// 	const url = endpoint + "images/";

// 	for (let i = 0; i < images.length; i++) {
// 		let formData = new FormData();
// 		formData.append("image", images[i]);
// 		formData.append("is_thumbnail", i === 0);
// 		formData.append("product_id", productId);

// 		try {
// 			const response = await apiInstance.post(url, formData, {
// 				headers: {
// 					"Content-Type": "multipart/form-data",
// 				},
// 			});
// 			console.log("Image added successfully:", response);
// 		} catch (error) {
// 			console.error("Error adding image:", error);
// 		}
// 	}
// };

export const addProductImages = async (productId, images) => {
	const url = endpoint + "images/";

	for (let i = 0; i < images.length; i++) {
		let formData = new FormData();
		formData.append("image", images[i]);
		formData.append("is_thumbnail", i === 0 ? "true" : "false");
		formData.append("product_id", productId);

		try {
			for (let pair of formData.entries()) {
				console.log(pair[0] + ", " + pair[1]);
			}
			const response = await apiInstance.post(url, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			console.log("Image added successfully:", response);
		} catch (error) {
			console.error("Error adding image:", error);
		}
	}
};

export const addProductFeatures = async (productId, features) => {
	const url = endpoint + "features/";

	for (let i = 0; i < features.length; i++) {
		try {
			const response = await apiInstance.post(url, {
				feature: features[i],
				product_id: productId,
			});
			console.log("Feature added successfully:", response);
		} catch (error) {
			console.error("Error adding feature:", error);
		}
	}
};

export const updateProduct = async (productId, productData) => {
	try {
		console.log(productData);
		const url = productEndpoint + productId + "/";
		const response = await apiInstance.patch(url, productData);
		return response.data;
	} catch (error) {
		const msg = "There was a problem updating the product";
		console.error(msg, error);
		return error;
	}
};

// export const updateProductImages = async (productId, images) => {
// 	try {
// 		const url = endpoint + `images/${productId}/`;
// 		let formData = new FormData();
// 		images.forEach((image, index) => {
// 			formData.append("image", image);
// 			formData.append("is_thumbnail", index === 0 ? "true" : "false");
// 			formData.append("product_id", productId);
// 		});

// 		const response = await apiInstance.patch(url, formData, {
// 			headers: {
// 				"Content-Type": "multipart/form-data",
// 			},
// 		});
// 		return response.data;
// 	} catch (error) {
// 		console.error("Error updating product images:", error.message);
// 		return error;
// 	}
// };

// export const updateProductFeatures = async (productId, features) => {
// 	try {
// 		console.log();
// 		const url = endpoint + `features/${productId}/`;
// 		console.log(features, url);
// 		let formData = new FormData();
// 		features.forEach((feature) => {
// 			formData.append("feature", feature);
// 			formData.append("product_id", productId);
// 		});
// 		console.log(features);

// 		const response = await apiInstance.patch(url, formData, {
// 			headers: {
// 				"Content-Type": "multipart/form-data",
// 			},
// 		});
// 		return response.data;
// 	} catch (error) {
// 		console.error("Error updating product features:", error.message);
// 		return error;
// 	}
// };

export const updateProductImages = async (productId, images) => {
	const url = endpoint + `images/${productId}/`;

	for (let i = 0; i < images.length; i++) {
		let formData = new FormData();
		formData.append("image", images[i]);
		formData.append("is_thumbnail", i === 0 ? "true" : "false");
		formData.append("product_id", productId);

		try {
			const response = await apiInstance.patch(url, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			console.log("Image updated successfully:", response);
		} catch (error) {
			console.error("Error updating image:", error);
		}
	}
};

export const updateProductFeatures = async (productId, features) => {
	const url = endpoint + `features/${productId}/`;

	for (let i = 0; i < features.length; i++) {
		try {
			const response = await apiInstance.patch(url, {
				feature: features[i],
				product_id: productId,
			});
			console.log("Feature updated successfully:", response);
		} catch (error) {
			console.error("Error updating feature:", error);
		}
	}
};

export const addProductNotification = async (productId) => {
	try {
		const url = productEndpoint + `${productId}/notify/`;
		const response = await apiInstance.post(url);
		return response.data;
	} catch (error) {
		let msg = error;
		if (error.response && error.response.data) {
			const errors = error.response.data;
			msg = Object.values(errors).flat().join(" ");
		} else {
			msg = "There was a problem adding the product to notifications";
		}
		return msg;
	}
};

export const getLatestWeekly = async () => {
	try {
		const url = weeklyEndpoint + "latest/";
		const response = await apiInstance.get(url);
		return response.data;
	} catch (error) {
		const msg = "There was a problem getting latest weekly-deal.";
		console.error(error, msg);
		return error;
	}
};

export const updateLatestWeekly = async (id, dealTime, productId) => {
	try {
		const formData = new FormData();
		if (dealTime) {
			formData.append("deal_time", dealTime);
		}
		if (productId) {
			formData.append("product_id", productId);
		}

		const url = weeklyEndpoint + `${id}/`;
		const response = await apiInstance.put(url, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response.data;
	} catch (error) {
		const msg = "There was a problem updating weekly-deal.";
		console.error(error, msg);
		return error;
	}
};
