import styled from 'styled-components';

const ButtonWrapper = styled.div`
  width: auto;
  min-width: 130px;
  margin-bottom: 20px;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: auto;
  @media (max-width: 480px) {
    width: 40%;
  }
  @media (max-width: 380px) {
    width: 45%;
  }
`;

const ButtonIcon = styled.img`
  color: #a7a7a7;
  position: absolute;
  top: 0;
  left: 20px;
  margin: auto;
  bottom: 0;
  width: 25px;
`;

const Button = styled.button`
  &:after {
    content: '>';
    width: 16px;
    height: 16px;
    position: absolute;
    right: 23px;
    font-size: 12px;
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
  }
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  border: 1px solid #e54d42;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #e54d42;
  border-radius: 10px;
  width: 100%;
  height: 51px;
  padding: 15px 40px;
  cursor: pointer;
`;

export { ButtonWrapper, ButtonIcon, Button };
