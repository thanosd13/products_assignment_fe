import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CustomInputGroup = ({
  icon,
  placeholder,
  name,
  onChange,
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
        onChange={onChange}
      />
    </InputGroup>
  );
};
