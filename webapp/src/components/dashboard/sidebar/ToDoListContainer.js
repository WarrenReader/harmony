import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ToDoListItem from './ToDoListItem';
import { displayModal } from '../../../actions/modals';
import { getLists, toggleList } from '../../../actions/lists';
import { NEW_LIST_MODAL } from '../../common/modals/modals/NewList';
import Loading from '../../../assets/Loading';

const AddNewList = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 8px 0;
  padding: 10px 10px;
  text-align: center;
`;

const AddNewListText = styled.span`
  align-items: center;
  color: #ff0000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 17px;
  transition: 0.25s;

  &:hover {
    color: #000000 !important;
  }
`;

const PlusChar = styled.span`
  font-size: 26px;
`;

const Container = styled.div``;

const H1 = styled.h1`
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
    const { toggleList, displayModal } = this.props;
    const { lists, fetching, toggledListId } = this.props.lists;

    return (
      <Container>
        <H1>To-Do Lists</H1>
        {fetching ? (
          <LoadingContainer>
            <Loading />
            <LoadingText>Loading</LoadingText>
          </LoadingContainer>
        ) : (
          <React.Fragment>
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
            <AddNewList>
              <AddNewListText onClick={() => displayModal(NEW_LIST_MODAL)}>
                <PlusChar>+</PlusChar>&nbsp;New List
              </AddNewListText>
            </AddNewList>
          </React.Fragment>
        )}
      </Container>
    );
  }
}

ToDoListContainer.propTypes = {
  toggleList: propTypes.func.isRequired,
  getLists: propTypes.func.isRequired,
  lists: propTypes.object.isRequired,
  displayModal: propTypes.func.isRequired
};

const mapStateToProps = ({ lists }) => ({ lists });

export default connect(
  mapStateToProps,
  { getLists, toggleList, displayModal }
)(ToDoListContainer);
