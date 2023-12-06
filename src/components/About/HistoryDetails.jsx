import { Link } from "react-router-dom";

import historyImage from "../../assets/images/about/1.jpg";

const HistoryDetails = () => {
  return (
    <div className="row">
      <div className="col-lg-7">
        <h3 className="sec-title">Our History</h3>
        <p>
          Sed id interdum urna. Nam ac elit a ante commodo tristique.
          condimentum vehicula a hendrerit ac nisi. hendrerit ac nisi Lorem
          ipsum dolor sit amet Vestibulum imperdiet nibh vel magna lacinia
          ultrices. Sed id interdum urna.
        </p>
        <p>
          Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec
          maximus placerat tempor. className aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Suspendisse
          faucibus sed dolor eget posuere.Sed id interdum urna. Nam ac elit a
          ante commodo tristique. Duis lacus urna, condimentum a vehicula a,
          hendrerit ac nisi Lorem ipsum dolor sit amet.
        </p>
        <Link className="goru-btn" to="/">
          start now
        </Link>
      </div>
      <div className="col-lg-5">
        <div className="history-thumb">
          <img src={historyImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HistoryDetails;
