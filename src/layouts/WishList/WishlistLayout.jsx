import React from 'react'
import WishlistTable from '../../components/WishList/WishlistTable'

function WhishlistLayout() {
  return (
    <section className="wishlist-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="woocommerce-wishlist-form" action="#">
              <WishlistTable />
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default WhishlistLayout
