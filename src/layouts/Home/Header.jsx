// Importing Link component from react-router-dom
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { checkAdminStatus } from '../../api/services/admin/admin-services';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

// Importing images for website components
import logo from "../../assets/images/logo.png";
import flag from "../../assets/images/flag.png";
import cart from "../../assets/images/cart.png";

const Header = ({ className }) => {
  const user = useSelector((state) => state.authSlice.user);
  const count = useSelector((state) => state.cartSlice.count);
  const auth = useSelector((state) => state.authSlice);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);




  useEffect(() => {
    window.$(".search-toggles").on("click", function (e) {
      e.preventDefault();
      window.$(".popup-search-sec").toggleClass("active");
    });



    const fetchAdminStatus = async () => {
      try {
        const response = await checkAdminStatus();
        console.log(response)

        if (response.is_admin) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error('Error while fetching admin status:', error);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminStatus();
  }, [auth]);

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
          <div className="col-lg-10 col-md-10">
            <nav className="mainmenu mobile-menu">
              <div className="mobile-btn">
                <a href="javascript: void(0);">
                  <span>Menu</span>
                  <i className="twi-bars"></i>
                </a>
              </div>
              <ul className="d-flex justify-content-between">
                <span>
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
                </span>
                <span>
                  <li>
                    <a className="search search-toggles" href="javascript:void(0);">
                      <i className="twi-search"></i>
                    </a>
                  </li>
                  <li class="active menu-item-has-children">

                    {user && user.profile_picture ?
                      <img
                        style={{ width: 23, height: 23 }}
                        className="rounded-circle mr-2"
                        src={user.profile_picture}
                        alt="Admin"
                      />
                      : <i className="twi-user-circle mr-2"></i>}
                    <span>{user ? user.first_name : "Account"}</span>
                    <ul class="sub-menu">
                      <li>
                        <Link className="user-login" to={user ? "/profile" : "/login"}><i className="twi-user"></i>Profile</Link>
                      </li>
                      <li>
                        <Link to={user ? "/wishlist" : "/login"}><i className="twi-heart mr-2"></i>Wishlist</Link>
                      </li>
                      <li>
                        <Link to={user ? "/orders" : "/login"}><i className="twi-box mr-2"></i>Orders</Link>
                      </li>
                    </ul>

                  </li>
                  {isAdmin ? (
                    <li>
                      <Link className="user-login" to={user ? "/dashboard" : null}>
                        <AdminPanelSettingsIcon />
                      </Link>
                    </li>
                  ) : null}

                  <Link className="carts" to={user ? "/cart" : "/login"}>
                    <span>{count}</span>
                    <img src={cart} alt="" />
                  </Link>
                </span>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
