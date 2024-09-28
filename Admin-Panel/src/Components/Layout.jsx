import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavigationBar from './Navbar.jsx';

const Layout = () => {
  const location = useLocation(); // Get the current location (route)

  return (
    <div>
      <div className="app-container">
        {/* Conditionally render the Navbar */}
        {location.pathname !== '/' && <NavigationBar />} {/* Hide Navbar on login page */}

        {/* Main content */}
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
