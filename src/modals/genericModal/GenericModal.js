import React from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GenericModal = ({
  show,
  handleClose,
  title,
  icon,
  backgroundColorIcon,
  body,
}) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col
            className='d-flex align-items-center justify-content-center gap-3'
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <span
              style={{
                color: 'white',
                background: backgroundColorIcon,
                padding: 5,
                borderRadius: '0.25rem',
              }}
            >
              <FontAwesomeIcon icon={icon} />
            </span>
            <span>{body}</span>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <CustomButton label='Οκ' onClick={handleClose} />
      </Modal.Footer>
    </Modal>
  );
};
