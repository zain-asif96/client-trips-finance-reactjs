import styled from 'styled-components';

const StyledBurger = styled.div<{ open: boolean }>`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 0;
  right: ${(props) => (props.open ? '42px' : '22px')};
  z-index: 9999999;
  bottom: 0;
  margin: ${(props) => (props.open ? '-20px' : 'auto')};
  display: none;
  @media (max-width: 900px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    height: 2px;
    background-color: ${(props) => (props.open ? '#ffffff' : '#E54D42')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
      width: ${(props) => (props.open ? '33px' : '16px')};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => (props.open ? 0 : 1)};
      width: 20px;
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
      width: ${(props) => (props.open ? '33px' : '24px')};
    }
  }
`;

export { StyledBurger };
