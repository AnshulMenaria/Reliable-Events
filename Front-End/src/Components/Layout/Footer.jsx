import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container fluid className="footer-container">
        <Row className="align-items-center justify-content-between">
          {/* Left section with Logo */}
          <Col md={2} className="footer-logo-wrapper">
            <img
              src={process.env.PUBLIC_URL + "Logo.png"}
              alt="Company Logo"
              className="footer-logo"
            />
          </Col>

          {/* Quick Links Section */}
          <Col md={2} className="footer-links-wrapper">
            <h5 className="footer-section-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/testimonials">Testimonials</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </Col>

          {/* Follow Us Section */}
          <Col md={2} className="footer-socials-wrapper mb-4">
            <h5 className="footer-section-title">Follow Us</h5>
            <ul className="footer-socials">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Us Section */}
          <Col md={3} className="footer-contact-wrapper mb-4">
            <h5 className="footer-section-title">Contact Us</h5>
            
            <p>
              <a href="tel:+91">+91 </a>
            </p>
            <p>
              <a href="tel:+91">+91</a>
            </p>
            <p>
              <a href="mailto:contact@eventplanner.com">
                contact@eventplanner.com
              </a>
            </p>
          </Col>

          {/* Address Section */}
          <Col md={3} className="footer-address-wrapper mb-3">
            <h5 className="footer-section-title">Address</h5>
            <p>123 Event Street</p>
            <p>City, State, 12345</p>
            <p>Country</p>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="text-center mt-3">
          <Col>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} EventPlanner Co. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
