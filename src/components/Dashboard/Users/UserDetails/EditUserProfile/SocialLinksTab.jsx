import { useState } from "react";
import { useSelector } from "react-redux";

import { updateUserByAdmin } from "../../../../../api/services/user/user-services";

import { showToast } from "../../../../../utils/toastUtil";

export default function SocialLinksTab({ user, onCancel }) {
	const [userData, setUserData] = useState({
		facebook_profile: user.facebook_profile,
		instagram_profile: user.instagram_profile,
		twitter_profile: user.twitter_profile,
	});

	const handleChange = (event) => {
		// console.log(event.target.name, event.target.value);
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		Object.keys(userData).forEach((key) => {
			formData.append(key, userData[key]);
		});

		// Add validation for social media URLs
		const urlRegex =
			/^(https?:\/\/)?(www\.)?((facebook|instagram|twitter)\.com)\/[a-zA-Z0-9(\.\?)?]/;
		if (
			(userData.facebook_profile &&
				!urlRegex.test(userData.facebook_profile)) ||
			(userData.instagram_profile &&
				!urlRegex.test(userData.instagram_profile)) ||
			(userData.twitter_profile &&
				!urlRegex.test(userData.twitter_profile))
		) {
			showToast("Please enter valid social media URLs!", "error");
			return;
		}

		try {
			await updateUserByAdmin(user.id, formData);
			window.location.reload();
			showToast("User info updated successfully!", "success");
		} catch (error) {
			console.error(error);
			showToast("Error updating user info!", "error");
		}
	};

	return (
		<div className="tab-pane fade" id="account-social-links">
			<form onSubmit={handleSubmit}>
				<div className="card-body pb-2">
					<div className="form-group">
						<label className="form-label">Twitter</label>
						<input
							type="text"
							className="form-control"
							name="twitter_profile"
							placeholder="https://twitter.com/user"
							value={userData.twitter_profile}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label className="form-label">Facebook</label>
						<input
							type="text"
							className="form-control"
							name="facebook_profile"
							placeholder="https://www.facebook.com/user"
							value={userData.facebook_profile}
							onChange={handleChange}
						/>
					</div>
					{/* <div className="form-group">
                <label className="form-label">LinkedIn</label>
                <input type="text" className="form-control" placeholder="https://www.LinkedIn.com/user"/>
            </div> */}
					<div className="form-group">
						<label className="form-label">Instagram</label>
						<input
							type="text"
							className="form-control"
							name="instagram_profile"
							placeholder="https://www.instagram.com/user"
							value={userData.instagram_profile}
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
