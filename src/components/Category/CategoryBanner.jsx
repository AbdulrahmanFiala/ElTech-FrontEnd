import { Link } from "react-router-dom";

import shopBannerImage from "../../assets/images/shop/banner.png";

const ShopBanner = ({ category }) => {
	return (
		<section className="page-banner shop-full-banner">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<span className="round-shape"></span>
						<h2 className="banner-title">{category.name}</h2>
						<div className="bread-crumb">
							<Link to="/">Home</Link> / {category.name}
						</div>
						<div className="banner-img">
							<img
								src={category.image}
								alt=""
								style={{
									maxWidth: "150px",
									// maxHeight: "191px",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ShopBanner;
