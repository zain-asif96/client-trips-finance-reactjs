import styled from 'styled-components';

const SleepingArrangementContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 10px;
  width: 240px;
  height: 200px;
  margin: 20px 25px 0 0;
  justify-content: center;
  align-items: center;
  @media (max-width: 561px) {
    margin-right: 0;
    width: 100%;
  }
`;

const BedroomImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BedroomImage = styled.img`
  width: 50px;
  max-width: 100%;
`;

const BedroomDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BedroomHeading = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #353535;
  word-break: break-all;
  margin-top: 30px;
`;

const BedroomCountText = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #353535;
  word-break: break-all;
  margin-top: 5px;
`;

//default props
BedroomImage.defaultProps = {
  src: '',
};

export {
  SleepingArrangementContainer,
  BedroomImageWrapper,
  BedroomImage,
  BedroomDescWrapper,
  BedroomHeading,
  BedroomCountText,
};
