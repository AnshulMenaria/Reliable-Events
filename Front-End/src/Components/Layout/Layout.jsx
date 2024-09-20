import React from 'react'
import { Outlet } from 'react-router-dom';
import NavigationBar from './Navbar.jsx';

const Layout = () => {
  return (
    <>
        <div>
          <div className="app-container">
            <NavigationBar />
              <div className="main-content">
                <Outlet/>
              </div>
          </div>
        </div>
    </>
  )
}

export default Layout