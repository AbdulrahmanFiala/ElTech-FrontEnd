import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import { cartCount } from "../../services/actions/cartSlice";
import { fetchUserCart } from "../../api/services/user/cart-services";
import { addOrder } from "../../api/services/user/order_services";

import { showToast } from "../../utils/toastUtil";
import { Link } from "react-router-dom";

import Billing from "../../components/Checkout/Billing";
import OrderOverview from "../../components/Checkout/OrderOverview";

const CheckoutSection = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	const [change, setChange] = useState(0);
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState();
	const [subtotal, setSubtotal] = useState();
	const [discount, setDiscount] = useState(0);
	dispatch(cartCount(cart.length));
	const user = useSelector((state) => state.authSlice.user);
  const [billingInfo, setBillingInfo] = useState({
    country: "",
    first_name: "",
    last_name: "",
    address: "",
    zip: "",
    order_note: "",
  });
  const [isFormValid, setIsFormValid] = useState(false); // State for form validation

  const handleBillingInfoChange = (field, value) => {
    setBillingInfo((prevBillingInfo) => ({
      ...prevBillingInfo,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (user) {
      fetchUserCart()
        .then((data) => {
          setCart(data.products);
          setTotal(data.total_price);
          setSubtotal(data.default_total_price);
          if (data.coupon.discount) {
            setDiscount(Number(data.coupon.discount));
          }
        })
        .catch((err) => console.log(err));
    }
  }, [change]);

  // Add a function to handle form validation
  const validateForm = () => {
    // Perform your form validation logic here
    const isValid =
      !!billingInfo.country &&
      !!billingInfo.first_name &&
      !!billingInfo.last_name &&
      !!billingInfo.address &&
      !!billingInfo.zip;
    setIsFormValid(isValid);
  };

  useEffect(() => {
    validateForm(); // Validate the form whenever billingInfo changes
  }, [billingInfo]);

  return (
    <section className="checkout-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="customer-coupon">
              Have a Coupon ?{" "}
              <Link to="/cart">Click here to enter your code</Link>
            </div>
            <Billing
              billingInfo={billingInfo}
              handleBillingInfoChange={handleBillingInfoChange}
            />
          </div>
          <OrderOverview
            products={cart}
            total={total}
            subtotal={subtotal}
            discount={discount}
            billingInfo={billingInfo}
            isFormValid={isFormValid}
          />
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
