import { Link } from "react-router-dom";

import ProductCardBadge from "../Badges/ProductCardBadge";
import ProductPrice from "./ProductPrice";
import ProductAddToCart from "./ProductAddToCart";

const NormalProductCard = ({ product, isPopularOrRelated = false }) => {
	return (
		<div className={isPopularOrRelated ? "" : "col-lg-3 col-md-6"}>
			<div
				className={
					isPopularOrRelated
						? "single-popular-product"
						: "single-shop-product"
				}
				style={{ width: "fit-content" }}
			>
				<Link to={`/product/${product.id}`}>
					<div className="sp-thumb">
						<img
							src={product.thumbnail.image}
							// src={product.image}
							alt=""
							style={{ maxWidth: "370px", maxHeight: "460px" }}
						/>
						<ProductCardBadge
							badgeClass={product.badge}
							product={product}
						/>
						{/* {product.badge != null && (
							
						)} */}
					</div>
				</Link>
				<div className="sp-details">
					<h4>{product.name}</h4>
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
					handleAddProductToCart={handleAddProductToCart} />
				</div>
			</div>
		</div>
	);
};

export default NormalProductCard;
