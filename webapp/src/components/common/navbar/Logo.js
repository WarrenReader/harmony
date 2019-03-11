import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HarmonyLogo from '../../../assets/logo_small.png';

const StyledLogo = styled.img`
  height: 70px;
  width: 70px;
`;

const Logo = () => {
  return (
    <Link to="/">
      <StyledLogo src={HarmonyLogo} alt="Harmony Logo" />
    </Link>
  );
};

export default Logo;
