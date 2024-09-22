import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Admin-Panel.css";

const AdminPanel = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <Row>
        <Col md={4}>
          <Link to="/admin/contact" style={{ textDecoration: 'none' }}>
            <Card className="admin-card">
              <Card.Body>
                <Card.Title>Contact</Card.Title>
                <Card.Text>Manage all event inquiries and contact details.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col md={4}>
          <Link to="/admin/reviews" style={{ textDecoration: 'none' }}>
            <Card className="admin-card">
              <Card.Body>
                <Card.Title>Reviews</Card.Title>
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
