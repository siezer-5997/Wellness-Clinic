// Services.js
import React from 'react';
import './Style/Services.css'; // Ensure this CSS file is linked

const Services = () => {
  return (
    <div className="services-container">
      <h2>Online Services: Schedule an Appointment</h2>
      <div className="service-item">
        <h3>1. Routine Check-Ups</h3>
        {/* Additional content */}
      </div>
      <div className="service-item">
        <h3>2. Chronic Illness</h3>
        {/* Additional content */}
      </div>
      <div className="service-item">
        <h3>3. General Health</h3>
        {/* Additional content */}
      </div>
      <div className="service-item">
        <h3>4. Orthopedics</h3>
        {/* Additional content */}
      </div>
      {/* Add more services as needed */}
    </div>
  );
};

export default Services;
