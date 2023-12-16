import React ,{ useState, useEffect }from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton } from '@mui/material';
import { getSingleCategory } from "../../../api/services/user/product-services";


export default function PostsTableRow(props) {
    const { post, handleDeletePost, handleEditPost ,handlePostDetails} = props;
    const [categoryName, setCategoryName] = useState('');

    const parsedDate = new Date(post.created_at);
    const formattedDate = `${parsedDate.getFullYear()} - ${(parsedDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")} - ${parsedDate.getDate().toString().padStart(2, "0")}`;

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
        <tr className="cart-item">
            <td
                className="product-thumbnail-title"
                onClick={()=>handlePostDetails(post)}
            >
                {post.id}
            </td>
            <td
                className="product-thumbnail-title"
                onClick={()=>handlePostDetails(post)}
            >
                {post.title.toUpperCase()}
            </td>
            <td
                className="product-quantity clearfix"
                onClick={()=>handlePostDetails(post)}
            >
                {formattedDate}
            </td>
            <td
                className="product-total"
            >
                {post.user.email}
            </td>
            <td
                className="product-total"
            >
                {categoryName.toUpperCase()}
            </td>
            <td className="product-total">
                    <IconButton
                      color="primary"
                      onClick={() => handleEditPost(post)}
                      >
                      <EditIcon fontSize='large'/>
                    </IconButton>

                    <IconButton
                      color="secondary"
                      onClick={() => handleDeletePost(post.id)}
                      >
                    <DeleteIcon fontSize='large'/>
                  </IconButton>
            </td>
        </tr>
    )
}
