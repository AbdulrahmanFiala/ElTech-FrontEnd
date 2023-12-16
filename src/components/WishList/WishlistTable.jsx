import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WishlistTableRow from "./WishlistTableRow";
import {
  deleteUserFavorite,
  getAllFavoriteProducts,
} from "../../api/services/user/favorite-services";

import { cartCount } from "../../services/actions/cartSlice"
import { showToast } from '../../utils/toastUtil';
import { fetchUserCart, addCartProduct} from "../../api/services/user/cart-services";
import { getAllProducts } from "../../api/services/user/product-services";

function WishlistTable() {
  const dispatch = useDispatch();
  const [change, setChange] = useState(0);
	const [cart, setCart] = useState([]);
  dispatch(cartCount(cart.length));

  const user = useSelector((state) => state.authSlice.user);

  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [favoriteProductsDetails, setFavoriteProductsDetails] = useState([]);

  const handleAddProductToCart = async (productID, quantity) => {
		if (user) {
			try {
				await addCartProduct(productID, quantity);
				showToast("product added to cart successfully", "success");
			} catch (error) {
				showToast(error.toString());
			}
			setChange(change + 1);
		} else {
			showToast("You need Login to add product to cart !");
		}
	};

  useEffect(() => {
    if (user) {
			fetchUserCart()
				.then((data) => {
					setCart(data.products.sort((a, b) => a.id - b.id));
				})
				.catch((err) => console.log(err));
		}

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
  }, [change]);

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
            handleAddProductToCart={handleAddProductToCart}
          />
        ))}
      </tbody>
    </table>
  );
}

export default WishlistTable;
