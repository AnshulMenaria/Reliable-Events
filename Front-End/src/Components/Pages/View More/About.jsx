import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css"; // Ensure custom styles are imported

const About = () => {
  const [clientsCount, setClientsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);

  // Function to animate the count
  const animateCount = (setter, target, duration = 2000) => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const increment = target / (duration / stepTime);

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setter(target);
      } else {
        setter(Math.floor(start));
      }
    }, stepTime);
  };

  useEffect(() => {
    animateCount(setClientsCount, 40);
    animateCount(setExperienceCount, 6);
    animateCount(setEventsCount, 50);
  }, []);

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
            Our founder, Mr. Neeraj Salvi, started this journey in 2018 with a passion for event planning and a vision to make every occasion special.
            With years of experience in the industry, Mr. Neeraj Salvi has a keen eye for detail and a deep understanding of what it takes to create memorable experiences.
            Our team shares this commitment to excellence, ensuring that each event is meticulously planned and flawlessly executed.
            We believe in transforming ideas into reality and making your dreams come true through our dedicated service.
          </p>
          <p>
            Since our inception, we have built a reputation for reliability, creativity, and outstanding service.
            Our goal is to take the stress out of event planning so you can focus on enjoying your special moments.
            Join us in crafting your next unforgettable event!
          </p>
          <p>
            We proudly provide our services across Rajasthan, Gujarat, Maharashtra, and all over India. 
            Our extensive network and local expertise ensure that we can cater to your needs, no matter where your event takes place. 
            Whether it's a wedding, corporate gathering, or a special celebration, we are dedicated to making it a memorable experience for you and your guests.
          </p>
        </Col>
      </Row>

      <Row className="text-center mt-5">
        <Col md={4}>
          <div className="statistic-box">
            <div className="circle">{clientsCount}+</div>
            <h3>Clients</h3>
          </div>
        </Col>
        <Col md={4}>
          <div className="statistic-box">
            <div className="circle">{experienceCount}+</div>
            <h3>Years of Experience</h3>
          </div>
        </Col>
        <Col md={4}>
          <div className="statistic-box">
            <div className="circle">{eventsCount}+</div>
            <h3>Events Managed</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
