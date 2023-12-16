import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

const HistoryDetails = () => {
  return (
    <div className="row">
      <div className="col-lg-7">
        <h3 className="sec-title">Our History</h3>
        <p>
          In the digital chronicles of Eltech, a group of tech enthusiasts
          birthed an online haven for cutting-edge gadgets. Starting small,
          Eltech swiftly gained acclaim for its curated selection and
          user-friendly design. As technology advanced, so did Eltech, embracing
          sleek redesigns and new features to stay ahead of the curve. Customer
          satisfaction was paramount, turning Eltech into not just a marketplace
          but a community hub. Strategic partnerships with tech giants and
          hosting live product launches solidified its position in the tech
          landscape.
        </p>
        <p>
          The evolution didn't stop at products; Eltech integrated augmented
          reality experiences and virtual try-ons, adding a futuristic touch.
          Today, Eltech stands tall as a premier destination for global tech
          enthusiasts, offering a seamless journey into the ever-evolving world
          of technology. The saga of Eltech continues, promising more
          discoveries, innovations, and tech wonders for its dedicated
          community.
        </p>
        <Link className="goru-btn" to="/">
          start now
        </Link>
      </div>
      <div className="col-lg-5">
        <div className="history-thumb">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HistoryDetails;
