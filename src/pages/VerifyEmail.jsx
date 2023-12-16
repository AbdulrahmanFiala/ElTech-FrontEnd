import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import PageBanner from "../components/Shared/PageBanner/PageBanner";
import VerifyEmailSection from "../layouts/VerifyEmail/VerifyEmailSection";
import Footer from "../layouts/Home/Footer";

const VerifyEmail = () => {
	return (
		<>
			<Header className="inner-header" />
			<PopUpSearch />
			<PageBanner section="Verify Email" />
			<VerifyEmailSection />
			<Footer className="inner-footer" />
		</>
	);
};

export default VerifyEmail;
