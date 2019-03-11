import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import NavLinks from './NavLinks';

const StyledNavBar = styled.nav`
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  display: flex;
  height: 75px;
  justify-content: space-between;
  padding: 0px 40px;
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <Logo />
      <NavLinks />
    </StyledNavBar>
  );
};

export default NavBar;
