import { Link } from "react-router-dom";

import productImg1 from "../../assets/images/cart/1.jpg";

const CartItem = ({ product, handleDeleteProduct, handleUpdateProduct }) => {
	return (
		<tr className="cart-item">
			<td className="product-thumbnail-title">
				<Link to={'/product/'+ product.product.id}>
					<img src={product.product.thumbnail.image ? product.product.thumbnail.image : productImg1} alt="" />
				</Link>
				<Link className="product-name" to={'/product/'+ product.product.id}>
					{product.product.name}
				</Link>
			</td>
			<td className="product-unit-price">
				<div className="product-price clearfix">
					<span className="price">
						<span>
							<span className="woocommerce-Price-currencySymbol">
								$
							</span>
							{product.product.discount_price}
						</span>
					</span>
				</div>
			</td>
			<td className="product-quantity clearfix">
				<div className="quantityd clearfix">
					<button
						type="button"
						onClick={() => handleUpdateProduct(product.product.id, product.quantity - 1)}
						className="qtyBtn btnMinus">
						<span>-</span>
					</button>
					<input
						name="qty"
						value={product.quantity}
						title="Qty"
						className="input-text qty text carqty"
						type="text"
					/>
					<button
						type="button"
						className="qtyBtn btnPlus"
						onClick={() => handleUpdateProduct(product.product.id, product.quantity + 1)}>
						<span>+</span>
					</button>
				</div>
			</td>
			<td className="product-total">
				<div className="product-price clearfix">
					<span className="price">
						<span>
							<span className="woocommerce-Price-currencySymbol">
								$
							</span>
							{product.total_price}
						</span>
					</span>
				</div>
			</td>
			<td className="product-remove">
				<Link onClick={() => handleDeleteProduct(product.id)}></Link>
			</td>
		</tr>
	);
};

export default CartItem;
