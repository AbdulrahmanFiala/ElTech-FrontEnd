import terms from "../../assets/images/terms_conditions.jpeg";

const TermsLayout = () => {
  return (
    <section className="history-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h3 className="sec-title">Our Terms And Conditions</h3>
            <p>
              <span
                style={{
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "large",
                }}
              >
                1. Agreement to Terms
              </span>
              By accessing or using our website, you agree to comply with and be
              bound by these terms and conditions. If you do not agree with any
              part of these terms, you may not access the website. completeness,
              or usefulness of the information on the website. Your use of the
              website is at your own risk.
            </p>
            <p>
              <span
                style={{
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "large",
                }}
              >
                2. Use of the Website
              </span>
              You agree to use the website only for lawful purposes and in a way
              that does not infringe on the rights of, restrict, or inhibit the
              use and enjoyment of the site by any third party.
            </p>

            <p>
              <span
                style={{
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "large",
                }}
              >
                3. Intellectual Property
              </span>
              The content of this website is protected by copyright and other
              intellectual property laws. You may not modify, copy, distribute,
              transmit, display, perform, reproduce, publish, license, create
              derivative works from, transfer, or sell any information obtained
              from the website.
            </p>
            <p>
              <span
                style={{
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "large",
                }}
              >
                4. Privacy Policy
              </span>
              Our privacy policy outlines how we collect, use, and protect your
              personal information. By using our website, you consent to the
              terms described in the privacy policy.
            </p>
            <p>
              <span
                style={{
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "large",
                }}
              >
                5. Limitation of Liability
              </span>
              We do not guarantee the accuracy, completeness, or usefulness of
              the information on the website. Your use of the website is at your
              own risk.
            </p>
            <p>
              <span
                style={{
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "large",
                }}
              >
                6. Governing Law
              </span>
              These terms and conditions are governed by and construed in
              accordance with the laws of [Your Jurisdiction], and you agree to
              submit to the exclusive jurisdiction of the courts located in
              [Your Jurisdiction].
            </p>
          </div>
          <div className="col-lg-5">
            <div className="history-thumb">
              <img
                src={terms}
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

export default TermsLayout;
