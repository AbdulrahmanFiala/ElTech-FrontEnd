import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import PageBanner from "../components/Shared/PageBanner/PageBanner";
import ForgetPasswordSection from "../layouts/ForgetPassword/ForgetPasswordSection";
import Footer from "../layouts/Home/Footer";

const ForgetPassword = () => {
	return (
		<>
			<Header className="inner-header" />
			<PopUpSearch />
			<PageBanner section="Forget Password" />
			<ForgetPasswordSection />
			<Footer className="inner-footer" />
		</>
	);
};

export default ForgetPassword;
