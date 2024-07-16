import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">About Us</h1>
        <p className="about-description">
          Welcome to our Blog Application. Our mission is to provide you with the latest and greatest blog posts on a variety of topics. We are dedicated to delivering high-quality content that is informative, engaging, and insightful.
        </p>
        <p className="about-description">
          Our team of writers is passionate about sharing their knowledge and expertise with you. Whether you're looking for tips on technology, lifestyle, health, or any other topic, you'll find something of interest on our blog.
        </p>
        <p className="about-description">
          Thank you for visiting our blog. We hope you enjoy your time here and find the information valuable. Feel free to reach out to us with any questions or feedback.
        </p>
      </div>
    </div>
  );
};

export default About;
