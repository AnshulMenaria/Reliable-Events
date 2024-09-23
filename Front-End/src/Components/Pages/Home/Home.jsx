import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ServicesSection from "./Services";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <div className="image-slider">
          <div className="image-slide"></div>
        </div>
        <div className="hero-content">
          <h2 className="animate-text">Creating Unforgettable Memories</h2>
          <p className="animate-subtext">
            We plan, design, and manage exceptional celebrations for any
            occasion.
          </p>
          <Link to="/services" className="cta-btn">Explore Our Services</Link>
          <Link to="/more" className="cta1-btn">View More</Link>
        </div>
      </div>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
    </>
  );
};

export default Home;
