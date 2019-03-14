import React from 'react';
import styled from 'styled-components';
import ModalWrapper from '../ModalWrapper';
import Input from '../../inputs/PrimaryInput';
import PrimaryButton from '../../buttons/PrimaryButton';

export const SIGNUP_MODAL = 'SIGNUP_MODAL';

const Form = styled.form``;

const InputRow = styled.div`
  margin-bottom: 12px;
`;

const Label = styled.span`
  display: block;
  margin-bottom: 12px;
`;

const SignUp = () => {
  return (
    <ModalWrapper title="Sign Up">
      <Form>
        <InputRow>
          <Label>Full Name</Label>
          <Input
            type="text"
            placeholder="Full Name"
            disabled={true}
            onChange={() => ''}
            value=""
          />
        </InputRow>
        <InputRow>
          <Label>Email Address</Label>
          <Input
            type="text"
            placeholder="Email Address"
            disabled={true}
            onChange={() => ''}
            value=""
          />
        </InputRow>
        <InputRow>
          <Label>Password</Label>
          <Input
            type="text"
            placeholder="Password"
            disabled={true}
            onChange={() => ''}
            value=""
          />
        </InputRow>
        <InputRow>
          <Label>Repeat Password</Label>
          <Input
            type="text"
            placeholder="Repeat Password"
            disabled={true}
            onChange={() => ''}
            value=""
          />
        </InputRow>
        <PrimaryButton text="Create Account" disabled={true} />
      </Form>
    </ModalWrapper>
  );
};

export default SignUp;
