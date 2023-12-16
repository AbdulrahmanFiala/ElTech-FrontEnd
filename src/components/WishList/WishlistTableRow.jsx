import React from "react";
import { deleteUserFavorite } from "../../api/services/user/favorite-services";
import { getAllFavoriteProducts } from "../../api/services/user/favorite-services";
import { Link } from "react-router-dom";

function WishlistTableRow({ product, setFavoriteProductsDetails, handleAddProductToCart }) {
  const handleRemoveFromWishlist = async (e) => {
    e.preventDefault();
    try {
      // Remove the item from favorites
      await deleteUserFavorite(product.id);

      // Fetch updated list of favorite products
      const updatedFavorites = await getAllFavoriteProducts();

      // Update the state with the new list of favorite products
      setFavoriteProductsDetails(updatedFavorites);
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };

  return (
    <tr className="wishlist-item">
      <td className="product-thumbnail-title">
        <Link to="#">
          <img src={product.thumbnail.image} alt="" />
        </Link>
        <Link className="product-name" to="#">
          {product.name}
        </Link>
      </td>

      <td className="product-unit-price">
        <div className="product-price clearfix">
          <span className="price">
            <span>
              <span className="woocommerce-Price-currencySymbol">$</span>
              {product.price}
            </span>
          </span>
        </div>
      </td>

      <td className="product-availity clearfix">
        <a href="#">{product.stock > 0 ? "In Stock" : "Not In Stock"}</a>
      </td>

      <td className="add-to-cart">
        <a href="#" onClick={() => handleAddProductToCart(product.id)}>Add To Cart</a>
      </td>

      <td className="product-remove">
        <a href="#" onClick={handleRemoveFromWishlist}></a>
      </td>
    </tr>
  );
}

export default WishlistTableRow;
