import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { displayModal } from '../../../actions/modals';
import filterForToDos from '../../../utils/filterForToDos';
import ToDoItem from './ToDoItem';
import { NEW_TODO_MODAL } from '../../common/modals/modals/NewToDo';

const AddToDo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 140px;
`;

const AddToDoText = styled.span`
  align-items: center;
  color: #ff0000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    color: #000000 !important;
  }
`;

const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 700px;
`;

const HelperText = styled.div`
  color: #000000;
  display: flex;
  font-size: 54px;
  justify-content: center;
  margin-top: 75px;
  opacity: 0.2;
  user-select: none;
`;

const H1 = styled.h1`
  color: #000000;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  width: 100%;
`;

const Header = styled.div`
  border-bottom: 1px solid #000000;
  display: flex;
  justify-content: space-betwen;
  padding: 2px 0;
  width: 100%;
`;

const PlusChar = styled.span`
  font-size: 24px;
`;

const ToDoContainer = props => {
  const { toDos, toggledListId, displayModal } = props;
  const toDoList = filterForToDos(toDos, toggledListId);

  return (
    <Container>
      <Header>
        <H1>To-Dos</H1>
        {toggledListId && (
          <AddToDo>
            <AddToDoText onClick={() => displayModal(NEW_TODO_MODAL)}>
              <PlusChar>+</PlusChar>&nbsp; New To-Do
            </AddToDoText>
          </AddToDo>
        )}
      </Header>

      {toggledListId === null ? (
        <HelperText>Select A To-Do List</HelperText>
      ) : toggledListId && toDoList.length === 0 ? (
        <HelperText>No Tasks</HelperText>
      ) : null}

      {toDoList.length > 0
        ? toDoList.map(toDo => (
            <ToDoItem
              id={toDo.taskId}
              key={toDo.taskId}
              description={toDo.description}
              completed={toDo.completed}
            />
          ))
        : null}
    </Container>
  );
};

ToDoContainer.propTypes = {
  toDos: propTypes.array.isRequired,
  toggledListId: propTypes.oneOfType([propTypes.number, propTypes.string]),
  displayModal: propTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    toggledListId: state.lists.toggledListId,
    toDos: state.toDos.listOfToDos
  };
};

export default connect(
  mapStateToProps,
  { displayModal }
)(ToDoContainer);
