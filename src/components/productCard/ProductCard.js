import React from 'react';
import { Button, Card } from 'react-bootstrap';
import test_image from '../../assets/images/test_images/test_image.jpg';
export const ProductCard = () => {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant='top' src={test_image} />
      <Card.Body>
        <Card.Title>Product Title</Card.Title>
        <Card.Text>Product Description!!!!</Card.Text>
        <Button variant='primary'>Do something!</Button>
      </Card.Body>
    </Card>
  );
};
