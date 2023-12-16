import React, { useState } from "react";
import { getUserData } from "../../../api/services/user/user-services"; // Import your authentication context
import { addService } from "../../../api/services/admin/admin-services"; // Import your authentication context
import { toast } from "react-toastify";
import InputField from "../../Shared/InputField/InputField";

const ServiceForm = ({ clickHandler ,onServiceCreated}) => {
  const userData = getUserData();
  const userEmail = userData.email;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the addPost API function
      const response = await addService(title, description, logo);
      console.log("Service added successfully:", response);
      console.log(response);

      // Reset the form after successful submission
      onServiceCreated();
      setTitle("");
      setDescription("");
      setLogo(null);

      toast.success("Service has been added successfully", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error adding service:", error.message);
      toast.error(
        `Error adding the service, please make sure that you filled up the form`,
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        }
      );
    }
  };

  return (
    <div className="dashboard-form-wrapper" id="dashboard-form-wrapper">
    <div className="woocommerce-billing-fields">

      <h3 className="text-center">ADD NEW SERVICE</h3>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center "
        encType="multipart/form-data"
      >
		  	<div className="row m-3 w-50 ">
				<InputField
							noOfCol="col-lg-12"
							fieldLabel="Title"
							fieldPlaceholder="Enter Service Title"
							fieldName="name"
							fieldType="text"
              onChange={(e) => setTitle(e.target.value)}
							value={title}
							required="true"
				/>

        <p className="col-lg-12">
					<label>Description</label>
					<textarea
						name="content"
            placeholder="Enter Service Description"
						rows="4"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
						required="true"
					></textarea>
				</p>

        <p className="col-lg-12">
					<label
						for="fileUpload"
						className="goru-btn w-50 text-center mx-auto"
					>
						Upload Images
					</label>
					<input
						type="file"
						id="fileUpload"
						name="logo"
						className="d-none"
						multiple
            onChange={(e) => setLogo(e.target.files[0])}
						required="true"
					/>
				</p>

        {/* <div className="col-lg-12 col-md-12">
          <input type="submit" name="submit" value="Submit" />
        </div> */}
        <div className="col-lg-12 col-md-12">
					<button
						type="submit"
						name="submit"
						value="Submit"
						className="goru-btn auth-button d-block mx-auto"
					>
						Add Service
					</button>
				</div>

      </div>
      </form>
    </div>
    </div>
  );
};

export default ServiceForm;
