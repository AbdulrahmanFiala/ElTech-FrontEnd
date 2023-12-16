import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/actions/authSlice";

import { showToast } from "../utils/toastUtil";

import Header from "../layouts/Home/Header";
import Footer from "../layouts/Home/Footer";
import EditUserProfile from "../layouts/UserAccount/EditUserProfile";
import UserProfile from "../layouts/UserAccount/UserProfile";

export default function MyAccountProfile() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [isEditing, setIsEditing] = useState(false);

	const handleLogoutClick = () => {
		dispatch(logout());
		localStorage.removeItem("token");
		localStorage.removeItem("user");

		navigate("/");
	};

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleUpdate = () => {
		setIsEditing(false);
	};

	const handleCancel = () => {
		setIsEditing(false);
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) {
			navigate("/login");
			showToast("Please login first to access your profile.", "info");
		}
	}, []);

	return (
		<>
			<Header className="inner-header" />
			{isEditing ? (
				<EditUserProfile
					onUpdate={handleUpdate}
					onCancel={handleCancel}
				/>
			) : (
				<UserProfile
					onEdit={handleEditClick}
					onLogout={handleLogoutClick}
				/>
			)}

			<Footer className="inner-footer" />
		</>
	);
}
