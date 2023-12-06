import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/actions/authSlice';

import Header from "../layouts/Home/Header";
import Footer from "../layouts/Home/Footer";
import EditUserProfile from '../layouts/UserAccount/EditUserProfile';
import UserProfile from '../layouts/UserAccount/UserProfile';



export default function MyAccountProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const [isEditing, setIsEditing] = useState(false);

  const handleLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    navigate('/');
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Header className="inner-header" />
      {
        isEditing ? (
          <EditUserProfile onUpdate={handleUpdate} onCancel={handleCancel} />
        ) : (
          <UserProfile onEdit={handleEditClick} onLogout={handleLogoutClick}/>
        )
      }

      <Footer className="inner-footer" />
    </>
  )
}
