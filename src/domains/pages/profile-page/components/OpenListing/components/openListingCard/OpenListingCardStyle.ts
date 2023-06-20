import styled from 'styled-components';

const DealsCardBoxContainer = styled.a`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-sizing: border-box;
  width: 224px;
  margin-top: 35px;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  @media (max-width: 520px) {
    width: 100%;
  }
`;

const DestinationImageWrapper = styled.div`
  position: relative;
`;

const DestinationImage = styled.img`
  width: 224px;
  max-width: 100%;
  @media (max-width: 520px) {
    width: 100%;
  }
`;

const DealsDetailBox = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, #000000 100%);
  height: 115px;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 17px 15px;
`;

const DestinationName = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
  flex: 1;
  line-height: 1.2;
`;

const DestinationAmount = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
  flex: 1;
  text-align: right;
  line-height: 1.2;
`;

const DurationWrapper = styled.div``;

const DurationTime = styled.span`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #c4c4c4;
  line-height: 2;
`;

//default props
DestinationImage.defaultProps = {
  src: '',
};

export {
  DealsCardBoxContainer,
  DestinationImageWrapper,
  DealsDetailBox,
  DestinationImage,
  DestinationName,
  DurationWrapper,
  DurationTime,
  DestinationAmount,
};
