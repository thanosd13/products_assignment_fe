import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logoads.jpg';
import classes from './Navbar.module.css';
import { useAuth } from '../../contexts/AuthContext';

export const Navbar = () => {
  const { authState } = useAuth();

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
        ) : (
          ''
        )}
        <li>
          <NavLink to='/ads'>AdsFP</NavLink>
        </li>
      </ul>
    </nav>
  );
};
