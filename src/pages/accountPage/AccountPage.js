import React, { useEffect, useState } from 'react';
import { CardContainer } from '../../styles/Styles';
import { Logo } from '../../logo/Logo';
import { Col, Row } from 'react-bootstrap';
import { Input } from '../../components/Input/Input';
import { GRAY } from '../../constants/ColorsTypes';
import { useParams } from 'react-router-dom';
import { getUserByUsernameService } from '../../services/userService';
import { useLoader } from '../../contexts/LoaderContext';

export const AccountPage = () => {
  const [user, setUser] = useState({});
  const { username } = useParams();
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    showLoader();
    getUserByUsernameService(username)
      .then(response => {
        setUser(response.data);
        hideLoader();
      })
      .catch(error => {
        console.log(error);
        hideLoader();
      });
  }, [username]);
  return (
    <div className='w-100 d-flex align-items-center justify-content-center h-100vh background-layout'>
      <CardContainer>
        <Logo
          width='100px'
          height='100px'
          style='d-flex align-items-center justify-content-center w-50'
        />
        <Row className='w-100'>
          <h4 className='text-center pb-4' style={{ color: GRAY }}>
            Στοιχεία Λογαριασμού
          </h4>
          <Col sm={12}>
            <Input label='Ιδιότητα' value='Παραγωγός' disabled={true} />
          </Col>
          <Col sm={12}>
            <Input
              label='Όνομα χρήστη'
              value={user?.username}
              disabled={true}
            />
          </Col>
          <Col sm={12}>
            <Input label='E-mail' value={user?.email} disabled={true} />
          </Col>
        </Row>
      </CardContainer>
    </div>
  );
};
