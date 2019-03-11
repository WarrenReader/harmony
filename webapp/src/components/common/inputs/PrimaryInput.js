import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 2px solid #e0e6e8;
  box-sizing: border-box;
  font-size: 16px;
  padding: 10px;
  width: 100%;

  &::placeholder {
    color: #c0c0c0;
  }
`;

const Input = ({ id, onChange, placeholder = '', type, value }) => {
  return (
    <StyledInput
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  id: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
  type: propTypes.string.isRequired,
  value: propTypes.string.isRequired
};

export default Input;
