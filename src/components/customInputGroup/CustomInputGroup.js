import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CustomInputGroup = ({
  icon,
  placeholder,
  name,
  handleInputChange,
  type = 'text',
}) => {
  return (
    <InputGroup className='mb-3'>
      <InputGroup.Text>
        <FontAwesomeIcon icon={icon} />
      </InputGroup.Text>
      <Form.Control
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </InputGroup>
  );
};
