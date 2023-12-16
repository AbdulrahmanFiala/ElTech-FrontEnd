import { useState, useEffect } from "react";
import NewsCard from "../../components/News/NewsCard";
import { showToast } from '../../utils/toastUtil';
import { getAllPosts,getPostsByCategory , getPostsBySearch } from "../../api/services/user/post-services";
import PostsCategories from "../../components/News/NewsCategories/PostCategories";

const NewsLayout = () => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 3; 
  const [activeItem, setActiveItem] = useState('ALL'); 
  const [searchTerm, setSearchTerm] = useState(''); 

  
  useEffect(() => {
    const fetchPosts = async (categoryId) => {
      try {
        let postsData;
        if (activeItem === 'ALL' || !activeItem) {
          postsData = await getAllPosts(pageNumber, pageSize);
        } else {
          postsData = await getPostsByCategory(pageNumber, pageSize, categoryId);
        }
        setPosts((prevPosts) => {
          if (pageNumber === 1) {
            return postsData.results; // Set posts directly for the first page
          } else {
            return [...prevPosts, ...postsData.results]; // Append for subsequent pages
          }
        });
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    };
  
    fetchPosts(activeItem);
  }, [pageNumber, activeItem]);
  
  useEffect(() => {
    const fetchPostsBySearch = async () => {
      try {
        if (searchTerm) {
          const postsData = await getPostsBySearch(1, pageSize, searchTerm);
          setPosts(postsData.results);
        }
      } catch (error) {
        console.error("Error fetching posts by search:", error.message);
      }
    };
  
    fetchPostsBySearch();
  }, [searchTerm]);
  

  const handleViewMore = async () => {
    try {
      const nextPage = pageNumber + 1;
      let postsData;

      if (activeItem === 'ALL' || !activeItem) {
        postsData = await getAllPosts(nextPage, pageSize);
      } else {
        postsData = await getPostsByCategory(nextPage, pageSize, activeItem);
      }

      // Check for duplicate posts before appending
      const newPosts = postsData.results.filter(
        (newPost) => !posts.find((existingPost) => existingPost.id === newPost.id)
      );

      if (newPosts.length > 0) {
        setPageNumber(nextPage);
      } else {
        // No more new posts to load
        showToast('No more new posts available.');
      }
    } catch (error) {
      console.error("Error fetching more posts:", error.message);
    }
  };

  const handleCategoryChange = (categoryId) => {
    setActiveItem(categoryId);
    setPageNumber(1);
    setPosts([]); 
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm); // Update the search term state
    setPageNumber(1); // Reset page number to 1 when performing a new search
  };

console.log(posts.length);

  return (
    <section className="blog-section">
      <div className="container">
      <PostsCategories
      onCategoryChange={handleCategoryChange}
      onSearch={handleSearch}
			/>
        <div className="row">
		{Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post) => <NewsCard key={post.id} post={post} />)
        ) : (
          <p>No Posts ATM! <br/> You will hear from us asap!</p>
        )}
        </div>
        <div className="row m-top-20">
          {posts.length > 0 && posts.length % pageSize === 0 ? (
            <div className="col-lg-12 text-center">
              <button className="goru-btn" onClick={handleViewMore}>
                View More
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default NewsLayout;
