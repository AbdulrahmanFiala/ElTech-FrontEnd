import { Link } from "react-router-dom";

import shopBannerImage from "../../../assets/images/shop/banner.png";

const ShopBanner = () => {
	return (
		<section className="page-banner shop-full-banner">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<span className="round-shape"></span>
						<h2 className="banner-title">shop</h2>
						<div className="bread-crumb">
							<Link to="/">Home</Link> / shop
						</div>
						{/* <div className="banner-img">
							<img src={shopBannerImage} alt="" />
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ShopBanner;
