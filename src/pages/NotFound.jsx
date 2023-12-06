import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import Footer from "../layouts/Home/Footer";
import NotFound404 from '../layouts/NotFound/NotFound404';
import PageBanner from "../components/Shared/PageBanner/PageBanner";

function NotFound() {
  return (
    <>
		<Header className="inner-header" />
		<PopUpSearch />
		<PageBanner section="404 - Not found" />
		<NotFound404 />
		<Footer className="inner-footer"/>
	</>
  )
}

export default NotFound
