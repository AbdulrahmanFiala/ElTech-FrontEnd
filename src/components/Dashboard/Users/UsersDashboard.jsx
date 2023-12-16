import { useState, useEffect } from "react";

import { getSingleUser } from "../../../api/services/user/user-services";

import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import UserDetails from "./UserDetails";

const UsersDashboard = () => {
	const [currentView, setCurrentView] = useState("allUsers");
	const [user, setUser] = useState({});
	const [refresh, setRefresh] = useState(false);

	// const handleRefresh = () => {
	// 	setRefresh(!refresh);
	// };
	const handleRefresh = async () => {
		try {
			const refreshedUser = await getSingleUser(user.id);
			setUser(refreshedUser);
		} catch (error) {
			console.error(`Failed to refresh user: ${error.message}`);
		}
	};

	const handleShowAllUsers = () => {
		setCurrentView("allUsers");
	};

	const handleCreateUser = () => {
		setCurrentView("createForm");
	};

	const handleShowUserDetails = async (userId) => {
		try {
			console.log("User ID", userId);
			const user = await getSingleUser(userId);
			setUser(user);
			setCurrentView("userDetails");
		} catch (error) {
			console.error(`Failed to fetch user: ${error.message}`);
		}
	};

	// useEffect(() => {
	// 	(async () => {
	// 		console.log("Here!");
	// 		await getSingleUser(user.id);
	// 		setUser(user);
	// 	})();
	// }, [refresh]);

	return (
		<div>
			<h1>Users</h1>
			{currentView === "allUsers" && (
				<>
					<button
						className="guru-btn mb-5"
						id="create-btn"
						onClick={handleCreateUser}
					>
						Add User
					</button>
					<UsersTable userSelectionHandler={handleShowUserDetails} />
				</>
			)}
			{currentView === "createForm" && (
				<>
					<button
						className="guru-btn mb-5"
						id="create-btn"
						onClick={handleShowAllUsers}
					>
						All Users
					</button>
					<div className="reply-form-wrapper">
						<UserForm allUsersHandler={handleShowAllUsers} />
					</div>
				</>
			)}
			{currentView === "userDetails" && (
				<>
					<button
						className="guru-btn mb-5"
						id="create-btn"
						onClick={handleShowAllUsers}
					>
						All Users
					</button>
					<div className="reply-form-wrapper">
						<UserDetails
							user={user}
							handleRefresh={handleRefresh}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default UsersDashboard;
