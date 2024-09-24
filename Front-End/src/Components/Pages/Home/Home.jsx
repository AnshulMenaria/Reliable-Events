import React, { useEffect, useState } from "react";
import "./Home.css";
import ServicesSection from "./Services";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import eventbg1 from "../../../Assets/HeroSection/eventbg1.jpg";
import eventbg2 from "../../../Assets/HeroSection/eventbg2.jpg";
import eventbg3 from "../../../Assets/HeroSection/eventbg3.jpg";
import eventbg4 from "../../../Assets/HeroSection/eventbg4.jpg";
import Review from "./Review";

const images = [eventbg1, eventbg2, eventbg3, eventbg4]; // Define images outside

const Home = () => {
  const [currentImage, setCurrentImage] = useState(eventbg1);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true); // Trigger fade out

      setTimeout(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        });
        setFadeOut(false); // Reset fade out state
      }, 1500); // Match this with the CSS transition duration
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero-section">
        <div className="image-slider">
          <div className="slider-line"></div>
          <div
            className={`image-slide ${fadeOut ? "fade-out" : "fade-in"}`} // Use both classes
            style={{
              backgroundImage: `url(${currentImage})`,
            }}
          ></div>
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
      <section id="reviews">
        <Review />
      </section>
    </>
  );
};

export default Home;
