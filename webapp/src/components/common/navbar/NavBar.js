import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

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

const NavBar = ({ location: { pathname } }) => {
  return (
    <StyledNavBar>
      <Logo />
      <NavLinks location={pathname} />
    </StyledNavBar>
  );
};

NavBar.propTypes = {
  location: propTypes.object.isRequired
};

export default withRouter(NavBar);
