import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ProductCard } from '../../components/productCard/ProductCard';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { AddProductModal } from '../../modals/addProductModal/AddProductModal';
import {
  addProductService,
  getProductsService,
} from '../../services/productService';

export const ProducerPage = () => {
  const initialState = {
    category: '',
    product: '',
    quality: '',
    origin: '',
    packing: '',
    location: '',
    image: '',
  };
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [products, setProducts] = useState([]);

  // add product modal functions
  const handleOpenProductModal = () => {
    setFormData(initialState);
    setShowAddProductModal(true);
  };
  const handleCloseProductModal = () => setShowAddProductModal(false);

  const handleFieldChange = event => {
    const { name, value, files } = event.target;
    if (files) {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: files[0], // Store the file object
      }));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const addProduct = () => {
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    addProductService(data)
      .then(response => {
        handleCloseProductModal();
      })
      .catch(error => {
        console.log(error);
        handleCloseProductModal();
      });
  };

  useEffect(() => {
    getProductsService()
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='pt-3 mt-5'>
      <Row className='p-3'>
        <Col sm={3}>
          <h3 style={{ textAlign: 'left' }}>Τα προϊόντα μου (3)</h3>
        </Col>
        <Col sm={3}></Col>
        <Col sm={3}></Col>
        <Col sm={3} className='d-flex justify-content-end'>
          <CustomButton
            label='Προσθήκη'
            variant='success'
            onClick={handleOpenProductModal}
          />
        </Col>
      </Row>
      {products.length > 0 && (
        <Row className='p-3'>
          {products.map(product => (
            <Col sm={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
      <AddProductModal
        show={showAddProductModal}
        handleClose={handleCloseProductModal}
        formData={formData}
        onChange={handleFieldChange}
        addProduct={addProduct}
      />
    </div>
  );
};
