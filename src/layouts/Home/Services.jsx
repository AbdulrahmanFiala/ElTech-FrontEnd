import React, { useState, useEffect } from "react";
import ServiceCard from "../../components/Home/Services/ServiceCard";

const Services = ({ additionalClassName }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/service/services/"
        );
        const data = await response.json();
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
