import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Admin-Panel.css";

const AdminPanel = () => {
  const [contactCount, setContactCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  // Fetch all contacts and reviews from the backend
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        // Fetch all contacts from backend
        const contactResponse = await axios.get('https://your-backend-api.com/api/contact');
        setContactCount(contactResponse.data.length); // Count total contacts

        // Fetch all reviews from backend
        const reviewResponse = await axios.get('https://your-backend-api.com/api/review');
        setReviewCount(reviewResponse.data.length); // Count total reviews
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCounts();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <Row>
        <Col md={4}>
          <Link to="/admin/contact" style={{ textDecoration: 'none' }}>
            <Card className="admin-card">
              <Card.Body>
                <Card.Title>Contact: {contactCount}</Card.Title>
                <Card.Text>Manage all event inquiries and contact details.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col md={4}>
          <Link to="/admin/reviews" style={{ textDecoration: 'none' }}>
            <Card className="admin-card">
              <Card.Body>
                <Card.Title>Reviews: {reviewCount}</Card.Title>
                <Card.Text>View and manage client reviews.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col md={4}>
          <Link to="/admin/settings" style={{ textDecoration: 'none' }}>
            <Card className="admin-card">
              <Card.Body>
                <Card.Title>Settings</Card.Title>
                <Card.Text>Customize website and account settings.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
