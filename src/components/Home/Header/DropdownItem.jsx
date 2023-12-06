// Importing Link component from react-router-dom
import { Link } from "react-router-dom";

export default function DropdownItem({ to, content }) {
	return (
		<li>
			<Link to={to}>{content}</Link>
		</li>
	);
}
