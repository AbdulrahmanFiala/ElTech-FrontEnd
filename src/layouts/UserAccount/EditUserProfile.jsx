import React from "react";
import TabNavigation from "../../components/UserAccount/EditUserProfile/TabNavigation";
import GeneralTab from "../../components/UserAccount/EditUserProfile/GeneralTab";
import ChangePasswordTab from "../../components/UserAccount/EditUserProfile/ChangePasswordTab";
import InfoTab from "../../components/UserAccount/EditUserProfile/InfoTab";
import SocialLinksTab from "../../components/UserAccount/EditUserProfile/SocialLinksTab";

export default function EditUserProfile({ onUpdate, onCancel }) {
	return (
		<div className="container" id="UserProfileContainer">
			<div className="card overflow-hidden" id="UserProfileCard">
				<div className="row no-gutters row-bordered row-border-light">
					<TabNavigation />
					<div className="col-md-9">
						<div className="tab-content">
							<GeneralTab onCancel={onCancel} />
							<ChangePasswordTab onCancel={onCancel} />
							<InfoTab onCancel={onCancel} />
							<SocialLinksTab onCancel={onCancel} />
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
