import React, { useState } from 'react';
import { CardContainer } from '../../styles/Styles';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '../../logo/Logo';
import { Col, Row } from 'react-bootstrap';
import { CustomInputGroup } from '../../components/customInputGroup/CustomInputGroup';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { Select } from '../../components/select/Select';
import { useNavigate } from 'react-router-dom';
import { registerService } from '../../services/userService';

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: '',
    password: '',
  });

  const navigate = useNavigate();
  const options = [
    { value: 'user', label: 'Χρήστης' },
    { value: 'producer', label: 'Παραγωγός' },
  ];

  const handleFieldChange = event => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const register = () => {
    registerService(formData)
      .then(response => {})
      .catch(error => {});
  };

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
              name='email'
              icon={faEnvelope}
              placeholder='E-mail'
              onChange={handleFieldChange}
            />
          </Col>
          <Col sm={12}>
            <CustomInputGroup
              name='username'
              icon={faUser}
              placeholder='Όνομα χρήστη'
              onChange={handleFieldChange}
            />
          </Col>
          <Col sm={12}>
            <Select
              name='role'
              onChange={handleFieldChange}
              placeholder='Ρόλος χρήστη'
              options={options}
            />
          </Col>
          <Col sm={12}>
            <CustomInputGroup
              name='password'
              icon={faLock}
              type='password'
              placeholder='Κωδικός πρόσβασης'
              onChange={handleFieldChange}
            />
          </Col>
          <Col sm={12}>
            <CustomButton label='Εγγραφή' onClick={register} />
          </Col>
          <Col
            className='w-100 d-flex align-items-center justify-content-center'
            sm={12}
          >
            <span onClick={() => navigate('/login')} className='span-account'>
              Έχετε ήδη λογαριασμό;
            </span>
          </Col>
        </Row>
      </CardContainer>
    </div>
  );
};
