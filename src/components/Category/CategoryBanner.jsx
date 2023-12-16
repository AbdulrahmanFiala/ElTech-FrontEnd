import { Link } from "react-router-dom";

import shopBannerImage from "../../assets/images/shop/banner.png";

const ShopBanner = ({ category }) => {
	return (
		<section className="page-banner shop-full-banner">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<span className="round-shape"></span>
						<h2 className="banner-title">
							{category.name && category.name.length > 40
								? category.name.substring(0, 40) + "..."
								: category.name}
							{!category.name && "All"}
						</h2>
						<div className="bread-crumb">
							<Link to="/">Home</Link> /{" "}
							{category.name.length > 20
								? category.name.substring(0, 20) + "..."
								: category.name}
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
