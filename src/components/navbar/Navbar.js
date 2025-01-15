import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logoads.jpg';
import classes from './Navbar.module.css';
import { useAuth } from '../../contexts/AuthContext';
import {
  faUser,
  faRightFromBracket,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { DropDownMenu } from '../dropDownMenu/DropDownMenu';
import { BLUE_DARK } from '../../constants/ColorsTypes';

export const Navbar = () => {
  const { logout, authState, authToken } = useAuth();
  const navigate = useNavigate();
  const getActions = () => [
    authState?.role === 'user' && {
      id: 1,
      name: 'Τα αγαπημένα μου',
      icon: faHeart,
      onClick: () => {
        navigate('/favoriteProducts');
      },
    },
    {
      id: 2,
      name: 'Αποσύνδεση',
      icon: faRightFromBracket,
      onClick: () => {
        logout();
        navigate('/logReg');
      },
    },
  ];

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img alt='' src={logo} />
      </div>
      <ul className={classes.navlinks}>
        <li>
          <NavLink to='/home'>Αρχική</NavLink>
        </li>
        {!authState ? (
          <li>
            <NavLink to='/logReg'>Εγγραφή/Σύνδεση</NavLink>
          </li>
        ) : authState?.role === 'user' ? (
          <li>
            <NavLink to='/user'>Προϊόντα</NavLink>
          </li>
        ) : authState?.role === 'producer' ? (
          <li>
            <NavLink to='/producer'>Τα προϊόντα μου</NavLink>
          </li>
        ) : authState?.role === 'admin' ? (
          <li>
            <NavLink to='/admin'>Χρήστες</NavLink>
          </li>
        ) : (
          ''
        )}
        <li>
          <NavLink to='/ads'>AdsFP</NavLink>
        </li>
      </ul>
      {authToken &&
        authToken !== null &&
        authToken !== 'null' &&
        authToken !== '' && (
          <div className='d-flex flex-row align-items-center justify-content-center'>
            <h6 className='text-white mt-3'>{authState?.username}</h6>
            <DropDownMenu
              size='2x'
              icon={faUser}
              textColor={BLUE_DARK}
              actions={getActions()}
            />
          </div>
        )}
    </nav>
  );
};
