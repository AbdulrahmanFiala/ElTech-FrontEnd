import { useState, useEffect } from "react";
import NewsCard from "../../components/News/NewsCard";
import { getAllPosts } from "../../api/services/user/post-services";

const NewsLayout = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts when the component mounts
    const fetchPosts = async () => {
      try {
        const postsData = await getAllPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this effect runs once when the component mounts

console.log(posts.length);
  return (
    <section className="blog-section">
      <div className="container">
        <div className="row">
		{Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post) => <NewsCard key={post.id} post={post} />)
        ) : (
          <p>Loading posts...</p>
        )}
        </div>
        <div className="row m-top-20">
          <div className="col-lg-12 text-center">
            <a href="#" className="goru-btn">
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLayout;
