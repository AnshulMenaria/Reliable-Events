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
          <h2 className="animate-text">Creating Unforgettable Memories</h2>
          <p className="animate-subtext">We plan, design, and manage exceptional celebrations for any occasion.</p>
          <button className="cta-btn">Explore Our Services</button>
          
        </div>
      </div>
    </div>
    <section id="services">
    <ServicesSection/>
    </section>
    <section id="testimonials">
    <Testimonials/>
    </section>
    <section id="contact">
    <Contact/>
    </section>
    </>
  );
};

export default Home;
