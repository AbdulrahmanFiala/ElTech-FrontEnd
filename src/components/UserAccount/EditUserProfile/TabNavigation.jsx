import React from 'react'
import { useSelector } from 'react-redux';

import profilePic from '../../../assets/images/user/profile_pic_placeholder.png';

export default function TabNavigation() {
    const user = useSelector((state) => state.authSlice.user);
    
    return (
        <div className="col-md-3 pt-0">
            <img src={user?.profile_picture??profilePic} alt="staticImg" className="d-block ui-w-100"/>
            <div className="list-group list-group-flush account-settings-links" id="account-settings-links">
                <a className="list-group-item list-group-item-action active" data-toggle="list"
                    href="#account-general">General</a>
                <a className="list-group-item list-group-item-action" data-toggle="list"
                    href="#account-change-password">Change password</a>
                <a className="list-group-item list-group-item-action" data-toggle="list"
                    href="#account-info">Info</a>
                <a className="list-group-item list-group-item-action" data-toggle="list"
                    href="#account-social-links">Social links</a>
            </div>
        </div>
  )
}
