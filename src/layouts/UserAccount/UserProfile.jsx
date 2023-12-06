import React from "react";

import UserImageCard from "../../components/UserAccount/UserProfile/UserImageCard";
import SocialCard from "../../components/UserAccount/UserProfile/SocialCard";
import UserDetails from "../../components/UserAccount/UserProfile/UserDetails";


export default function UserProfile({ onEdit, onLogout }) {
  return (
    <div className="container" id="UserProfilePreview">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <UserImageCard/>
            <SocialCard/>
          </div>

          <div className="col-md-8">
            <UserDetails onEdit={onEdit} onLogout={onLogout}/>
          </div>
        </div>
    </div>
  );
}
