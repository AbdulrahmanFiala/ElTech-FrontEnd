import OrdersTable from "../../components/Orders/OrdersTable"

function MyOrders() {
  return (
    <section className="cart-section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<form className="woocommerce-cart-form" action="#">
							<OrdersTable />
						</form>
					</div>
				</div>
			</div>
		</section>
  )
}

export default MyOrders
