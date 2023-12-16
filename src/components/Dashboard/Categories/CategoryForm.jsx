import React, { useState } from "react";
import { getUserData } from "../../../api/services/user/user-services"; // Import your authentication context
import { addCategory } from "../../../api/services/user/product-services"; // Import your authentication context
import { toast } from "react-toastify";
import InputField from "../../Shared/InputField/InputField";


const CategoryForm = ({ clickHandler ,onCategoryCreated}) => {
  const userData = getUserData();
  const userEmail = userData.email;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the addPost API function
      const response = await addCategory(name, image);
      console.log("Category added successfully:", response);
      console.log(response);

      // Reset the form after successful submission
      toast.success("Category has been created successfully", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

      onCategoryCreated();
      setName("");
      setImage("");
    } catch (error) {
      toast.error(
        `Error adding Category, please make sure that you filled up the form`,
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        }
      );

      console.error("Error adding post:", error.message);
    }
  };

  return (
    <div className="dashboard-form-wrapper" id="dashboard-form-wrapper">
      <div className="woocommerce-billing-fields">


      <h3 className="text-center">ADD NEW CATEGORY</h3>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center"
      >
      <div className="row m-3 w-50 ">
          <InputField
							noOfCol="col-lg-12"
							fieldLabel="Title"
              fieldPlaceholder="Category Title"
							fieldName="name"
							fieldType="text"
              onChange={(e) => setName(e.target.value)}
							value={name}
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
						required="true"
					/>
				</p>

          <div className="col-lg-12 col-md-12">
					<button
						type="submit"
						name="submit"
						value="Submit"
						className="goru-btn auth-button d-block mx-auto"
					>
						Add Category
					</button>
				</div>
      </div>
      </form>

      </div>
    </div>
  );
};

export default CategoryForm;
