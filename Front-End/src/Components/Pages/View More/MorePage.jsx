import React from "react";
import "./More.css"; // Ensure you have styles here
import { Container, Row, Col, Button } from "react-bootstrap";

const More = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4 title">Make Your Events Unforgettable!</h1>
      <p className="text-center mb-5 subtitle">
        Discover how to enhance your events and keep everything organized in one place.
      </p>

      <Row className="mb-4">
        <Col md={6} className="text-center">
          <div className="feature-box">
            <h3>Comprehensive Planning</h3>
            <p>
              Our event planners take care of every detail, from selecting the perfect venue to coordinating logistics. 
              We ensure that your event is tailored to your unique vision, making the planning process seamless and stress-free. 
              Whether it’s a wedding, corporate event, or private party, we’ve got you covered!
            </p>
          </div>
        </Col>
        <Col md={6} className="text-center">
          <div className="feature-box">
            <h3>Professional Decor</h3>
            <p>
              Transform your space into a magical atmosphere with our expert decor services. 
              We specialize in creating stunning designs that reflect your style and theme, whether it's elegant and sophisticated or fun and festive. 
              Let us help you make a lasting impression on your guests with beautiful decorations that set the mood for your event.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6} className="text-center">
          <div className="feature-box">
            <h3>Expert Coordination</h3>
            <p>
              Leave the details to us! Our experienced coordinators are dedicated to ensuring that everything runs smoothly on the day of your event. 
              From managing timelines to overseeing vendors, we handle the logistics so you can focus on enjoying your special occasion. 
              Your satisfaction is our top priority, and we’re here to make your event a success.
            </p>
          </div>
        </Col>
        <Col md={6} className="text-center">
          <div className="feature-box">
            <h3>Custom Packages</h3>
            <p>
              Every event is unique, and so are your needs. That’s why we offer customizable packages designed to fit your specific requirements and budget. 
              Whether you're planning an intimate gathering or a large-scale celebration, we can create a tailored package that includes all the services you need for a perfect event. 
              Choose what works best for you and let us do the rest!
            </p>
          </div>
        </Col>
      </Row>

      <Row className="text-center mb-5">
        <Col>
          <Button variant="primary" size="lg" href="/services" className="explore-btn">
            Explore Our Services
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default More;
