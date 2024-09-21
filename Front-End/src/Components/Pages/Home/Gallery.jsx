import React, { useEffect, useState } from 'react';
import './Gallery.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const galleryImages = {
  wedding: ['/wedding1.jpg', '/wedding2.jpg', '/wedding3.png'],
  corporate: ['/corporate1.jpg', '/corporate2.jpg', '/corporate3.png'],
  parties: ['/party1.jpg', '/party2.jpg', '/party3.jpg'],
  seminars: ['/seminar1.jpg', '/seminar2.jpg', '/corporate2.jpg']
};

const Gallery = () => {
  const [currentImages, setCurrentImages] = useState({
    wedding: galleryImages.wedding[0],
    corporate: galleryImages.corporate[0],
    parties: galleryImages.parties[0],
    seminars: galleryImages.seminars[0]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(prevImages => ({
        wedding: getNextImage(prevImages.wedding, galleryImages.wedding),
        corporate: getNextImage(prevImages.corporate, galleryImages.corporate),
        parties: getNextImage(prevImages.parties, galleryImages.parties),
        seminars: getNextImage(prevImages.seminars, galleryImages.seminars)
      }));
    }, 4000); // Change image every 4 seconds

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
        <h2 className="section-title">Event Gallery</h2>
        <Row>
          <Col md={6}>
            <Card className="gallery-card">
              <Card.Img variant="top" src={currentImages.wedding} alt="Wedding" className="animated-image"/>
              <Card.Body>
                <Card.Title>Wedding</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="gallery-card">
              <Card.Img variant="top" src={currentImages.corporate} alt="Corporate" className="animated-image"/>
              <Card.Body>
                <Card.Title>Corporate</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="gallery-card">
              <Card.Img variant="top" src={currentImages.parties} alt="Parties" className="animated-image"/>
              <Card.Body>
                <Card.Title>Parties</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="gallery-card">
              <Card.Img variant="top" src={currentImages.seminars} alt="College Fest" className="animated-image"/>
              <Card.Body>
                <Card.Title>Seminars</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
