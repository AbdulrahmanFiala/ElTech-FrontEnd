import React, { useState } from "react";
import { getUserData } from "../../../api/services/user/user-services"; // Import your authentication context
import {
  getAllCategories,
  updateCategory,
} from "../../../api/services/user/product-services"; // Import your authentication context
import { toast } from "react-toastify";
import InputField from "../../Shared/InputField/InputField";

const CategoryEditForm = ({ category, onCancel, setCategories }) => {
  const [catName, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedData = {
        name: catName,
        image: image,
      };

      const response = await updateCategory(category.id, catName, image);
      console.log("Post updated successfully:", response);

      // Clear form fields after successful update
      setName("");
      setImage("");

      const updatedCategories = await getAllCategories();
      setCategories(updatedCategories);

      toast.success("Service has been updated successfully", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

      // Hide the form after successful update
      onCancel();
    } catch (error) {
      toast.error(
        `Error adding the Category, please make sure that you filled up the name field`,
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        }
      );

      console.error("Error updating post:", error.message);
    }
  };

  return (
    <div className="dashboard-form-wrapper" id="dashboard-form-wrapper">
      <div className="woocommerce-billing-fields">

      <h3 className="text-center">EDIT CATEGORY WITH TITLE : <span style={{color:"red"}}>{category.name}</span> </h3>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center"

      >
        <div className="row m-3 w-50 ">

        <InputField
							noOfCol="col-lg-12"
							fieldLabel="Title"
              fieldPlaceholder={category.name}
							fieldName="name"
							fieldType="text"
              onChange={(e) => setName(e.target.value)}
							value={catName}
							required="true"
				/>
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
						name="images"
						className="d-none"
						multiple
						onChange={(e) => setImage(e.target.files[0])}
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

export default CategoryEditForm;
