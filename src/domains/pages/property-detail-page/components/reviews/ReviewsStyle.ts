import styled from 'styled-components';

const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

const MainRow = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-content: flex-start;
  align-items: center;
`;

const TotalReviews = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 45px;
`;
const ReviewHeader = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightSemibold};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  margin-left: 10px;
  color: ${({ theme }) => theme.colorBlack};
`;

const ReviewContents = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const Images = styled.div` 
  margin-bottom: 15px;
}
`;

const ReviewItem = styled.div`
  :last-child {
    margin-right: 0;
  }
  :first-child {
    margin-left: 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.colorLightGray} !important;
  border-radius: ${({ theme }) => theme.borderRadiusMedium} !important;
  box-sizing: border-box;
  margin: 0 10px;
  padding: 16px !important;
  @media (max-width: 767px) {
    margin: 15px 0;
  }
`;

const ReviewParagraph = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  font-size: ${({ theme }) => theme.fontSizeExtraSmall};
  margin-bottom: 20px;
  color: #a7a7a7;
  line-height: 19px;
  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`;
const ReviewerName = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  font-size: ${({ theme }) => theme.fontSizeSmall};
  line-height: normal;
`;
const ReviewerTitle = styled.p`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  margin-top: 3px;
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  font-size: ${({ theme }) => theme.fontSizeExtraSmall};
  color: ${({ theme }) => theme.colorButtonText};
  line-height: normal;
`;

const QuoteIconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colorWhite};
  border-radius: 12px;
  box-shadow: 0px 0px 16px 0px #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px;
`;

const QuoteIcon = styled.img`
  width: 14px;
  height: 16px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  width: 201px;
  background: ${({ theme }) => theme.colorWhite};
  border: 1px solid ${({ theme }) => theme.colorButtonBorder};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadiusMedium};
  margin: 0 auto 21px;
`;

const ButtonText = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily1},
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  font-size: ${({ theme }) => theme.fontSizeExtraSmall};
  color: ${({ theme }) => theme.colorButtonText};
  margin: 0px 10px;
`;

const ReviewerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const ReviewerInnerWrapper = styled.div`
  margin-left: 10px;
`;

export {
  Container,
  MainRow,
  TotalReviews,
  ReviewHeader,
  ReviewContents,
  ReviewItem,
  ReviewParagraph,
  ReviewerName,
  ReviewerTitle,
  Button,
  ButtonText,
  Images,
  QuoteIconWrapper,
  QuoteIcon,
  ReviewerWrapper,
  ReviewerInnerWrapper,
};
