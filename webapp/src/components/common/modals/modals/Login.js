import React from 'react';
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

// const Loading = styled.img`
//   height: 40px;
//   width: 40px;
// `;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LOGIN_MODAL = 'LOGIN_MODAL';

class Login extends React.Component {
  state = {
    title: 'Log In',
    email: '',
    password: '',
    loggingIn: false,
    showClose: true
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      loggingIn: true,
      title: 'Logging In...',
      showClose: false
    });
    setTimeout(() => {
      this.props.history.push('/dashboard');
      this.props.displayModal(null);
    }, 2000);
  };

  render() {
    const { email, loggingIn, password, showClose, title } = this.state;

    return (
      <ModalWrapper
        title={title}
        primaryButtonText="Log In"
        showClose={showClose}
      >
        {loggingIn ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : (
          <Form onSubmit={this.onSubmit}>
            <InputRow>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="text"
                id="email"
                placeholder="name@email.com"
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </InputRow>
            <InputRow>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </InputRow>
            <ButtonContainer>
              <PrimaryButton text="Log In" />
            </ButtonContainer>
          </Form>
        )}
      </ModalWrapper>
    );
  }
}

Login.propTypes = {
  history: propTypes.object.isRequired,
  displayModal: propTypes.func.isRequired
};

export default connect(
  null,
  { displayModal }
)(withRouter(Login));
