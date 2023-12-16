import React from "react";

function NavBarItem({ itemClass, itemName, onItemClick }) {
	return (
		<li>
			<a
				className={itemClass}
				href="#"
				data-toggle="tab"
				onClick={(e) => {
					e.preventDefault();
					onItemClick();
				}}
			>
				{/* {itemName} */}
				{itemName.length > 15
					? itemName.substring(0, 15) + "..."
					: itemName}
			</a>
		</li>
	);
}

export default NavBarItem;
