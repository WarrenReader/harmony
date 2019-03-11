import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { displayModal } from '../../../actions/modals';
import close from '../../../assets/close.png';

const Background = styled.div`
  background: #000000;
  height: 100%;
  opacity: 0.4;
  position: fixed;
  width: 100%;
  z-index: 5;
`;

const Close = styled.img`
  cursor: pointer;
  height: 18px;
  position: absolute;
  right: 20px;
  opacity: 0.6;
  width: 18px;
  top: 23px;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 5;
`;

const ModalBox = styled.div`
  background: white;
  border-radius: 4px;
  display: block;
  max-height: 400px
  margin-top: 150px;
  padding: 20px;
  position: relative;
  width: 300px;
  z-index: 6;
`;

const ModalBody = styled.div`
  max-height: 350px;
  width: 100%;
`;

const ModalFooter = styled.div`
  height: 75px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 22px;
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
    const { children, displayModal, title } = this.props;
    return (
      <Container>
        <Background />
        <ModalBox ref={node => (this.modal = node)}>
          <Close src={close} onClick={() => displayModal(null)} />
          <Title>{title}</Title>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>Footer</ModalFooter>
        </ModalBox>
      </Container>
    );
  }
}

ModalWrapper.propTypes = {
  children: propTypes.object.isRequired,
  displayModal: propTypes.func.isRequired,
  title: propTypes.string.isRequired
};

export default connect(
  null,
  { displayModal }
)(ModalWrapper);
