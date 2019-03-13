import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { getToDos } from '../actions/toDos';

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
  max-width: 700px;
  padding: 35px;
  width: 100%;
`;

class Dashboard extends React.Component {
  componentDidMount = () => {
    this.props.getToDos();
  };

  render() {
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
  }
}

Dashboard.propTypes = {
  getToDos: propTypes.func.isRequired
};

export default connect(
  null,
  { getToDos }
)(Dashboard);
