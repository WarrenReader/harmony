import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Login, { LOGIN_MODAL } from './modals/Login';
import SignUp, { SIGNUP_MODAL } from './modals/SignUp';
import NewList, { NEW_LIST_MODAL } from './modals/NewList';

const ModalWrapper = ({ modals: { displayModal } }) => {
  switch (displayModal) {
    case LOGIN_MODAL:
      return <Login />;
    case SIGNUP_MODAL:
      return <SignUp />;
    case NEW_LIST_MODAL:
      return <NewList />;
    default:
      return null;
  }
};

ModalWrapper.propTypes = {
  modals: propTypes.object.isRequired
};

const mapStateToProps = ({ modals }) => ({
  modals
});

export default connect(
  mapStateToProps,
  {}
)(ModalWrapper);
