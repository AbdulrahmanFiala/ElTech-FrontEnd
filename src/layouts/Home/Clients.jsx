import client_logo_1 from "../../assets/images/home/client-logo/1.png";
import client_logo_2 from "../../assets/images/home/client-logo/2.png";
import client_logo_3 from "../../assets/images/home/client-logo/3.png";
import client_logo_4 from "../../assets/images/home/client-logo/4.png";
import client_logo_5 from "../../assets/images/home/client-logo/5.png";

const Clients = () => {

  return (
    <section className="client-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <div className="client-logo owl-carousel">
              <a href="/">
                <img src={client_logo_1} alt="client_logo_1" />
              </a>
              <a href="/">
                <img src={client_logo_2} alt="client_logo_2" />
              </a>
              <a href="/">
                <img src={client_logo_3} alt="client_logo_3" />
              </a>
              <a href="/">
                <img src={client_logo_4} alt="client_logo_4" />
              </a>
              <a href="/">
                <img src={client_logo_5} alt="client_logo_5" />
              </a>
              <a href="/">
                <img src={client_logo_1} alt="client_logo_1" />
              </a>
              <a href="/">
                <img src={client_logo_2} alt="client_logo_2" />
              </a>
              <a href="/">
                <img src={client_logo_3} alt="client_logo_3" />
              </a>
              <a href="/">
                <img src={client_logo_4} alt="client_logo_4" />
              </a>
              <a href="/">
                <img src={client_logo_5} alt="client_logo_5" />
              </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

