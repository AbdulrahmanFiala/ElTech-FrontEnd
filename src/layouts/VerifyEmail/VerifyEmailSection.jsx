import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
	verifyEmailRequest,
	verifyEmail,
	getUserData,
} from "../../api/services/user/user-services";

import { saveUserData } from "../../services/actions/authSlice";

import InputField from "../../components/Shared/InputField/InputField";
import { showToast } from "../../utils/toastUtil";

const VerifyEmailSection = () => {
	const { uid, token } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const auth = useSelector((state) => state.authSlice);
	const location = useLocation();
	const email = location.state?.email;

	// useEffect(() => {
	// 	if (auth.user && auth.token) {
	// 		navigate("/");
	// 	}
	// }, [auth, navigate]);

	// useEffect(() => {
	// 	const sendVerificationEmail = async () => {
	// 		try {
	// 			await verifyEmailRequest(email);
	// 		} catch (error) {
	// 			showToast(error.toString(), "error");
	// 		}
	// 	};

	// 	if (email) {
	// 		sendVerificationEmail();
	// 	}
	// }, [email]);

	useEffect(() => {
		const verifyUserEmail = async () => {
			try {
				if (uid && token) {
					console.log("Verified");
					await verifyEmail(uid, token, email);
					showToast(
						"Email verified successfully. You can now login.",
						"success"
					);
					await getUserData();
					const updatedUser = await getUserData();
					dispatch(saveUserData(updatedUser));
					navigate(".", { state: {} }); // Clear the state
					navigate("/login");
				} else if (email) {
					console.log("Request Verify", email);
					await verifyEmailRequest(email);
					showToast(
						"Verification email sent. Please check your email.",
						"success"
					);
				}
			} catch (error) {
				showToast("There was a problem verifying the email.", "error");
			}
		};

		verifyUserEmail();
	}, [uid, token, email, navigate, dispatch]);

	return (
		<>
			<div className="woocommerce-billing-fields">
				<h1 className="text-center">Email Verification</h1>
				<h3 className="text-center">
					Please check your email for verification link!
				</h3>
				{/* <form
					action="#"
					method="post"
					className=" d-flex justify-content-center "
					// onSubmit={handleSubmit}
				>
					<div className="row w-50 m-3">
						<InputField
							noOfCol="col-lg-12"
							fieldLabel="Password"
							fieldPlaceholder="Enter your password"
							fieldName="password"
							fieldType="password"
							// value={password}
							// onChange={(e) => setPassword(e.target.value)}
							// onChange={handleChange}
						/>
						<InputField
							noOfCol="col-lg-12"
							fieldLabel="Confirm Password"
							fieldPlaceholder="Enter your password"
							fieldName="confirmPassword"
							fieldType="password"
							// value={confirmPassword}
							// onChange={(e) => setConfirmPassword(e.target.value)}
							// onChange={handleChange}
						/>
						<button
							type="submit"
							className="goru-btn auth-button  "
							// onClick={handlePasswordReset}
						>
							Reset Password
						</button>
					</div>
				</form> */}
				{/* <div className="text-center">
					<p>
						Already have an account?{" "}
						<button
							className="goru-btn auth-button"
							onClick={() => navigate("/login")}
						>
							Login!
						</button>
					</p>
					<p>
						Don't have an account?{" "}
						<button
							className="goru-btn auth-button"
							onClick={() => navigate("/register")}
						>
							Sign Up!
						</button>
					</p>
				</div> */}
			</div>
		</>
	);
};

export default VerifyEmailSection;
