import React from 'react'

export default function SocialLinksTab() {
  return (
    <div className="tab-pane fade" id="account-social-links">
        <div className="card-body pb-2">
            <div className="form-group">
                <label className="form-label">Twitter</label>
                <input type="text" className="form-control" placeholder="https://twitter.com/user"/>
            </div>
            <div className="form-group">
                <label className="form-label">Facebook</label>
                <input type="text" className="form-control" placeholder="https://www.facebook.com/user"/>
            </div>
            <div className="form-group">
                <label className="form-label">LinkedIn</label>
                <input type="text" className="form-control" placeholder="https://www.LinkedIn.com/user"/>
            </div>
            <div className="form-group">
                <label className="form-label">Instagram</label>
                <input type="text" className="form-control" placeholder="https://www.instagram.com/user"/>
            </div>
        </div>
    </div>
  )
}
