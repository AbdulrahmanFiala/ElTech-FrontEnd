import { useState } from "react";

import { getSingleProduct } from "../../../api/services/user/product-services";

import ProductForm from "./ProductForm";
import ProductsTable from "./ProductsTable";
import ProductEditForm from "./ProductEditForm";
import ProductDetails from "./ProductDetails";

const ProductsDashboard = () => {
	const [currentView, setCurrentView] = useState("allProducts");
	const [product, setProduct] = useState({});

	const handleShowAllProducts = () => {
		setCurrentView("allProducts");
	};

	const handleCreateProduct = () => {
		setCurrentView("createForm");
	};

	const handleUpdateProduct = async (productId) => {
		try {
			const product = await getSingleProduct(productId);
			setProduct(product);
			setCurrentView("updateForm");
		} catch (error) {
			console.error(`Failed to fetch product: ${error.message}`);
		}
	};

	const handleShowProductDetails = async (productId) => {
		try {
			const product = await getSingleProduct(productId);
			setProduct(product);
			setCurrentView("productDetails");
		} catch (error) {
			console.error(`Failed to fetch product: ${error.message}`);
		}
	};

	return (
		<div>
			<h1>Products</h1>
			{currentView === "allProducts" && (
				<>
					<button
						className="guru-btn mb-5"
						id="create-btn"
						onClick={handleCreateProduct}
					>
						Add Product
					</button>
					<ProductsTable
						updateHandler={handleUpdateProduct}
						productSelectionHandler={handleShowProductDetails}
					/>
				</>
			)}
			{currentView === "createForm" && (
				<>
					<button
						className="guru-btn mb-5"
						id="create-btn"
						onClick={handleShowAllProducts}
					>
						All Products
					</button>
					<div className="reply-form-wrapper">
						<ProductForm
							allProductsHandler={handleShowAllProducts}
						/>
					</div>
				</>
			)}
			{currentView === "updateForm" && (
				<>
					<button
						className="guru-btn mb-5"
						id="create-btn"
						onClick={handleShowAllProducts}
					>
						All Products
					</button>
					<button
						className="guru-btn mb-5 ml-3"
						id="create-btn"
						onClick={() => handleShowProductDetails(product.id)}
					>
						Details
					</button>
					<div className="reply-form-wrapper">
						<ProductEditForm
							product={product}
							productDetailsHandler={handleShowProductDetails}
						/>
					</div>
				</>
			)}
			{currentView === "productDetails" && (
				<>
					<button
						className="guru-btn mb-5"
						id="create-btn"
						onClick={handleShowAllProducts}
					>
						All Products
					</button>
					<button
						className="guru-btn mb-5 ml-3"
						id="create-btn"
						onClick={() => handleUpdateProduct(product.id)}
					>
						Update Product
					</button>
					<div className="reply-form-wrapper">
						<ProductDetails product={product} />
					</div>
				</>
			)}
		</div>
	);
};

export default ProductsDashboard;
