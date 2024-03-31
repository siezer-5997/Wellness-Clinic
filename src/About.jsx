import React from 'react';
import './Style/About.css'; // Make sure to create and link the About.css file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Our Clinic</h2>
      <p>
        Welcome to Wellness Clinic, where your health is our top priority. Our team of dedicated professionals is here to provide you with the highest quality care. We believe in a holistic approach to health and offer a range of services to meet your needs.
      </p>
      </div>
      <div className="services-flexbox">
        <div className="flex-item">
          <h3>Primary Care</h3>
          <p>Comprehensive care for all ages and stages of life.</p>
        </div>
        <div className="flex-item">
          <h3>Specialty Services</h3>
          <p>Expert care in fields such as cardiology and orthopedics.</p>
        </div>
        <div className="flex-item">
          <h3>Diagnostic Imaging</h3>
          <p>State-of-the-art imaging technology for accurate diagnoses.</p>
        </div>
        <div className="flex-item">
          <h3>Preventive Medicine</h3>
          <p>Focus on disease prevention and health maintenance.</p>
        </div>
        <div className="flex-item">
          <h3>Mental Health</h3>
          <p>Support for mental well-being with counseling and therapy.</p>
        </div>
        <div className="flex-item">
          <h3>Emergency Care</h3>
          <p>Immediate attention for urgent medical situations.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
