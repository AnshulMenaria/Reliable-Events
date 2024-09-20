import React from 'react';
import './Navbar.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container fluid>
        <a href="/">
          <img src={process.env.PUBLIC_URL + '/Logo.png'} alt="Company Logo" className="navbar-logo" />
        </a>

        <a href="/" className='brandname'>
          Reliable Events
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            {/* Phone numbers stacked vertically */}
            <div className="phone-numbers">
              <Nav.Link href="tel:+123456789">
                <FontAwesomeIcon icon={faPhone} /> +91 8005754631
              </Nav.Link>
              <Nav.Link href="tel:+987654321">
                <FontAwesomeIcon icon={faPhone} /> +91 8690606970
              </Nav.Link>
            </div>
            <Nav.Link href="/" className='mt-4'>Home</Nav.Link>
            <Nav.Link href="#services" className='mt-4'>Services</Nav.Link>
            <Nav.Link href="#testimonials" className='mt-4'>Testimonials</Nav.Link>
            <Nav.Link href="#contact" className='mt-4'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
