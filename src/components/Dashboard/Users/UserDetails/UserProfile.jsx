import UserImageCard from "./UserProfile/UserImageCard";
import SocialCard from "./UserProfile/SocialCard";
import UserDetails from "./UserProfile/UserDetails";

export default function UserProfile({ user, onEdit, onLogout, handleRefresh }) {
	return (
		<div className="container" id="UserProfilePreview">
			<div className="row gutters-sm">
				<div className="col-md-4 mb-3">
					<UserImageCard user={user} />
					<SocialCard user={user} />
				</div>

				<div className="col-md-8">
					<UserDetails
						user={user}
						onEdit={onEdit}
						onLogout={onLogout}
						handleRefresh={handleRefresh}
					/>
				</div>
			</div>
		</div>
	);
}
