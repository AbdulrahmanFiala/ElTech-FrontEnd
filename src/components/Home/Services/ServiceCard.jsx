const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-service">
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>{description.length > 100 ? description.substring(0, 100) + '...' : description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
