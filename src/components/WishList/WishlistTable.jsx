import React, { useState, useEffect } from "react";
import WishlistTableRow from "./WishlistTableRow";
import {
  deleteUserFavorite,
  getAllFavoriteProducts,
} from "../../api/services/user/favorite-services";
import { getAllProducts } from "../../api/services/user/product-services";

function WishlistTable() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [favoriteProductsDetails, setFavoriteProductsDetails] = useState([]);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        // Call the service to get all favorite products
        const favorites = await getAllFavoriteProducts();

        // Update the state with the fetched favorite products
        setFavoriteProducts(favorites);

        // Fetch details of products based on ids
        const productIds = favorites.map((favorite) => favorite.product);
        const productsDetailsResponse = await getAllProducts();
        const productsDetails = productsDetailsResponse.results; // Access the 'results' array
        // Filter the product details based on the fetched productIds
        const favoriteProductsDetails = productsDetails.filter((product) =>
          productIds.includes(product.id)
        );

        // Update the state with the fetched favorite product details
        setFavoriteProductsDetails(favoriteProductsDetails);
      } catch (error) {
        console.error("Error fetching favorite products:", error);
      }
    };

    // Call the function to fetch favorite products when the component mounts
    fetchFavoriteProducts();
  }, []);

  return (
    <table className="wishlist-table">
      <thead>
        <tr>
          <th className="product-name-thumbnail">Product Name</th>
          <th className="product-price">Unit Price</th>
          <th className="product-quantity">Availability</th>
          <th className="product-total">&nbsp;</th>
          <th className="product-remove">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {favoriteProductsDetails.map((product) => (
          <WishlistTableRow
            key={product.id}
            product={product}
            setFavoriteProductsDetails={setFavoriteProductsDetails}
          />
        ))}
      </tbody>
    </table>
  );
}

export default WishlistTable;
