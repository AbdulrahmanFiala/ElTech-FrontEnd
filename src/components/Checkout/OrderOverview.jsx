import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartSubtotal from "./CartSubtotal";
import PaymentMethod from "./PaymentMethod";
import { showToast } from "../../utils/toastUtil";
import { addOrder } from "../../api/services/user/order_services";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const OrderOverview = ({
  products,
  total,
  subtotal,
  discount,
  billingInfo,
  isFormValid,
}) => {
  const user = useSelector((state) => state.authSlice.user);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cod");
  const navigate = useNavigate();
  const orderData = {
    ...billingInfo,
    payment_method: selectedPaymentMethod,
  };

  const handleSelectPayment = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };
  const handleOrder = async () => {
    const emptyFields = Object.keys(billingInfo).filter(
      (field) => !billingInfo[field]
    );

    if (isFormValid) {
      if (user) {
        if (selectedPaymentMethod === "cod") {
          await addOrder(orderData);
          showToast("Your order placed successfully", "success");
          navigate("/orders");
        } else if (selectedPaymentMethod === "paypal") {
          try {
            const response = await fetch(
              "http://localhost:8000/online-payment/",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount: total }),
              }
            );

            if (response.ok) {
              localStorage.setItem('orderData', JSON.stringify(orderData));
              const data = await response.json();
              const stripe = await loadStripe(
                "pk_test_51ODhd6B9sAFUoYRFQroYtxnJVUBnzMsvpWAgvFMXWstGdnpGX5KxJIAHiIhks6Klx0ddJiahh4kJvh0gh5KzF6IU00qDCI9sMo"
              );
              // await addOrder(orderData);

              // Use the received sessionId
              const { error } = await stripe.redirectToCheckout({
                sessionId: data.sessionId,
              });

              if (error) {
                console.error("Error redirecting to Stripe Checkout:", error);
                showToast("Failed to redirect to the payment gateway");
              }

              if (!error) {
                // Parse the URL and check if success is true
                const urlParams = new URLSearchParams(window.location.search);
                const success = urlParams.get('success');
            
                if (success === 'true') {
                  await addOrder(orderData);
                }
              }
            } else {
              console.error(
                "Failed to create Checkout Session:",
                response.statusText
              );
              showToast("Failed to initiate payment");
            }
          } catch (error) {
            console.error("Error creating Checkout Session:", error.message);
            showToast("Error creating payment");
          }
        }
      } else {
        showToast("You need to log in to place an order!");
      }
    } else {
      showToast(
        `Please fill out the ${emptyFields[0].replace(/_/g, " ")}`,
        "warning"
      );
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');

    if (success === 'true') {
        const orderData = JSON.parse(localStorage.getItem('orderData'));
        console.log("Order Data", orderData)
        addOrder(orderData)
            .then(() => {
                showToast("Your order placed successfully", "success");
                navigate("/orders");
                localStorage.removeItem('orderData');
            })
            .catch((error) => {
                showToast("Failed to place order", "error");
            });
    }
  }, []);

  return (
    <div className="col-md-6">
      <div className="woocommerce-checkout-review-order" id="order_review">
        <h3>Your Order</h3>
        <table className="check-table woocommerce-checkout-review-order-table">
          <thead>
            <tr>
              <th className="product-name">Products</th>
              <th className="product-total"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return <CartItem key={product.id} product={product} />;
            })}
          </tbody>
          <tfoot>
            <CartSubtotal
              subtotalClass="cart-subtotal"
              subtotalName="Subtotal"
              subtotalPrice={subtotal}
            />
            <tr className="cart-subtota">
              <th>Discount</th>
              <td>
                <div className="product-price clearfix">
                  <span className="price">
                    <span>{discount + " %"}</span>
                  </span>
                </div>
              </td>
            </tr>
            <CartSubtotal
              subtotalClass="order-total"
              subtotalName="Total"
              subtotalPrice={total}
            />
          </tfoot>
        </table>
        <div className="woocommerce-checkout-payment" id="payment">
          <ul className="wc_payment_methods payment_methods methods">
            <PaymentMethod
              paymentMethodClass="payment_method_cod"
              paymentMethodValue="cod"
              paymentMethodId="payment_method_cod"
              paymentMethodLabel="Cash On Delivery"
              handleSelectPayment={handleSelectPayment}
              paymentMethodChecked={true}
            />
            <PaymentMethod
              paymentMethodClass="payment_method_paypal"
              paymentMethodValue="paypal"
              paymentMethodId="payment_method_paypal"
              paymentMethodLabel={
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      'Credit/Debit Card <i class="twi-cc-mastercard"></i> ' +
                      '<i class="twi-cc-visa"></i> ' +
                      '<i class="twi-cc-paypal"></i> ' +
                      '<i class="twi-cc-discover"></i>',
                  }}
                />
              }
              handleSelectPayment={handleSelectPayment}
            />
          </ul>
        </div>
        <div className="place-order">
          <button className="button" onClick={() => handleOrder()}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderOverview;
