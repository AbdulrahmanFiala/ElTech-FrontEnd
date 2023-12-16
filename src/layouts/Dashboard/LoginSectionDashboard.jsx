import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { loginUserThunk } from '../../services/actions/authSlice';

import InputField from "../../components/Shared/InputField/InputField";
import logo from "../../assets/images/logo.png";

const LoginSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authSlice);
  const [loggedIn, setLoggedIn] = useState(false);

  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginUserThunk({ credentials }));
  };

  useEffect(() => {
    if (auth.user && auth.token) {
      navigate('/dashboard');
      setLoggedIn(true);   
     }
  }, [auth,navigate,loggedIn]);

  return (
    <>
      <div className="woocommerce-billing-fields">
        <div>
        <div className="logo" style={{marginLeft:"3%",padding:"0px"}}>
              <Link to="/">
                <img src={logo} alt="Goru"  style={{width:"90px",height:"90px",borderRadius:"5px"}}/>
              </Link>
        </div>
        <h3 className="text-center">Login</h3>

        </div>


        <form
          action="#"
          method="post"
          className=" d-flex justify-content-center "
          onSubmit={handleSubmit}
        >
          <div className="row w-50 m-3">
            <InputField
              noOfCol="col-lg-12"
              fieldLabel="Email"
              fieldPlaceholder="Enter your email address"
              fieldName="email"
              fieldType="email"
              value={credentials.email}
              onChange={handleChange}
            />
            <InputField
              noOfCol="col-lg-12"
              fieldLabel="Password"
              fieldPlaceholder="Enter your password"
              fieldName="password"
              fieldType="password"
              value={credentials.password}
              onChange={handleChange}
            />
            <button type="submit" className="goru-btn auth-button  ">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginSection;
