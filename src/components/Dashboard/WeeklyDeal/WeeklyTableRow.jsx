import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import productImg1 from "../../../assets/images/cart/1.jpg";
import React, { useEffect, useState } from 'react';
import { getLatestWeekly } from "../../../api/services/user/product-services";

function WeeklyTableRow({ weeklyDeal,handleDetailsTable, handleEditClick }) {

    // useEffect(() => {
    //     const fetchWeekly = async () => {
    //         try {
    //             const fetchedWeeklyDeal = await getLatestWeekly();
    //             console.log('weekly:', fetchedWeeklyDeal);
    //             setWeeklyDeal(fetchedWeeklyDeal);
    //         } catch (error) {
    //             console.error('Error fetching weekly-deal:', error.message);
    //         }
    //     };
    
    //     fetchWeekly();
    // }, []);

    // if (!weeklyDeal) {
    //     return <tr><td>Loading...</td></tr>; // Return loading state if data is being fetched
    // }


    return (
        <tr className="cart-item">
            <td
                // onClick={() => handleDetailsTable(weeklyDeal)}
                className="product-thumbnail-title"
            >
                {weeklyDeal.id}
            </td>
            <td
                // onClick={() => handleDetailsTable(weeklyDeal)}
                className="product-thumbnail-title"
                style={{paddingLeft:"5%"}}
            >
                {weeklyDeal.deal_time}
            </td>
            {weeklyDeal.product &&(
            <>
            <td
                // onClick={() => handleDetailsTable(weeklyDeal)}
                className="product-thumbnail-title"
            >
                {weeklyDeal.product.name}
            </td>
            <td
                // onClick={() => handleDetailsTable(weeklyDeal)}
                className="product-thumbnail-title"
                style={{paddingLeft:"5%"}}
            >
                {weeklyDeal.product.price} $
            </td>
            <td
                // onClick={() => handleDetailsTable(weeklyDeal)}
                className="product-thumbnail-title"
                style={{paddingLeft:"8.5%"}}
            >
                <img
                    src={
                        weeklyDeal.product.thumbnail.image
                            ? weeklyDeal.product.thumbnail.image
                            : productImg1
                    }
                    alt=""
                />
            </td>
            </>)}
            <td className="product-total">
                <IconButton
                    onClick={() => handleEditClick(weeklyDeal)}
                    color="primary"
                >
                    <EditIcon fontSize='large'/>
                </IconButton>
            </td>
        </tr>
    )
}

export default WeeklyTableRow
