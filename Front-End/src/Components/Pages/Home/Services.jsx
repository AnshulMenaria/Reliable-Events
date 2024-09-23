import React from 'react';
import './Services.css';
import { Container, Row, Col } from 'react-bootstrap';

const services = [
  {
    title: 'Wedding Planning',
    description: 'We make your wedding a truly special occasion.',
    image: '/wedding.jpg'
  },
  {
    title: 'Corporate Events',
    description: 'Seamless planning for corporate events and meetings.',
    image: '/corporate.jpg'
  },
  {
    title: 'Social Gatherings',
    description: 'Host the perfect social gathering with our expertise.',
    image: '/social.jpg'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <Container>
        <h1 className="section-title"  >Our Services</h1>
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index} className="service-col">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <p>Tap Here</p>
                  <div className="flip-card-front">
                    <h3 className="service-name">{service.title}</h3>
                  </div>
                  <div className="flip-card-back">
                    <img src={service.image} alt={service.title} />
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
