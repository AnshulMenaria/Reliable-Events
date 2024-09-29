import React from "react";
import "./TestimonialsPage.css";

const testimonials = [
  {
    name: "Ravi Sharma",
    location: "Gujarat, India",
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
    location: "Maharashtra, India",
    feedback:
      "Absolutely amazing service! They took care of everything for my daughter's birthday, and the event turned out to be a magical experience. Thanks to the entire team!",
    date: "December 2023",
  },
  {
    name: "Rahul Verma",
    location: "Gujarat, India",
    feedback:
      "Very professional and reliable service! They planned and executed my engagement party so well. The decorations and theme were exactly what I wanted.",
    date: "June 2024",
  },
  {
    name: "Neha Singh",
    location: "Maharashtra, India",
    feedback:
      "We hired them for a family event in Ahmedabad, and the experience was superb. Their team ensured everything was perfect. I highly recommend their services.",
    date: "January 2024",
  },
  {
    name: "Manish Mehta",
    location: "Rajasthan, India",
    feedback:
      "The event planning for our anniversary in Udaipur was spot on. The attention to detail and flawless execution made it a memorable event. A big thanks to the team!",
    date: "February 2024",
  },
  {
    name: "Pooja Shah",
    location: "Gujarat, India",
    feedback:
      "Their team did an amazing job with my brother’s wedding. From start to finish, everything was perfectly managed. Will surely work with them again!",
    date: "March 2024",
  },
  {
    name: "Karan Joshi",
    location: "Rajasthan, India",
    feedback:
      "For our company's product launch event, they went above and beyond to make it a success. The planning and execution were flawless. Highly appreciated!",
    date: "April 2024",
  },
  {
    name: "Megha Chaudhary",
    location: "Maharashtra, India",
    feedback:
      "I hired them for a family event in Pune, and their team made sure every little detail was taken care of. Truly professional and reliable service!",
    date: "May 2024",
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
