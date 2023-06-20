import styled from 'styled-components';

const StepOneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 485px;
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
`;

const StepOneHead = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  color: #353535;
`;

const StepOneContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  margin-bottom: 40px;
`;

const AttachFileInputWrapper = styled.div`
  width: 100%;
  margin-top: -30px;
  position: relative;
  border-top: 1px solid #e8e8e8;
`;

const AttachFileInput = styled.input`
  padding: 11px 20px 11px 60px;
  color: #4c4c4c;
  background: #f4f4f4;
  border: none;
  border-radius: 0 0 10px;
  height: 44px;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily1};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #4c4c4c;
  }
  :-ms-input-placeholder {
    color: #4c4c4c;
  }
`;

const AttachFileInputImg = styled.img`
  color: #a7a7a7;
  position: absolute;
  top: 0;
  left: 20px;
  margin: auto;
  bottom: 0;
  width: 25px;
`;

const RatingStarsWrapper = styled.div`
  margin-top: 33px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 58px;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const RatingStarsImg = styled.img`
  width: 134px;
`;

const RatingStarsDesc = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #333333;
`;

export {
  StepOneWrapper,
  StepOneHead,
  StepOneContentWrapper,
  RatingStarsWrapper,
  RatingStarsImg,
  RatingStarsDesc,
  AttachFileInputWrapper,
  AttachFileInput,
  AttachFileInputImg,
};
