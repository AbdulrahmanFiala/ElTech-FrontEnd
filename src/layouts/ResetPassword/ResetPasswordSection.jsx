import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { resetPassword } from "../../api/services/user/user-services";

import { loginUserThunk } from "../../services/actions/authSlice";

import InputField from "../../components/Shared/InputField/InputField";
import { showToast } from "../../utils/toastUtil";

const ResetPasswordSection = () => {
	const { uid, token } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const auth = useSelector((state) => state.authSlice);
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	// const [credentials, setCredentials] = useState({ email: "", password: "" });

	// const handleChange = (e) => {
	// 	setCredentials({ ...credentials, [e.target.name]: e.target.value });
	// };

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	dispatch(loginUserThunk({ credentials }));
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			showToast("Passwords do not match", "error");
			return;
		}

		if (password.length < 5) {
			showToast("Password should be at least 5 characters long", "error");
			return;
		}
		try {
			await resetPassword(uid, token, password, confirmPassword);
			showToast("Password reset successful", "success");
		} catch (error) {
			console.error(error);
			showToast("There was an error resetting your password", "error");
		}
		navigate("/login");
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
					onSubmit={handleSubmit}
				>
					<div className="row w-50 m-3">
						<InputField
							noOfCol="col-lg-12"
							fieldLabel="Password"
							fieldPlaceholder="Enter your password"
							fieldName="password"
							fieldType="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							// onChange={handleChange}
						/>
						<InputField
							noOfCol="col-lg-12"
							fieldLabel="Confirm Password"
							fieldPlaceholder="Enter your password"
							fieldName="confirmPassword"
							fieldType="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
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

export default ResetPasswordSection;
