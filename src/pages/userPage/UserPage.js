import { Col, Row } from 'react-bootstrap';
import { ProductCard } from '../../components/productCard/ProductCard';
import { CardContainer } from '../../styles/Styles';
import { Input } from '../../components/Input/Input';
import { Select } from '../../components/select/Select';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { faMagnifyingGlass, faBroom } from '@fortawesome/free-solid-svg-icons';

export const UserPage = () => {
  return (
    <div className='p-4'>
      <CardContainer width='100%' height='20vh'>
        <Row className='w-100'>
          <Col sm={4}>
            <Input label='Προϊόν' placeholder='Επιλέξτε' />
          </Col>
          <Col sm={4}>
            <Select label='Επιλέξτε κατηγορία' />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomButton icon={faMagnifyingGlass} label='Αναζήτηση' />
          </Col>
          <Col>
            <CustomButton variant='danger' icon={faBroom} label='Καθαρισμός' />
          </Col>
        </Row>
      </CardContainer>
      <Row className='p-3'>
        <h2>Products</h2>
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
