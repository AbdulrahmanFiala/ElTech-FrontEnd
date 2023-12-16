import React, { useState ,useEffect} from "react";
import { getUserData } from "../../../api/services/user/user-services"; // Import your authentication context
import { addPost } from "../../../api/services/user/post-services"; // Import your authentication context
import { getAllCategories } from "../../../api/services/user/product-services";
import { showToast } from "../../../utils/toastUtil";
import InputField from "../../Shared/InputField/InputField";



const PostForm = ({clickHandler ,onPostCreated}) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [image, setImage] = useState('');
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('');


	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const userData = await getUserData();
			const userId = userData.id;

			const response = await addPost(title, content, image ,selectedCategory);
			console.log('Post added successfully:', response);
			showToast("added new post successfully", "success");
			console.log(response);

			onPostCreated();
			setTitle('');
			setContent('');
			setImage('');
			setSelectedCategory('');
		} catch (error) {
		  console.error('Error adding post:', error.message);
		}
	  };

	const handleCategoryChange = (e) => {
		setSelectedCategory(e.target.value);
	  };


  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

	return (
		<>
		<button className="guru-btn" id="create-btn" onClick={clickHandler} style={{marginBottom:"30px"}}>
            All Posts
        </button>
		<div className="dashboard-form-wrapper" id="dashboard-form-wrapper">
		<div className="woocommerce-billing-fields">

		<h3 className="text-center">ADD NEW POST</h3>
		  <form onSubmit={handleSubmit} className="d-flex justify-content-center ">
		  	<div className="row m-3 w-50 ">
				<InputField
							noOfCol="col-lg-12"
							fieldLabel="Title"
							fieldPlaceholder="Enter Post Title"
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
						placeholder="Enter Post Content"
						rows="4"
						onChange={(e) => setContent(e.target.value)}
						value={content}
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
						name="images"
						className="d-none"
						multiple
						onChange={(e) => setImage(e.target.files[0])}
						required="true"
					/>
				</p>
				<p className="billing-countries col-lg-12">
						<label>Category</label>
						<select
							className="country_to_state country_select"
							id="billing_country"
							name="category"
							onChange={handleCategoryChange}
							value={selectedCategory}
							required="true"
						>
							<option value="0">---</option>
							{categories.map((category) => (
								<option
									key={category.id}
									value={category.id}
								>
									{category.name}
								</option>
							))}
						</select>
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
						Add Post
					</button>
				</div>
			</div>
		  </form>

		</div>
		</div>
		</>
	  );
	};

export default PostForm;
