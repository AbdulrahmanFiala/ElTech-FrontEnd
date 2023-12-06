import React from 'react'
import { useSelector } from 'react-redux';

export default function UserInfo() {
  const user = useSelector((state) => state.authSlice.user);
  return (
    <div className="card">
              <div className="card-body" id="userImageCard">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={user?.profile_picture??"https://bootdey.com/img/Content/avatar/avatar7.png"}
                    alt="Admin"
                  />
                  <div className="mt-3">
                    <h4>{user? user.first_name + " " +  user.last_name :  "John Doe"}</h4>
                    <p className="text-secondary mb-1">{user? user.email : "JohnDoe@mail.com"}</p>
                    {/* <p className="text-muted font-size-sm">Company</p> */}
                  </div>
                </div>
              </div>
            </div>
  )
}
