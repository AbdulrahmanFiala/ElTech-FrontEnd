import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import Footer from "../layouts/Home/Footer";
import WishlistLayout from "../layouts/WishList/WishlistLayout";
import PageBanner from "../components/Shared/PageBanner/PageBanner";

 const Wishlist = () => {
	return (
		<>
			<Header className="inner-header" />
			<PopUpSearch />
			<PageBanner section="Wishlist" />
			<WishlistLayout />
			<Footer className="inner-footer"/>
		</>
	);
}

export default Wishlist;