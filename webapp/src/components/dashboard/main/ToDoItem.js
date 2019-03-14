import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  toggleToDoStatus,
  updateStatusDescription,
  deleteTask
} from '../../../actions/toDos';
import Checkmark from '../../../assets/Checkmark';
import Close from '../../../assets/Close';

const Container = styled.div`
  align-items: center;
  background: ${props => (props.completed ? '#F5F5F5' : 'none')};
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  height: 50px;
  position: relative;
  width: 100%;
`;

const CheckMarkContainer = styled.div`
  cursor: pointer;
  margin-left: 15px;
  width: 30px;
`;

const Description = styled.input.attrs({ type: 'text' })`
  background: ${props => (props.disabled ? '#F5F5F5' : 'none')};
  border: none;
  color: ${props => (props.disabled ? '#A0A0A0' : '#000000')};
  font-size: 15px;
  height: 25px;
  margin-left: 15px;
  padding: 5px;
  width: 550px;
`;

const ToDoItem = ({
  id,
  description,
  completed,
  toggleToDoStatus,
  updateStatusDescription,
  deleteTask
}) => {
  return (
    <Container completed={completed}>
      <CheckMarkContainer onClick={() => toggleToDoStatus(id)}>
        <Checkmark completed={completed} />
      </CheckMarkContainer>
      <Description
        value={description}
        onChange={e => updateStatusDescription(e.target.value, id)}
        disabled={completed}
        maxLength="75"
      />
      <Close onClick={() => deleteTask(id)} />
    </Container>
  );
};

ToDoItem.propTypes = {
  id: propTypes.oneOfType([propTypes.number, propTypes.string]),
  description: propTypes.string.isRequired,
  completed: propTypes.bool.isRequired,
  toggleToDoStatus: propTypes.func.isRequired,
  updateStatusDescription: propTypes.func.isRequired,
  deleteTask: propTypes.func.isRequired
};

export default connect(
  null,
  { toggleToDoStatus, updateStatusDescription, deleteTask }
)(ToDoItem);
