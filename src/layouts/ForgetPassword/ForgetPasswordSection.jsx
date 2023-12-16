import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { resetPasswordRequest } from "../../api/services/user/user-services";

import { loginUserThunk } from "../../services/actions/authSlice";

import InputField from "../../components/Shared/InputField/InputField";
import { showToast } from "../../utils/toastUtil";

const ForgetPasswordSection = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const auth = useSelector((state) => state.authSlice);

	const [credentials, setCredentials] = useState({ email: "", password: "" });

	const handleChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	dispatch(loginUserThunk({ credentials }));
	// };

	const handlePasswordReset = async (event) => {
		event.preventDefault();

		try {
			const email = credentials.email; // replace this with the actual email

			// Simple regex for email validation
			const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

			if (!emailRegex.test(email)) {
				showToast("Please enter a valid email.", "error");
				return;
			}

			await resetPasswordRequest(email);
			showToast(
				"Password reset link has been sent to your email.",
				"success"
			);
		} catch (error) {
			console.error(error);
			// showToast(
			// 	"There was a problem sending the password reset email.",
			// 	"error"
			// );
			showToast(error.toString(), "error");
		}
	};

	useEffect(() => {
		if (auth.user && auth.token) {
			navigate("/");
		}
	}, [auth, navigate]);

	return (
		<>
			<div className="woocommerce-billing-fields">
				<h3 className="text-center">Forget Password</h3>
				<form
					action="#"
					method="post"
					className=" d-flex justify-content-center "
					onSubmit={handlePasswordReset}
				>
					<div className="row w-50 m-3">
						<InputField
							noOfCol="col-lg-12"
							fieldLabel="Email"
							fieldPlaceholder="Enter your email address"
							fieldName="email"
							fieldType="email"
							value={credentials.email}
							onChange={handleChange}
						/>
						<button
							type="submit"
							className="goru-btn auth-button  "
							// onClick={handlePasswordReset}
						>
							Get Password Reset Link
						</button>
					</div>
				</form>
				<div className="text-center">
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
				</div>
			</div>
		</>
	);
};

export default ForgetPasswordSection;
