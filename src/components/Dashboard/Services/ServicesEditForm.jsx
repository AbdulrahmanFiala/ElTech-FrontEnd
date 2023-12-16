import React, { useState, useEffect } from "react";
import {
  getAllServices,
  updateService,
} from "../../../api/services/admin/admin-services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "../../Shared/InputField/InputField";

const ServiceEditForm = ({ service, onCancel, setServices }) => {
  const [serviceTitle, setServiceTitle] = useState(service.title);
  const [serviceDescription, setServiceDescription] = useState(
    service.description
  );
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    // Update the state when the service prop changes
    setServiceTitle(service.title);
    setServiceDescription(service.description);
    setLogo(null); // Clear the previous logo to avoid displaying the old image
  }, [service]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateService(
        service.id,
        serviceTitle,
        serviceDescription,
        logo
      );

      const updatedServices = await getAllServices();
      setServices(updatedServices);

      toast.success("Service has been updated successfully", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

      // Clear form fields after successful update
      // setServiceTitle("");
      // setServiceDescription("");
      // setLogo(null);

      // Hide the form after successful update
      onCancel();
    } catch (error) {
      console.error("Error updating service:", error.message);
      toast.error(
        `Error updating service, please make sure that the service has a title and a description.`,
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
      <h3 className="text-center">EDIT SERVICE WITH TITLE :{" "} <span style={{ color: "red" }}>{service.title}</span></h3>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center "
      >
      <div className="row m-3 w-50 ">
        <InputField
							noOfCol="col-lg-12"
							fieldLabel="Title"
							fieldPlaceholder={service.title}
							fieldName="name"
							fieldType="text"
              onChange={(e) => setServiceTitle(e.target.value)}
              value={serviceTitle}
							required="true"
				/>

        <p className="col-lg-12">
					<label>Description</label>
					<textarea
						name="content"
            placeholder={service.description}
						rows="4"
            onChange={(e) => setServiceDescription(e.target.value)}
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
					/>
				</p>

        <div className="col-lg-12" style={{ display: "flex" }}>
          <div className="col-lg-12 col-md-12">
                  <button
                    type="submit"
                    name="submit"
                    value="Submit"
                    className="goru-btn auth-button d-block mx-auto"
                  >
                    Update
                  </button>
          </div>
          {/* <div className="col-lg-12 col-md-12">
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          </div> */}
        </div>

      </div>
      </form>

    </div>
    </div>
  );
};

export default ServiceEditForm;
