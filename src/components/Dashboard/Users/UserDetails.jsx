import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { logout } from "../services/actions/authSlice";

import { getSingleUser } from "../../../api/services/user/user-services";

import { showToast } from "../../../utils/toastUtil";

import Header from "../../../layouts/Home/Header";
import EditUserProfile from "./UserDetails/EditUserProfile";
import UserProfile from "./UserDetails/UserProfile";

const UserDetails = ({ user, handleRefresh }) => {
	// const dispatch = useDispatch();
	// const navigate = useNavigate();
	// const [isEditing, setIsEditing] = useState(false);
	// const [user, setUser] = useState();
	// const { id } = useParams();

	// useEffect(() => {
	// 	const fetchUser = async () => {
	// 		try {
	// 			const user = await getSingleUser(id);
	// 			setUser(user);
	// 		} catch (error) {
	// 			console.error("Error fetching user:", error.message);
	// 		}
	// 	};

	// 	fetchUser();
	// }, [id]);

	// const handleEditClick = () => {
	// 	setIsEditing(true);
	// };

	// const handleUpdate = () => {
	// 	setIsEditing(false);
	// };

	// const handleCancel = () => {
	// 	setIsEditing(false);
	// };

	return (
		<>
			{/* <Header className="inner-header" /> */}
			{/* {isEditing ? (
				<EditUserProfile
					user={user}
					onUpdate={handleUpdate}
					onCancel={handleCancel}
				/>
			) : (
				<UserProfile
					user={user}
					onEdit={handleEditClick}
					// onLogout={handleLogoutClick}
				/>
			)} */}
			<UserProfile
				user={user}
				handleRefresh={handleRefresh}
				// onEdit={handleEditClick}
				// onLogout={handleLogoutClick}
			/>

		</>
	);
};

export default UserDetails;
