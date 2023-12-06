import { Link } from "react-router-dom";

const FooterLink = ({ href, linkTitle }) => {
  return (
    <li>
      <Link to={href}>{linkTitle}</Link>
    </li>
  );
};

export default FooterLink;
