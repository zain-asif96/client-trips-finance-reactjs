import styled from 'styled-components';

const HostInfoContainer = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 21px 0;
`;

const MainRow = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;
const Host = styled.div`
  padding: 0 1.5em;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;
const HostInfoHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 49px;
`;

const HostInfoHeading = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightSemibold};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  line-height: normal;
`;
const HostInfoSubHeading = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightSemibold};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const SubHeadingRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
`;
const HostReview = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  color: ${({ theme }) => theme.colorButtonText};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  font-size: ${({ theme }) => theme.fontSizeExtraSmall};
  margin-left: 5px;
`;

const HostInfoDate = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  font-size: ${({ theme }) => theme.fontSizeExtraSmall};
  margin-top: 5px;
  color: ${({ theme }) => theme.colorButtonText}; ;
`;

const HostInfoParagraph = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  font-size: 15px;
  margin-top: 15px;
  color: ${({ theme }) => theme.colorBlack};
`;

const HostInfoBody = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  font-size: 15px;
  line-height: 24px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colorHostInfoBody};
`;

const Response = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  margin-top: 31px;
  font-size: ${({ theme }) => theme.fontSizeExtraSmall};
  color: ${({ theme }) => theme.colorBlack};
`;

const Button = styled.button`
  display: flex;
  width: 201px;
  height: 41px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background: ${({ theme }) => theme.colorWhite};
  border: 1px solid ${({ theme }) => theme.colorButtonBorder};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadiusMedium};
  margin: 35px 0 0;
  @media (max-width: 767px) {
    margin: 35px auto 0;
  }
`;
const ButtonText = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  font-size: ${({ theme }) => theme.fontSizeExtraSmall};
  color: ${({ theme }) => theme.colorButtonText};
`;

const ProfileIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 20px;
`;
const VectorIcon = styled.img`
  height: 12.75px;
  width: 12.73px;
`;

const ShowMore = styled.a`
  color: ${({ theme }) => theme.colorRed};
  margin-top: 10px;
`;

export {
  HostInfoContainer,
  MainRow,
  HostInfoParagraph,
  Host,
  HostInfoHeader,
  HostInfoBody,
  HostReview,
  HostInfoDate,
  HostInfoHeading,
  HostInfoSubHeading,
  SubHeadingRow,
  Response,
  Button,
  ShowMore,
  ButtonText,
  ProfileIcon,
  VectorIcon,
};
