import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
import filterForToDos from '../../../utils/filterForToDos';
import ToDoItem from './ToDoItem';

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

const ToDoContainer = props => {
  const { toDos, toggledListId } = props;
  const toDoList = filterForToDos(toDos, toggledListId);

  return (
    <Container>
      <H1>To-Dos</H1>

      {toggledListId === null ? (
        <PleaseSelect>Select A To-Do List</PleaseSelect>
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
  toggledListId: propTypes.oneOfType([propTypes.number, propTypes.null])
};

const mapStateToProps = state => {
  return {
    toggledListId: state.lists.toggledListId,
    toDos: state.toDos.listOfToDos
  };
};

export default connect(
  mapStateToProps,
  {}
)(ToDoContainer);
