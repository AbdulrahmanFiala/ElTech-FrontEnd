import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Preloader from "../layouts/Home/Preloader";
import Home from "../pages/Home";

const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));
const ForgetPassword = React.lazy(() => import("../pages/ForgetPassword"));
const ResetPassword = React.lazy(() => import("../pages/ResetPassword"));
const VerifyEmail = React.lazy(() => import("../pages/VerifyEmail"));
const Checkout = React.lazy(() => import("../pages/Checkout"));
const ProductDetails = React.lazy(() => import("../pages/ProductDetails"));
const Category = React.lazy(() => import("../pages/Category"));
const Cart = React.lazy(() => import("../pages/Cart"));
const Shop = React.lazy(() => import("../pages/Shop"));
const Wishlist = React.lazy(() => import("../pages/Wishlist"));
const Orders = React.lazy(() => import("../pages/Orders"));
const OrdersDetails = React.lazy(() => import("../pages/OrdersDetails"));
const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));
const TermsAndConditions = React.lazy(() => import("../pages/PolicyPages/TermsAndConditions"));
const PrivacyPolicy = React.lazy(() => import("../pages/PolicyPages/PrivacyPolicy"));
const ReturnPolicy = React.lazy(() => import("../pages/PolicyPages/ReturnPolicy"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const News = React.lazy(() => import("../pages/News"));
const NewsDetails = React.lazy(() => import("../pages/NewsDetails"));
const MyAccountProfile = React.lazy(() => import('../pages/MyAccountProfile'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const ProductDetailsDashboard = React.lazy(() => import('../components/Dashboard/Products/ProductDetails'));
const UserDetailsDashboard = React.lazy(() => import('../components/Dashboard/Users/UserDetails'));


export default function Router() {
	return (
		<Suspense fallback={<Preloader />}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/forget-password" element={<ForgetPassword />} />
				<Route path="/reset-password/:uid/:token" element={<ResetPassword />} />
				<Route path="/verify-email/:uid?/:token?" element={<VerifyEmail />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/search" element={<Shop />} />
				<Route path="/wishlist" element={<Wishlist />} />
				<Route path="/orders" element={<Orders />} />
				<Route path="/orders/:id" element={<OrdersDetails />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/product/:id" element={<ProductDetails />} />
				<Route path="/category/:id" element={<Category />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/news" element={<News />} />
				<Route path="/news/:id" element={<NewsDetails />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/terms" element={<TermsAndConditions />} />
				<Route path="/privacy" element={<PrivacyPolicy />} />
				<Route path="/return" element={<ReturnPolicy />} />
				<Route path="/profile" element={<MyAccountProfile />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/dashboard/products/:id?" element={<ProductDetailsDashboard />} />
				<Route path="/dashboard/users/:id?" element={<UserDetailsDashboard />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}