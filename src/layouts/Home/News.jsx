import React from "react";
import NewsCard from "../../components/Home/News/NewsCard";

import { latestPosts } from "../../utils/demoPosts";

function News() {
	return (
		<section className="news-section">
			{/* Shape Round */}
			<div className="shape-round">
				<span />
				<span />
				<span />
				<span />
			</div>
			{/* Shape Round */}

			<div className="sec-heading rotate-tb">
				Latest <span>News</span>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h2 className="sec-title">Latest News</h2>
						<p className="sec-desc">
							Sed ut perspiciatis unde omnis iste
							<br /> natus er sit voluptatem accusantium dolore.
						</p>
					</div>
				</div>
				<div className="row">
					{latestPosts.map((post) => {
						return <NewsCard key={post.id} post={post} />;
					})}
				</div>
				<div className="row m-top-45">
					<div className="col-lg-12 text-center">
						<a href="#" className="goru-btn">
							view more
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default News;
