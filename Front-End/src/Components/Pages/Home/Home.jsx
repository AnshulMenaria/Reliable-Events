import React from 'react';
import './Home.css';
import ServicesSection from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';

const Home = () => {
  return (
    <>
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="animate-text">Creating Unforgettable Memories</h1>
          <p className="animate-subtext">We plan, design, and manage exceptional celebrations for any occasion.</p>
          <button className="cta-btn">Explore Our Services</button>
          <div className="hero-scroll-indicator">
            <span>Scroll Down</span>
            <div className="scroll-icon"></div>
          </div>
        </div>
      </div>
    </div>
    <ServicesSection/>
    <Testimonials/>
    <Contact/>
    </>
  );
};

export default Home;
