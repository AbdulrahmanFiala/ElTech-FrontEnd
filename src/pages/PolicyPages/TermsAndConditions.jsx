import Header from "../../layouts/Home/Header";
import PopUpSearch from "../../layouts/Home/PopUpSearch";
import PageBanner from "../../components/Shared/PageBanner/PageBanner";
import Footer from "../../layouts/Home/Footer";
import TermsLayout from "../../layouts/PolicyLayouts/TermsLayout";

const TermsAndConditions = () => {
	return (
		<>
			<Header className="inner-header" />
			<PopUpSearch />
			<PageBanner section="Terms" customTitle="Terms and Conditions" />
            <TermsLayout />
			<Footer className="inner-footer"/>
		</>
	);
};

export default TermsAndConditions;