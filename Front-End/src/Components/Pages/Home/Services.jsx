import React from "react";
import { Helmet } from "react-helmet";
import "./Services.css";
import { Container, Row, Col } from "react-bootstrap";

// Import images for each service
import weddingImage from "../../../Assets/ServicesPage/wedding3.png";
import corporateImage from "../../../Assets/ServicesPage/corporate2.jpg";
import socialImage from "../../../Assets/ServicesPage/SocialEvents.jpg";
import LiveShows from "../../../Assets/ServicesPage/LiveShows.jpg"; // Additional image for the first column middle

const ServicesSection = () => {
  return (
    <>
      {/* SEO Head Elements */}
      <Helmet>
        <title>Our Services - Reliable Event Planning for Weddings, Corporate, and Social Events</title>
        <meta
          name="description"
          content="Explore Reliable Events' expert planning services for weddings, corporate events, social gatherings, and live shows. Serving Gujarat, Udaipur, and Maharashtra."
        />
        <meta
          name="keywords"
          content="event planning, wedding services, corporate events, social events, live shows, event management, Gujarat, Udaipur, Maharashtra"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Main Services Section */}
      <section id="services" className="services-section">
        <Container className="services-gallery">
          {/* Top row of images */}
          <Row className="image-row">
            <Col className="image-col">
              <div className="image-container-1">
                <img src={weddingImage} alt="Wedding Event Planning" className="service-image" />
                <div className="image-overlay">
                  <h2 className="overlay-title">Wedding Service</h2>
                  <p className="overlay-description">
                    Make your wedding unforgettable with our expert planning.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="image-col">
              <div className="image-container-1">
                <img src={corporateImage} alt="Corporate Event Planning" className="service-image" />
                <div className="image-overlay">
                  <h2 className="overlay-title">Corporate Events</h2>
                  <p className="overlay-description">
                    Professional corporate event management services.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="image-col">
              <div className="image-container-1">
                <img src={LiveShows} alt="Live Shows and Artist Management" className="service-image" />
                <div className="image-overlay">
                  <h2 className="overlay-title">Live Shows & Artist Management</h2>
                  <p className="overlay-description">
                    Elevate your event with seamless live shows and exceptional artist management.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          {/* First additional image in the 1st column middle */}
          <Row className="image-row extra-row">
            <Col className="image-col extra-col">
              <div className="image-container-2">
                <img src={socialImage} alt="Social Events" className="service-image" />
                <div className="image-overlay">
                  <h2 className="overlay-title">Social Events</h2>
                  <p className="overlay-description">
                    Celebrate life's moments with our social event services.
                  </p>
                </div>
              </div>
            </Col>

            {/* Service Section between extra images */}
            <Col className="service-section-content-wrapper">
              <div className="service-section-content">
                <h1 className="ser-title">Our Services</h1>
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
                  <h2 className="overlay-title">Social Events</h2>
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
                <img src={LiveShows} alt="Live Shows and Artist Management" className="service-image" />
                <div className="image-overlay">
                  <h2 className="overlay-title">Live Shows & Artist Management</h2>
                  <p className="overlay-description">
                    Elevate your event with seamless live shows and exceptional artist management.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="image-col">
              <div className="image-container-3">
                <img src={corporateImage} alt="Corporate Event Planning" className="service-image" />
                <div className="image-overlay">
                  <h2 className="overlay-title">Corporate Events</h2>
                  <p className="overlay-description">
                    Professional corporate event management services.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="image-col">
              <div className="image-container-3">
                <img src={weddingImage} alt="Wedding Event Planning" className="service-image" />
                <div className="image-overlay">
                  <h2 className="overlay-title">Wedding Service</h2>
                  <p className="overlay-description">
                    Make your wedding unforgettable with our expert planning.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="view-more-btn-container">
          <a href="/services" className="view-more-btn">
            ➔ View More
          </a>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
