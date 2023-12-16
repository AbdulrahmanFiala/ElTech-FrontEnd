import { Link } from "react-router-dom";

import { addProductNotification } from "../../../api/services/user/product-services";

import { showToast } from "../../../utils/toastUtil";

import ProductCardBadge from "../Badges/ProductCardBadge";
import ProductPrice from "./ProductPrice";
import ProductAddToCart from "./ProductAddToCart";

const NormalProductCard = ({
  product,
  isPopularOrRelated = false,
  handleAddProductToCart,
  toggleRefresh,
}) => {
  const userIdsToNotify = product.users_to_notify.map((user) => user.id);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;

  const handleAddProductToNotifications = async () => {
    try {
      await addProductNotification(product.id);
      showToast("Product added to notifications successfully!", "success");
      // window.location.reload();
      toggleRefresh();
    } catch (error) {
      showToast(
        "There was a problem adding the product to notifications",
        "error"
      );
      console.error(error);
    }
  };

  return (
    <div className={isPopularOrRelated ? "" : "col-lg-3 col-md-6"}>
      <div
        className={
          isPopularOrRelated ? "single-popular-product" : "single-shop-product"
        }
        style={{ width: "fit-content" }}
      >
        <Link to={`/product/${product.id}`}>
          <div className="sp-thumb">
            <img
              src={product.thumbnail.image}
              // src={product.image}
              alt=""
              style={{
                maxWidth: "370px",
                maxHeight: "460px",
                minHeight: "460px",
              }}
            />
            <ProductCardBadge badgeClass={product.badge} product={product} />
            {/* {product.badge != null && (
							
						)} */}
          </div>
        </Link>
        <div className="sp-details">
          {/* <h4>{product.name}</h4> */}
          <h4>
            {product.name.length > 30
              ? product.name.substring(0, 30) + "..."
              : product.name}
          </h4>
          <div className="product-price clearfix">
            <ProductPrice
              // productPriceBefore={product.price}
              // productPriceAfter={product.discountedPrice}
              product={product}
            />
            {/* <span className="price">
              {product.discountedPrice != null && <del>
                <span>
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  {product.price}
                </span>
              </del>}
              <ins><span><span class="woocommerce-Price-currencySymbol">$</span>
                {product.discountedPrice??product.price}
              </span></ins>
            </span> */}
          </div>
          <ProductAddToCart
            productId={product.id}
            stock={product.stock}
            handleAddProductToCart={handleAddProductToCart}
            handleAddProductToNotifications={handleAddProductToNotifications}
            userIdsToNotify={userIdsToNotify}
            userId={userId}
          />
        </div>
      </div>
    </div>
  );
};

export default NormalProductCard;
