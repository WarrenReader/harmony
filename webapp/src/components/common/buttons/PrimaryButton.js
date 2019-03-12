import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.disabled ? '#D3D3D3' : '#406ce7')};
  border: none;
  border-radius: 4px;
  box-shadow: none;
  color: white;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 18px;
  padding: 8px 0px;
  width: 100%;

  &:hover {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
  }

  &:active {
    background: #3356b8;
  }
`;

const PrimaryButton = ({ text, disabled = false }) => (
  <Button disabled={disabled}>{text}</Button>
);

PrimaryButton.propTypes = {
  text: propTypes.string.isRequired,
  disabled: propTypes.bool
};

export default PrimaryButton;
