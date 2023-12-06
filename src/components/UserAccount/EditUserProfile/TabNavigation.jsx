import React from 'react'

export default function TabNavigation() {
  return (
    <div className="col-md-3 pt-0">
        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="staticImg" className="d-block ui-w-100"/>
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
