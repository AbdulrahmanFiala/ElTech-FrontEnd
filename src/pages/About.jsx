import Preloader from "../layouts/Home/Preloader";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import PageBanner from "../components/Shared/PageBanner/PageBanner";
import Footer from "../layouts/Home/Footer";
import Services from "../layouts/Home/Services";
import Clients from "../layouts/Home/Clients";
import AboutLayout from "../layouts/About/AboutLayout";

const About = () => {
	return (
		<>
			<Header className="inner-header" />
			<PopUpSearch />
			<PageBanner section="About" />
            <AboutLayout />
			<Services additionalClassName="service-ab" />
            <Clients />
			<Footer className="inner-footer"/>
		</>
	);
};

export default About;