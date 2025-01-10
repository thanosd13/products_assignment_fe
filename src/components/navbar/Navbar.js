import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logoads.jpg';
import classes from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img alt='' src={logo} />
      </div>
      <ul className={classes.navlinks}>
        <li>
          <NavLink to='/home'>Αρχική</NavLink>
        </li>
        <li>
          <NavLink to='/logReg'>Εγγραφή/Σύνδεση</NavLink>
        </li>
        <li>
          <NavLink to='/ads'>AdsFP</NavLink>
        </li>
      </ul>
      {/* <div className={classes.icons}>
        <NavLink to='myprofile' title='Ο Λογαριασμός μου'>
          <i className='fa-solid fa-user' style={{ color: 'black' }}></i>
        </NavLink>
        <NavLink to='/' title='Αρχική'>
          <i
            className='fa-solid fa-house'
            style={{ border: 'none', color: 'black' }}
          ></i>
        </NavLink>
      </div> */}
    </nav>
  );
};
