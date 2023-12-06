import Header from "../../layouts/Home/Header";
import PopUpSearch from "../../layouts/Home/PopUpSearch";
import PageBanner from "../../components/Shared/PageBanner/PageBanner";
import Footer from "../../layouts/Home/Footer";
import PrivacyPolicyLayout from "../../layouts/PolicyLayouts/PrivacyPolicyLayout";

const PrivacyPolicy = () => {
	return (
		<>
			<Header className="inner-header" />
			<PopUpSearch />
			<PageBanner section="privacy" customTitle="Privacy Policy" />
            <PrivacyPolicyLayout />
			<Footer className="inner-footer"/>
		</>
	);
};

export default PrivacyPolicy;