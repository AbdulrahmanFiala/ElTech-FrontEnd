import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { saveUserData } from "../../../services/actions/authSlice";

import {
	updateUserInfo,
	getUserData,
} from "../../../api/services/user/user-services";

import { showToast } from "../../../utils/toastUtil";

import profilePic from "../../../assets/images/user/profile_pic_placeholder.png";

export default function GeneralTab({ onCancel }) {
	const user = useSelector((state) => state.authSlice.user);
	const dispatch = useDispatch();
	const [selectedFileUrl, setSelectedFileUrl] = useState(null);

	const [userData, setUserData] = useState({
		email: user.email,
		// password: "",
		// mobile_phone: "",
		profile_picture: "",
		// birth_date: "",
		// country: "",
		// email_confirmed: false,
		// is_subscribed: false,
		first_name: user.first_name,
		last_name: user.last_name,
		// facebook_profile: "",
		// instagram_profile: "",
		// twitter_profile: "",
	});

	const handleChange = (event) => {
		// console.log(event.target.name, event.target.value);
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
	};

	// const handleFileChange = (event) => {
	// 	setUserData({
	// 		...userData,
	// 		[event.target.name]: event.target.files[0],
	// 	});
	// };

	const handleFileChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.files[0],
		});
		setSelectedFileUrl(URL.createObjectURL(event.target.files[0]));
	};

	// const handleSubmit = async (event) => {
	// 	event.preventDefault();
	// 	const formData = new FormData();
	// 	Object.keys(userData).forEach((key) => {
	// 		formData.append(key, userData[key]);
	// 	});

	// 	try {
	// 		const response = await updateUserInfo(formData);
	// 		console.log(response);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	// const handleSubmit = async (event) => {
	// 	event.preventDefault();
	// 	const formData = new FormData();
	// 	Object.keys(userData).forEach((key) => {
	// 		if (key === "profile_picture" && userData[key] === "") {
	// 			// Skip empty profile_picture
	// 			return;
	// 		}
	// 		formData.append(key, userData[key]);
	// 	});

	// 	try {
	// 		const response = await updateUserInfo(formData);
	// 		// Update user data in local storage
	// 		localStorage.setItem("user", JSON.stringify(response));
	// 		// Reload the page
	// 		window.location.reload();
	// 		showToast("User info updated successfully!", "success");
	// 	} catch (error) {
	// 		console.error(error);
	// 		showToast("Error updating user info!", "error");
	// 	}
	// };

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		Object.keys(userData).forEach((key) => {
			if (key === "profile_picture" && userData[key] === "") {
				// Skip empty profile_picture
				return;
			}
			formData.append(key, userData[key]);
		});

		// Add validation for first_name and last_name
		if (userData.first_name.length < 3 || userData.last_name.length < 3) {
			showToast(
				"First name and last name should be at least 3 characters long!",
				"error"
			);
			return;
		}

		try {
			await updateUserInfo(formData);
			// Update user data in local storage
			// localStorage.setItem("user", JSON.stringify(response));
			// Reload the page
			// window.location.reload();
			const updatedUser = await getUserData();
			dispatch(saveUserData(updatedUser));
			showToast("User info updated successfully!", "success");
		} catch (error) {
			console.error(error);
			showToast("Error updating user info!", "error");
		}
	};

	// useEffect(() => {
	// 	setUserData({
	// 		email: user.email,
	// 		password: user.password,
	// 		mobile_phone: user.mobile_phone,
	// 		profile_picture: user.profile_picture,
	// 		birth_date: user.birth_date,
	// 		country: user.country,
	// 		email_confirmed: user.email_confirmed,
	// 		is_subscribed: user.is_subscribed,
	// 		first_name: user.first_name,
	// 		last_name: user.last_name,
	// 		facebook_profile: user.facebook_profile,
	// 		instagram_profile: user.instagram_profile,
	// 		twitter_profile: user.twitter_profile,
	// 	});
	// }, [user]);

	return (
		<div className="tab-pane fade active show" id="account-general">
			<form onSubmit={handleSubmit} encType="multipart/form-data">
				<div className="card-body media align-items-center">
					<img
						src={
							selectedFileUrl ||
							user?.profile_picture ||
							profilePic
						}
						alt=""
						className="d-block ui-w-80"
					/>
					<div className="media-body ml-4" id="btn-container">
						<label
							className="btn btn-outline-primary"
							id="uploadbtn"
						>
							Upload Photo
							<input
								type="file"
								name="profile_picture"
								className="account-settings-fileinput"
								onChange={handleFileChange}
							/>
						</label>{" "}
						&nbsp;
						{/* <button type="button" className="btn btn-default md-btn-flat">Reset</button> */}
						<div className="text-light small mt-1" id="ImageAlert">
							Allowed JPG, GIF or PNG. Max size of 800Kb
						</div>
					</div>
				</div>

				<hr className="border-light m-0" />

				<div className="card-body">
					{/* <div className="form-group">
                <label className="form-label">Username</label>
                <input type="text" className="form-control mb-1" placeholder="JohnDoe"/>
            </div> */}
					<div className="form-group">
						<label className="form-label">First Name</label>

						<input
							type="text"
							className="form-control"
							name="first_name"
							placeholder="e.g. John"
							// value={user.first_name}
							value={userData.first_name}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label className="form-label">Last Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="e.g. Doe"
							name="last_name"
							// value={user.last_name}
							value={userData.last_name}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label className="form-label">E-mail</label>
						<input
							type="text"
							className="form-control mb-1"
							name="email"
							placeholder="e.g. JohnDoe@mail.com"
							// value={user.email}
							value={userData.email}
							onChange={handleChange}
						/>
						{/* <div className="alert alert-warning mt-2" id="alertEmail">
                <small> Your email is not confirmed. Please check your inbox.{' '}</small>
                    <Link href="#">Resend confirmation</Link>
                </div> */}
					</div>
					<div className="text-right mt-3" id="UserProfileBtn">
						<button
							type="submit"
							className="btn btn-primary"
							// onClick={onUpdate}
						>
							Save changes
						</button>
						&nbsp;
						<button
							type="button"
							className="btn btn-default"
							onClick={onCancel}
						>
							Cancel
						</button>
					</div>
					{/* <div className="form-group">
                <label className="form-label">Company</label>
                <input type="text" className="form-control" placeholder="Company Ltd."/>
            </div> */}
				</div>
			</form>
		</div>
	);
}
