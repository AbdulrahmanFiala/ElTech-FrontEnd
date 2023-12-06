import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from "../../api/services/user/user-services"

import CountryDropDownMenu from "../../components/Checkout/CountryDropDownMenu";
import InputField from "../../components/Shared/InputField/InputField";
import { showToast } from '../../utils/toastUtil';

const RegisterSection = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    mobile_phone: '',
    // profile_picture: '',
    birth_date: '1998-06-15',
    country: '',
    first_name: '',
    last_name: '',
    facebook_profile: '',
    instagram_profile: '',
    twitter_profile: ''
  });

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    }
    if (!formData.password) {
      tempErrors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.mobile_phone) {
      tempErrors.mobile_phone = 'You must provide a unique mobile number';
    }
    if (!formData.first_name) {
      tempErrors.first_name = 'First Name is required';
    }
    if (!formData.last_name) {
      tempErrors.last_name = 'Last Name is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    try {
      const response = await register(formData);
      console.log(response.data);
      showToast('Registration successful! please check your mail to activate your account.', 'success');
      navigate('/');
    } catch (error) {
      showToast(error.toString())
    }
  };



  return (
    <>
      <div className="woocommerce-billing-fields">
        <h3 className="text-center">Account Info</h3>

        <form
          onSubmit={handleSubmit}
          method="post"
          className="d-flex justify-content-center "
        >
          <div className="row m-3 w-50 ">
            <InputField
              noOfCol="col-lg-6"
              fieldLabel="First Name"
              fieldPlaceholder="Enter your first name"
              fieldName="first_name"
              fieldType="text"
              onChange={handleChange}
              value={formData.first_name}
            />
            <InputField
              noOfCol="col-lg-6"
              fieldLabel="Last Name"
              fieldPlaceholder="Enter your last name"
              fieldName="last_name"
              fieldType="text"
              onChange={handleChange}
              value={formData.last_name}
            />
            <InputField
              noOfCol="col-lg-6"
              fieldLabel="Email"
              fieldPlaceholder="Enter your email address"
              fieldName="email"
              fieldType="email"
              onChange={handleChange}
              value={formData.email}
            />
            <InputField
              noOfCol="col-lg-6"
              fieldLabel="Phone Number"
              fieldPlaceholder="Enter your phone number"
              fieldName="mobile_phone"
              fieldType="tel"
              onChange={handleChange}
              value={formData.mobile_phone}
            />
            <div className="col-lg-12">
              <div className="billing-countries">
                <label>Country</label>
                <CountryDropDownMenu
                  name="country"
                  onChange={handleChange}
                  value={formData.country}
                />
              </div>
            </div>
            <InputField
              noOfCol="col-lg-6"
              fieldLabel="Account Password"
              fieldPlaceholder="Choose a strong password"
              fieldName="password"
              fieldType="password"
              onChange={handleChange}
              value={formData.password}
            />
            <InputField
              noOfCol="col-lg-6"
              fieldLabel="Confirm Password"
              fieldPlaceholder="Confirm your password"
              fieldName="confirmPassword"
              fieldType="password"
              onChange={handleChange}
              value={formData.confirmPassword}
            />

            <button type="submit" className="goru-btn auth-button ">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterSection;
