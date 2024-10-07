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
    <nav aria-label="Main Navigation">
      <Navbar expand="lg" className="custom-navbar" aria-label="Main Navigation">
        <Container fluid className="d-flex align-items-center justify-content-between">
          {/* Logo on the left */}
          <a href="/" className="navbar-logo-wrapper" aria-label="Go to homepage">
            <img
              src={process.env.PUBLIC_URL + "Logo.png"}
              alt="Reliable Events - Event Planning Service"
              className="navbar-logo"
            />
          </a>

          {/* Navbar toggle for mobile only */}
          <button 
            className="navbar-toggle d-lg-none" // Hide on large screens
            onClick={toggleNavbar} 
            aria-controls="basic-navbar-nav"
            aria-expanded={navbarOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={`navbar-toggler-line ${navbarOpen ? 'open' : ''}`}></span>
            <span className={`navbar-toggler-line ${navbarOpen ? 'open' : ''}`}></span>
            <span className={`navbar-toggler-line ${navbarOpen ? 'open' : ''}`}></span>
          </button>

          <Navbar.Collapse id="basic-navbar-nav" in={navbarOpen}>
            <Nav className="mx-auto navbar-nav-left" role="navigation">
              <Nav.Link href="/" className="mt-2" onClick={handleLinkClick} aria-label="Home Page">
                Home
              </Nav.Link>
              <Nav.Link href="/services" className="mt-2" onClick={handleLinkClick} aria-label="Our Services">
                Services
              </Nav.Link>
              <Nav.Link href="/destinations" className="mt-2" onClick={handleLinkClick} aria-label="Destinations">
              Destinations
              </Nav.Link>
              <Nav.Link href="/gallery" className="mt-2" onClick={handleLinkClick} aria-label="View Gallery">
                Gallery
              </Nav.Link>
              <Nav.Link href="/testimonials" className="mt-2" onClick={handleLinkClick} aria-label="Read Testimonials">
                Testimonials
              </Nav.Link>
              <Nav.Link href="/about" className="mt-2" onClick={handleLinkClick} aria-label="Learn About Us">
                About Us
              </Nav.Link>
            </Nav>

            <Nav className="navbar-nav-right">
              <Nav.Link href="/contact" className="mt-1 contact" onClick={handleLinkClick} aria-label="Contact Us to Book Now">
                Book Now
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default NavigationBar;
