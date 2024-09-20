import React from 'react';
import './Services.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
        <h2 className="section-title">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index} className="service-col">
              <Card className="service-card">
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
