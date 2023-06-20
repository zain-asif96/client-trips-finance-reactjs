import styled from 'styled-components';

const StepOneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 485px;
  width: 100%;
  margin: auto;
`;

const StepOneHead = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  color: #353535;
  margin-bottom: 64px;
`;

const StepOneContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 47px;
  margin-bottom: 30px;
`;

const StepOneDescHead = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #353535;
`;

const StepOneDesc = styled.p`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #353535;
`;

const InputLabel = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #4c4c4c;
  margin-bottom: 16px;
  display: block;
`;

const ActionBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 78px;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const NextBtn = styled.button`
  &:after {
    content: '>';
    width: 16px;
    height: 16px;
    position: absolute;
    right: 30px;
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
  width: 129px;
  height: 51px;
  padding: 15px 40px;
  cursor: pointer;
`;

export {
  StepOneWrapper,
  StepOneHead,
  StepOneContentWrapper,
  StepOneDescHead,
  StepOneDesc,
  InputLabel,
  ActionBtnContainer,
  NextBtn,
};
