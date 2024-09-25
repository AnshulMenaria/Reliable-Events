import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Testimonials.css';

const testimonials = [
  {
    name: "Ravi Sharma",
    location: "Maharashtra, India",
    feedback:
      "I recently hired them for my wedding, and they exceeded all my expectations! The team was professional, and the event was absolutely beautiful. Highly recommended!",
    date: "June 2023",
  },
  {
    name: "Priya Desai",
    location: "Rajasthan, India",
    feedback:
      "The level of attention to detail in planning my event was outstanding. From decor to logistics, everything was perfect! I couldn't have asked for a better service.",
    date: "July 2023",
  },
  {
    name: "Amit Patel",
    location: "Gujarat, India",
    feedback:
      "Their team made our corporate event a success! The execution was flawless, and all our guests had a great time. I will definitely work with them again in the future.",
    date: "August 2024",
  },
];

const Testimonials = () => {
  return (
    <div className="home-testimonials-section">
      <h2 className="home-testimonials-heading">What Our Clients Say</h2>
      <Carousel interval={3000} controls={false} indicators={true} pause={false}>
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="home-testimonial-card">
              <div className="home-testimonial-frame">
                <div className="home-testimonial-content">
                  <p className="home-testimonial-feedback">"{testimonial.feedback}"</p>
                  <h4 className="home-testimonial-name">- {testimonial.name}</h4>
                  <p className="home-testimonial-location">{testimonial.location}</p>
                  <p className="home-testimonial-date">{testimonial.date}</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <Link to="/testimonials" className="home-view-more-btn">
        View More
      </Link>
    </div>
  );
};

export default Testimonials;
