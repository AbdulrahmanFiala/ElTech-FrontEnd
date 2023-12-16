import { Link } from "react-router-dom";

import { deleteOrRestoreProduct } from "../../../api/services/user/product-services";

import productImg1 from "../../../assets/images/cart/1.jpg";

import ProductCardBadge from "../../../components/Shared/Badges/ProductCardBadge";
import ProductPrice from "../../Shared/NormalProductCard/ProductPrice";

import { showToast } from "../../../utils/toastUtil";

import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RestoreIcon from "@mui/icons-material/Restore";

const ProductRow = ({
	product,
	productSelectionHandler,
	updateHandler,
	refreshHandler,
}) => {
	const handleProductDeletion = async (is_deleted) => {
		try {
			await deleteOrRestoreProduct(product.id, is_deleted);

			if (is_deleted)
				showToast("Product deleted successfully", "success");
			else showToast("Product restored successfully", "success");
			refreshHandler();

			// setTimeout(() => {
			// 	window.location.reload();
			// }, 1000);
		} catch (error) {
			showToast(
				"Error deleting or restoring product: " + error.message,
				"error"
			);
		}
	};

	return (
		<tr className="cart-item">
			<td className="text-center">{product.id}</td>
			<td className="product-thumbnail-title">
				{product && (
					<>
						<Link
							// to={"/dashboard/products/" + product.id}
							onClick={() => productSelectionHandler(product.id)}
							style={{ marginLeft: "30%" }}
						>
							<img
								src={
									product.thumbnail.image
										? product.thumbnail.image
										: productImg1
								}
								alt=""
							/>
						</Link>
						<Link
							className="product-name"
							// to={"/dashboard/products/" + product.id}
							onClick={() => productSelectionHandler(product.id)}
						>
							{product.name}
						</Link>
					</>
				)}
			</td>
			<td className="product-unit-price">
				{/* <div className="product-price clearfix">
					<span className="price">
						<span>
							<span className="woocommerce-Price-currencySymbol">
								${product && product.price}
							</span>
						</span>
					</span>
				</div> */}
				<ProductPrice product={product} />
			</td>
			<td className="product-quantity clearfix text-center">
				{product.stock ? (
					product.stock
				) : (
					<span className="pro-badge2 out-of-stock">
						Out of Stock
					</span>
				)}
			</td>

			<td className="product-total text-center">
				<div className="product-price clearfix">
					<span className="price">
						<span>
							<span className="woocommerce-Price-currencySymbol">
								$
							</span>
							{product && product.price}
						</span>
					</span>
				</div>
			</td>
			<td className="text-center">
				<IconButton
					color="primary"
					onClick={() => updateHandler(product.id)}
				>
					<EditIcon fontSize="large" />
				</IconButton>
				{!product.is_deleted ? (
					<IconButton
						color="secondary"
						onClick={() => handleProductDeletion(true)}
					>
						<DeleteIcon fontSize="large" />
					</IconButton>
				) : (
					<IconButton
						color="secondary"
						onClick={() => handleProductDeletion(false)}
					>
						<RestoreIcon fontSize="large" />
					</IconButton>
				)}
			</td>
			{/* <td className="text-center">
				<Link
					to={"/dashboard/products/" + product.id}
					className="goru-btn"
					style={{ height: "60px" }}
				>
					Edit
				</Link>
			</td>
			{!product.is_deleted ? (
				<td className="product-remove text-center">
					<Link onClick={() => handleProductDeletion(true)}></Link>
				</td>
			) : (
				<td className="text-center">
					<Link
						className="goru-btn"
						onClick={() => handleProductDeletion(false)}
					>
						Restore
					</Link>
				</td>
			)} */}
			{/* <td className="product-remove text-center">
				<Link onClick={handleProductDeletion}></Link>
			</td> */}
		</tr>
	);
};

export default ProductRow;
