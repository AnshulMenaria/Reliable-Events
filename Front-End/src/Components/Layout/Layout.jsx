import React from 'react'
import { Outlet } from 'react-router-dom';
import NavigationBar from './Navbar.jsx';
import Footer from './Footer.jsx';

const Layout = () => {
  return (
    <>
        <div>
          <div className="app-container">
            <NavigationBar />
              <div className="main-content">
                <Outlet/>
              </div>
              <Footer/>
          </div>
        </div>
    </> 
  )
}

export default Layout