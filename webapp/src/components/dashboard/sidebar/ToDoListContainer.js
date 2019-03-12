import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ToDoListItem from './ToDoListItem';
import { getLists, toggleList } from '../../../actions/lists';
import Loading from '../../../assets/Loading';

const Container = styled.div``;

const H1 = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
`;

const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  width: 100%;
`;

const LoadingText = styled.span`
  color: #ff0000;
  margin-top: 15px;
  opacity: 0.7;
`;

class ToDoListContainer extends React.Component {
  componentDidMount = () => {
    this.handleListsRetrieval();
  };

  handleListsRetrieval = () => {
    this.props.getLists();
  };

  render() {
    const { toggleList } = this.props;
    const { lists, fetching, toggledListId } = this.props.lists;

    return (
      <Container>
        <H1>To-Do Lists</H1>
        {fetching ? (
          <LoadingContainer>
            <Loading />
            <LoadingText>Loading</LoadingText>
          </LoadingContainer>
        ) : null}

        {lists.map(list => {
          return (
            <ToDoListItem
              key={list.id}
              name={list.name}
              listToggled={list.id === toggledListId}
              onClick={() => toggleList(list.id)}
            />
          );
        })}
      </Container>
    );
  }
}

ToDoListContainer.propTypes = {
  toggleList: propTypes.func.isRequired,
  getLists: propTypes.func.isRequired,
  lists: propTypes.object.isRequired
};

const mapStateToProps = ({ lists }) => ({ lists });

export default connect(
  mapStateToProps,
  { getLists, toggleList }
)(ToDoListContainer);
