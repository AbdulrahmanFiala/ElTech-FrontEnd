import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import Footer from "../layouts/Home/Footer";
import MyOrdersDetails from "../layouts/Orders/MyOrdersDetails";
import PageBanner from "../components/Shared/PageBanner/PageBanner";

function OrdersDetails() {
  return (
    <>
		<Header className="inner-header" />
		<PopUpSearch />
		<PageBanner section="My orders" />
		<MyOrdersDetails />
		<Footer className="inner-footer"/>
	</>
  )
}

export default OrdersDetails
