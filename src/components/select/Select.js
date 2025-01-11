import React from 'react';
import { Form } from 'react-bootstrap';

export const Select = ({
  label,
  placeholder = 'Επιλέξτε',
  options,
  value,
  name,
  onChange,
}) => {
  return (
    <Form.Group className='mb-3'>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Select value={value} name={name} onChange={onChange}>
        <option value=''>{placeholder}</option>
        {options.map(item => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};
