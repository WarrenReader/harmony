import styled from 'styled-components';

const Close = styled.div`
  cursor: pointer;
  height: 22px;
  position: absolute;
  right: 15px;
  width: 22px;

  &:after {
    content: '';
    height: 22px;
    border-left: 2px solid #383838;
    position: absolute;
    transform: rotate(45deg);
    left: 10px;
  }

  &:hover:after {
    border-left: 2px solid #ff0000;
  }

  &:before {
    content: '';
    height: 22px;
    border-left: 2px solid #383838;
    position: absolute;
    transform: rotate(-45deg);
    left: 10px;
  }

  &:hover:before {
    border-left: 2px solid #ff0000;
  }
`;

export default Close;
