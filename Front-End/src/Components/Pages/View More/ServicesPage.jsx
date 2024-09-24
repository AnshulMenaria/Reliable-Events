import React, { useEffect } from 'react';
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

const services = [
  {
    title: 'Wedding Planning',
    description: `
      Our wedding planning services cover every aspect of your special day, from venue selection and decoration to entertainment and catering. 
      We focus on making your wedding day as stress-free as possible, offering customized planning based on your vision. 
      Whether it's an intimate ceremony or a grand affair, we ensure that every detail is taken care of so you can focus on enjoying the moment.`,
    image: weddingImage
  },
  {
    title: 'Corporate Events',
    description: `
      Whether you're organizing a product launch, an annual meeting, or a team-building retreat, our corporate event planning services have you covered. 
      We specialize in creating professional and memorable corporate events that reflect your company's values and goals. 
      From venue selection and AV setup to event logistics and branding, we ensure a seamless experience.`,
    image: corporateImage
  },
  {
    title: 'Seminars & Conferences',
    description: `
      Planning and executing large seminars or conferences can be overwhelming, but with our experience and expertise, we make it simple. 
      We handle everything from speaker coordination and event registration to venue management and technical support. 
      Whether it's a local seminar or an international conference, we provide an organized and efficient experience for all attendees.`,
    image: seminarImage
  },
  {
    title: 'Social Events',
    description: `
      Be it birthdays, anniversaries, or reunions, our team helps you create the perfect social gathering that leaves lasting memories. 
      We offer end-to-end event management services, including venue selection, catering, decor, and entertainment, ensuring that your guests have an unforgettable experience.`,
    image: socialEventsImage
  },
  {
    title: 'College Fests',
    description: `
      We specialize in organizing high-energy and engaging college fests, offering complete event solutions from stage setup to entertainment coordination. 
      Whether you're looking for live shows, sports competitions, or talent events, we ensure that your college fest is managed professionally and delivers fun and excitement for all.`,
    image: collegeFestImage
  },
  {
    title: 'Sound, Lighting & Decoration',
    description: `
      A successful event depends on the ambiance, and our sound, lighting, and decoration services bring your event to life. 
      We use the latest technology in sound systems and lighting to create the perfect atmosphere, whether it's a corporate event, wedding, or live performance. 
      Our decoration team also works closely with you to ensure that the decor reflects your vision.`,
    image: lightingImage
  },
  {
    title: 'Live Shows',
    description: `
      We organize live performances, concerts, and stage shows with expertise in event logistics, artist management, and technical setup. 
      From small intimate gatherings to large-scale concerts, we ensure that your live show runs smoothly, delivering a memorable experience for both the performers and the audience.`,
    image: liveShowsImage
  },
  {
    title: 'Photography & Videography',
    description: `
      Capture every precious moment of your event with our professional photography and videography services. 
      We offer a team of highly skilled photographers and videographers who specialize in everything from candid shots to cinematic videos, ensuring that you have beautiful memories to cherish forever.`,
    image: photographyImage
  }
];

const ServicesPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const rows = document.querySelectorAll('.service-row');
      rows.forEach((row, index) => {
        if (index === 0) return; // Skip the first row (already visible)

        const rowPosition = row.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (rowPosition < screenPosition) {
          row.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services-page" className="services-page">
      <Container className='mt-5'>
        <h2 className="section-title text-center">Our Services</h2>
        {services.map((service, index) => (
          <Row key={index} className={`service-row ${index === 0 ? 'show' : ''} ${index % 2 === 0 ? 'flex-row-reverse' : ''} mb-5`}>
            <Col md={6} className="image-col">
              <Card.Img src={service.image} alt={service.title} className="service-image rounded-corner" />
            </Col>
            <Col md={6} className="text-col">
              <Card className="service-card">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
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
