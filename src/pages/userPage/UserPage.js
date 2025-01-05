import { Col, InputGroup, Row } from 'react-bootstrap';
import { ProductCard } from '../../components/productCard/ProductCard';
import { CardContainer } from '../../styles/Styles';

export const UserPage = () => {
  return (
    <div className='p-4'>
      <CardContainer>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}></Col>
        </Row>
      </CardContainer>
      <h2>Products</h2>
      <Row className='p-4'>
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
