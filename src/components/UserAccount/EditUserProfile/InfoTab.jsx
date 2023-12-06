import React from "react";

export default function InfoTab() {
  return (
    <div className="tab-pane fade" id="account-info">
      <div className="card-body pb-2">
        <div className="form-group">
          <label className="form-label">Bio</label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus."
          ></textarea>
        </div>
        <div className="form-group">
          <label className="form-label">Birthday</label>
          <input
            type="text"
            className="form-control"
            placeholder="May 3, 1995"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Country</label>
          <select className="custom-select">
            <option>USA</option>
            <option selected>Canada</option>
            <option>UK</option>
            <option>Germany</option>
            <option>France</option>
          </select>
        </div>
      </div>
      <hr className="border-light m-0" />
      <div className="card-body pb-2">
        <h2 className="mb-4">Contacts</h2>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="+0 (123) 456 7891"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Website</label>
          <input
            type="text"
            className="form-control"
            placeholder="www.el-tech.com"
          />
        </div>
      </div>
    </div>
  );
}
