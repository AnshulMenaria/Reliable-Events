import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <Carousel>
        <Carousel.Item>
          <p>"Reliable Events made our wedding day magical. Highly recommend!"</p>
          <h5>- Client A</h5>
        </Carousel.Item>
        <Carousel.Item>
          <p>"Professional service and seamless execution for our corporate event."</p>
          <h5>- Client B</h5>
        </Carousel.Item>
        <Carousel.Item>
          <p>"Our party was a hit thanks to Reliable Events!"</p>
          <h5>- Client C</h5>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonials;
