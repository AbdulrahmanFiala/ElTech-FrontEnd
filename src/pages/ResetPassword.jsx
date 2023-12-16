import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import PageBanner from "../components/Shared/PageBanner/PageBanner";
import ResetPasswordSection from "../layouts/ResetPassword/ResetPasswordSection";
import Footer from "../layouts/Home/Footer";

const ResetPassword = () => {
	return (
		<>
			<Header className="inner-header" />
			<PopUpSearch />
			<PageBanner section="Reset Password" />
			<ResetPasswordSection />
			<Footer className="inner-footer" />
		</>
	);
};

export default ResetPassword;
