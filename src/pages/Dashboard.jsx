import React from 'react'
import { useEffect, useState } from 'react';
import { checkAdminStatus } from '../api/services/admin/admin-services';
import SideNav from "../layouts/Dashboard/SideNav";
import Header from "../layouts/Home/Header";
import LoginSectionDashboard from "../layouts/Dashboard/LoginSectionDashboard";
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const auth = useSelector((state) => state.authSlice);

  useEffect(() => {
    const fetchAdminStatus = async () => {
      try {
        const response = await checkAdminStatus();
        console.log(response)

        if (response.is_admin) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error('Error while fetching admin status:', error);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminStatus();
  }, [auth]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isAdmin) {
    return (
      <SideNav />
    );
  }

  // If the user is not admin, render the login section for the dashboard
  return <LoginSectionDashboard />;
};
