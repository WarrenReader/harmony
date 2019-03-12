import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import ChevronRight from '../../../assets/ChevronRight';

const ChrevronContainer = styled.div`
  height: 25px;
  width: 25px;
`;

const Container = styled.div`
  align-content: center;
  background: ${props => (props.toggled ? '#ff3232' : 'inherit')};
  border-radius: 3px;
  box-shadow: ${props =>
    props.toggled ? '0px 0px 0px 1px rgba(0,0,0,0.1)' : 'none'};
  box-sizing: border-box;
  color: ${props => (props.toggled ? '#ffffff' : '#000000')};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  padding: 10px 10px;
  width: 100%;

  &:hover {
    background: ${props => (props.toggled ? '#ff3232' : '#c8c8c8')};
  }
`;

const Text = styled.span`
  line-height: 24px;
`;

const ToDoListItem = ({ name, listToggled, onClick }) => {
  return (
    <Container onClick={onClick} toggled={listToggled}>
      <Text>{name}</Text>
      <ChrevronContainer>
        <ChevronRight color={listToggled ? '#ffffff' : '#000000'} />
      </ChrevronContainer>
    </Container>
  );
};

ToDoListItem.propTypes = {
  name: propTypes.string.isRequired,
  listToggled: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired
};

export default ToDoListItem;
