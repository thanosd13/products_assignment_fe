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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page
  const { showLoader, hideLoader } = useLoader();
  const { showSuccess, showError } = useToast();

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

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    const url = new URL(window.location);
    url.searchParams.set('page', pageNumber);
    window.history.pushState({}, '', url);
    window.location.reload();
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <CustomButton
          style={{ borderRadius: '1.1rem' }}
          key={i}
          label={i.toString()}
          onClick={() => handlePageChange(i)}
          variant={i === currentPage ? 'primary' : 'secondary'}
          className='mx-1'
        />
      );
    }
    return buttons;
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
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page'), 10);
    if (page) {
      setCurrentPage(page);
    }

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
            Τα προϊόντα μου ({products?.length > 0 ? products?.length : 0})
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
      {currentProducts?.length > 0 && (
        <Row className='p-3'>
          {currentProducts.map(product => (
            <Col sm={4} className='pt-4' key={product._id}>
              <ProductCard
                product={product}
                openModal={() => handleOpenConfirmationModal(product?._id)}
              />
            </Col>
          ))}
        </Row>
      )}
      <Row className='mt-4 pb-3'>
        <Col className='d-flex justify-content-center gap-1'>
          {renderPaginationButtons()}
        </Col>
      </Row>
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
