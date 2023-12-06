import React from 'react'
import { useSelector } from 'react-redux';
import { formatPhoneNumber } from '../../../utils/helpers';

export default function UserCard({onEdit, onLogout}) {
  const user = useSelector((state) => state.authSlice.user);

  return (
    <div className="card-body" id="userCardBody">

    <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">Full Name</h6>
      </div>
      <div className="col-sm-9 text-secondary">{user? user.first_name + " " + user.last_name : "John Doe"}</div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">Email</h6>
      </div>
      <div className="col-sm-9 text-secondary">{user? user.email : "JohnDoe@mail.com"}</div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">Phone</h6>
      </div>
      <div className="col-sm-9 text-secondary">{user? formatPhoneNumber(user.mobile_phone) : "(239) 816-9029"}</div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">BirthDay</h6>
      </div>
      <div className="col-sm-9 text-secondary">{user? user.birth_date : "01-01-2001"}</div>
    </div>
    <hr />

    {/* <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">Address</h6>
      </div>
      <div className="col-sm-9 text-secondary">
        Bay Area, San Francisco, CA
      </div>
    </div> */}

    <hr />
        <button id="editbtn" onClick={onEdit}>Edit</button>

        <button className="goru-btn-logout" onClick={onLogout}>Logout</button>
  </div>
  )
}
