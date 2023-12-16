import { Link } from "react-router-dom";

const CartTotal = ({ total, subtotal, products }) => {
	return (
		<div className="col-md-6">
			<div className="cart-totals">
				<h2>Cart Totals</h2>
				<table className="shop-table">
					<tbody>
						<tr className="cart-subtotal">
							<th>Sub Total</th>
							<td data-title="Subtotal">
								<span className="woocommerce-Price-amount amount">
									<span className="woocommerce-Price-currencySymbol">
										$
									</span>
									{subtotal}
								</span>
							</td>
						</tr>
						<tr className="order-total">
							<th>Grand Total</th>
							<td data-title="Subtotal">
								<span className="woocommerce-Price-amount amount">
									<span className="woocommerce-Price-currencySymbol">
										$
									</span>
									{total}
								</span>
							</td>
						</tr>
					</tbody>
				</table>
				{
					products.length !=0 &&
					<div className="wc-proceed-to-checkout">
						<Link to="/checkout" className="checkout-button">
							Proceed to checkout
						</Link>
					</div>
				}
			</div>
		</div>
	);
};

export default CartTotal;
