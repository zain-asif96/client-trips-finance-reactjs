import styled from 'styled-components';

const BookListingBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 30px;
  margin-top: 20px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  @media (max-width: 767px) {
    padding: 20px 10px;
    justify-content: center;
  }
`;

const BoxContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;

const RateContent = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  color: #000000;
`;
const RateSpan = styled.span`
  font-size: 16px;
`;

const ReviewContent = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewIcon = styled.img`
  width: 14px;
`;

const ReviewSpan = styled.span`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #4c4c4c;
  margin-left: 5px;
`;

export {
  BookListingBoxWrapper,
  BoxContentWrapper,
  RateContent,
  RateSpan,
  ReviewContent,
  ReviewIcon,
  ReviewSpan,
};
