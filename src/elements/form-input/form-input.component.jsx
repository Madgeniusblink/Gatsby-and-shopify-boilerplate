import React from 'react';
import { Container, Input, Label } from './form-input.styles';


const FormInput = ({ handleChange, label, name, value}) => (
  <Container >
    <Input 
      onChange={handleChange} />
    {label ? (
      <Label
        htmlFor={name}
        className={`
          ${value.length ? 'shrink' : ''}
          form-input-label
        `}
      >
        {label}
      </Label>
    )
      : null}
  </Container>
);

export default FormInput;
