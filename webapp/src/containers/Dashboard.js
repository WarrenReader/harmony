import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { getToDos } from '../actions/toDos';

import ToDoListContainer from '../components/dashboard/sidebar/ToDoListContainer';
import ToDoContainer from '../components/dashboard/main/ToDoContainer';

const OuterContainer = styled.div`
  display: flex;
  background: #f9f9f9;
  height: calc(100% - 77px);
  justify-content: center;
  min-height: 600px;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 1100px;
`;

const SideBar = styled.div`
  background: #dcdcdc;
  box-sizing: border-box;
  padding: 35px;
  min-width: 300px;
`;

const Main = styled.div`
  background: white;
  padding: 35px;
  width: 100%;
`;

class Dashboard extends React.Component {
  componentDidMount = () => {
    this.props.getToDos();
  };

  render() {
    return (
      <OuterContainer>
        <InnerContainer>
          <SideBar>
            <ToDoListContainer />
          </SideBar>
          <Main>
            <ToDoContainer />
          </Main>
        </InnerContainer>
      </OuterContainer>
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
