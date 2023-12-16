import React, { useState, useEffect } from "react";

import {
	getAllCategories,
	addProductImages,
	addProductFeatures,
	updateProduct,
} from "../../../api/services/user/product-services";

import InputField from "../../Shared/InputField/InputField";

import { showToast } from "../../../utils/toastUtil";

const ProductEditForm = ({ product, productDetailsHandler }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [image, setImage] = useState("");
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [images, setImages] = useState([]);
	const [features, setFeatures] = useState(
		product.features.map((feature) => feature.feature)
	);
	const [productData, setProductData] = useState({
		name: product ? product.name : "",
		price: product.price,
		description: product.description,
		stock: product.stock,
		category: product.category.id,
		is_on_sale: product.is_on_sale,
		is_featured: product.is_featured,
		is_trending: product.is_trending,
	});

	const handleFeatureChange = (index, event) => {
		const values = [...features];
		values[index] = event.target.value;
		setFeatures(values);
	};

	const handleAddFeature = () => {
		setFeatures([...features, ""]);
	};

	const handleRemoveFeature = (index) => {
		const values = [...features];
		values.splice(index, 1);
		setFeatures(values);
	};

	const handleFileChange = (e) => {
		const files = Array.from(e.target.files);
		const validFiles = files.filter((file) =>
			file.type.startsWith("image/")
		);
		if (validFiles.length !== files.length) {
			showToast(
				"Some files were not images and were not uploaded",
				"error"
			);
		}
		setImages(validFiles);
	};

	// const handleRemoveFeature = (index) => {
	// 	setFeatures(features.filter((feature, i) => i !== index));
	//   };

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	try {
	// 		const updatedData = {
	// 			title: title,
	// 			content: content,
	// 			image: image,
	// 			category_id: selectedCategory,
	// 		};

	// 		// const response = await updatePost(product.id, updatedData);
	// 		console.log("Post updated successfully:", response);

	// 		// Clear form fields after successful update
	// 		setTitle("");
	// 		setContent("");
	// 		setImage("");
	// 		setSelectedCategory("");

	// 		// Hide the form after successful update
	// 		onCancel();
	// 	} catch (error) {
	// 		console.error("Error updating post:", error.message);
	// 	}
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { name, price, stock, category, isOnSale, sale_amount } =
			productData;

		// Validation
		if (!name || !price || !stock || !category) {
			showToast(
				"Please fill in all required fields: name, price, stock, category",
				"error"
			);
			return;
		}

		if (isNaN(price) || price <= 0) {
			showToast("Price must be a number bigger than 0", "error");
			return;
		}

		if (isNaN(stock) || stock < 0) {
			showToast("Stock must be a number at least 0", "error");
			return;
		}

		if (isOnSale) {
			if (isNaN(sale_amount) || sale_amount < 1 || sale_amount > 100) {
				showToast(
					"Sale amount must be a number between 1 and 100",
					"error"
				);
				return;
			}
		}

		if (
			(images.length < 1 && product.images.length < 1) ||
			images.length > 4
		) {
			showToast(
				"You must upload at least one image and at most four images",
				"error"
			);
			return;
		}

		try {
			console.log("Data Before Submission", productData);
			const response = await updateProduct(product.id, productData);
			console.log("Product updated successfully:", response);
			// ...rest of the code...
			// await updateProductImages(product.id, images);
			// await updateProductFeatures(product.id, features);
			if (images.length > 0) {
				// await updateProductImages(product.id, images);
				await addProductImages(product.id, images);
			}
			// Add product features if there are any
			if (features.length > 0) {
				// await updateProductFeatures(product.id, features);
				await addProductFeatures(product.id, features);
			}

			showToast("Product updated successfully", "success");
			setImages([]);
			productDetailsHandler(product.id);
		} catch (error) {
			console.error("Error updating product:", error.message);
			showToast("Error updating product: " + error.message, "error");
		}
	};

	const handleCategoryChange = (e) => {
		setSelectedCategory(e.target.value);
	};

	const handleChange = (event) => {
		console.log("Product Data", productData);
		// console.log("Categories", categories);
		// console.log(product);
		// console.log(images);
		// console.log(product.category.id);

		const value =
			event.target.type === "checkbox"
				? event.target.checked
				: event.target.value;
		// console.log(event.target.name, value);
		if (event.target.name === "category") {
			setProductData({
				...productData,
				[event.target.name]: parseInt(value, 10),
			});
		} else {
			setProductData({
				...productData,
				[event.target.name]: value,
			});
		}
	};

	useEffect(() => {
		const fetchCategories = async () => {
			const data = await getAllCategories();
			setCategories(data);
		};

		fetchCategories();
	}, []);

	useEffect(() => {
		setProductData({
			name: product ? product.name : "",
			price: product.price,
			description: product.description,
			stock: product.stock,
			category: product.category.id,
			is_on_sale: product.is_on_sale,
			is_featured: product.is_featured,
			is_trending: product.is_trending,
		});
	}, [product]);

	return (
		// <div className="dashboard-form-wrapper" id="dashboard-form-wrapper">
		// 	<h5>Edit Product "{product.name}" </h5>
		// 	<form
		// 		onSubmit={handleSubmit}
		// 		className="dashboard-form"
		// 		id="dashboard-form"
		// 	>
		// 		<div className="col-lg-12 col-md-12">
		// 			<input
		// 				type="text"
		// 				name="title"
		// 				placeholder={product.title}
		// 				value={title}
		// 				onChange={(e) => setTitle(e.target.value)}
		// 			/>
		// 		</div>
		// 		<div className="col-lg-12 col-md-12">
		// 			<textarea
		// 				name="content"
		// 				placeholder={product.content}
		// 				value={content}
		// 				onChange={(e) => setContent(e.target.value)}
		// 			></textarea>
		// 		</div>
		// 		<div className="col-lg-12 col-md-12">
		// 			<input
		// 				type="file"
		// 				placeholder={product.image}
		// 				name="image"
		// 				accept="image/*"
		// 				onChange={(e) => setImage(e.target.files[0])}
		// 			/>
		// 		</div>
		// 		<div className="col-lg-12 col-md-12">
		// 			<select
		// 				value={selectedCategory}
		// 				onChange={handleCategoryChange}
		// 			>
		// 				<option value="">Select category</option>
		// 				{categories.map((category) => (
		// 					<option key={category.id} value={category.id}>
		// 						{category.name}
		// 					</option>
		// 				))}
		// 			</select>
		// 		</div>
		// 		<div style={{ display: "flex", width: "200px" }}>
		// 			<div className="col-lg-12 col-md-12">
		// 				<input type="submit" name="submit" value="Submit" />
		// 			</div>
		// 			<div className="col-lg-12 col-md-12">
		// 				<button type="button" onClick={onCancel}>
		// 					Cancel
		// 				</button>
		// 			</div>
		// 		</div>
		// 	</form>
		// </div>
		<div className="woocommerce-billing-fields">
			<h3 className="text-center">EDIT PRODUCT WITH TITLE : <span style={{color:"red"}}>{product.name}</span></h3>

			<form
				onSubmit={handleSubmit}
				method="post"
				className="d-flex justify-content-center "
			>
				<div className="row m-3 w-50 ">
					<InputField
						noOfCol="col-lg-6"
						fieldLabel="Title"
						fieldPlaceholder="Enter product title"
						fieldName="name"
						fieldType="text"
						onChange={handleChange}
						value={productData.name}
					/>
					<p className="col-lg-6">
						<label>Price</label>
						<input
							placeholder="Enter product price"
							name="price"
							type="number"
							onChange={handleChange}
							step="0.01"
							value={productData.price}
						/>
					</p>
					<p className="col-lg-12">
						<label>Description</label>
						<textarea
							name="description"
							placeholder="Enter product description"
							rows="4"
							onChange={handleChange}
							value={productData.description}
						></textarea>
					</p>
					<InputField
						noOfCol="col-lg-6"
						fieldLabel="Stock"
						fieldPlaceholder="Enter product stock"
						fieldName="stock"
						fieldType="number"
						onChange={handleChange}
						value={productData.stock}
					/>
					<p className="billing-countries col-lg-6">
						<label>Category</label>
						<select
							className="country_to_state country_select"
							id="billing_country"
							name="category"
							onChange={handleChange}
							value={productData.category}
						>
							<option value="0">---</option>
							{categories.map((category) => (
								<option key={category.id} value={category.id}>
									{category.name}
								</option>
							))}
						</select>
					</p>
					<p className="col-lg-6 d-flex align-items-center">
						<label className="w-25">On Sale</label>
						<input
							type="checkbox"
							name="is_on_sale"
							className="w-25"
							onChange={handleChange}
							value={productData.is_on_sale}
							checked={productData.is_on_sale}
						/>
					</p>
					<p className="col-lg-6">
						<label>Sale Amount</label>
						<input
							placeholder="Enter sale amount (1 - 100)"
							name="sale_amount"
							type="number"
							onChange={handleChange}
							disabled={!productData.is_on_sale}
							value={productData.sale_amount}
							step="0.01"
						/>
					</p>
					<hr className="col-lg-12" />
					<p className="col-lg-4 d-flex align-items-center">
						<label className="w-25" style={{ marginRight: "45px" }}>
							Hot
						</label>
						<input
							type="checkbox"
							name="is_hot"
							className="w-25"
							onChange={handleChange}
							value={productData.is_hot}
							checked={productData.is_hot}
						/>
					</p>
					<p className="col-lg-4 d-flex align-items-center">
						<label className="w-50">Featured</label>
						<input
							type="checkbox"
							name="is_featured"
							className="w-25"
							onChange={handleChange}
							value={productData.is_featured}
							checked={productData.is_featured}
						/>
					</p>
					<p className="col-lg-4 d-flex align-items-center">
						<label className="w-50">Trending</label>
						<input
							type="checkbox"
							name="is_trending"
							className="w-25"
							onChange={handleChange}
							value={productData.is_trending}
							checked={productData.is_trending}
						/>
					</p>
					{images.length === 0 &&
						product.images.map((image, index) => (
							<div
								key={index}
								style={{
									marginLeft: "5px",
									marginBottom: "10px",
								}}
							>
								<img
									src={image.image}
									alt={`Product ${index}`}
									style={{
										width: "100px",
										height: "100px",
										borderRadius: "50%",
										border: "1px solid black",
										padding: "10px",
										objectFit: "contain",
									}}
								/>
								{image.is_thumbnail && (
									<small className="d-block text-center">
										Thumbnail
									</small>
								)}
							</div>
						))}
					{images.length !== 0 &&
						images.map((image, index) => (
							<div
								key={index}
								style={{
									marginLeft: "5px",
									marginBottom: "10px",
								}}
							>
								<img
									src={URL.createObjectURL(image)}
									alt={`Product ${index}`}
									style={{
										width: "100px",
										height: "100px",
										borderRadius: "50%",
										border: "1px solid black",
										padding: "10px",
										objectFit: "contain",
									}}
								/>
								{index === 0 && (
									<small className="d-block text-center">
										Thumbnail
									</small>
								)}
							</div>
						))}

					<p className="col-lg-12">
						<label>
							Note: The first image you select will be used as the
							thumbnail.
						</label>
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
							onChange={handleFileChange}
						/>
					</p>
					<p className="col-lg-12">
						<label
							className="goru-btn w-50 text-center mx-auto"
							onClick={handleAddFeature}
						>
							Add Feature
						</label>
						{features.map((feature, index) => (
							<div key={index}>
								<input
									type="text"
									value={feature}
									onChange={(event) =>
										handleFeatureChange(index, event)
									}
									className="w-75"
								/>
								<button
									type="button"
									onClick={() => handleRemoveFeature(index)}
									class="goru-btn auth-button"
									style={{
										height: "45px",
										width: "22%",
									}}
								>
									Remove
								</button>
							</div>
						))}
					</p>
					<div className="col-lg-12">
						<button
							type="submit"
							className="goru-btn auth-button d-block mx-auto"
						>
							Update
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ProductEditForm;

// const ProductEditForm = () => {
// 	return <h1>Edit</h1>;
// };

// export default ProductEditForm;
