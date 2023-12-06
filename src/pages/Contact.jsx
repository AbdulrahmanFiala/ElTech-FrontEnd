import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import PageBanner from "../components/Shared/PageBanner/PageBanner";
import Footer from "../layouts/Home/Footer";
import ContactLayout from "../layouts/Contact/ContactLayout";

const Contact = () => {
	return (
		<>
			<Header className="inner-header" />
			<PopUpSearch />
			<PageBanner section="Contact" />
            <ContactLayout />
			<Footer className="inner-footer"/>
		</>
	);
};

export default Contact;