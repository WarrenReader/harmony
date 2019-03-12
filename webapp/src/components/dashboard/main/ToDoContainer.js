import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PleaseSelect = styled.div`
  color: #000000;
  display: flex;
  font-size: 54px;
  justify-content: center;
  margin-top: 75px;
  opacity: 0.2;
`;

const H1 = styled.h1`
  border-bottom: 1px solid #000000;
  color: #000000;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  width: 100%;
`;

const ToDoContainer = () => {
  return (
    <Container>
      <H1>To-Dos</H1>
      <PleaseSelect>&larr; Select A To-Do List</PleaseSelect>
    </Container>
  );
};

export default ToDoContainer;
