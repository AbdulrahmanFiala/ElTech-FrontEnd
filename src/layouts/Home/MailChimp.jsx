import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { saveUserData } from "../../services/actions/authSlice";

import { subscribe, getUserData } from "../../api/services/user/user-services";

import { showToast } from "../../utils/toastUtil";

import shape4 from "../../assets/images/home/shape4.png";

const MailChimpSection = () => {
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
				<section className="mailchimp-section">
					<div className="sec-heading rotate-rl">
						Newsletter <span>Sign-Up</span>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-lg-8 text-center mx-auto">
								{/* <h3 className="sec-title">Get Discount 30% Off</h3> */}
								<h3 className="sec-title">
									Subscribe to our newsletter!
								</h3>
								<form
									className="mailchimp-form"
									action="#"
									method="post"
									onSubmit={handleSubmit}
								>
									{/* <input
										type="email"
										name="email"
										placeholder="your email"
										required
									/> */}
									<button type="submit">Subscribe</button>
								</form>
							</div>
						</div>
					</div>
					<div className="mailchimp-shape">
						<img src={shape4} alt="" />
					</div>
				</section>
			)}
		</>
	);
};

export default MailChimpSection;
