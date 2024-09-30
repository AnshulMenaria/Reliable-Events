import React from "react";
import { Helmet } from "react-helmet";
import "./Services.css";
import { Container, Row, Col } from "react-bootstrap";

// Import images for each service
import weddingImage from "../../../Assets/ServicesPage/wedding3.png";
import corporateImage from "../../../Assets/ServicesPage/corporate2.jpg";
import socialImage from "../../../Assets/ServicesPage/SocialEvents.jpg";
import LiveShows from "../../../Assets/ServicesPage/LiveShows.jpg";

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <Helmet>
        <meta name="description" content="Discover our comprehensive event planning services including weddings, corporate events, live shows, and social gatherings." />
      </Helmet>
      <Container className="services-gallery">
        {/* Top row of images */}
        <Row className="image-row">
          <Col className="image-col">
            <div className="image-container-1">
              <img src={weddingImage} alt="Wedding Service" className="service-image" />
              <div className="image-overlay">
                <h3 className="overlay-title">Wedding Service</h3>
                <p className="overlay-description">
                  Make your wedding unforgettable with our expert planning.
                </p>
              </div>
            </div>
          </Col>
          <Col className="image-col">
            <div className="image-container-1">
              <img src={corporateImage} alt="Corporate Events" className="service-image" />
              <div className="image-overlay">
                <h3 className="overlay-title">Corporate Events</h3>
                <p className="overlay-description">
                  Professional corporate event management services.
                </p>
              </div>
            </div>
          </Col>
          <Col className="image-col">
            <div className="image-container-1">
              <img src={LiveShows} alt="Live Shows & Artist Management" className="service-image" />
              <div className="image-overlay">
                <h3 className="overlay-title">Live Shows & Artist Management</h3>
                <p className="overlay-description">
                  Elevate your event with seamless live shows and exceptional artist management.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Additional content */}
        <Row className="image-row extra-row">
          <Col className="image-col extra-col">
            <div className="image-container-2">
              <img src={socialImage} alt="Social Events" className="service-image" />
              <div className="image-overlay">
                <h3 className="overlay-title">Social Events</h3>
                <p className="overlay-description">
                  Celebrate life's moments with our social event services.
                </p>
              </div>
            </div>
          </Col>

          <Col className="service-section-content-wrapper">
            <div className="service-section-content">
              <h2 className="ser-title">Our Services</h2>
              <p>WHAT WE OFFER FOR YOU</p>
              <div className="view-more-btn-container">
                <a href="/services" className="view-more-btn-0">
                  ➔ View More
                </a>
              </div>
            </div>
          </Col>

          <Col className="image-col extra-col">
            <div className="image-container-2">
              <img src={socialImage} alt="Social Events" className="service-image" />
              <div className="image-overlay">
                <h3 className="overlay-title">Social Events</h3>
                <p className="overlay-description">
                  Celebrate life's moments with our social event services.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom row of images */}
        <Row className="image-row">
          <Col className="image-col">
            <div className="image-container-3">
              <img src={LiveShows} alt="Live Shows & Artist Management" className="service-image" />
              <div className="image-overlay">
                <h3 className="overlay-title">Live Shows & Artist Management</h3>
                <p className="overlay-description">
                  Elevate your event with seamless live shows and exceptional artist management.
                </p>
              </div>
            </div>
          </Col>
          <Col className="image-col">
            <div className="image-container-3">
              <img src={corporateImage} alt="Corporate Events" className="service-image" />
              <div className="image-overlay">
                <h3 className="overlay-title">Corporate Events</h3>
                <p className="overlay-description">
                  Professional corporate event management services.
                </p>
              </div>
            </div>
          </Col>
          <Col className="image-col">
            <div className="image-container-3">
              <img src={weddingImage} alt="Wedding Service" className="service-image" />
              <div className="image-overlay">
                <h3 className="overlay-title">Wedding Service</h3>
                <p className="overlay-description">
                  Make your wedding unforgettable with our expert planning.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
