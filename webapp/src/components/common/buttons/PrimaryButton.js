import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: #406ce7;
  border: none;
  border-radius: 4px;
  box-shadow: none;
  cursor: pointer;
  font-size: 18px;
  color: white;
  padding: 8px 0px;
  width: 100%;

  &:hover {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
  }

  &:active {
    background: #3356b8;
  }
`;

const PrimaryButton = ({ text }) => <Button>{text}</Button>;

PrimaryButton.propTypes = {
  text: propTypes.string.isRequired
};

export default PrimaryButton;
