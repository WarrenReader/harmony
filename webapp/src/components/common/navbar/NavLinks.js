import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { displayModal } from '../../../actions/modals';
import { LOGIN_MODAL } from '../modals/modals/Login';
import { SIGNUP_MODAL } from '../modals/modals/SignUp';

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

const NavLinks = ({ displayModal, location }) => {
  return (
    <Container>
      {location != '/dashboard' && (
        <NavLink to="#" onClick={() => displayModal(LOGIN_MODAL)}>
          Log In
        </NavLink>
      )}
      {location != '/dashboard' && (
        <NavLinkCallOut to="#" onClick={() => displayModal(SIGNUP_MODAL)}>
          Sign Up
        </NavLinkCallOut>
      )}
      {location === '/dashboard' && <NavLink to="/">Logout</NavLink>}
    </Container>
  );
};

NavLinks.propTypes = {
  displayModal: propTypes.func.isRequired,
  location: propTypes.string.isRequired
};

export default connect(
  null,
  { displayModal }
)(NavLinks);
