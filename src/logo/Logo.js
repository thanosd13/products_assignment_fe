import React from 'react';
import logo from '../assets/images/logoads.jpg';

export const Logo = ({ style, height = '160px', width = '160px' }) => {
  return (
    <div className={style} style={{ height: height, width: width }}>
      <img
        src={logo}
        alt='logo'
        style={{ height: '100%', width: '100%', objectFit: 'contain' }}
      />
    </div>
  );
};
