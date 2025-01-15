import React from 'react';
import { Form } from 'react-bootstrap';

export const Input = ({
  label,
  type,
  placeholder,
  name,
  value,
  disabled,
  onChange,
}) => {
  return (
    <Form.Group className='mb-3'>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </Form.Group>
  );
};
