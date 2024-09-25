import React from "react";
import "./TestimonialsPage.css";

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
  {
    name: "Sonia Kapoor",
    location: "Rajasthan, India",
    feedback:
      "Absolutely amazing service! They took care of everything for my daughter's birthday, and the event turned out to be a magical experience. Thanks to the entire team!",
    date: "December 2023",
  },
  {
    name: "Rahul Verma",
    location: "Maharashtra, India",
    feedback:
      "Very professional and reliable service! They planned and executed my engagement party so well. The decorations and theme were exactly what I wanted.",
    date: "June 2024",
  },
];

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page-container">
      <h1 className="testimonials-heading">Our Clients' Testimonials</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-frame">
              <div className="testimonial-content">
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                <h4 className="testimonial-name">- {testimonial.name}</h4>
                <p className="testimonial-location">{testimonial.location}</p>
                <p className="testimonial-date">{testimonial.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
