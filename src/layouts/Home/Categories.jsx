import shape1 from "../../assets/images/home/shape1.png";
import CategoryIcons from "../../components/Home/Categories/CategoriesIcon";

const CategorySection = () => {
	return (
		<section className="categorie-section">
			<div className="sec-heading rotate-rl">
				Product <span>Categories</span>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h2 className="sec-title">Product Categories</h2>
						<p className="sec-desc">
							Explore our wide range of product categories to find
							exactly what you're looking for.
						</p>
					</div>
				</div>
				<div className="row">
					<CategoryIcons />
				</div>
			</div>
			<div className="cate-shage">
				<img src={shape1} alt="" />
			</div>
		</section>
	);
};

export default CategorySection;
