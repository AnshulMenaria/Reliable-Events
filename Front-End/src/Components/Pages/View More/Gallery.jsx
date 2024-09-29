import React, { useEffect, useState, useRef } from "react";
import Helmet from "react-helmet"; // Import Helmet for managing head
import "./Gallery.css";

// Import gallery images
import img1 from "../../../Assets/GalleryPage/Gallery1.jpg";
import img2 from "../../../Assets/GalleryPage/Gallery2.jpg";
import img3 from "../../../Assets/GalleryPage/Gallery3.jpg";
import img4 from "../../../Assets/GalleryPage/Gallery4.jpg";
import img5 from "../../../Assets/GalleryPage/Gallery5.jpg";
import img6 from "../../../Assets/GalleryPage/Gallery6.jpg";
import img7 from "../../../Assets/GalleryPage/Gallery7.jpg";
import img8 from "../../../Assets/GalleryPage/Gallery8.jpg";
import img9 from "../../../Assets/GalleryPage/Gallery9.jpg";
import img10 from "../../../Assets/GalleryPage/Gallery10.jpg";
import img11 from "../../../Assets/GalleryPage/Gallery11.jpg";
import img12 from "../../../Assets/GalleryPage/Gallery12.jpg";
import img13 from "../../../Assets/GalleryPage/Gallery13.jpg";
import img14 from "../../../Assets/GalleryPage/Gallery14.jpg";
import img15 from "../../../Assets/GalleryPage/Gallery15.jpg";
import img17 from "../../../Assets/GalleryPage/Gallery17.jpg";
import img18 from "../../../Assets/GalleryPage/Gallery18.jpg";

// Gallery data
const galleryImages = [
  { src: img1, alt: "Beautiful Wedding Decoration", type: "portrait" },
  { src: img2, alt: "Corporate Event Setup", type: "portrait" },
  { src: img3, alt: "Engaging Seminar", type: "landscape" },
  { src: img4, alt: "Social Event Celebration", type: "portrait" },
  { src: img5, alt: "College Fest Activities", type: "portrait" },
  { src: img6, alt: "Lighting and Sound Setup", type: "landscape" },
  { src: img7, alt: "Live Performance Highlights", type: "portrait" },
  { src: img8, alt: "Photography Moments", type: "portrait" },
  { src: img9, alt: "Event Networking", type: "landscape" },
  { src: img10, alt: "Fun at the Event", type: "portrait" },
  { src: img11, alt: "Creative Event Decoration", type: "portrait" },
  { src: img12, alt: "Memorable Moments Captured", type: "portrait" },
  { src: img13, alt: "Artistic Event Setup", type: "portrait" },
  { src: img14, alt: "Spectacular View of the Event", type: "landscape" },
  { src: img15, alt: "Outdoor Event Fun", type: "landscape" },
  { src: img17, alt: "Unique Event Experiences", type: "portrait" },
  { src: img18, alt: "Celebration Highlights", type: "portrait" },
];

const GallerySection = () => {
  const [visible, setVisible] = useState([]);
  const galleryRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null, // Observes within the viewport
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute("data-index");
          setVisible((prevVisible) => [...prevVisible, Number(index)]);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, observerOptions);

    galleryRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect(); // Clean up observer on unmount
    };
  }, []);

  return (
    <section id="gallery-section" className="gallery-section">
      <Helmet>
        <title>Event Gallery - Our Unforgettable Moments</title>
        <meta name="description" content="Explore our event gallery showcasing unforgettable moments from weddings, corporate events, and social gatherings. Discover our exceptional event planning services." />
        <link rel="canonical" href="https://yourwebsite.com/gallery" />
      </Helmet>
      <h2 className="gallery-title">Event Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (galleryRef.current[index] = el)}
            className={`gallery-item ${image.type} ${visible.includes(index) ? "show" : ""}`}
          >
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
