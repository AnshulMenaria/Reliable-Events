import React, { useState } from 'react';
import './Navbar.css';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavigationBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);
  
  const handleLinkClick = () => {
    setNavbarOpen(false); // Close the navbar when a link is clicked
  };

  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container fluid className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <a href="/">
            <img src={process.env.PUBLIC_URL + '/Logo.png'} alt="Company Logo" className="navbar-logo" />
          </a>
          <a href="/" className="brandname mt-2">
            Reliable Events
          </a>
        </div>

        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <Navbar.Collapse id="basic-navbar-nav" in={navbarOpen}>
          <Nav className="ml-auto">
            <Nav.Link href="/" className="mt-2" onClick={handleLinkClick}>Home</Nav.Link>
            <Nav.Link href="#services" className="mt-2" onClick={handleLinkClick}>Services</Nav.Link>
            <Nav.Link href="#testimonials" className="mt-2" onClick={handleLinkClick}>Testimonials</Nav.Link>
            <Nav.Link href="#contact" className="mt-2" onClick={handleLinkClick}>Contact</Nav.Link>
          </Nav>

          <div className="phone-numbers">
            <Nav.Link href="tel:+918005754631" className="mt-2">+91 8005754631</Nav.Link>
            <Nav.Link href="tel:+918690606970" className="mt-2">+91 8690606970</Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
