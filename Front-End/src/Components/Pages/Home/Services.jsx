import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Services.css";
import { Container, Row, Col, Card } from "react-bootstrap";

// Import images for each service
import weddingImage from "../../../Assets/ServicesPage/wedding3.png";
import corporateImage from "../../../Assets/ServicesPage/corporate2.jpg";
import socialImage from "../../../Assets/ServicesPage/SocialEvents.jpg";

const services = [
  {
    title: "Wedding Planning",
    description: "We make your wedding a truly special occasion.",
    image: weddingImage,
    link: "/services",
  },
  {
    title: "Corporate Events",
    description: "Seamless planning for corporate events and meetings.",
    image: corporateImage,
    link: "/services",
  },
  {
    title: "Social Gatherings",
    description: "Host the perfect social gathering with our expertise.",
    image: socialImage,
    link: "/services",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleViewMore = (link) => {
    navigate(link); // Redirect to the provided link
  };

  return (
    <section id="services" className="services-section">
      <Container>
        <h2 className="section-title">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index} className="service-col">
              <Card className="service-card">
                <div className="img-container">
                  <Card.Img
                    variant="top"
                    src={service.image}
                    className="service-img"
                  />
                  <div className="card-overlay">
                    <div className="card-info">
                      <Card.Title className="service-title">{service.title}</Card.Title>
                      <Card.Text>{service.description}</Card.Text>
                      <button
                        className="view-btn"
                        onClick={() => handleViewMore(service.link)}
                      >
                        View more
                      </button>
                    </div>
                  </div>
                </div>
                <Card.Body>
                  {/* Display title below the image */}
                  <Card.Title className="service-title-hidden">{service.title}</Card.Title>
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
