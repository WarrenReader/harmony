import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ModalWrapper from '../ModalWrapper';
import Input from '../../inputs/PrimaryInput';
import Button from '../../buttons/PrimaryButton';
import { createTask } from '../../../../actions/toDos';

export const NEW_TODO_MODAL = 'NEW_TODO_MODAL';

const ErrorMsg = styled.span`
  color: #ff0000;
  display: block;
  font-size: 14px;
  margin: -12px 0 10px 0;
  padding-left: 3px;
`;

const Form = styled.form``;

const InputRow = styled.div`
  margin-bottom: 15px;
`;

class NewToDo extends React.Component {
  state = {
    taskDescription: '',
    error: null
  };

  handleValidation = value => {
    if (value.length === 0) {
      this.setState({ error: 'You must enter a description' });
    } else if (value.length > 75) {
      this.setState({ error: '75 character maximum' });
    } else {
      this.setState({ error: null });
    }
  };

  handleSubmit = e => {
    const { taskDescription } = this.state;
    const { toggledListId } = this.props;
    e.preventDefault();
    this.props.createTask(taskDescription, toggledListId);
  };

  handleUpdateInput = value => {
    this.handleValidation(value);
    this.setState({ taskDescription: value });
  };

  render() {
    const { taskDescription, error } = this.state;

    return (
      <ModalWrapper title="Create To-Do">
        <Form onSubmit={this.handleSubmit}>
          <InputRow>
            <Input
              type="text"
              value={taskDescription}
              onChange={e => this.handleUpdateInput(e.target.value)}
            />
          </InputRow>
          {error && <ErrorMsg>{error}</ErrorMsg>}
          <Button
            text="Create"
            disabled={Boolean(error) || taskDescription.length === 0}
          />
        </Form>
      </ModalWrapper>
    );
  }
}

NewToDo.propTypes = {
  createTask: propTypes.func.isRequired,
  toggledListId: propTypes.oneOfType([propTypes.number, propTypes.string])
};

const mapStateToProps = state => ({ toggledListId: state.lists.toggledListId });

export default connect(
  mapStateToProps,
  { createTask }
)(NewToDo);
