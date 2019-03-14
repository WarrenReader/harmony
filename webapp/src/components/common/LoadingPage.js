import React from 'react';
import styled from 'styled-components';
import Loading from '../../assets/Loading';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 300px;
`;

const LoadingScreen = () => {
  return (
    <Container>
      <Loading />
    </Container>
  );
};

export default LoadingScreen;
