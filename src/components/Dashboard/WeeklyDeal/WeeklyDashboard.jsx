import { useState } from 'react';
import WeeklyTable from "./WeeklyTable";
import WeeklyEditForm from './WeeklyEditForm';

const WeeklyDashboard = () => {
    const [weeklyDeal, setWeeklyDeal] = useState()
    const [showEditForm, setShowEditForm] = useState(false);
    const [showOrdersTable, setShowOrdersTable] = useState(true);

    const handleShowOrders= () => {
      setShowEditForm(false);
      setShowOrdersTable(true);

     };
  
    const handleEditClick = (weeklyDeal) => {
        setWeeklyDeal(weeklyDeal)
        setShowEditForm(true);
        setShowOrdersTable(false);
	};

    return (
        <>
            <h1 className='mb-4'> Weekly Deal </h1>
            {showEditForm ? (
                <>
                <WeeklyEditForm
                    weeklyDeal={weeklyDeal}
                    handleShowOrders={handleShowOrders}
                />
                </>
            ) : (
                <WeeklyTable
                    handleEditClick={handleEditClick}
                />
			      )}
        </>
    );
};

  export default WeeklyDashboard;
