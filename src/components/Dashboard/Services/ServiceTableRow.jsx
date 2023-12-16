import React ,{ useState, useEffect }from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton } from '@mui/material';


export default function ServiceTableRow(props) {
    const { service, handleEditService, handleDeleteService } = props;

    return (
        <tr className="cart-item">
            <td
                className="product-thumbnail-title"
                style={{width: "20%"}}
            >
                {service.id}
            </td>
            <td
                className="product-thumbnail-title"
                style={{width: "20%"}}
            >
                {service.title.toUpperCase()}
            </td>
            <td
                className="product-total"
                style={{width: "20%"}}
            >
                <img
                    src={service.logo}
                    alt="Service Logo"
                    style={{ maxWidth: "75px", maxHeight: "75px" }}
                  />
            </td>
            <td
                className="product-thumbnail-title"
                style={{width: "25%"}}
            >
                {service.description}
            </td>
            <td className="product-total">
                    <IconButton
                      color="primary"
                      onClick={() => handleEditService(service)}
                      >
                      <EditIcon fontSize='large'/>
                    </IconButton>

                    <IconButton
                      color="secondary"
                      onClick={() => handleDeleteService(service.id)}
                      >
                    <DeleteIcon fontSize='large'/>
                  </IconButton>
            </td>
        </tr>
    )
}
