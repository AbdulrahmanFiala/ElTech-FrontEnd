import { Link } from "react-router-dom";
import React ,{ useState, useEffect }from 'react'
import { getSingleCategory } from "../../../../api/services/user/product-services";

const PostContent = ({ post,category }) => {
	const [categoryName, setCategoryName] = useState('');

	useEffect(() => {
        async function fetchCategoryName() {
          try {
            const categoryData = await getSingleCategory(category);
            setCategoryName(categoryData.name);
          } catch (error) {
            console.error('Error fetching category:', error.message);
          }
        }
    
        fetchCategoryName();
      }, [category]);
	
	return (
		<div className="blog-content">
			<h3 className="blog-title">{post.title}</h3>
			<p>{post.content}</p>
			{/* <h4>Features:</h4>
			<ul>
				{post.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</ul> */}
			<div className="post-tag">
				<h5>
					Category: <Link to={`/category/${category}`}>{categoryName}</Link>
				</h5>
			</div>
		</div>
	);
};

export default PostContent;
