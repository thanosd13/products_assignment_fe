import React from 'react';
import { CardContainer } from '../../styles/Styles';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '../../logo/Logo';
import { Col, Row } from 'react-bootstrap';
import { CustomInputGroup } from '../../components/customInputGroup/CustomInputGroup';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className='w-100 d-flex align-items-center justify-content-center h-100vh background-layout'>
      <CardContainer>
        <Logo
          width='100px'
          height='100px'
          style='d-flex align-items-center justify-content-center w-50'
        />
        <Row className='w-100'>
          <Col sm={12}>
            <CustomInputGroup
              name='username'
              icon={faUser}
              placeholder='Όνομα χρήστη'
            />
          </Col>
          <Col sm={12}>
            <CustomInputGroup
              name='password'
              icon={faLock}
              placeholder='Κωδικός πρόσβασης'
            />
          </Col>
          <Col sm={12}>
            <CustomButton label='Σύνδεση' />
          </Col>
          <Col
            className='w-100 d-flex align-items-center justify-content-center'
            sm={12}
          >
            <span
              onClick={() => navigate('/register')}
              className='span-account'
            >
              Δεν έχετε λογαριασμό;
            </span>
          </Col>
        </Row>
      </CardContainer>
    </div>
  );
};
