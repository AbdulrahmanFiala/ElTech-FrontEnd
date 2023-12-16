import React, { useState } from "react";

import {
	getUserData,
	register,
} from "../../../api/services/user/user-services";
import { addPost } from "../../../api/services/user/post-services"; // Import your authentication context

import { showToast } from "../../../utils/toastUtil";

import InputField from "../../Shared/InputField/InputField";
import CountryDropDownMenu from "../../Checkout/CountryDropDownMenu";

const UserForm = ({ clickHandler }) => {
	const userData = getUserData();
	const userEmail = userData.email;
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [image, setImage] = useState("");
	const [errors, setErrors] = useState({});
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		mobile_phone: "",
		// profile_picture: '',
		// birth_date: "",
		country: "",
		first_name: "",
		last_name: "",
		// facebook_profile: "",
		// instagram_profile: "",
		// twitter_profile: "",
	});

	const validate = () => {
		let tempErrors = {};
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const phoneRegex = /^[0-9]{10,15}$/;

		if (!formData.email) {
			tempErrors.email = "Email is required";
		} else if (!emailRegex.test(formData.email)) {
			tempErrors.email = "Invalid email";
		}

		if (!formData.password) {
			tempErrors.password = "Password is required";
		} else if (formData.password.length < 5) {
			tempErrors.password =
				"Password should be at least 5 characters long";
		}

		if (formData.password !== formData.confirmPassword) {
			tempErrors.confirmPassword = "Passwords do not match";
		}

		if (!formData.mobile_phone) {
			tempErrors.mobile_phone = "You must provide a unique mobile number";
		} else if (!phoneRegex.test(formData.mobile_phone)) {
			tempErrors.mobile_phone = "Invalid phone number";
		}

		if (!formData.first_name) {
			tempErrors.first_name = "First Name is required";
		} else if (formData.first_name.length < 3) {
			tempErrors.first_name =
				"First Name should be at least 3 characters long";
		}

		if (!formData.last_name) {
			tempErrors.last_name = "Last Name is required";
		} else if (formData.last_name.length < 3) {
			tempErrors.last_name =
				"Last Name should be at least 3 characters long";
		}

		// Add validations for other fields here

		setErrors(tempErrors);
		// return Object.keys(tempErrors).length === 0;
		return tempErrors;
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	try {
	// 		// Call the addPost API function
	// 		const response = await addPost(title, content, image);
	// 		console.log("Post added successfully:", response);
	// 		console.log(response);

	// 		// Reset the form after successful submission
	// 		setTitle("");
	// 		setContent("");
	// 		setImage("");
	// 	} catch (error) {
	// 		console.error("Error adding post:", error.message);
	// 	}
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validate();

		if (Object.keys(validationErrors).length !== 0) {
			Object.values(validationErrors).forEach((error) => {
				showToast(error, "error");
			});
			return;
		}

		// Remove confirmPassword from formData
		delete formData.confirmPassword;

		try {
			await register(formData);
			showToast("User added successfuly!", "success");
			setFormData({
				email: "",
				password: "",
				confirmPassword: "",
				mobile_phone: "",
				country: "",
				first_name: "",
				last_name: "",
			});
			clickHandler();
		} catch (error) {
			showToast(error.toString());
		}
	};

	return (
		// <div className="comment-form-wrapper">
		// 	<h5>Add new Post</h5>
		// 	<form onSubmit={handleSubmit} className="row comment-form">
		// 		<div className="col-lg-12 col-md-12">
		// 			<input
		// 				type="text"
		// 				name="title"
		// 				placeholder="Post Title"
		// 				value={title}
		// 				onChange={(e) => setTitle(e.target.value)}
		// 			/>
		// 		</div>
		// 		<div className="col-lg-12 col-md-12">
		// 			<textarea
		// 				name="content"
		// 				placeholder="Post Content"
		// 				value={content}
		// 				onChange={(e) => setContent(e.target.value)}
		// 			></textarea>
		// 		</div>
		// 		<div className="col-lg-12 col-md-12">
		// 			<input
		// 				type="file"
		// 				name="image"
		// 				accept="image/*"
		// 				onChange={(e) => setImage(e.target.files[0])}
		// 			/>
		// 		</div>
		// 		<div className="col-lg-12 col-md-12">
		// 			<input type="submit" name="submit" value="Submit" />
		// 		</div>
		// 	</form>
		// </div>
		<>
			<div className="woocommerce-billing-fields">
				<h3 className="text-center">ADD NEW USER</h3>

				<form
					onSubmit={handleSubmit}
					method="post"
					className="d-flex justify-content-center "
				>
					<div className="row m-3 w-50 ">
						<InputField
							noOfCol="col-lg-6"
							fieldLabel="First Name"
							fieldPlaceholder="Enter your first name"
							fieldName="first_name"
							fieldType="text"
							onChange={handleChange}
							value={formData.first_name}
						/>
						<InputField
							noOfCol="col-lg-6"
							fieldLabel="Last Name"
							fieldPlaceholder="Enter your last name"
							fieldName="last_name"
							fieldType="text"
							onChange={handleChange}
							value={formData.last_name}
						/>
						<InputField
							noOfCol="col-lg-6"
							fieldLabel="Email"
							fieldPlaceholder="Enter your email address"
							fieldName="email"
							fieldType="email"
							onChange={handleChange}
							value={formData.email}
						/>
						<InputField
							noOfCol="col-lg-6"
							fieldLabel="Phone Number"
							fieldPlaceholder="Enter your phone number"
							fieldName="mobile_phone"
							fieldType="tel"
							onChange={handleChange}
							value={formData.mobile_phone}
						/>
						<div className="col-lg-12">
							<div className="billing-countries">
								<label>Country</label>
								<CountryDropDownMenu
									name="country"
									onChange={handleChange}
									value={formData.country}
								/>
							</div>
						</div>
						<InputField
							noOfCol="col-lg-6"
							fieldLabel="Account Password"
							fieldPlaceholder="Choose a strong password"
							fieldName="password"
							fieldType="password"
							onChange={handleChange}
							value={formData.password}
						/>
						<InputField
							noOfCol="col-lg-6"
							fieldLabel="Confirm Password"
							fieldPlaceholder="Confirm your password"
							fieldName="confirmPassword"
							fieldType="password"
							onChange={handleChange}
							value={formData.confirmPassword}
						/>

						<button
							type="submit"
							className="goru-btn auth-button mx-auto"
						>
							Add User
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default UserForm;
