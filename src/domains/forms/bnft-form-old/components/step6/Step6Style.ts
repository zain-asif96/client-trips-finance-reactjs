import styled from 'styled-components';

const StepSixWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 940px;
  width: 100%;
  margin: auto;
`;

const StepSixHead = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  color: #353535;
  margin-bottom: 39px;
`;

const StepSixContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 47px;
  margin-bottom: 30px;
`;

const StepSixBoxWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  max-width: 940px;
  height: auto;
  min-height: 638px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 86px 0 64px;

  @media (max-width: 640px) {
    padding: 20px 0;
  }
`;

const FieldsDataOuterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 728px;
  margin: 0 auto 55px;
  padding-bottom: 55px;
  border-bottom: 1px solid #e8e8e8;

  @media (max-width: 800px) {
    max-width: 100%;
    justify-content: space-evenly;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0 20px 10px;
    margin-bottom: 20px;
  }
`;

const FieldsDataInnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const FieldsIcon = styled.img`
  width: 13px;
  margin-right: 6px;
`;

const FieldsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FieldsContent = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #353535;
  margin-bottom: 10px;
`;

const ActionBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

const PrevBtn = styled.button`
  &:after {
    content: '<';
    width: 16px;
    height: 16px;
    position: absolute;
    left: -20px;
    font-size: 16px;
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
  font-size: 20px;
  color: #000000;
  cursor: pointer;
  margin-bottom: 20px;
  text-decoration: underline;
`;

const NextBtn = styled.button`
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
  width: 304px;
  height: 72px;
  padding: 15px 40px;
  cursor: pointer;
  @media (max-width: 380px) {
    width: 100%;
    font-size: 12px;
    padding: 15px;
  }
`;

const CalendarContainer = styled.main`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export {
  StepSixWrapper,
  StepSixHead,
  StepSixContentWrapper,
  StepSixBoxWrapper,
  FieldsDataOuterWrapper,
  FieldsDataInnerWrapper,
  FieldsIcon,
  FieldsContentWrapper,
  FieldsContent,
  ActionBtnContainer,
  PrevBtn,
  NextBtn,
  CalendarContainer,
};
