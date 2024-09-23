import React from "react";
import "./Home.css";
import ServicesSection from "./Services";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <div className="image-slider">
          <div className="slider-line"></div>{" "}
          <div className="image-slide"></div>
        </div>
        <div className="hero-content">
          <h2 className="animate-text">Creating Unforgettable Memories</h2>
          <p className="animate-subtext">
            We plan, design, and manage exceptional celebrations for any
            occasion.
          </p>
          <button className="cta-btn">Explore Our Services</button>
          <button className="cta1-btn">View more</button>
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
