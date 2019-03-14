import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 2px solid #e0e6e8;
  background: ${props => (props.disabled ? '#D3D3D3' : 'transparent')};
  box-sizing: border-box;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'auto')};
  font-size: 16px;
  padding: 10px;
  width: 100%;

  &::placeholder {
    color: #c0c0c0;
  }
`;

const Input = ({
  id,
  onChange,
  placeholder = '',
  type,
  value,
  disabled = false
}) => {
  return (
    <StyledInput
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

Input.propTypes = {
  id: propTypes.string,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
  type: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  disabled: propTypes.bool
};

export default Input;
