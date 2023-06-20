import styled from 'styled-components';

const HeadersContainer = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  // padding: 0 1em;
  // background-color: yellow;
`;

const ColumnOne = styled.div`
  margin: 0 auto;
  // padding: 0 1em;
  @media (max-width: 767px) {
    margin: 0;
  }
`;
const RowOne = styled.div`
  // max-width: 770px;
  width: 100%;
`;
const RowTwo = styled.div`
  display: flex;
  justify-content: space-between;
  // width: 40.104167vw;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ColumnTwo = styled.div`
  margin: 0 auto;
  // padding: 0 0 1em 1em;
  @media (max-width: 767px) {
    //padding: 1em;
    margin: 0;
  }
`;

const Line = styled.hr`
  width: 100%;
  height: 0px;
  margin: 29px 0;
  border: 1px solid rgba(229, 229, 229, 0.4);
  @media (max-width: 767px) {
    margin: 20px 0;
  }
`;

const MainRow = styled.div``;

const ListingHeading = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  color: ${({ theme }) => theme.colorBlack};
`;
const ListingSubheading = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightSemibold};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  color: ${({ theme }) => theme.colorBlack};
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const ProfileIcon = styled.img`
  float: right;
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

const ListingParagraph = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  font-size: ${({ theme }) => theme.fontSizeExtraSmall};
  margin-top: 5px;
  color: ${({ theme }) => theme.colorButtonText};
`;

export {
  HeadersContainer,
  MainRow,
  Line,
  ProfileIcon,
  ListingHeading,
  ListingSubheading,
  ListingParagraph,
  ColumnOne,
  ColumnTwo,
  RowOne,
  RowTwo,
};
