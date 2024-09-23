import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUsers, FaClock, FaCalendarCheck } from "react-icons/fa";
import "./About.css"; // Add custom styles if needed

const About = () => {
  return (
    <Container className="mt-5 about-section">
      <h1 className="text-center mb-4 title">About Us</h1>
      <p className="text-center mb-5 subtitle">
        We have been creating unforgettable events since 2018!
      </p>

      <Row>
        <Col md={12}>
          <h2 className="owner-name">Meet Our Founder</h2>
          <p>
            Our founder, [Owner's Name], started this journey in 2018 with a passion for event planning and a vision to make every occasion special. 
            With years of experience in the industry, [Owner's Name] has a keen eye for detail and a deep understanding of what it takes to create memorable experiences. 
            Our team shares this commitment to excellence, ensuring that each event is meticulously planned and flawlessly executed. 
            We believe in transforming ideas into reality and making your dreams come true through our dedicated service.
          </p>
          <p>
            Since our inception, we have built a reputation for reliability, creativity, and outstanding service. 
            Our goal is to take the stress out of event planning so you can focus on enjoying your special moments. 
            Join us in crafting your next unforgettable event!
          </p>
        </Col>
      </Row>

      <Row className="text-center mt-5">
        <Col md={4}>
          <div className="icon-box">
            <FaUsers className="icon" />
            <h3>30+ Clients</h3>
            <p>
              We have had the pleasure of serving over 30 satisfied clients, each with unique visions for their events.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="icon-box">
            <FaClock className="icon" />
            <h3>6 Years of Experience</h3>
            <p>
              With six years in the industry, our expertise ensures your event is in capable hands.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="icon-box">
            <FaCalendarCheck className="icon" />
            <h3>50+ Events Hosted</h3>
            <p>
              We have successfully hosted over 50 events, ranging from intimate gatherings to grand celebrations.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
