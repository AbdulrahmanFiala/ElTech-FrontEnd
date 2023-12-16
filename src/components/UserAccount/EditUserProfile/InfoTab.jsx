import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";

import { saveUserData } from "../../../services/actions/authSlice";

import {
	updateUserInfo,
	getUserData,
} from "../../../api/services/user/user-services";

import { showToast } from "../../../utils/toastUtil";

import CountryDropDownMenu from "../../Checkout/CountryDropDownMenu";

export default function InfoTab({ onCancel }) {
	const user = useSelector((state) => state.authSlice.user);
	const dispatch = useDispatch();

	const [userData, setUserData] = useState({
		mobile_phone: user.mobile_phone,
		birth_date: user.birth_date,
		country: user.country,
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

		// Add validation for birth_date and mobile_phone
		if (!moment(userData.birth_date, "YYYY-MM-DD", true).isValid()) {
			showToast(
				"Birth date should be in the format of YYYY-MM-DD!",
				"error"
			);
			return;
		}

		// const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
		const phoneRegex = /^[0-9]{10,15}$/;
		if (!phoneRegex.test(userData.mobile_phone)) {
			showToast("Mobile phone should be a valid phone number!", "error");
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

	return (
		<div className="tab-pane fade" id="account-info">
			<form onSubmit={handleSubmit}>
				<div className="card-body pb-2">
					{/* <div className="form-group">
          <label className="form-label">Bio</label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus."
          ></textarea>
        </div> */}
					<div className="form-group">
						<label className="form-label">Birthday</label>
						<input
							type="text"
							className="form-control"
							name="birth_date"
							placeholder="May 3, 1995"
							value={userData.birth_date}
							onChange={handleChange}
						/>
					</div>
					{/* <div className="form-group">
						<label className="form-label">Country</label>
						<select className="custom-select">
							<option>USA</option>
							<option selected>Canada</option>
							<option>UK</option>
							<option>Germany</option>
							<option>France</option>
						</select>
					</div> */}
					<div className="form-group">
						<div className="billing-countries">
							<label className="form-label">Country</label>
							<CountryDropDownMenu
								name="country"
								onChange={handleChange}
								value={userData.country}
							/>
						</div>
					</div>
				</div>
				<hr className="border-light m-0" />
				<div className="card-body pb-2">
					<h2 className="mb-4">Contact Info</h2>
					<div className="form-group">
						<label className="form-label">Phone</label>
						<input
							type="text"
							className="form-control"
							name="mobile_phone"
							placeholder="+0 (123) 456 7891"
							value={userData.mobile_phone}
							onChange={handleChange}
						/>
					</div>
					{/* <div className="form-group">
					<label className="form-label">Website</label>
					<input
						type="text"
						className="form-control"
						placeholder="www.el-tech.com"
					/>
				</div> */}
				</div>
				<div className="card-body pb-2">
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
