import { Link } from "react-router-dom";
import React ,{ useState, useEffect }from 'react'
import { getSingleCategory } from "../../../../api/services/user/product-services";
import moment from "moment";

const PostMeta = ({ post }) => {
	const [categoryName, setCategoryName] = useState('');
	const formattedDate = moment(post.created_at).fromNow();

	useEffect(() => {
        async function fetchCategoryName() {
          try {
            const categoryData = await getSingleCategory(post.category);
            setCategoryName(categoryData.name);
          } catch (error) {
            console.error('Error fetching category:', error.message);
          }
        }
    
        fetchCategoryName();
      }, [post.category]);
	

	return (
		<>
			<div className="blog-thumb">
				<img src={post.image} alt="" style={{width:"100%",height:"650px"}}/>
			</div>
			<div className="blog-post-meta">
				<span>
					<img src={post.user.image} alt="" />
					By  <a>{post.user.email}</a>, {formattedDate}
				</span>
				<span className="cate">
					<Link to={`/category/${post.category}`}>{categoryName}</Link>
				</span>
			</div>
		</>
	);
};

export default PostMeta;
