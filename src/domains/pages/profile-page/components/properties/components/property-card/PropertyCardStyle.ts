import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: background 0.5s ease;
  z-index: 99;
`;

const CreateBNFT = styled.button`
  position: absolute;
  width: 80%;
  left: 20px;
  top: 80px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.35s ease;
  z-index: 100;
  padding: 4px;
  text-align: center;
  color: white;
  border: solid 1px white;
  font-size: 18px;
`;

const ViewProperty = styled.button`
  position: absolute;
  width: 80%;
  left: 20px;
  top: 124px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.35s ease;
  z-index: 100;
  padding: 4px;
  text-align: center;
  color: white;
  border: solid 1px white;
  font-size: 18px;
`;

const DealsCardBoxContainer = styled.a`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-sizing: border-box;
  width: 224px;
  height: 170px;
  margin-top: 35px;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  position: relative;
  @media (max-width: 520px) {
    width: 100%;
  }
  &:hover ${Overlay} {
    display: block;
    background: rgba(0, 0, 0, 0.3);
  }
  &:hover ${CreateBNFT} {
    opacity: 1;
  }
  &:hover ${ViewProperty} {
    opacity: 1;
  }
`;

const DestinationImageWrapper = styled.div`
  position: relative;
`;

const DestinationImage = styled.img`
  width: 224px;
  height: 170px;
  max-width: 100%;
  @media (max-width: 520px) {
    width: 100%;
  }
`;

const DealsDetailBox = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, #000000 100%);
  height: 100px;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DestinatioCountry = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  width: 70%;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden !important;
`;

const DestinationPrice = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  word-break: break-all;
  width: 25%;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden !important;
`;

const DurationWrapper = styled.div``;

const DurationTime = styled.span`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #c4c4c4;
`;

const DestinationName = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #c4c4c4;
  width: 100%;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden !important;
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
  DestinationPrice,
  TopSection,
  DestinatioCountry,
  Overlay,
  CreateBNFT,
  ViewProperty,
};
