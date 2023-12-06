// Importing DropdownItem component from local file
import DropdownItem from "./DropdownItem";

const DropdownMenu = ({ name, items }) => {
	return (
		<li>
			<a href="javascript:void(0);">{name}</a>
			<ul className="sub-menu">
				{items.map((item, idx) => (
					<DropdownItem
						key={idx}
						to={item.to}
						content={item.content}
					/>
				))}
			</ul>
		</li>
	);
}

export default DropdownMenu;
