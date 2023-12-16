import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { apiInstance, FAVORITE_ENDPOINT } from "../../../api/config/api-config";
import {
  createUserFavorite,
  deleteUserFavorite,
} from "../../../api/services/user/favorite-services";

import { showToast } from "../../../utils/toastUtil";

const ProductAddToCart = ({
  handleAddProductToNotifications,
  handleAddProductToCart,
  productID,
  productId,
  stock,
  userId,
  userIdsToNotify,
}) => {
  const user = useSelector((state) => state.authSlice.user);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToWishlist = async (e) => {
    if (user) {
      try {
        if (isFavorite) {
          // If already favored, remove it
          // Make a DELETE request to remove the favorite
          await deleteUserFavorite(productId);
          setIsFavorite(false);
          showToast("Product removed from your favorites", "success");
        } else {
          // If not favored, add it
          // Make a POST request to create the favorite
          await createUserFavorite(productId);
          setIsFavorite(true);
          showToast("Product added to your favorites", "success");
        }
      } catch (error) {
        console.error("Error toggling wishlist:", error.response.data);
      }
    } else {
      // Redirect to the login page
      window.location.href = "/login";
    }
  };

  // Use effect to check if the product is in favorites when the component mounts
  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        // Fetch user favorites
        const favorites = await apiInstance.get(FAVORITE_ENDPOINT);

        // Check if the product is in favorites
        const isProductInFavorites = favorites.data.some(
          (favorite) => favorite.product === productId
        );

        setIsFavorite(isProductInFavorites);
      } catch (error) {
        console.error("Error checking favorite status:", error);
      }
    };

    // Call the function to check favorite status
    checkFavoriteStatus();
  }, [productId]); // Add productId as a dependency to re-run the effect when productId changes

  return (
    <div className="sp-details-hover">
      {/* {stock === 0 ? (
				userId &&
				!userIdsToNotify.includes(userId) && (
					<Link
						className="sp-cart"
						onClick={handleAddProductToNotifications}
					>
						<span>Notify When Available</span>
					</Link>
				)
			) : (
				<span className="pro-badge2 out-of-stock">Out of Stock</span>
			)}
			{stock !== 0 && (
				<Link
					className="sp-cart"
					onClick={() => handleAddProductToCart(productId)}
				>
					<i className="twi-cart-plus"></i>
					<span>Add to cart</span>
				</Link>
			)} */}
      {stock === 0 ? (
        userId ? (
          userIdsToNotify.includes(userId) ? (
            <span className="pro-badge2 out-of-stock">Out of Stock</span>
          ) : (
            <Link className="sp-cart" onClick={handleAddProductToNotifications}>
              <span>Notify When Available</span>
            </Link>
          )
        ) : (
          <span className="pro-badge2 out-of-stock">Out of Stock</span>
        )
      ) : (
        <Link
          className="sp-cart"
          onClick={() => handleAddProductToCart(productId)}
        >
          <i className="twi-cart-plus"></i>
          <span>Add to cart</span>
        </Link>
      )}
      {/* <Link
				className="sp-cart"
				onClick={() => handleAddProductToCart(productId)}
			>
				<i className="twi-cart-plus"></i>
				<span>Add to cart</span>
			</Link> */}

      {/* Add to Wishlist */}
      <Link
        className={`sp-wishlist ${isFavorite ? "backgroundBlack" : ""}`}
        onClick={handleAddToWishlist}
      >
        <i className="twi-heart2"></i>
      </Link>
    </div>
  );
};

export default ProductAddToCart;
