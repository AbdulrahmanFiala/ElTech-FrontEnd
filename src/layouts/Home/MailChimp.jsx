import React from 'react';
import shape4 from "../../assets/images/home/shape4.png"

const MailChimpSection = () => {
  return (
    <section className="mailchimp-section">
      <div className="sec-heading rotate-rl">Newsletter <span>Sign-Up</span></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 text-center mx-auto">
            <h3 className="sec-title">Get Discount 30% Off</h3>
            <form className="mailchimp-form" action="#" method="post">
              <input type="email" name="email" placeholder="your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="mailchimp-shape"><img src={shape4} alt="" /></div>
    </section>
  );
}

export default MailChimpSection;
