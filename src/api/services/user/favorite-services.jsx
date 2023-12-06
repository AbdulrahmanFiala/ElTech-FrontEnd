// Importing the pre-configured API instance
import { apiInstance, FAVORITE_ENDPOINT } from "../../config/api-config";
// Setting up the endpoint for the API to be the favorite endpoint in the environment variables

const favEndpoint = FAVORITE_ENDPOINT;

export const createUserFavorite = async (productId) => {
  try {
    const response = await apiInstance.post(favEndpoint, {
      product: productId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUserFavorite = async (productId) => {
  try {
    // Find the favorite based on the associated product
    const favorites = await apiInstance.get(favEndpoint);
    const favoriteToDelete = favorites.data.find(
      (favorite) => favorite.product === productId
    );

    // Check if a matching favorite is found
    if (favoriteToDelete) {
      // Make a DELETE request to remove the favorite
      const response = await apiInstance.delete(
        `${favEndpoint}${favoriteToDelete.id}/`
      );
      return response.data;
    } else {
      throw new Error("Favorite not found");
    }
  } catch (error) {
    throw error;
  }
};

export const getAllFavoriteProducts = async () => {
  try {
    // Make a GET request to fetch all favorite products
    const response = await apiInstance.get(favEndpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};
