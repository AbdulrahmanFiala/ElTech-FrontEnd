const ContactForm = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="sec-title">Get In Touch With Us</h2>
          <p className="sec-desc">
            Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia
            <br /> voluptas sit aspernatur aut
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="contact-form text-center">
            <form action="#" method="post" id="contact-form" className="row">
              <div className="col-lg-4 col-md-4">
                <input
                  type="text"
                  name="con_name"
                  className="required"
                  placeholder="Enter your name"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <input
                  type="email"
                  name="con_email"
                  className="required"
                  placeholder="Your Email"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <input type="text" name="con_subject" placeholder="Subject" />
              </div>
              <div className="col-lg-12 col-md-12">
                <textarea
                  name="con_message"
                  className="required"
                  placeholder="Your message here"
                ></textarea>
              </div>
              <div className="col-lg-12 col-md-12">
                <button type="submit" className="goru-btn">
                  Shoot
                </button>
                <img
                  src="assets/images/ajax.gif"
                  alt=""
                  className="goru_loader"
                />
                <div className="goru_con_message"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
