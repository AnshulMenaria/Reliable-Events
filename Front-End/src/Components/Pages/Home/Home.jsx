import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import ServicesSection from "./Services";
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
      <header className="hero-section">
        <div className="image-slider" aria-label="Background Image Slider">
          <div className="slider-line"></div>
          <div
            className={`image-slide ${fadeOut ? "fade-out" : "fade-in"}`}
            style={{
              backgroundImage: `url(${currentImage})`,
            }}
            role="img"
            aria-label="Event background"
            alt="Beautiful event background"
          ></div>
        </div>
        <div className="hero-content">
          <h1 className="animate-text">Creating Unforgettable Memories</h1>
          <p className="animate-subtext">
            We Plan, Design, and Manage exceptional celebrations for any Occasion.
          </p>
          <button className="cta-btn" onClick={handleExploreClick}>
            Explore Our Services
          </button>
        </div>
      </header>
      <main>
        <section id="services" aria-labelledby="services-title">
          <h2 id="services-title" className="sr-only">Our Services</h2>
          <ServicesSection />
        </section>
        <section id="gallery" aria-labelledby="gallery-title">
          <h2 id="gallery-title" className="sr-only">Gallery</h2>
          <Gallery />
        </section>
        <section id="reviews" aria-labelledby="reviews-title">
          <h2 id="reviews-title" className="sr-only">Client Reviews</h2>
          <Review />
        </section>
      </main>
    </>
  );
};

export default Home;
