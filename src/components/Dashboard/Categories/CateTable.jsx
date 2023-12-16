import React, { useEffect, useState } from "react";
import {
  getAllCategories,
  deleteCategory,
} from "../../../api/services/user/product-services";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CategoryEditForm from "./CategoryEditForm";
import CategoryTableRow from "./CategoryTableRow";

const CateTable = ({shouldRefreshCategories}) => {
  const [categories, setCategories] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); // Store the selected category for editing

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    };

    fetchCategories();
  }, [shouldRefreshCategories]);

  const handleDeleteCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId);
      // Refresh posts after successful deletion
      const updatedCategoryData = await getAllCategories();
      setCategories(updatedCategoryData);
    } catch (error) {
      console.error("Error deleting post:", error.message);
    }
  };

  const handleCancelEdit = () => {
    // Clear the selected post and hide the form
    setSelectedCategory(null);
    setShowEditForm(false);
  };

  const handleEditCategory = (category) => {
    if (setSelectedCategory && setSelectedCategory.id === category.id) {
      // If the same post is clicked again, hide the form
      setSelectedCategory(null);
      setShowEditForm(false);
    } else {
      // If a different post is clicked, show the form for that post
      setSelectedCategory(category);
      setShowEditForm(true);
    }
  };

  return (
    <div>
      {showEditForm && selectedCategory ? (
        <div className="reply-form-wrapper">
          {/* Pass selectedProduct to the form for editing */}
          <CategoryEditForm
            category={selectedCategory}
            onCancel={handleCancelEdit}
            setCategories={setCategories}
          />
        </div>
      ): (
          <table className="cart-table">
            <thead>
                <tr>
                    <th className="product-total" style={{width:"100px"}}>
                        ID
                    </th>
                    <th className="product-total" >
                        Name
                    </th>
                    <th className="product-total" >
                        Image
                    </th>
                    <th className="product-total">
                        Actions
                    </th>
                </tr>
            </thead>
            {categories.map((category) => {
                return (
                    <tbody>
                        <CategoryTableRow
                            category={category}
                            handleEditCategory={handleEditCategory}
                            handleDeleteCategory={handleDeleteCategory}
                        />
                    </tbody>
                );
            })}
          {/* <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.id}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleEditCategory(category)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDeleteCategory(category.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody> */}
          </table>
          )}
    </div>
  );
};

export default CateTable;
