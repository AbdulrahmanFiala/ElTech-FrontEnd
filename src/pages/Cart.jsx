import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import CartLayout from "../layouts/Cart/CartLayout";
import Footer from "../layouts/Home/Footer";
import PageBanner from "../components/Shared/PageBanner/PageBanner";

export default function Cart() {
	return (
		<>
			<Header className="inner-header" />
			<PopUpSearch />
			<PageBanner section="Cart" />
			<CartLayout />
			<Footer className="inner-footer"/>
		</>
	);
}
