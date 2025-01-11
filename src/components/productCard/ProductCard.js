import React from 'react';
import { Button, Card } from 'react-bootstrap';
export const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img
        variant='top'
        src={`data:image/jpeg;base64,${product?.image}`}
      />
      <Card.Body>
        <Card.Title>Product Title</Card.Title>
        <Card.Text>Product Description!!!!</Card.Text>
        <Button variant='primary'>Do something!</Button>
      </Card.Body>
    </Card>
  );
};
