import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { apiInstance, FAVORITE_ENDPOINT } from "../../../api/config/api-config";
import {
  createUserFavorite,
  deleteUserFavorite,
} from "../../../api/services/user/favorite-services";
import { useSelector } from "react-redux";

const ProductCartQty = ({
  handleUpdateProductToCart,
  quantity,
  handleQuantity,
  productId,
  stock,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const user = useSelector((state) => state.authSlice.user);

  const handleAddToWishlist = async (e) => {
    if (user) {
      try {
        if (isFavorite) {
          // If already favored, remove it
          // Make a DELETE request to remove the favorite
          await deleteUserFavorite(productId);
          setIsFavorite(false);
        } else {
          // If not favored, add it
          // Make a POST request to create the favorite
          await createUserFavorite(productId);
          setIsFavorite(true);
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
    <div className="product-cart-qty">
      {stock === 0 ? (
        <span className="pro-badge2 out-of-stock mt-2 mr-5">Out of Stock</span>
      ) : (
        <>
          <div className="quantityd clearfix">
            <button
              type="button"
              className="qtyBtn btnMinus"
              onClick={() => handleQuantity()}
            >
              <span>-</span>
            </button>
            <input
              name="qty"
              value={quantity}
              title="Qty"
              className="input-text qty text carqty"
              type="text"
            />
            <button
              type="button"
              className="qtyBtn btnPlus"
              onClick={() => handleQuantity(true)}
            >
              +
            </button>
          </div>
          <Link
            className="add-to-cart-btn"
            onClick={() => handleUpdateProductToCart(quantity)}
          >
            Add To Cart
          </Link>
        </>
      )}

      <Link
        className={`Whislist ${isFavorite ? "backgroundBlue" : ""}`}
        onClick={handleAddToWishlist}
      >
        <i className="twi-heart"></i>
      </Link>
      {/* <a href="#" className="compare">
				<i className="twi-random"></i>
			</a> */}
    </div>
  );
};

export default ProductCartQty;
