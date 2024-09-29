import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container fluid>
        <Row className="align-items-center justify-content-between">
          {/* Left section with Logo */}
          <Col xs={6} md={2} className="footer-logo-wrapper">
            <img
              src={process.env.PUBLIC_URL + "Logo.png"}
              alt="Reliable Events - Professional Event Planning Services in Udaipur"
              className="footer-logo"
            />
          </Col>

          {/* Quick Links Section */}
          <Col xs={6} md={2} className="footer-links-wrapper">
            <h5 className="footer-section-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </Col>

          {/* Follow Us Section */}
          <Col xs={6} md={2} className="footer-socials-wrapper mt-4 mt-md-0">
            <h5 className="footer-section-title">Follow Us</h5>
            <ul className="footer-socials">
              <li><a href="https://www.instagram.com/reliable_events_udaipur" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram"><i className="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="https://www.facebook.com/share/KTMr6F5EmFgrdHYh/?mibextid=LQQJ4d" target="_blank" rel="noreferrer" aria-label="Follow us on Facebook"><i className="fab fa-facebook-f"></i> Facebook</a></li>
              <li><a href="https://wa.me/6378394687" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp"><i className="fab fa-whatsapp"></i> WhatsApp</a></li>
            </ul>
          </Col>

          {/* Contact Us Section */}
          <Col xs={6} md={3} className="footer-contact-wrapper mt-4 mt-md-0">
            <h5 className="footer-section-title">Contact Us</h5>
            <p><a href="tel:+918005754631" aria-label="Call +91 8005754631">+91 8005754631</a></p>
            <p><a href="tel:+916378394687" aria-label="Call +91 6378394687">+91 6378394687</a></p>
            <p><a href="mailto:reliableeventsudaipur@gmail.com" aria-label="Email Reliable Events">reliableeventsudaipur@gmail.com</a></p>
          </Col>

          {/* Address Section */}
          <Col xs={12} md={3} className="footer-address-wrapper mt-5 mt-md-2">
            <h5 className="footer-section-title">Address</h5>
            <p>69, Behind Rajasthan Patrika Office, North Sunderwas, Udaipur, Rajasthan, 313001</p>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="text-center mt-3">
          <Col>
            <p className="footer-copyright">
              &copy; 2018 Reliable Events Co. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
