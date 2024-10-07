import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ServicesPage.css';

// Import images
import weddingImage from '../../../Assets/ServicesPage/wedding3.png';
import corporateImage from '../../../Assets/ServicesPage/corporate2.jpg';
import seminarImage from '../../../Assets/ServicesPage/seminar2.jpg';
import socialEventsImage from '../../../Assets/ServicesPage/SocialEvents.jpg';
import collegeFestImage from '../../../Assets/ServicesPage/CollegeFest.png';
import lightingImage from '../../../Assets/ServicesPage/eventbg1.jpg';
import liveShowsImage from '../../../Assets/ServicesPage/LiveShows.jpg';
import photographyImage from '../../../Assets/ServicesPage/Photography.jpg';

// Service data
const services = [
  {
    title: 'Wedding Planning',
    description: `Our wedding planning services cover every aspect of your special day, from venue selection and decoration to entertainment and catering. We focus on making your wedding day as stress-free as possible, offering customized planning based on your vision.`,
    image: weddingImage,
    keywords: 'wedding, planning, event management'
  },
  {
    title: 'Corporate Events',
    description: `We specialize in creating professional and memorable corporate events that reflect your company's values and goals. From venue selection and AV setup to event logistics and branding, we ensure a seamless experience.`,
    image: corporateImage,
    keywords: 'corporate events, professional events, event planning'
  },
  {
    title: 'Seminars & Conferences',
    description: `We handle everything from speaker coordination and event registration to venue management and technical support. Whether it's a local seminar or an international conference, we provide an organized and efficient experience for all attendees.`,
    image: seminarImage
  },
  {
    title: 'Social Events',
    description: `Be it birthdays, anniversaries, or reunions, our team helps you create the perfect social gathering that leaves lasting memories. We offer end-to-end event management services, ensuring that your guests have an unforgettable experience.`,
    image: socialEventsImage
  },
  {
    title: 'College Fests',
    description: `We specialize in organizing high-energy and engaging college fests, offering complete event solutions from stage setup to entertainment coordination. Whether it's live shows or sports competitions, we manage your fest professionally.`,
    image: collegeFestImage
  },
  {
    title: 'Sound, Lighting & Decoration',
    description: `Our sound, lighting, and decoration services use the latest technology to create the perfect atmosphere for any event. Our team works closely with you to ensure that the decor reflects your vision.`,
    image: lightingImage
  },
  {
    title: 'Live Shows & Artist Management',
    description: `We organize live performances, concerts, and stage shows with expertise in artist management and event logistics, ensuring your show runs smoothly for both the performers and the audience.`,
    image: liveShowsImage
  },
  {
    title: 'Photography & Videography',
    description: `Capture every precious moment of your event with our professional photography and videography services, ensuring that you have beautiful memories to cherish forever.`,
    image: photographyImage
  } 
];

const ServicesPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1 
    });

    const rows = document.querySelectorAll('.unique-service-row');
    rows.forEach(row => observer.observe(row));

    return () => {
      rows.forEach(row => observer.unobserve(row));
    };
  }, []);

  return (
    <section id="services-page" className="services-page">
      {/* Add SEO Meta Tags */}
      <Helmet>
        <title>Professional Event Services | Weddings, Corporate & More</title>
        <meta name="description" content="We offer comprehensive event management services including weddings, corporate events, seminars, social events, live shows, photography, and more. Let us make your event unforgettable." />
        <meta name="keywords" content="wedding planning, corporate events, seminars, social events, live shows, photography, videography, college fests, sound, lighting, decoration" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Your Company Name",
            "url": "https://reliableeventsudaipur.com/services",
            "logo": "https://reliableeventsudaipur.com/Logo.png",
            "sameAs": [
              "https://www.facebook.com/share/KTMr6F5EmFgrdHYh/?mibextid=LQQJ4d",
              "https://www.instagram.com/reliable_events_udaipur" 
              // Add more social links
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-6378394687",
              "contactType": "Customer Service"
            }
          })}
        </script>
      </Helmet>

      <Container className='mt-5'>
        <h2 className="section-title text-center">Our Services</h2>
        {services.map((service, index) => (
          <Row 
            key={index} 
            className={`unique-service-row ${index === 0 ? 'show' : ''} ${index % 2 === 0 ? 'flex-row-reverse' : ''} mb-5`}
          >
            <Col md={6} className="image-col">
              <Card.Img src={service.image} alt={service.title} className="service-image rounded-corner" />
            </Col>
            <Col md={6} className="text-col">
              <Card className="service-card">
                <Card.Body>
                  <Card.Title className="service-title">{service.title}</Card.Title>
                  <Card.Text className="service-description">{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default ServicesPage;
