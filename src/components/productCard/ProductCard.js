import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { getLabel } from '../../utils/utils';
import { GRAY } from '../../constants/ColorsTypes';
import ReactStars from 'react-rating-stars-component';

export const ProductCard = ({ product, openModal }) => {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img
        variant='top'
        src={`data:image/jpeg;base64,${product?.image}`}
      />
      <Card.Body>
        <Card.Title>{getLabel(product?.product)}</Card.Title>
        <Row className='pb-3'>
          <Col sm={12}>
            <Card.Text className='fw-bold' style={{ color: GRAY }}>
              Ποιότητα: {getLabel(product?.quality)}
            </Card.Text>
          </Col>
          <Col sm={12}>
            <Card.Text className='fw-bold' style={{ color: GRAY }}>
              Προέλευση: {getLabel(product?.origin)}
            </Card.Text>
          </Col>
          <Col sm={12}>
            <Card.Text className='fw-bold' style={{ color: GRAY }}>
              Τιμή: {getLabel(product?.price)}€
            </Card.Text>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Button variant='danger' onClick={openModal}>
              Διαγραφή
            </Button>
          </Col>
          <Col sm={6}>
            <span>
              <ReactStars count={5} size={24} activeColor='#ffd700' />
            </span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
