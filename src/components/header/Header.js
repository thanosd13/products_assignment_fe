import React from 'react';
import { Navbar } from 'react-bootstrap';
import { BLUE_DARK, CIEL } from '../../constants/ColorsTypes';
import { Logo } from '../../logo/Logo';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { DropDownMenu } from '../dropDownMenu/DropDownMenu';

export const Header = () => {
  return (
    <Navbar
      className='d-flex justify-content-between px-md-4'
      expand='lg'
      style={{ backgroundColor: CIEL, height: '13vh' }}
    >
      <div className='d-flex align-items-center justify-content-between w-100 px-md-4'>
        <Navbar.Brand className='brand'>
          <Logo />
        </Navbar.Brand>
        <div className='d-none d-lg-block'>
          <h2 className='text-white'>#Products</h2>
        </div>
        <div className='d-flex flex-row align-items-center justify-content-center'>
          <h6 className='text-white mt-3'>username</h6>
          <DropDownMenu size='2x' icon={faUser} textColor={BLUE_DARK} />
        </div>
      </div>
    </Navbar>
  );
};
