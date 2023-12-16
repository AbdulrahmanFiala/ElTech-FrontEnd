import returnLogo from "../../assets/images/return.png";

const ReturnPolicyLayout = () => {
  return (
    <section className="history-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h3 className="sec-title">Our Return Policy</h3>
            <p>
              At ElTech, we want you to be completely satisfied with your
              purchase. If you are not satisfied for any reason, we offer a
              straightforward return policy to ensure a hassle-free experience.
            </p>
            <p>
              You may return unused items within 14 days of receiving your
              order. Here are a few important points to note:
            </p>

            <p>
              Items must be in their original condition, unused, and in the
              original packaging.
            </p>

            <p>
              Once we receive your returned item and inspect it, we will notify
              you regarding the approval or rejection of your return. If
              approved, we will process the refund or exchange accordingly.
            </p>

            <p>
              If you have any questions about our return policy, feel free to
              reach out to us at [Your Contact Information].
            </p>
          </div>
          <div className="col-lg-5">
            <div className="history-thumb">
              <img
                src={returnLogo}
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnPolicyLayout;
