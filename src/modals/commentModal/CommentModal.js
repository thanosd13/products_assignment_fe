import React from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import Form from 'react-bootstrap/Form';
import ReactStars from 'react-rating-stars-component';
import { GRAY } from '../../constants/ColorsTypes';
import { useAuth } from '../../contexts/AuthContext';

export const CommentModal = ({
  show,
  id,
  role,
  comments,
  formData,
  onChange,
  onChangeStars,
  handleClose,
  onCallback,
}) => {
  const { authToken } = useAuth();
  return (
    <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Σχόλια</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {role === 'user' && (
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Σχόλιο</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={2}
                  name='comments'
                  value={formData?.comments}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <span>
                <ReactStars
                  count={5}
                  size={24}
                  value={formData?.stars}
                  activeColor='#ffd700'
                  onChange={onChangeStars}
                />
              </span>
            </Col>
          </Row>
        )}
        {comments === null && <span>Δεν υπάρχουν καταχωρημένα σχόλια!</span>}
        {comments?.map((comment, index) => (
          <Row className='pt-3' key={index}>
            <Col sm={12} className='fw-bold'>
              {comment.username}
            </Col>
            <Col
              sm={12}
              className='fw-bold font-family-comm'
              style={{ color: GRAY }}
            >
              {comment.comment}
            </Col>
          </Row>
        ))}
      </Modal.Body>
      <Modal.Footer>
        {authToken && role !== 'producer' && (
          <CustomButton
            label='Προσθήκη'
            variant='success'
            onClick={() => onCallback(id)}
          />
        )}
        <CustomButton label='Κλείσιμο' variant='danger' onClick={handleClose} />
      </Modal.Footer>
    </Modal>
  );
};
