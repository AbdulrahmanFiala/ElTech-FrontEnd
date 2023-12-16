import store from "../../assets/images/store.jpg";
import { Link } from "react-router-dom";

const StoreInfo = () => {
  return (
    <div className="row">
      <div className="col-lg-7 col-md-7">
        <h3 className="sec-title">Our Store</h3>
        <div className="info-contact">
          <h5>
            Address:
            <p>
              60 El-Gomhourya St. Mit Khamis WA Kafr Al Mougi, Mansoura,
              Dakahlia Governorate.
            </p>
          </h5>
          <h5>
            Phone: <p> +20 106-345-0478</p>
          </h5>
          <h5>
            Email: <p> 0eltech0@gmail.com</p>
          </h5>
          <h5>
            Social:
            <Link>
              <i className="twi-facebook"></i>
            </Link>
            <Link>
              <i className="twi-twitter-square"></i>
            </Link>
            <Link>
              <i className="twi-pinterest-square"></i>
            </Link>
          </h5>
        </div>
      </div>
      <div className="col-lg-5 col-md-5">
        <div className="contact-thumb">
          <img src={store} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
