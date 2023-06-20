import styled from 'styled-components';

const StepTwoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 485px;
  width: 100%;
  margin: auto;
`;

const StepTwoHead = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  color: #353535;
  margin-bottom: 60px;
`;

const StepTwoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 47px;
  margin-bottom: 30px;
`;

const StepTwoDescHead = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #353535;
`;

const StepTwoDesc = styled.p`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #353535;
`;

const ActionBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 78px;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const PrevBtn = styled.button`
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
  color: #000000;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  width: 129px;
  height: 51px;
  padding: 15px 40px;
  cursor: pointer;
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const SubmitBtn = styled.button`
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
  StepTwoWrapper,
  StepTwoHead,
  StepTwoContentWrapper,
  StepTwoDescHead,
  StepTwoDesc,
  ActionBtnContainer,
  PrevBtn,
  SubmitBtn,
};
