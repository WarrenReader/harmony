import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const NavLink = styled(Link)`
  color: #808080;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  margin-right: 20px;
  transition: 0.3s;

  &:hover {
    color: red;
  }

  &:last-child {
    margin-right: 0px;
  }
`;
const NavLinkCallOut = styled(NavLink)`
  border: 2px solid red;
  border-radius: 4px;
  color: red;
  padding: 8px 12px;

  &:hover {
    color: white;
    background: red;
  }
`;

const NavLinks = () => {
  return (
    <Container>
      <NavLink to="#">Log In</NavLink>
      <NavLinkCallOut to="#">Sign Up</NavLinkCallOut>
    </Container>
  );
};

export default NavLinks;
