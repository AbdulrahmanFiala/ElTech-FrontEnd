// Importing Link component from react-router-dom
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

// Importing images for website components
import logo from "../../assets/images/logo.png";
import flag from "../../assets/images/flag.png";
import cart from "../../assets/images/cart.png";

const Header = ({ className }) => {
  const user = useSelector((state) => state.authSlice.user);
  const count = useSelector((state) => state.cartSlice.count);

  return (
    <header className={`header-01 fix-header ${className}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Goru" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <nav className="mainmenu mobile-menu">
              <div className="mobile-btn">
                <a href="javascript: void(0);">
                  <span>Menu</span>
                  <i className="twi-bars"></i>
                </a>
              </div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="header-cogs">
              <a className="search search-toggles" href="javascript:void(0);">
                <i className="twi-search"></i>
              </a>
              <a className="select-country" href="javascript:void(0);">
                <img src={flag} alt="" />
                Eng
              </a>
              <a className="select-currency" href="javascript:void(0);">
                <i className="twi-dollar-sign"></i>Usd
              </a>
              <Link className="user-login" to={user?"/profile":"/login"}>
                <i className="twi-user-circle"></i>
                <span>{user?user.first_name:"Account"}</span>
              </Link>
              <Link className="carts" to="/cart">
                <span>{count}</span>
                <img src={cart} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
