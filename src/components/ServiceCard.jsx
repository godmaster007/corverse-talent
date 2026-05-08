import React from 'react';

const ServiceCard = ({ title, description, features }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {features && features.length > 0 && (
        <ul>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
