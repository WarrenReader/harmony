import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ModalWrapper from '../ModalWrapper';
import Input from '../../inputs/PrimaryInput';
import Button from '../../buttons/PrimaryButton';
import { createTask } from '../../../../actions/toDos';

export const NEW_TODO_MODAL = 'NEW_TODO_MODAL';

const Form = styled.form``;

const InputRow = styled.div`
  margin-bottom: 15px;
`;

class NewToDo extends React.Component {
  state = {
    taskDescription: ''
  };

  handleSubmit = e => {
    const { taskDescription } = this.state;
    const { toggledListId } = this.props;
    e.preventDefault();
    this.props.createTask(taskDescription, toggledListId);
  };

  render() {
    const { taskDescription } = this.state;

    return (
      <ModalWrapper title="Add New To-Do">
        <Form onSubmit={this.handleSubmit}>
          <InputRow>
            <Input
              type="text"
              value={taskDescription}
              onChange={e => this.setState({ taskDescription: e.target.value })}
            />
          </InputRow>
          <Button text="Create" />
        </Form>
      </ModalWrapper>
    );
  }
}

NewToDo.propTypes = {
  createTask: propTypes.func.isRequired,
  toggledListId: propTypes.number
};

const mapStateToProps = state => ({ toggledListId: state.lists.toggledListId });

export default connect(
  mapStateToProps,
  { createTask }
)(NewToDo);
