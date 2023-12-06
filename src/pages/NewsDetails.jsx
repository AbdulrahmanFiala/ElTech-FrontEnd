import Preloader from "../layouts/Home/Preloader";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import PageBanner from "../components/Shared/PageBanner/PageBanner";
import NewsDetailsLayout from "../layouts/News/NewsDetailsLayout";
import Footer from "../layouts/Home/Footer";

const NewsDetails = () => {
	return (
		<>
			<Header className="inner-header" />
			<PopUpSearch />
			<PageBanner section="Post Details" />
			<NewsDetailsLayout />
			<Footer className="inner-footer"/>
		</>
	);
};

export default NewsDetails;
