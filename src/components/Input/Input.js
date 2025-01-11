import React from 'react';
import { Form } from 'react-bootstrap';

export const Input = ({ label, type, placeholder, name, onChange }) => {
  return (
    <Form.Group className='mb-3'>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Form.Group>
  );
};
