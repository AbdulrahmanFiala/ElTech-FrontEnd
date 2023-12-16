import { Link } from "react-router-dom";

const PageBanner = ({ section, category, customTitle }) => {
	return (
		<section className="page-banner">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<span className="round-shape"></span>
						<h2 className="banner-title">
							{customTitle ?? section}
						</h2>
						<div className="bread-crumb">
							<Link to="/">Home</Link>
							{category == null ? (
								`/${section}`
							) : (
								<>
									<Link to={`/${section.toLowerCase()}`}>
										{" "}
										/ {section}
									</Link>{" "}
									/{" "}
									{category &&
									category.name &&
									category.name.length > 20
										? category.name.substring(0, 20) + "..."
										: category.name}
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PageBanner;
