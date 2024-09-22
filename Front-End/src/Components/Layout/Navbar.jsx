import React, { useState } from "react";
import "./Navbar.css";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavigationBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  const handleLinkClick = () => {
    setNavbarOpen(false); // Close the navbar when a link is clicked
  };

  return (
    <>
      {/* Header above the navbar for displaying phone numbers */}
      <div className="header-top">
        <Container fluid className="d-flex justify-content-end">
          <div className="phone-numbers">
            <a href="tel:+918005754631" className="phone-number">
              +91 8005754631
            </a>
            <span>|</span>
            <a href="tel:+918690606970" className="phone-number">
              +91 8690606970
            </a>
          </div>
        </Container>
      </div>

      {/* Navbar */}
      <Navbar expand="lg" className="custom-navbar" fixed="top">
        <Container
          fluid
          className="d-flex align-items-center justify-content-center"
        >
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleNavbar}
          />
          <Navbar.Collapse id="basic-navbar-nav" in={navbarOpen}>
            <Nav className="navbar-nav-left">
              <Nav.Link href="/" className="mt-2" onClick={handleLinkClick}>
                Home
              </Nav.Link>
              <Nav.Link
                href="/services"
                className="mt-2"
                onClick={handleLinkClick}
              >
                Services
              </Nav.Link>
            </Nav>

            <a href="/" className="navbar-logo-wrapper">
              <img
                src={process.env.PUBLIC_URL + "Event-logo.png"}
                alt="Company Logo"
                className="navbar-logo"
              />
            </a>

            <Nav className="navbar-nav-right">
              <Nav.Link
                href="#testimonials"
                className="mt-2"
                onClick={handleLinkClick}
              >
                Testimonials
              </Nav.Link>
              <Nav.Link
                href="/contact"
                className="mt-2"
                onClick={handleLinkClick}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
