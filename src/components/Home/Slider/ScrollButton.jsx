// Importing Link component from react-router-dom
import { Link } from "react-router-dom";

const ScrollButton = ({ ScrollImage, content, to }) => {
  return (
    <div className="scroll-down">
      <Link to={to}>{content}</Link>
      <img src={ScrollImage} alt="" />
    </div>
  );
};

export default ScrollButton;
