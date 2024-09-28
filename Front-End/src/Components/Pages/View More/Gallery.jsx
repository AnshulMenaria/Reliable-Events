import React, { useEffect, useState } from "react";
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
  { src: img1, alt: "Image 1", type: "landscape" },
  { src: img2, alt: "Image 2", type: "landscape" },
  { src: img3, alt: "Image 3", type: "portrait" },
  { src: img4, alt: "Image 4", type: "landscape" },
  { src: img5, alt: "Image 5", type: "portrait" },
  { src: img6, alt: "Image 6", type: "landscape" },
  { src: img7, alt: "Image 7", type: "portrait" },
  { src: img8, alt: "Image 8", type: "portrait" },
  { src: img9, alt: "Image 9", type: "landscape" },
  { src: img10, alt: "Image 10", type: "portrait" },
  { src: img11, alt: "Image 11", type: "portrait" },
  { src: img12, alt: "Image 12", type: "portrait" },
  { src: img13, alt: "Image 13", type: "portrait" },
  { src: img14, alt: "Image 14", type: "landscape" },
  { src: img15, alt: "Image 15", type: "landscape" },
  { src: img17, alt: "Image 17", type: "portrait" },
  { src: img18, alt: "Image 18", type: "portrait" },
];

const GallerySection = () => {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".unique-gallery-section-item");
      items.forEach((item, index) => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.1; // Changed to trigger sooner
        if (itemPosition < screenPosition && !visible.includes(index)) {
          setVisible((prevVisible) => [...prevVisible, index]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  return (
    <section id="gallery-section" className="unique-gallery-section">
      <h2 className="unique-gallery-section-title">Event Gallery</h2>
      <div className="unique-gallery-section-grid">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`unique-gallery-section-item ${image.type} ${visible.includes(index) ? "show" : ""}`}
          >
            <img src={image.src} alt={image.alt} className="unique-gallery-section-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
