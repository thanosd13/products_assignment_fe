import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ProductCard } from '../../components/productCard/ProductCard';
import { CustomButton } from '../../components/CustomButton/CustomButton';

export const ProducerPage = () => {
  return (
    <div className='pt-3 mt-5'>
      <Row className='p-3'>
        <Col sm={3}>
          <h3 style={{ textAlign: 'left' }}>Τα προϊόντα μου (3)</h3>
        </Col>
        <Col sm={3}></Col>
        <Col sm={3}></Col>
        <Col sm={3} className='d-flex justify-content-end'>
          <CustomButton label='Προσθήκη' variant='success' />
        </Col>
      </Row>
      <Row className='p-3'>
        <Col sm={3}>
          <ProductCard />
        </Col>
        <Col sm={3}>
          <ProductCard />
        </Col>
        <Col sm={3}>
          <ProductCard />
        </Col>
        <Col sm={3}>
          <ProductCard />
        </Col>
        <Col className='pt-4' sm={3}>
          <ProductCard />
        </Col>
      </Row>
    </div>
  );
};
