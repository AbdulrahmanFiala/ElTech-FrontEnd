import { useState, useEffect } from "react";

import { getAllCategories } from "../../../api/services/user/product-services";

import NavBarItem from "./NavBarItem";

const NavBar = ({ handleClick }) => {
	const [categories, setCategories] = useState([]);
	const [activeItem, setActiveItem] = useState("ALL"); // Add this line

	useEffect(() => {
		const fetchCategories = async () => {
			const data = await getAllCategories();
			console.log("Categories Data:", data);
			setCategories(data);
		};

		fetchCategories();
	}, []);

	return (
		<ul className="product-tab-title nav nav-tabs">
			<NavBarItem
				itemClass={activeItem === "ALL" ? "active" : ""}
				itemName="ALL"
				onItemClick={() => {
					console.log("ALL CLicked");
					handleClick("ALL");
					setActiveItem("ALL");
				}}
			/>
			{categories &&
				categories.map((category) => {
					console.log("Rendering Category: ", category);
					return (
						<NavBarItem
							key={category.id}
							itemClass={
								activeItem === category.id ? "active" : ""
							}
							itemName={category.name}
							onItemClick={() => {
								console.log(`Clicked category: ${category.id}`);
								handleClick(category.id);
								setActiveItem(category.id);
							}}
						/>
					);
				})}
			{/* <NavBarItem itemHref="#smartphones" itemName="SMARTPHONES" />
			<NavBarItem itemHref="#camera" itemName="CAMERA" />
			<NavBarItem itemHref="#gadgets" itemName="GADGETS" />
			<NavBarItem itemHref="#others" itemName="OTHERS" /> */}
		</ul>
	);
};

export default NavBar;
