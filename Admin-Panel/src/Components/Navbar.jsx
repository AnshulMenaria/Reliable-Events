import React, { useState } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navbar.css"; // Import the CSS for styling

const NavigationBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  const handleLinkClick = () => {
    setNavbarOpen(false); // Close the navbar when a link is clicked
  };

  const handleLogout = () => {
    // Clear all data from localStorage
    localStorage.clear();
    navigate("/"); // Redirect to the login page
  };

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid className="d-flex align-items-center justify-content-between">
          {/* Logo on the left */}
          <a href="/adminpanel" className="navbar-logo-wrapper">
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
              <Nav.Link href="/adminpanel" className="mt-2" onClick={handleLinkClick}>
                Dashboard
              </Nav.Link>
              <Nav.Link href="/contact" className="mt-2" onClick={handleLinkClick}>
                Queries
              </Nav.Link>
              <Nav.Link href="/reviews" className="mt-2" onClick={handleLinkClick}>
                Reviews
              </Nav.Link>
              <Nav.Link href="/setting" className="mt-2" onClick={handleLinkClick}>
                Profile
              </Nav.Link>
            </Nav>
            {/* Right aligned Logout Button */}
            <div className="navbar-nav-right">
              <Button variant="outline-light" onClick={handleLogout} className="logout-btn">
                Logout
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
