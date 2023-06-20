import styled from 'styled-components';

const MetaMaskBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  width: 30%;
  min-width: 283px;
  height: 295px;
  margin: 20px 0 0px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 30px;

  &:hover {
    border: 1px solid #f2f2f2;
  }
  @media (max-width: 810px) {
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const MetaMaskImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MetaMaskImage = styled.img`
  width: 119px;
  max-width: 100%;
`;

const MetaMaskText = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  color: #353535;
  word-break: break-all;
  margin-top: 30px;
`;

//default props
MetaMaskImage.defaultProps = {
  src: '',
};

export {
  MetaMaskBoxContainer,
  MetaMaskImageWrapper,
  MetaMaskImage,
  MetaMaskText,
};
