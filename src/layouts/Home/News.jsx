import React, { useEffect, useState } from "react";
import NewsCard from "../../components/News/NewsCard";
import { getAllPosts } from "../../api/services/user/post-services";
import { Link } from 'react-router-dom';

function News() {
	const [posts, setPosts] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const pageSize = 3;

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				let postsData;
				postsData = await getAllPosts(pageNumber, pageSize);
				console.log("Posts", postsData);
				if (postsData) {
					setPosts((prevPosts) => {
						if (pageNumber === 1) {
							return postsData.results; // Set posts directly for the first page
						} else {
							return [...prevPosts, ...postsData.results]; // Append for subsequent pages
						}
					});
				}
			} catch (error) {
				console.error("Error fetching posts:", error.message);
			}
		};

		fetchPosts();
	}, [pageNumber]);

	const handleViewMore = () => {
		setPageNumber((prevPageNumber) => prevPageNumber + 1);
	};

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
							Featuring the latest Posts
							<br /> On our Website.
						</p>
					</div>
				</div>
				{posts && posts.length ? (
					<div className="row">
						{posts.map((post) => (
						<NewsCard key={post.id} post={post} />
						))}
					</div>
					) : (
					<p>
						No Posts ATM! <br /> You will hear from us asap!
					</p>
					)}

				<div className="row m-top-45">
						<div className="col-lg-12 text-center">
						<Link to="/news">
						<button className="goru-btn">
							View More
						</button>
						</Link>
						</div>
				</div>
			</div>
		</section>
	);
}

export default News;
