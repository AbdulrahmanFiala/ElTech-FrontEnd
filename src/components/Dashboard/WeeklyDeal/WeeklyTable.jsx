import React, { useEffect, useState } from 'react';
import { getLatestWeekly } from "../../../api/services/user/product-services";
import WeeklyTableRow from './WeeklyTableRow';

const WeeklyTable = ({ handleDetailsTable, handleEditClick }) => {
    const [weeklyDeal, setWeeklyDeal] = useState([]);

    useEffect(() => {
        const fetchWeekly = async () => {
            try {
                const weeklyDeal = await getLatestWeekly();
                console.log('weekly:', weeklyDeal);
                setWeeklyDeal(weeklyDeal);
            } catch (error) {
                console.error('Error fetching weekly-deal:', error.message);
            }
        };
    
        fetchWeekly();
    }, []);


    return (
        <table className="cart-table">
            <thead>
                <tr>
                    <th className="product-total" >
                        ID
                    </th>
                    <th className="product-total" style={{paddingLeft:"5%"}}>
                        Deal time
                    </th>
                    <th className="product-total">
                        Name
                    </th>
                    <th className="product-total" style={{paddingLeft:"5%"}}>
                        Price
                    </th>
                    <th className="product-total" style={{paddingLeft:"10%"}}>
                        Image
                    </th><th className="product-total">
                        Edit
                    </th>
                </tr>
            </thead>
            {/* {weeklyDeal.map((weekly) => {
                return ( */}
                    <tbody>
                        <WeeklyTableRow
                            handleDetailsTable={handleDetailsTable}
                            handleEditClick={handleEditClick}
                            weeklyDeal={weeklyDeal}
                        />
                    </tbody>
                {/* );
            })} */}
        </table>
    );
};


export default WeeklyTable;