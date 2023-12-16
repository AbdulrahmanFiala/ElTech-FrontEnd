import { Link } from "react-router-dom";

import { deleteUser } from "../../../api/services/user/user-services";

// import productImg1 from "../../../assets/images/cart/1.jpg";

import profilePic from "../../../assets/images/user/profile_pic_placeholder.png";

import ProductCardBadge from "../../../components/Shared/Badges/ProductCardBadge";
import ProductPrice from "../../Shared/NormalProductCard/ProductPrice";

import { showToast } from "../../../utils/toastUtil";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const UserRow = ({ user, userSelectionHandler }) => {
	const handleUserDeletion = async () => {
		try {
			await deleteUser(user.id);

			showToast("User deleted successfully", "success");

			setTimeout(() => {
				window.location.reload();
			}, 1000);
		} catch (error) {
			showToast("Error deleting user: " + error.message, "error");
		}
	};

	return (
		<tr className="cart-item">
			<td className="text-center">{user.id}</td>
			<td className="product-thumbnail-title text-center">
				<Link
					onClick={() => {
						userSelectionHandler(user.id);
					}}
				>
					<img
						src={
							user.profile_picture
								? user.profile_picture
								: profilePic
						}
						alt=""
						style={{ height: "auto" }}
					/>
				</Link>
				<Link
					className="ml-2"
					onClick={() => {
						userSelectionHandler(user.id);
					}}
				>
					{user.email}
				</Link>
			</td>
			<td className="product-unit-price text-center">
				{user.first_name} {user.last_name}
			</td>
			<td className="product-quantity clearfix text-center">
				{user.mobile_phone}
			</td>

			{/* <td className="product-total text-center">
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
			</td> */}
			{/* <td className="text-center">
				<Link to={"/dashboard/users/" + user.id} className="goru-btn">
					Edit
				</Link>
			</td> */}
			{/* {!product.is_deleted ? (
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
				<Link onClick={handleUserDeletion}></Link>
			</td> */}
		</tr>
	);
};

export default UserRow;
