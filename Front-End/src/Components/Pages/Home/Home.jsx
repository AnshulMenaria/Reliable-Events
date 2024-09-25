import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import ServicesSection from "./Services";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import Review from "./Review";
import eventbg1 from "../../../Assets/HeroSection/eventbg1.jpg";
import eventbg2 from "../../../Assets/HeroSection/eventbg2.jpg";
import eventbg3 from "../../../Assets/HeroSection/eventbg3.jpg";
import eventbg4 from "../../../Assets/HeroSection/eventbg4.jpg";

const images = [eventbg1, eventbg2, eventbg3, eventbg4];

const Home = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(eventbg1);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);

      setTimeout(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        });
        setFadeOut(false);
      }, 1500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleExploreClick = () => {
    navigate("/services");
  };

  return (
    <>
      <div className="hero-section">
        <div className="image-slider">
          <div className="slider-line"></div>
          <div
            className={`image-slide ${fadeOut ? "fade-out" : "fade-in"}`}
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
          <button className="cta-btn" onClick={handleExploreClick}>Explore Our Services</button>
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
