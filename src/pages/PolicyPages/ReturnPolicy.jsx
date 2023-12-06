import Header from "../../layouts/Home/Header";
import PopUpSearch from "../../layouts/Home/PopUpSearch";
import PageBanner from "../../components/Shared/PageBanner/PageBanner";
import Footer from "../../layouts/Home/Footer";
import ReturnPolicyLayout from "../../layouts/PolicyLayouts/ReturnPolicyLayout";

const ReturnPolicy = () => {
	return (
		<>
			<Header className="inner-header" />
			<PopUpSearch />
			<PageBanner section="return" customTitle="Return Policy" />
            <ReturnPolicyLayout />
			<Footer className="inner-footer"/>
		</>
	);
};

export default ReturnPolicy;