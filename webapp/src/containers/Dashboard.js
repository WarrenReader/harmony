import React from 'react';
import styled from 'styled-components';

import ToDoListContainer from '../components/dashboard/sidebar/ToDoListContainer';

const Container = styled.div`
  display: flex;
  height: calc(100% - 77px);
  min-height: 600px;
`;

const SideBar = styled.div`
  background: #dcdcdc;
  box-sizing: border-box;
  padding: 25px;
  width: 350px;
`;

const Tasks = styled.div`
  padding: 25px;
`;

const Dashboard = () => {
  return (
    <Container>
      <SideBar>
        <ToDoListContainer />
      </SideBar>
      <Tasks>Tasks</Tasks>
    </Container>
  );
};

export default Dashboard;
