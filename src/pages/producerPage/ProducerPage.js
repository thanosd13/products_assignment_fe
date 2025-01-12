import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ProductCard } from '../../components/productCard/ProductCard';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { AddProductModal } from '../../modals/addProductModal/AddProductModal';
import {
  addProductService,
  deleteProductService,
  getProductsService,
} from '../../services/productService';
import { useLoader } from '../../contexts/LoaderContext';
import { useToast } from '../../contexts/ToastContext';
import { ConfirmationModal } from '../../modals/confirmationModal/ConfirmationModal';

export const ProducerPage = () => {
  const initialState = {
    category: '',
    product: '',
    quality: '',
    origin: '',
    packing: '',
    location: '',
    price: '',
    image: '',
  };
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [products, setProducts] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const { showLoader, hideLoader } = useLoader();
  const { showSuccess, showError } = useToast();
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
    showLoader();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    addProductService(data)
      .then(response => {
        showSuccess();
        setRefreshFlag(prevFlag => !prevFlag);
        handleCloseProductModal();
        hideLoader();
      })
      .catch(error => {
        showError();
        console.log(error);
        handleCloseProductModal();
        hideLoader();
      });
  };

  // delete product functions
  const handleOpenConfirmationModal = id => {
    setDeleteId(id);
    setShowConfirmationModal(true);
  };
  const handleCloseConfirmationModal = () => setShowConfirmationModal(false);

  const deleteProduct = id => {
    showLoader();
    deleteProductService(id)
      .then(response => {
        showSuccess();
        hideLoader();
        setRefreshFlag(prevFlag => !prevFlag);
      })
      .catch(error => {
        showError();
        hideLoader();
        setRefreshFlag(prevFlag => !prevFlag);
      });
  };

  useEffect(() => {
    showLoader();
    getProductsService()
      .then(response => {
        setProducts(response.data);
        hideLoader();
        handleCloseConfirmationModal();
      })
      .catch(error => {
        showError();
        console.log(error);
        hideLoader();
        handleCloseConfirmationModal();
      });
  }, [refreshFlag]);

  return (
    <div className='pt-3 mt-5'>
      <Row className='p-3'>
        <Col sm={3}>
          <h3 style={{ textAlign: 'left' }}>
            Τα προϊόντα μου ({products.length > 0 ? products.length : 0})
          </h3>
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
            <Col sm={3} className='pt-4'>
              <ProductCard
                product={product}
                openModal={() => handleOpenConfirmationModal(product._id)}
              />
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
      <ConfirmationModal
        id={deleteId}
        show={showConfirmationModal}
        handleClose={handleCloseConfirmationModal}
        title='Διαγραφή προϊόντος'
        body='Είστε σίγουροι ότι θέλετε να προχωρήσετε σε διαγραφή του προϊόντος;'
        onCallback={deleteProduct}
      />
    </div>
  );
};
