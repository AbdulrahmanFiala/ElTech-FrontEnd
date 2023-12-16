import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { saveUserData } from "../../../services/actions/authSlice";

import {
	subscribe,
	getUserData,
} from "../../../api/services/user/user-services";

import { showToast } from "../../../utils/toastUtil";

const Subscribe = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const [change, setChange] = useState(false);
	const dispatch = useDispatch();

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await subscribe(user.email);
			const updatedUser = await getUserData(); // refresh user data
			showToast("You have subscribed successfully!", "success"); // show success toast
			setChange(!change);
			dispatch(saveUserData(updatedUser));
		} catch (error) {
			showToast(
				"There was a problem subscribing. Please try again.",
				"error"
			); // show error toast
			console.error(error);
		}
	};

	useEffect(() => {}, [change]);

	return (
		<>
			{user && !user.is_subscribed && (
				<div className="col-lg-3 col-md-6 col-custome-4">
					<aside className="widget">
						<h3 className="widget-title">
							Newsletter Subscription
						</h3>
						<form
							className="subscribe-form"
							action="#"
							method="post"
							onSubmit={handleSubmit}
						>
							{/* <input type="email" name="email" placeholder="admin@mail.com" /> */}
							<button type="submit">
								Subscribe
								<i className="twi-long-arrow-alt-right"></i>
							</button>
						</form>
					</aside>
				</div>
			)}
		</>
	);
};

export default Subscribe;
