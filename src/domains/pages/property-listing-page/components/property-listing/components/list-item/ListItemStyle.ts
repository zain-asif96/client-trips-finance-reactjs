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
  height: 79px;
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
  font-size: 17px;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const DurationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

const DurationTime = styled.span`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #c4c4c4;
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
};
