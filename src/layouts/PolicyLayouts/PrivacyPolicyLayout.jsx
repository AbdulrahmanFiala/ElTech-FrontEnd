import privacy from "../../assets/images/privacy-policy.jpg";

const PrivacyPolicyLayout = () => {
  return (
    <section className="history-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h3 className="sec-title">Our Privacy Policy</h3>
            <p>
              At [Your Company Name], we prioritize the protection of your
              personal information. This privacy policy outlines how we collect,
              use, and safeguard your data.
            </p>
            <p>
              We collect information to enhance your experience on our platform
              and provide you with the best possible service. Your privacy is
              important to us, and we are committed to maintaining the
              confidentiality of the information you share with us.
            </p>

            <p>
              We may collect personal information, such as your name, email
              address, and contact details, when you voluntarily provide them to
              us.
            </p>

            <p>
              We use the collected information to provide and improve our
              services, respond to inquiries, and personalize your experience.
              Your email address may be used to send periodic updates,
              promotions, or other relevant information. You can opt-out of
              these communications at any time.
            </p>

            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this Privacy Policy or as required by law.
            </p>

            <p>
              We implement security measures to protect your personal
              information. However, no method of transmission over the internet
              or electronic storage is entirely secure, and we cannot guarantee
              absolute security.
            </p>
          </div>
          <div className="col-lg-5">
            <div className="history-thumb">
              <img
                src={privacy}
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

export default PrivacyPolicyLayout;
