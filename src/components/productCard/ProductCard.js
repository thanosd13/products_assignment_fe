import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { getLabel } from '../../utils/utils';
import { GRAY } from '../../constants/ColorsTypes';
import ReactStars from 'react-rating-stars-component';
import { CommentModal } from '../../modals/commentModal/CommentModal';
import { useLoader } from '../../contexts/LoaderContext';
import { addCommentService } from '../../services/productService';
import { useToast } from '../../contexts/ToastContext';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  addFavoriteProductService,
  deleteFavoriteProductService,
} from '../../services/userService';

export const ProductCard = ({ product, openModal, renderPageFunc }) => {
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [formData, setFormData] = useState({
    comments: '',
    stars: null,
  });
  const { authState } = useAuth();
  const { showLoader, hideLoader } = useLoader();
  const { showSuccess, showError } = useToast();
  const navigate = useNavigate();

  // comment modal functions
  const handleCloseCommentModal = () => setShowCommentModal(false);
  const handleOpenCommentModal = () => setShowCommentModal(true);
  const handleFieldChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const isFavorite = product?.favorites?.includes(authState?.userId);

  const onChangeStars = value => {
    setFormData(prevFormData => ({
      ...prevFormData,
      stars: value,
    }));
  };

  const addComment = id => {
    if (formData.comments === '' || formData.stars === null) {
      showError('Συμπληρώστε όλα τα πεδία για να υποβάλλετε κάποιο σχόλιο!');
      return;
    }
    handleCloseCommentModal();
    showLoader();
    addCommentService(id, formData)
      .then(response => {
        showSuccess();
        hideLoader();
        renderPageFunc();
      })
      .catch(error => {
        showError(error.response.data.message);
        hideLoader();
      });
  };

  const toggleFavoriteProduct = id => {
    if (authState?.role !== 'user') {
      showError('Δεν έχετε άδεια για αυτήν την ενέργεια!');
      return;
    }
    if (isFavorite) {
      showLoader();
      deleteFavoriteProductService(id)
        .then(response => {
          hideLoader();
          renderPageFunc();
        })
        .catch(error => {
          showError(error.response.data.message);
          hideLoader();
        });
    } else {
      showLoader();
      addFavoriteProductService(id)
        .then(response => {
          hideLoader();
          renderPageFunc();
        })
        .catch(error => {
          showError(error.response.data.message);
          hideLoader();
        });
    }
  };

  return (
    <Card style={{ width: '26rem' }}>
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
          {(authState?.role === 'producer' || authState?.role === 'admin') && (
            <Col sm={4}>
              <Button variant='danger' onClick={openModal}>
                Διαγραφή
              </Button>
            </Col>
          )}
          <Col
            sm={
              authState?.role === 'producer' || authState?.role === 'admin'
                ? 8
                : 12
            }
            className='d-flex align-items-center justify-content-center gap-2'
          >
            {authState?.role === 'user' && (
              <span
                className='username'
                onClick={() => navigate('/account/' + product?.username)}
              >
                {product?.username}
              </span>
            )}
            <span className='comments' onClick={handleOpenCommentModal}>
              Σχόλια(
              {product?.comments?.length > 0 ? product?.comments?.length : 0})
            </span>
            {product?.comments?.length > 0 && (
              <span>
                <ReactStars
                  count={5}
                  size={24}
                  edit={false}
                  value={product?.averageStars}
                  activeColor='#ffd700'
                />
              </span>
            )}
            <span
              onClick={() => toggleFavoriteProduct(product?._id)}
              className={isFavorite ? 'active-heart' : 'heart'}
            >
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span>
              ({product?.favorites?.length > 0 ? product?.favorites?.length : 0}
              )
            </span>
          </Col>
        </Row>
      </Card.Body>
      <CommentModal
        show={showCommentModal}
        handleClose={handleCloseCommentModal}
        id={product?._id}
        role={authState?.role}
        comments={product?.comments?.length > 0 ? product?.comments : null}
        onChange={handleFieldChange}
        onChangeStars={onChangeStars}
        onCallback={addComment}
      />
    </Card>
  );
};
