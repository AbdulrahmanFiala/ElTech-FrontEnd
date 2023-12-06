import contactImage from "../../assets/images/contact.jpg";

const StoreInfo = () => {
  return (
    <div className="row">
      <div className="col-lg-7 col-md-7">
        <h3 className="sec-title">Our Store</h3>
        <div className="info-contact">
          <h5>
            Address: <p> 342 East American Street, New York, USA - 1212</p>
          </h5>
          <h5>
            Phone: <p> +1 (817) 234 - 234</p>
          </h5>
          <h5>
            Email: <p> info@goru-store.com</p>
          </h5>
          <h5>
            Social:
            <a href="#">
              <i className="twi-facebook"></i>
            </a>
            <a href="#">
              <i className="twi-twitter-square"></i>
            </a>
            <a href="#">
              <i className="twi-pinterest-square"></i>
            </a>
          </h5>
        </div>
      </div>
      <div className="col-lg-5 col-md-5">
        <div className="contact-thumb">
          <img src={contactImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
