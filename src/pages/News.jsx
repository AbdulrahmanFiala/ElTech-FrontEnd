import Preloader from "../layouts/Home/Preloader";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import PageBanner from "../components/Shared/PageBanner/PageBanner";
import NewsLayout from "../layouts/News/NewsLayout";
import Footer from "../layouts/Home/Footer";

const News = () => {
	return (
		<>
			{/* <Preloader /> */}
			<Header className="inner-header" />
			<PopUpSearch />
			<PageBanner section="News" />
			<NewsLayout />
			<Footer className="inner-footer"/>
		</>
	);
};

export default News;
