import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { formatPhoneNumber } from "../../../utils/helpers";

import { saveUserData } from "../../../services/actions/authSlice";

import {
	subscribe,
	unsubscribe,
	getUserData,
} from "../../../api/services/user/user-services";

import { showToast } from "../../../utils/toastUtil";

export default function UserCard({ onEdit, onLogout }) {
	const user = useSelector((state) => state.authSlice.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubscribe = async (event) => {
		event.preventDefault();
		try {
			await subscribe(user.email);
			await getUserData(); // refresh user data
			showToast("You have subscribed successfully!", "success"); // show success toast
			const updatedUser = await getUserData();
			dispatch(saveUserData(updatedUser));
			// toggleRefresh();
			// window.location.reload(); // reload the page
		} catch (error) {
			showToast(
				"There was a problem subscribing. Please try again.",
				"error"
			); // show error toast
			console.error(error);
		}
	};

	const handleUnsubscribe = async (event) => {
		event.preventDefault();
		try {
			await unsubscribe(user.email);
			await getUserData(); // refresh user data
			showToast("You have unsubscribed successfully!", "success"); // show success toast
			// window.location.reload(); // reload the page
			const updatedUser = await getUserData();
			dispatch(saveUserData(updatedUser));
		} catch (error) {
			showToast(
				"There was a problem unsubscribing. Please try again.",
				"error"
			); // show error toast
			console.error(error);
		}
	};

	const handleVerifyEmail = (event) => {
		event.preventDefault();
		navigate("/verify-email", { state: { email: user.email } });
	};

	return (
		<div className="card-body" id="userCardBody">
			<div className="row">
				<div className="col-sm-3">
					<h6 className="mb-0">Full Name</h6>
				</div>
				<div className="col-sm-9 text-secondary">
					{user ? user.first_name + " " + user.last_name : "John Doe"}
				</div>
			</div>
			<hr />
			<div className="row">
				<div className="col-sm-3">
					<h6 className="mb-0">Email</h6>
				</div>
				<div className="col-sm-9 text-secondary">
					{user ? user.email : "JohnDoe@mail.com"}
				</div>
			</div>
			<hr />
			<div className="row">
				<div className="col-sm-3">
					<h6 className="mb-0">Phone</h6>
				</div>
				<div className="col-sm-9 text-secondary">
					{user && user.mobile_phone
						? formatPhoneNumber(user.mobile_phone)
						: "(xxx) xx-xx"}
				</div>
			</div>
			<hr />
			{user && (
				<>
					<div className="row">
						<div className="col-sm-3">
							<h6 className="mb-0">BirthDay</h6>
						</div>
						<div className="col-sm-9 text-secondary">
							{user && user.birth_date
								? user.birth_date
								: "dd-mm-yyyy"}
						</div>
					</div>
				</>
			)}
			<hr />
			<div className="row">
				<div className="col-sm-3 d-flex align-items-center">
					<h6 className="mb-0" style={{ lineHeight: "1.5em" }}>
						Email Verification
					</h6>
				</div>
				<div className="col-sm-9 text-secondary d-flex justify-content-between align-items-center">
					{user && user.email_confirmed ? "Verified" : "Not Verified"}
					{user && !user.email_confirmed && (
						<form
							className="mailchimp-form"
							onSubmit={handleVerifyEmail}
						>
							<button className="" type="submit">
								Verify
							</button>
						</form>
					)}
				</div>
			</div>
			<hr />
			<div className="row">
				<div className="col-sm-3 d-flex align-items-center">
					<h6 className="mb-0">Newsletter</h6>
				</div>
				<div className="col-sm-9 text-secondary d-flex justify-content-between align-items-center">
					{user && user.is_subscribed
						? "Subscribed"
						: "Not Subscribed"}
					{user && user.is_subscribed && (
						<form
							className="mailchimp-form"
							onSubmit={handleUnsubscribe}
						>
							<button className="" type="submit">
								Unsubscribe
							</button>
						</form>
					)}
					{user && !user.is_subscribed && (
						<form
							className="mailchimp-form"
							onSubmit={handleSubscribe}
						>
							<button className="" type="submit">
								Subscribe
							</button>
						</form>
					)}
				</div>
			</div>

			{/* <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">Address</h6>
      </div>
      <div className="col-sm-9 text-secondary">
        Bay Area, San Francisco, CA
      </div>
    </div> */}

			{/* <hr /> */}
			<button id="editbtn" onClick={onEdit}>
				Edit
			</button>

			<button className="goru-btn-logout" onClick={onLogout}>
				Logout
			</button>
		</div>
	);
}
