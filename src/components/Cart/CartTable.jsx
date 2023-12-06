import { useNavigate } from "react-router-dom";

import CartItem from './CartItem'

function CartTable({ products, handleDeleteProduct, handleUpdateProduct }) {
    const navigate = useNavigate();

    return (
        <table className="cart-table">
            <thead>
                <tr>
                    <th className="product-name-thumbnail">
                        Product Name
                    </th>
                    <th className="product-price">
                        Unit Price
                    </th>
                    <th className="product-quantity">
                        Quantity
                    </th>
                    <th className="product-total">Total</th>
                    <th className="product-remove">
                        &nbsp;
                    </th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return (
                        <CartItem
                            key={product.id}
                            product={product}
                            handleDeleteProduct={handleDeleteProduct}
                            handleUpdateProduct={handleUpdateProduct}
                        />
                    );
                })}

                <tr>
                    <td colspan="6" className="actions">
                        <button
                            type="button"
                            className="button continue-shopping"
                            onClick={() => navigate("/shop")}
                        >
                            Continue Shopping
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default CartTable
