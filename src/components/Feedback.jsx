import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './Feedback.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Submitted:', formData);
    setSubmitted(true);
    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container className="feedback-form my-1">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h3 className="mb-1">Feedback Form</h3>
          {submitted && (
            <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
              Thank you for your feedback!
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-1">
              <Form.Label>Feedback</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your feedback"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit Feedback
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FeedbackForm;
