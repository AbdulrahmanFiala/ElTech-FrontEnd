import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { saveUserData } from "../../../services/actions/authSlice";

import {
	updateUserInfo,
	getUserData,
} from "../../../api/services/user/user-services";

import { showToast } from "../../../utils/toastUtil";

export default function ChangePasswordTab({ onCancel }) {
	const user = useSelector((state) => state.authSlice.user);
	const dispatch = useDispatch();
	const [passwordData, setPasswordData] = useState({
		currentPassword: "",
		newPassword: "",
		repeatNewPassword: "",
	});

	const handleChange = (event) => {
		setPasswordData({
			...passwordData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log("Here!");
		if (passwordData.newPassword !== passwordData.repeatNewPassword) {
			showToast("New passwords do not match!", "error");
			return;
		}
		if (passwordData.newPassword.length < 5) {
			showToast(
				"New password must be at least 5 characters long!",
				"error"
			);
			return;
		}
		try {
			await updateUserInfo({
				current_password: passwordData.currentPassword,
				new_password: passwordData.newPassword,
			});
			showToast("Password updated successfully!", "success");
			// window.location.reload();
			const updatedUser = await getUserData();
			dispatch(saveUserData(updatedUser));
		} catch (error) {
			showToast("Error updating password!", "error");
		}
	};

	return (
		<div className="tab-pane fade" id="account-change-password">
			<form onSubmit={handleSubmit}>
				<div className="card-body pb-2">
					<div className="form-group">
						<label className="form-label">Current password</label>
						<input
							type="password"
							name="currentPassword"
							className="form-control"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label className="form-label">New password</label>
						<input
							type="password"
							name="newPassword"
							className="form-control"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label className="form-label">
							Repeat new password
						</label>
						<input
							type="password"
							name="repeatNewPassword"
							className="form-control"
							onChange={handleChange}
						/>
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
				</div>
			</form>
		</div>
	);
}
