import React from 'react';
import styled from 'styled-components';
import LargeLogo from '../assets/logo_large.png';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled.img`
  height: 40%;
  margin-top: 50px;
  max-width: 350px;
  width: 40%;
`;

const Text = styled.div`
  font-size: 50px;
  opacity: 0.8;
`;

const Home = () => {
  return (
    <Container>
      <Logo src={LargeLogo} />
      <Text>To-Do App</Text>
    </Container>
  );
};

export default Home;
