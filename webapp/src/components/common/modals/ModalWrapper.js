import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { displayModal } from '../../../actions/modals';
import Close from '../../../assets/Close';

const Background = styled.div`
  background: #000000;
  height: 100%;
  opacity: 0.4;
  position: fixed;
  width: 100%;
  z-index: 5;
`;

const Container = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 5;
`;

const ModalBox = styled.div`
  background: white;
  border-radius: 4px;
  display: block;
  max-height: 500px
  margin-top: 150px;
  padding: 20px;
  position: relative;
  width: 300px;
  z-index: 6;
`;

const ModalBody = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 22px;
  margin-bottom: 25px;
  text-align: center;
`;

class ModalWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    if (!this.modal.contains(e.target)) {
      this.props.displayModal(null);
    }
  }

  render() {
    const { children, displayModal, showClose = true, title } = this.props;
    return (
      <Container>
        <Background />
        <ModalBox ref={node => (this.modal = node)}>
          {showClose && <Close onClick={() => displayModal(null)} />}
          <Title>{title}</Title>
          <ModalBody>{children}</ModalBody>
        </ModalBox>
      </Container>
    );
  }
}

ModalWrapper.propTypes = {
  children: propTypes.object.isRequired,
  displayModal: propTypes.func.isRequired,
  showClose: propTypes.bool,
  title: propTypes.string.isRequired
};

export default connect(
  null,
  { displayModal }
)(ModalWrapper);
