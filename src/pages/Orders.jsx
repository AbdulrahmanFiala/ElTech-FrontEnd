import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import Footer from "../layouts/Home/Footer";
import MyOrders from "../layouts/Orders/MyOrders";
import PageBanner from "../components/Shared/PageBanner/PageBanner";

function Orders() {
  return (
    <>
		<Header className="inner-header" />
		<PopUpSearch />
		<PageBanner section="My orders" />
		<MyOrders />
		<Footer className="inner-footer"/>
	</>
  )
}

export default Orders
