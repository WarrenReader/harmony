import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: calc(100% - 77px);
  min-height: 600px;
`;

const SideBar = styled.div`
  background: #dcdcdc;
  flex-grow: 1;
  padding: 20px;
`;

const Tasks = styled.div`
  flex-grow: 3;
  padding: 20px;
`;

const Dashboard = () => {
  return (
    <Container>
      <SideBar>Lists</SideBar>
      <Tasks>Tasks</Tasks>
    </Container>
  );
};

export default Dashboard;
