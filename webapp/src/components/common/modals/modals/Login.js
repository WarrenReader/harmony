import React, { useState } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
import ModalWrapper from '../ModalWrapper';
import { withRouter } from 'react-router-dom';
import { displayModal } from '../../../../actions/modals';
import Input from '../../inputs/PrimaryInput';
import PrimaryButton from '../../buttons/PrimaryButton';
import Loading from '../../../../assets/Loading.js';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%;
`;

const Form = styled.form``;

const InputRow = styled.div`
  margin-bottom: 12px;
`;

const Label = styled.span`
  display: block;
  margin-bottom: 12px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LOGIN_MODAL = 'LOGIN_MODAL';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const [showClose, setShowClose] = useState();

  const onSubmit = e => {
    e.preventDefault();
    setLoggingIn(true);
    setShowClose(false);

    setTimeout(() => {
      props.history.push('/dashboard');
      props.displayModal(null);
    }, 2000);
  };

  return (
    <ModalWrapper
      title={loggingIn ? 'Logging In' : 'Log In'}
      primaryButtonText="Log In"
      showClose={showClose}
    >
      {loggingIn ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <Form onSubmit={onSubmit}>
          <InputRow>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="text"
              id="email"
              placeholder="name@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </InputRow>
          <InputRow>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </InputRow>
          <ButtonContainer>
            <PrimaryButton text="Log In" />
          </ButtonContainer>
        </Form>
      )}
    </ModalWrapper>
  );
};

Login.propTypes = {
  history: propTypes.object.isRequired,
  displayModal: propTypes.func.isRequired
};

export default connect(
  null,
  { displayModal }
)(withRouter(Login));
