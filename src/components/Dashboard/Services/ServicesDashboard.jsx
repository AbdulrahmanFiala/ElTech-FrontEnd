import ServiceTable from "./ServicesTable";
import ServiceForm from "./ServicesForm";
import React, { useState } from "react";

const ServicesDashboard = () => {
  const [showCreateForm, setShowReplyForm] = useState(false);
  const [shouldRefreshServices, setShouldRefreshServices] = useState(false); // State to trigger refresh
  const handleCreateClick = () => {
    setShowReplyForm(!showCreateForm);
  };

  const handleServiceCreated = () => {
    // Set the state to trigger a refresh of the PostsTable
    setShouldRefreshServices(!shouldRefreshServices);
    setShowReplyForm(false); // Hide the form after creating a post
  };
  
  return (
    <div>
      <h1>Services</h1>
      <button className="guru-btn" id="create-btn" onClick={handleCreateClick} style={{marginBottom:"30px"}}>
        Add Service
      </button>
      {showCreateForm ? (
        <div className="reply-form-wrapper">
          <ServiceForm clickHandler={handleCreateClick} onServiceCreated={handleServiceCreated}/>
        </div>
      ) : (
        <ServiceTable shouldRefreshServices={shouldRefreshServices}/>
      )}
    </div>
  );
};

export default ServicesDashboard;
