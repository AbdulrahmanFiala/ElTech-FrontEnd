import React ,{ useState, useEffect }from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton } from '@mui/material';


export default function CategoryTableRow(props) {
    const { category, handleEditCategory, handleDeleteCategory } = props;

    return (
        <tr className="cart-item">
            <td
                className="product-thumbnail-title"
                style={{width: "25%"}}
            >
                {category.id}
            </td>
            <td
                className="product-thumbnail-title"
                style={{width: "30%"}}
            >
                {category.name.toUpperCase()}
            </td>
            <td
                className="product-total"
                style={{width: "30%"}}
            >
                <img
                    src={category.image}
                    alt="Service Logo"
                    style={{ maxWidth: "75px", maxHeight: "75px" }}
                  />
            </td>
            <td className="product-total">
                    <IconButton
                      color="primary"
                      onClick={() => handleEditCategory(category)}
                      >
                      <EditIcon fontSize='large'/>
                    </IconButton>

                    {/* <IconButton
                      color="secondary"
                      onClick={() => handleDeleteCategory(category.id)}
                      >
                    <DeleteIcon fontSize='large'/>
                  </IconButton> */}
            </td>
        </tr>
    )
}
