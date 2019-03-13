import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalWrapper from '../ModalWrapper';
import styled from 'styled-components';
import { addList } from '../../../../actions/lists';
import Input from '../../inputs/PrimaryInput';
import Button from '../../buttons/PrimaryButton';
import extractListNames from '../../../../utils/extractListNames';

export const NEW_LIST_MODAL = 'NEW_LIST_MODAL';

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

class NewList extends React.Component {
  state = {
    listName: '',
    error: null
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addList(this.state.listName);
  };

  handleValidation = value => {
    const { lists } = this.props;
    const listNames = extractListNames(lists);

    if (value.length === 0) {
      this.setState({ error: 'You must enter a name' });
    } else if (listNames.indexOf(value.toLowerCase().trim()) !== -1) {
      this.setState({ error: 'This name is already being used' });
    } else if (value.length > 20) {
      this.setState({ error: '20 character maximum' });
    } else {
      this.setState({ error: null });
    }
  };

  handleUpdateInput = value => {
    this.handleValidation(value);
    this.setState({ listName: value });
  };

  render() {
    const { listName, error } = this.state;

    return (
      <ModalWrapper title="Create New List">
        <Form onSubmit={this.handleSubmit}>
          <InputRow>
            <Input
              type="text"
              placeholder="List Name"
              value={listName}
              onChange={e => this.handleUpdateInput(e.target.value)}
            />
          </InputRow>
          {error && <ErrorMsg>{error}</ErrorMsg>}
          <Button
            disabled={Boolean(error) || listName.length === 0}
            text="Create"
          />
        </Form>
      </ModalWrapper>
    );
  }
}

NewList.propTypes = {
  addList: propTypes.func.isRequired,
  lists: propTypes.array.isRequired
};

const mapStateToProps = ({ lists: { lists } }) => {
  return { lists };
};

export default connect(
  mapStateToProps,
  { addList }
)(NewList);
