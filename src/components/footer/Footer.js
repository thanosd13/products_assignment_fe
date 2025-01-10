import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer>
      <div className={classes.footer1}>
        <p>Est.2024 - All Rights Reserved &copy;</p>
        <div className={classes.media}>
          <ul className={classes.footericons}>
            <li>
              <a href='https://www.instagram.com/' title='Instagram'>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href='https://x.com' title='X'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href='https://m.facebook.com' title='Facebook'>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                href='https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AcMMx-fUG6yfmpAhsW9TRRPqcDQW7V0mGBvXC9FUqhQgyzRpuuF5KDSxY2nonwhDgb23oiWJtS7tcw&ddm=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin'
                title='Gmail'
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.footer2}>
        <div className={classes.slogan}>
          <h1>ADS For Products</h1>
          <p>
            No.1 εφαρμογή για αγγελίες προιόντων. Ανέβασε τώρα και εσύ τις δικές
            σου αγγελίες εντελώς δωρεάν με λίγα μόλις click
          </p>
        </div>
        <ul className={classes.footerlinks}>
          <li>
            <NavLink to='/'>Αρχική</NavLink>
          </li>
          <li>
            <NavLink to='Search1'>Αναζήτηση</NavLink>
          </li>
          <li>
            <NavLink to='LogReg'>Εγγραφή/Σύνδεση</NavLink>
          </li>
          <li>
            <NavLink to='Upload'>Καταχώρηση</NavLink>
          </li>
          <li>
            <NavLink to='Adsfp1'>AdsFP</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};
