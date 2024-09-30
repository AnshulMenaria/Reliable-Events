import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { Container, Card } from "react-bootstrap";
import wedding1 from "../../../Assets/HomeGallery/wedding1.jpg";
import wedding2 from "../../../Assets/HomeGallery/wedding2.jpg";
import wedding3 from "../../../Assets/HomeGallery/wedding3.png";
import corporate1 from "../../../Assets/HomeGallery/corporate1.jpg";
import corporate2 from "../../../Assets/HomeGallery/corporate2.jpg";
import corporate3 from "../../../Assets/HomeGallery/corporate3.png";
import party1 from "../../../Assets/HomeGallery/party1.jpg";
import party2 from "../../../Assets/HomeGallery/party2.jpg";
import party3 from "../../../Assets/HomeGallery/party3.jpg";
import seminar1 from "../../../Assets/HomeGallery/seminar1.jpg";
import seminar2 from "../../../Assets/HomeGallery/seminar2.jpg";
import seminar3 from "../../../Assets/HomeGallery/corporate2.jpg"; // Reusing for demonstration

const galleryImages = {
  wedding: [wedding1, wedding2, wedding3],
  corporate: [corporate1, corporate2, corporate3],
  parties: [party1, party2, party3],
  seminars: [seminar1, seminar2, seminar3],
};

const Gallery = () => {
  const [currentImages, setCurrentImages] = useState({
    wedding: galleryImages.wedding[0],
    corporate: galleryImages.corporate[0],
    parties: galleryImages.parties[0],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) => ({
        wedding: getNextImage(prevImages.wedding, galleryImages.wedding),
        corporate: getNextImage(prevImages.corporate, galleryImages.corporate),
        parties: getNextImage(prevImages.parties, galleryImages.parties),
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getNextImage = (currentImage, imageArray) => {
    const currentIndex = imageArray.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % imageArray.length;
    return imageArray[nextIndex];
  };

  return (
    <section id="gallery" className="gallery-section">
      <Container>
        <h2 className="gallery-title">Recent Events</h2>
        <p className="gallery-line">CRAFTING MEMORABLE MEMORIES</p>
        <div className="gallery-row">
          <Card className="gallery-card">
            <Card.Img
              variant="top"
              src={currentImages.wedding}
              alt="Wedding"
              className="animated-image"
            />
          </Card>
          <Card className="gallery-card">
            <Card.Img
              variant="top"
              src={currentImages.corporate}
              alt="Corporate"
              className="animated-image"
            />
          </Card>
          <Card className="gallery-card">
            <Card.Img
              variant="top"
              src={currentImages.parties}
              alt="Parties"
              className="animated-image"
            />
          </Card>
        </div>
        <a href="/gallery" className="view-latest-link">
          ➔ View The Latest
        </a>
      </Container>
    </section>
  );
};

export default Gallery;
