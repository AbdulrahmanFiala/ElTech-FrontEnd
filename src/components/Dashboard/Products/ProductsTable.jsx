import React, { useEffect, useState } from "react";

import { getProducts } from "../../../api/services/user/product-services";

import ProductEditForm from "./ProductEditForm";
import ProductRow from "./ProductRow";
import ShopPagination from "../../Shop/ShopPagination/ShopPagination";

const ProductsTable = ({ updateHandler, productSelectionHandler }) => {
	const [products, setProducts] = useState([]);
	const [showEditForm, setShowEditForm] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null); // Store the selected product for editing
	const [currentPage, setCurrentPage] = useState(0);
	const [refresh, setRefresh] = useState(false);

	const handleRefresh = () => {
		setRefresh(!refresh);
	};

	const handlePageClick = (data) => {
		console.log("New Page Selected", data);
		let selected = data.selected;
		setCurrentPage(selected);
		fetchProducts(selected + 1);
	};

	// const fetchProducts = async () => {
	// 	try {
	// 		const productsData = await getAllProducts(); // Add 1 to pageNumber for API's page numbering
	// 		// setProducts(productsData.results);
	// 		console.log(productsData);
	// 		setProducts(productsData);
	// 	} catch (error) {
	// 		console.error("Error fetching posts:", error.message);
	// 	}
	// };

	const fetchProducts = async (page = 1) => {
		try {
			console.log("Requested Page", page);
			const productsData = await getProducts({ page: page }); // Pass page number to API call
			console.log(productsData);
			setProducts(productsData);
		} catch (error) {
			console.error("Error fetching posts:", error.message);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, [refresh]);

	// useEffect(() => {}, [refresh]);

	// const handleDeleteProduct = async (productId) => {
	// 	try {
	// 		await deleteProduct(productId);
	// 		// Refresh posts after successful deletion
	// 		const updatedProductsData = await getAllProducts();
	// 		setProducts(updatedProductsData.results);
	// 	} catch (error) {
	// 		console.error("Error deleting post:", error.message);
	// 	}
	// };

	const handleCancelEdit = () => {
		// Clear the selected post and hide the form
		setSelectedProduct(null);
		setShowEditForm(false);
	};

	const handleEditProduct = (product) => {
		if (setSelectedProduct && setSelectedProduct.id === product.id) {
			// If the same post is clicked again, hide the form
			setSelectedProduct(null);
			setShowEditForm(false);
		} else {
			// If a different post is clicked, show the form for that post
			setSelectedProduct(product);
			setShowEditForm(true);
		}
	};

	return (
		<div>
			{showEditForm && selectedProduct && (
				<div className="reply-form-wrapper">
					{/* Pass selectedProduct to the form for editing */}
					<ProductEditForm
						product={selectedProduct}
						onCancel={handleCancelEdit}
					/>
				</div>
			)}
			{/* <TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>Stock No.</TableCell>
							<TableCell>Sale %</TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{products.map((product) => (
							<TableRow key={product.id}>
								<TableCell>{product.id}</TableCell>
								<TableCell>{product.name}</TableCell>
								<TableCell>{product.price}</TableCell>
								<TableCell>{product.stock}</TableCell>
								<TableCell>{product.sale_amount}%</TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell>
									<IconButton
										color="primary"
										onClick={() =>
											handleEditProduct(product)
										}
									>
										<EditIcon />
									</IconButton>
									<IconButton
										color="secondary"
										onClick={() =>
											handleDeleteProduct(product.id)
										}
									>
										<DeleteIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer> */}
			<table className="cart-table">
				<thead>
					<tr>
						<th className="text-center">ID</th>
						<th className="product-name-thumbnail text-center" style={{marginLeft:"20%"}}>
							Title
						</th>
						<th className="product-price" style={{marginLeft:"20%"}}>
							Unit Price
						</th>
						<th className="product-quantity text-center">Stock</th>
						<th className="product-total text-center">Total</th>
						{/* <th className="product-remove text-center">Edit</th>
						<th className="text-center">Delete</th> */}
						<th className="text-center">Actions</th>
					</tr>
				</thead>
				<tbody>
					{products.results &&
						products.results
							.sort((a, b) => a.id - b.id)
							.map((product) => {
								return (
									<ProductRow
										key={product.id}
										product={product}
										updateHandler={updateHandler}
										refreshHandler={handleRefresh}
										productSelectionHandler={
											productSelectionHandler
										}
									/>
								);
							})}
				</tbody>
			</table>
			{products.results && products.results.length !== 0 && (
				<ShopPagination
					pageCount={Math.ceil(products.count / 12)}
					onPageChange={handlePageClick}
				/>
			)}
		</div>
	);
};

export default ProductsTable;
