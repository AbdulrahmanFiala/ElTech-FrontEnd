import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function GeneralTab() {
  const user = useSelector((state) => state.authSlice.user);

  return (
    <div className="tab-pane fade active show" id="account-general">

        <div className="card-body media align-items-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""
                className="d-block ui-w-80"/>
            <div className="media-body ml-4" id="btn-container">
                <label className="btn btn-outline-primary" id="uploadbtn">
                    Upload Photo
                    <input type="file" className="account-settings-fileinput"/>
                    
                </label> &nbsp;

                <button type="button" className="btn btn-default md-btn-flat">Reset</button>

                <div className="text-light small mt-1" id="ImageAlert">Allowed JPG, GIF or PNG. Max size of 800Kb</div>
            </div>
        </div>

        <hr className="border-light m-0"/>

        <div className="card-body">
            {/* <div className="form-group">
                <label className="form-label">Username</label>
                <input type="text" className="form-control mb-1" placeholder="JohnDoe"/>
            </div> */}
            <div className="form-group">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" placeholder="e.g. John" value={user.first_name}/>
            </div>
            <div className="form-group">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" placeholder="e.g. Doe" value={user.last_name}/>
            </div>
            <div className="form-group">
                <label className="form-label">E-mail</label>
                <input type="text" className="form-control mb-1" placeholder="e.g. JohnDoe@mail.com" value={user.email}/>
                {/* <div className="alert alert-warning mt-2" id="alertEmail">
                <small> Your email is not confirmed. Please check your inbox.{' '}</small>
                    <Link href="#">Resend confirmation</Link>
                </div> */}
            </div>
            {/* <div className="form-group">
                <label className="form-label">Company</label>
                <input type="text" className="form-control" placeholder="Company Ltd."/>
            </div> */}
        </div>
    </div>
  )
}
