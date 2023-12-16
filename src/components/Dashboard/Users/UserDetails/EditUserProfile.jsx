import React from "react";
import TabNavigation from "./EditUserProfile/TabNavigation";
import GeneralTab from "./EditUserProfile/GeneralTab";
import ChangePasswordTab from "./EditUserProfile/ChangePasswordTab";
import InfoTab from "./EditUserProfile/InfoTab";
import SocialLinksTab from "./EditUserProfile/SocialLinksTab";

export default function EditUserProfile({ user, onUpdate, onCancel }) {
	return (
		<div className="container" id="UserProfileContainer">
			<div className="card overflow-hidden" id="UserProfileCard">
				<div className="row no-gutters row-bordered row-border-light">
					<TabNavigation />
					<div className="col-md-9">
						<div className="tab-content">
							<GeneralTab user={user} onCancel={onCancel} />
							{/* <ChangePasswordTab
								user={user}
								onCancel={onCancel}
							/> */}
							<InfoTab user={user} onCancel={onCancel} />
							<SocialLinksTab user={user} onCancel={onCancel} />
						</div>
					</div>
				</div>
			</div>
			{/* <div className="text-right mt-3" id="UserProfileBtn">
            <button type="button" className="btn btn-primary" onClick={onUpdate}>Save changes</button>&nbsp;
            <button type="button" className="btn btn-default"onClick={onCancel} >Cancel</button>
        </div> */}
		</div>
	);
}
