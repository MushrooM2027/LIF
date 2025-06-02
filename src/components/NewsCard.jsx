import React from 'react';
import { Card, Button } from 'react-bootstrap';

const NewsCard = ({ title, text }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="link" className="read-more p-0">
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
