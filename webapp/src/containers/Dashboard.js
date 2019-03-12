import React from 'react';
import styled from 'styled-components';

import ToDoListContainer from '../components/dashboard/sidebar/ToDoListContainer';
import ToDoContainer from '../components/dashboard/main/ToDoContainer';

const Container = styled.div`
  display: flex;
  height: calc(100% - 77px);
  min-height: 600px;
`;

const SideBar = styled.div`
  background: #dcdcdc;
  box-sizing: border-box;
  padding: 35px;
  min-width: 300px;
`;

const Main = styled.div`
  padding: 35px;
  width: 100%;
`;

const Dashboard = () => {
  return (
    <Container>
      <SideBar>
        <ToDoListContainer />
      </SideBar>
      <Main>
        <ToDoContainer />
      </Main>
    </Container>
  );
};

export default Dashboard;
