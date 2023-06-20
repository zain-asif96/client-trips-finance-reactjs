import styled from 'styled-components';

const StepFiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 485px;
  width: 100%;
  margin: auto;
`;

const StepFiveHead = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  color: #353535;
  margin-bottom: 60px;
`;

const StepFiveContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 47px;
  margin-bottom: 30px;
`;

const StepFiveBoxWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #ececec;
  box-sizing: border-box;
  border-radius: 10px 10px 0px 0px;
  height: 379px;
  overflow-y: auto;
  padding: 22px;
  box-shadow: 11px 12px 22px -8px rgb(0 0 0 / 9%);
`;

const StepFiveDescHead = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #353535;
`;

const StepFiveDesc = styled.p`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #353535;
`;

const CheckboxLabelWrapper = styled.label`
  display: flex;
`;

const CheckboxLabel = styled.span`
  font-style: italic;
  font-weight: 500;
  font-size: 19px;
  color: #353535;
  margin-left: 27px;
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
  StepFiveWrapper,
  StepFiveHead,
  StepFiveContentWrapper,
  StepFiveDescHead,
  StepFiveBoxWrapper,
  StepFiveDesc,
  CheckboxLabelWrapper,
  CheckboxLabel,
  ActionBtnContainer,
  PrevBtn,
  NextBtn,
};
