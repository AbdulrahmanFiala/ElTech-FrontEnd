import { formatPhoneNumber } from "../../../../../utils/helpers";

import { changeUserRole } from "../../../../../api/services/admin/admin-services";

import { showToast } from "../../../../../utils/toastUtil";

export default function UserCard({ user, handleRefresh }) {
	// const navigate = useNavigate();

	// const handleSubscribe = async (event) => {
	// 	event.preventDefault();
	// 	try {
	// 		await subscribe(user.email);
	// 		await getUserData(); // refresh user data
	// 		showToast("You have subscribed successfully!", "success"); // show success toast
	// 		window.location.reload(); // reload the page
	// 	} catch (error) {
	// 		showToast(
	// 			"There was a problem subscribing. Please try again.",
	// 			"error"
	// 		); // show error toast
	// 		console.error(error);
	// 	}
	// };

	// const handleUnsubscribe = async (event) => {
	// 	event.preventDefault();
	// 	try {
	// 		await unsubscribe(user.email);
	// 		await getUserData(); // refresh user data
	// 		showToast("You have unsubscribed successfully!", "success"); // show success toast
	// 		window.location.reload(); // reload the page
	// 	} catch (error) {
	// 		showToast(
	// 			"There was a problem unsubscribing. Please try again.",
	// 			"error"
	// 		); // show error toast
	// 		console.error(error);
	// 	}
	// };

	// const handleVerifyEmail = (event) => {
	// 	event.preventDefault();
	// 	navigate("/verify-email", { state: { email: user.email } });
	// };

	const handleUserRoleChange = async (event) => {
		event.preventDefault();

		try {
			await changeUserRole(user.id, !user.is_superuser);
			showToast("User role updated successfully!", "success");
			// window.location.reload();
			handleRefresh();
		} catch (error) {
			showToast("There was a problem updating the user's role", "error");
			console.error(error);
		}
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
					{user
						? formatPhoneNumber(user.mobile_phone)
						: "(239) 816-9029"}
				</div>
			</div>
			<hr />
			<div className="row">
				<div className="col-sm-3 d-flex align-items-center">
					<h6 className="mb-0">Role</h6>
				</div>
				<div className="col-sm-9 text-secondary d-flex justify-content-between align-items-center">
					{user && user.is_superuser ? "Admin" : "User"}
					{user && user.is_superuser ? (
						<form
							className="mailchimp-form"
							onSubmit={handleUserRoleChange}
						>
							<button className="" type="submit">
								Remove From Admins
							</button>
						</form>
					) : (
						<form
							className="mailchimp-form"
							onSubmit={handleUserRoleChange}
						>
							<button className="" type="submit">
								Make Admin
							</button>
						</form>
					)}
				</div>
			</div>
			<hr />
			<div className="row">
				<div className="col-sm-3 d-flex align-items-center">
					<h6 className="mb-0" style={{ lineHeight: "1.5em" }}>
						Email Verification
					</h6>
				</div>
				<div className="col-sm-9 text-secondary d-flex justify-content-between align-items-center">
					{user && user.email_confirmed ? "Verified" : "Not Verified"}
					{/* {user && !user.email_confirmed && (
						<form
							className="mailchimp-form"
							onSubmit={handleVerifyEmail}
						>
							<button className="" type="submit">
								Verify
							</button>
						</form>
					)} */}
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
					{/* {user && user.is_subscribed && (
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
					)} */}
				</div>
			</div>
			<hr />
			{/* <div className="row">
				<div className="col-sm-3 d-flex align-items-center">
					<h6 className="mb-0">Orders</h6>
				</div>
				<div className="col-sm-9 text-secondary d-flex justify-content-between align-items-center">
					<Link className="goru-btn" to="/orders">
						View Orders
					</Link>
				</div>
			</div>
			<hr />
			<div className="row">
				<div className="col-sm-3 d-flex align-items-center">
					<h6 className="mb-0">Wishlist</h6>
				</div>
				<div className="col-sm-9 text-secondary d-flex justify-content-between align-items-center">
					<Link className="goru-btn" to="/wishlist">
						View Wishlist
					</Link>
				</div>
			</div>
			<hr /> */}
			{user && user.birth_date && (
				<>
					<div className="row">
						<div className="col-sm-3">
							<h6 className="mb-0">BirthDay</h6>
						</div>
						<div className="col-sm-9 text-secondary">
							{user ? user.birth_date : "dd-mm-yyyy"}
						</div>
					</div>
					<hr />
				</>
			)}

			{/* <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">Address</h6>
      </div>
      <div className="col-sm-9 text-secondary">
        Bay Area, San Francisco, CA
      </div>
    </div> */}

			{/* <hr /> */}
			{/* <button id="editbtn" onClick={onEdit}>
				Edit
			</button> */}

			{/* <button className="goru-btn-logout" onClick={onLogout}>
				Logout
			</button> */}
		</div>
	);
}
