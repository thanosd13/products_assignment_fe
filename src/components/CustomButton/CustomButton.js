import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';

export const CustomButton = ({ variant, icon, iconSize, label, onClick }) => {
  return (
    <Button
      className='d-flex flex-row align-items-center justify-content-center gap-2'
      variant={variant}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} size={iconSize} />}
      {label}
    </Button>
  );
};
