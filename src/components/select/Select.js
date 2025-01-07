import React from 'react';
import { Form } from 'react-bootstrap';

export const Select = ({ label, placeholder = 'Επιλέξτε', options }) => {
  return (
    <Form.Group className='mb-3'>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Select>
        <option value=''>{placeholder}</option>
        {options.map(item => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};
