import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS for styling
import { Nav, Navbar, Container } from "react-bootstrap";

const NavigationBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  const handleLinkClick = () => {
    setNavbarOpen(false); // Close the navbar when a link is clicked
  };

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid className="d-flex align-items-center justify-content-between">
          {/* Logo on the left */}
          <a href="/" className="navbar-logo-wrapper">
            <img
              src={process.env.PUBLIC_URL + "Logo.png"}
              alt="Company Logo"
              className="navbar-logo"
            />
          </a>

          {/* Navbar toggle for mobile only */}
          <button 
            className="navbar-toggle d-lg-none" // Hide on large screens
            onClick={toggleNavbar} 
            aria-controls="basic-navbar-nav"
          >
            <span className={`navbar-toggler-line ${navbarOpen ? 'open' : ''}`}></span>
            <span className={`navbar-toggler-line ${navbarOpen ? 'open' : ''}`}></span>
            <span className={`navbar-toggler-line ${navbarOpen ? 'open' : ''}`}></span>
          </button>

          <Navbar.Collapse id="basic-navbar-nav" in={navbarOpen}>
            <Nav className="mx-auto navbar-nav-left">
              <Nav.Link href="/" className="mt-2" onClick={handleLinkClick}>
                Home
              </Nav.Link>
              <Nav.Link href="/services" className="mt-2" onClick={handleLinkClick}>
                Services
              </Nav.Link>
              <Nav.Link href="/gallery" className="mt-2" onClick={handleLinkClick}>
                Gallery
              </Nav.Link>
              <Nav.Link href="/testimonials" className="mt-2" onClick={handleLinkClick}>
                Testimonials
              </Nav.Link>
              <Nav.Link href="/about" className="mt-2" onClick={handleLinkClick}>
                About Us
              </Nav.Link>
            </Nav>

            <Nav className="navbar-nav-right">
              <Nav.Link href="/contact" className="mt-1 contact" onClick={handleLinkClick}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
