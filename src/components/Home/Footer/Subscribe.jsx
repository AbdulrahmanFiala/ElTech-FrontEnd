import React from "react";

const Subscribe = () => {
  return (
    <div className="col-lg-3 col-md-6 col-custome-4">
      <aside className="widget">
        <h3 className="widget-title">Subscribe</h3>
        <form className="subscribe-form" action="#" method="post">
          <input type="email" name="email" placeholder="admin@mail.com" />
          <button type="submit">
            Subscribe<i className="twi-long-arrow-alt-right"></i>
          </button>
        </form>
      </aside>
    </div>
  );
};

export default Subscribe;
