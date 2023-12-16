import React, { useState, useEffect } from "react";
import ServiceCard from "../../components/Home/Services/ServiceCard";
import { apiInstance, SERVICE_ENDPOINT } from "../../api/config/api-config";

const endpoint = SERVICE_ENDPOINT;

const Services = ({ additionalClassName }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      console.log(endpoint);
      try {
        const response = await apiInstance.get(endpoint);
        const data = await response.data;
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className={`service-section ${additionalClassName}`}>
      <div className="container">
        {loading ? (
          <p>Loading services...</p>
        ) : (
          <div className="row">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                image={service.logo}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
